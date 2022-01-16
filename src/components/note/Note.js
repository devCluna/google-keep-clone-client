import {useEffect, useRef, useState} from 'react'
import { Button, ButtonSection, Input, InputTags, ModalForm, NoteContainer, NoteDescription, NoteIconTick, NoteItem, NoteList, NoteTick, NoteTitle, TagElement, Tags, TagsList, TypeNote } from './NoteElements'
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, selectNote, updateSelectedNote } from '../../redux/notes/notesActions';


const Note = () => {
    const notes = useSelector(state => state.notes.notes)
    const dispatch = useDispatch()
    const title = useRef()
    const description = useRef()
    const [tags, setTags] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editModal, setEditModal] = useState(false)
    const [pickedNote, setPickedNote] = useState({})

    const customStyles = {
        content: {
          position: 'absolute',
          zIndex: '10',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          maxWidth: '60px',
          minWidth: '300px',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    
    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      useEffect(() => {
          console.log(tags)
      }, [])

    return (
        <NoteContainer>
            <TypeNote onClick={openModal}>Create a note ...</TypeNote>
        
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Note"   
                style={customStyles}
            >
                <ModalForm>
                    <Input type="text" ref={title} placeholder="Title"/>
                    <Input  ref={description} placeholder="Description"/>                
                    <Tags>
                        <TagsList>
                            {tags.map(tag =>(
                                <TagElement  key={tag.id}>
                                    {tag.tag}
                                    <span onClick={()=>{
                                        const filtered = tags.filter(element => element.id !== tag.id)
                                        setTags(filtered)
                                    }}>X</span>
                                </TagElement>
                            ))}
                        </TagsList>
                        <InputTags autoFocus  onKeyUp={(e)=>{

                            if(e.currentTarget.value !== ''){
                                if(e.key === 'Enter'){
                                    setTags([ ...tags, {
                                        id: uuidv4(),
                                        tag: e.currentTarget.value
                                    }])
                                    e.currentTarget.value = ''
                                }
                            }
                        }} type="text" placeholder="Please enter to add tags"/>
                    </Tags>
                    <ButtonSection>
                        <Button onClick={closeModal}>close</Button>
                        <Button save={true} onClick={()=>{
                            
                            const note = {
                                id: uuidv4(),
                                title: title.current.value,
                                description : description.current.value,
                                tags: tags,
                                archived: false,
                                deleted: false,
                                pinned: false,
                                selected: false
                            }
                            
                            dispatch(addNote(note))

                            setTags([])

                            console.log(note)
                            closeModal()
                        }}>Save</Button>
                    </ButtonSection>
                </ModalForm>
            </Modal>
                
            <Modal
                isOpen={editModal}
                onRequestClose={()=>setEditModal(false)}
                contentLabel="Add Note"   
                style={customStyles}
            >
           <ModalForm>
                <Input type="text"  placeholder="Title" value={pickedNote.title} 
                onChange={(e)=>{
                    setPickedNote(prevState => ({
                    ...prevState,
                        title: e.target.value
                        
                    }))
                }}/>
                <Input   placeholder="Description" value={pickedNote.description}
                    onChange={(e)=>{
                        setPickedNote(prevState => ({
                            ...prevState,
                                description: e.target.value
                            }))
                    }}
                />                
                <Tags>
                    <TagsList>
                        {pickedNote.tags?.map(tag =>(
                            <TagElement  key={tag.id}>
                                {tag.tag}
                                <span onClick={()=>{
                                    const filtered = pickedNote.tags.filter(element => element.id !== tag.id)
                                    setPickedNote(prevState => ({
                                        ...prevState,
                                        tags : filtered
                                    }))
                                }}>X</span>
                            </TagElement>
                        ))}
                    </TagsList>
                    <InputTags autoFocus  onKeyUp={(e)=>{
                        if(e.target.value !== ''){
                            if(e.key === 'Enter'){
                                const value = e.target.value
                                setPickedNote(prevState => ({
                                    ...prevState,
                                    tags: [...prevState.tags, {
                                        id: uuidv4(),
                                        tag: value
                                    }]
    
                                }))
                                console.log(pickedNote.tags)
                                console.log(e.currentTarget.value)
                                e.target.value = ''
                            }
                        }
                    }} type="text" placeholder="Please enter to add tags"/>
                </Tags>
                <ButtonSection>
                    <Button onClick={()=>setEditModal(false)}>close</Button>
                    <Button save={true} onClick={()=>{

                        setTags([])
                        console.log(pickedNote)
                        dispatch(updateSelectedNote(pickedNote))
                        setEditModal(false)
                    }}>Save</Button>
                </ButtonSection>
                </ModalForm>
            </Modal>
            


            <NoteList>
                {notes.filter(note => note.archived === false && note.deleted === false)?.map(note => (
                    <NoteItem key={note.id} selected={note.selected}>
                        <NoteTick 
                            selected={note.selected} 
                            onClick={()=>{
                            dispatch(selectNote(note.id))
                        }}>
                            <NoteIconTick/>
                        </NoteTick>
                        <NoteTitle onClick={()=>{
                            setEditModal(true)
                            setPickedNote(note)
                            console.log(note)
                        }}>{note.title}</NoteTitle>
                        <NoteDescription>{note.description}</NoteDescription>
                    </NoteItem>
                ))}

                
            </NoteList>
        </NoteContainer>
    )
}

export default Note
