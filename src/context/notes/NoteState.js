import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
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

    // Add a Note
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
        notes.push(json);
        setNotes(notes);
        // setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = (id) => {
        // TODO : API Call
        console.log('Deleting the note with id', id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a Note
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
        const json = await response.json();

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