import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    /**
     * @function Get_Notes
     */
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'mode': 'no-cors',
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const noteObject = await response.json(); 
        // Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
        setNotes(noteObject);
    }

    /**
     * @function Add_Note
     * @param {String} title 
     * @param {String} description 
     * @param {String} tag 
     */
    const addNote = async (title, description, tag) => {
        try {
            // API Call
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    'mode': 'no-cors',
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, tag })
            });
            const noteObject = await response.json();

            // concat returns an array whereas push updates an array
            setNotes(notes.concat(noteObject)); // [OR] getNotes();
        } catch (error) {
            alert(error.message)
        }
    }

    /**
     * @function Delete_Note
     * @param {String} id 
     */
    const deleteNote = async (id) => {
        try {
            // API Call
            await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });

            // getNotes() [OR]
            const newNotes = notes.filter((note) => { return note._id !== id });
            setNotes(newNotes);
        } catch (e) {
            alert(e.message);
        }
    }

    /**
     * @function Edit_Notes
     * @param {String} id 
     * @param {String} title 
     * @param {String} description 
     * @param {String} tag 
     */
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        await response.json();
        
        const newNotes = notes.map(note => {
            if (note._id === id) {
                return {...note , title , description , tag} ;
            }
            return note;
        });
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;