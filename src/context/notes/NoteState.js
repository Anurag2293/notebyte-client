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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYzU3NjFkZWJmYjdlOGFlYWZiNzNmIn0sImlhdCI6MTY3MzM0MzE2OX0.WCbd_l0pWuvW9SkyO20Yc2NgBLo8QAxmQgTsZryUsJA'
            }
        });
        const json = await response.json();
        setNotes(json);
    }

    /**
     * @function Add_Note
     * @param {String} title 
     * @param {String} description 
     * @param {String} tag 
     */
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'mode': 'no-cors',
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYzU3NjFkZWJmYjdlOGFlYWZiNzNmIn0sImlhdCI6MTY3MzM0MzE2OX0.WCbd_l0pWuvW9SkyO20Yc2NgBLo8QAxmQgTsZryUsJA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        // concat returns an array whereas push updates an array
        setNotes(notes.concat(json));
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
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYzU3NjFkZWJmYjdlOGFlYWZiNzNmIn0sImlhdCI6MTY3MzM0MzE2OX0.WCbd_l0pWuvW9SkyO20Yc2NgBLo8QAxmQgTsZryUsJA'
                }
            });

            await getNotes()
            // const newNotes = notes.filter((note) => { return note._id !== id });
            // setNotes(newNotes);
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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYzU3NjFkZWJmYjdlOGFlYWZiNzNmIn0sImlhdCI6MTY3MzM0MzE2OX0.WCbd_l0pWuvW9SkyO20Yc2NgBLo8QAxmQgTsZryUsJA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = await response.json();

        // Login to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;