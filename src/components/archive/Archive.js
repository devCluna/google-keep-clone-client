import { useDispatch, useSelector } from "react-redux"
import { selectNote } from "../../redux/notes/notesActions"
import { ArchiveList, NoteDescription, NoteIconTick, NoteItem, NoteTick, NoteTitle, TitlePage } from "./ArchiveElements"


const Archive = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)

    return (
        <>
        <TitlePage>
            Archived Notes
        </TitlePage>
        
        <ArchiveList>
            {notes.filter(note => note.archived === true).map(note =>(
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
         </ArchiveList>
        </>
    )
}

export default Archive
