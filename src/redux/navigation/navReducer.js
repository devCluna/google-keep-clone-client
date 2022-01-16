import { CHANGE_ARCHIVE_PAGE, CHANGE_NOTE_PAGE, CHANGE_TRASH_PAGE } from "./navTypes"
const initialState = {
    navPage: "NOTE_PAGE"
}

 const navReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_ARCHIVE_PAGE:
            return{
                navPage: "ARCHIVE_PAGE" 
            }
        case CHANGE_NOTE_PAGE:
            return{
                navPage: "NOTE_PAGE" 
            }
        case CHANGE_TRASH_PAGE:
            return{
                navPage: "TRASH_PAGE" 
            }
        default:
            return state

    }
}

export default navReducer