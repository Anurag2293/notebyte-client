import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63bd373024326431b43be98bd60",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-01-10T10:00:16.206Z",
            "__v": 0
        },
        {
            "_id": "63be56543542b4ec8860f31158206",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-01-11T06:25:31.693Z",
            "__v": 0
        },
        {
            "_id": "63bd373043523426431b43be98bd60",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-01-10T10:00:16.206Z",
            "__v": 0
        },
        {
            "_id": "63be565236b4ec8860f31158206",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-01-11T06:25:31.693Z",
            "__v": 0
        },
        {
            "_id": "63bd373026434531b43be98bd60",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-01-10T10:00:16.206Z",
            "__v": 0
        },
        {
            "_id": "63be565b4ec88435360f31158206",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-01-11T06:25:31.693Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNotes = (title, description, tag) => {
        // TODO : API Call
        console.log('Adding a new Note')
        const note = {
            "_id": "63besdfa565b4ec88435360f31158206",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-01-11T06:25:31.693Z",
            "__v": 0
        }
        // concat returns an array whereas push updates an array
        setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNotes = () => {
        
    }

    // Update a Note
    const updateNotes = () => {
        
    }

    return (
        <NoteContext.Provider value={{notes, addNotes, deleteNotes, updateNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;