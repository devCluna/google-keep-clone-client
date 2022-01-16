import { ADD_NOTE, ARCHIVE_SELECTED_NOTES, DELETE_SELECTED_NOTES, DROP_SELECTED_NOTES, SELECT_NOTE, UNDO_DELETED_NOTES, UNSELECTED_NOTES, UPDATE_SELECTED_NOTE } from "./notesTypes"

export const addNote = (note) => {
    return{
        type: ADD_NOTE,
        payload: note
    }
}

export const selectNote = (noteId) => {
    return{
        type: SELECT_NOTE,
        payload: noteId
    }
}

export const deleteSelectedNotes = () => {
    return{
        type: DELETE_SELECTED_NOTES,
    }
}

export const unselectedNotes = () => {
    return{
        type: UNSELECTED_NOTES
    }
}

export const  dropSelectedNotes = () => {
    return{
        type: DROP_SELECTED_NOTES
    }
}

export const undoDeletedNotes = () => {
    return{
        type: UNDO_DELETED_NOTES
    }
}

export const archiveSelectedNotes = () =>{
    return{
        type: ARCHIVE_SELECTED_NOTES
    }
}

export const updateSelectedNote = (note) => {
    return {
        type: UPDATE_SELECTED_NOTE,
        payload: note
    }
}