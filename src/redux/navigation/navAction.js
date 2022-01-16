import { CHANGE_ARCHIVE_PAGE, CHANGE_NOTE_PAGE, CHANGE_TRASH_PAGE } from "./navTypes"


export const changeArchivePage = () => {
    return{
        type: CHANGE_ARCHIVE_PAGE,
    }
}


export const changeNotePage = () => {
    return{
        type: CHANGE_NOTE_PAGE,
    }
}


export const changeTrashPage = () => {
    return{
        type: CHANGE_TRASH_PAGE,
    }
}