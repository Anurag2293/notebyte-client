import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes } = context;

    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            <hr />
            {console.log(typeof (context.notes))}
            {notes.map((note, index) => {
                return <NoteItem key={note._id} note={note}/>
            })}
        </div>
    )
}

export default Notes