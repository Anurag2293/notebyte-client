import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63bd373026431b43be98bd60",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-01-10T10:00:16.206Z",
            "__v": 0
        },
        {
            "_id": "63be565b4ec8860f31158206",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-01-11T06:25:31.693Z",
            "__v": 0
        },
        {
            "_id": "63bd373026431b43be98bd60",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-01-10T10:00:16.206Z",
            "__v": 0
        },
        {
            "_id": "63be565b4ec8860f31158206",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-01-11T06:25:31.693Z",
            "__v": 0
        },
        {
            "_id": "63bd373026431b43be98bd60",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-01-10T10:00:16.206Z",
            "__v": 0
        },
        {
            "_id": "63be565b4ec8860f31158206",
            "user": "63bc5761debfb7e8aeafb73f",
            "title": "New Note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-01-11T06:25:31.693Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;