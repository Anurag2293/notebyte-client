import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name" : "Harry",
        "class" : "5b",
        age : 10
    }

    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "Larry",
                "class" : "10b",
                age : 15
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider> 
    )
}

export default NoteState;