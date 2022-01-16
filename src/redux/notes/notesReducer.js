import { ADD_NOTE, ARCHIVE_SELECTED_NOTES, DELETE_SELECTED_NOTES, DROP_SELECTED_NOTES, SELECT_NOTE, UNDO_DELETED_NOTES, UNSELECTED_NOTES, UPDATE_SELECTED_NOTE } from "./notesTypes"

const initialState = {
  notes:[]
}

const notesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload ]
            }
        case SELECT_NOTE:
            const index = state.notes.findIndex(note => note.id === action.payload)
            const newArray = [...state.notes];
            newArray[index].selected = !newArray[index].selected
            return {
                ...state,
                notes : newArray
            }
        case UNSELECTED_NOTES:
                const newUnselectedArray = state.notes.map(note => {
                    if(note.selected){
                        note.selected = false
                    }
                    return note
                })
            return {
                ...state,
                notes: newUnselectedArray
            }
        case DROP_SELECTED_NOTES:
            const filteredArray = state.notes.filter(note => note.selected !== true)
        return{
            ...state,
            notes: filteredArray
        }

        case DELETE_SELECTED_NOTES:
            const newDeletedArray = state.notes.map(note => {
                if(note.selected){
                    note.selected = false
                    note.deleted = true
                    note.archived = false
                }
                return note
            })
            return{
                ...state,
                notes: newDeletedArray
            }
        case UNDO_DELETED_NOTES:
        const newUndoArray = state.notes.map(note => {
            if(note.selected){
                note.selected = false
                note.deleted = false
                note.archived = false
            }
            return note
        })
        return{
            ...state,
            notes: newUndoArray
        }

        case ARCHIVE_SELECTED_NOTES:
            const newArchivedArray = state.notes.map(note => {
                if(note.selected){
                    note.selected = false
                    note.deleted = false
                    note.archived = true
                }
                return note
            })
        return{
            ...state,
            notes: newArchivedArray
        }

        case UPDATE_SELECTED_NOTE:
            const newUpdatedArray = state.notes.map(note => {
                if(note.id === action.payload.id){
                    note = action.payload
                }

                return note
            })
        return{
            ...state,
            notes: newUpdatedArray
        }
        
                
        // case UNDELETE_SELECTED_NOTES:
        //     const newDeletedArray = state.notes.map(note => {
        //         if(note.selected){
        //             note.selected = false
        //             note.deleted = true
        //         }
        //         return note
        //     })
        //     return{
        //         ...state,
        //         notes: newDeletedArray
        //     }
        default:
            return state
    }
}

export default notesReducer