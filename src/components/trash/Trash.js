import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectNote } from "../../redux/notes/notesActions"
import { NoteList,NoteTick, NoteItem, NoteIconTick, NoteDescription, NoteTitle, TitlePage } from "../trash/TrashElements"

const Trash = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)

    useEffect(() => {
        console.log(notes.filter(note => note.deleted === true))
    },[])
    return (
        <>
        <TitlePage>
            Deleted Notes
        </TitlePage>
        
        <NoteList>
            {notes.filter(note => note.deleted === true).map(note =>(
                <NoteItem key={note.id} selected={note.selected}>
                <NoteTick 
                    selected={note.selected} 
                    onClick={()=>{
                        dispatch(selectNote(note.id))
                }}>
                    <NoteIconTick/>
                </NoteTick>
                <NoteTitle>{note.title}</NoteTitle>
                <NoteDescription>{note.description}</NoteDescription>
            </NoteItem>
            ))}
         </NoteList>
        </>
    )
}

export default Trash
