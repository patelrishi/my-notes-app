import { createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../Reducer/NotesReducer";

const notesContext = createContext();

const NotesProvider = ( {children} ) => {
    const initialState = {
        title: '',
        text: '',
        notes: [],
        archive: [],
        bin: [],
        impes: [],
        message:""
    };

    const [{ title,text,notes,archive,bin,impes,message }, notesDispatch] = useReducer(NotesReducer, initialState)

    return (
        <notesContext.Provider value={{title,text,notes,archive,bin,impes,message,notesDispatch}}>
            {children}
        </notesContext.Provider>
    )
}

const Consumer = () => useContext(notesContext)

export {Consumer,NotesProvider}