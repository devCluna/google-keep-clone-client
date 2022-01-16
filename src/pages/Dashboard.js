import { useEffect, useState } from "react"
import Modal from "react-modal/lib/components/Modal"
import { useDispatch, useSelector } from "react-redux"
import Archive from "../components/archive/Archive"
import Note from "../components/note/Note"
import Trash from "../components/trash/Trash"
import { changeArchivePage, changeNotePage, changeTrashPage } from "../redux/navigation/navAction"
import { archiveSelectedNotes, deleteSelectedNotes, dropSelectedNotes, undoDeletedNotes, unselectedNotes } from "../redux/notes/notesActions"
import { ArchiveIcon, Body, CancelIcon, Content, DashboardContainer, EditIcon, Header, InputSearch, ItemSelected, MenuIcon, NotesIcon, OptionDiv, OptionNotes, OptionTrash, ProfileImg, Sidebar, SidebarOption, SidebarSpan, TrashIcon, UndoIcon } from "./DashboardElements"

const Dashboard = () => {
    const state = useSelector(state => state.navPage)
    const dispatch = useDispatch()
    const selectedNotes = useSelector(state => state.notes)
    
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(()=>{
        
    },[])

    return (
        <DashboardContainer>
           
            {state.navPage === 'NOTE_PAGE' && (
                <OptionNotes selectedNotes={selectedNotes.notes.filter(note => note.selected === true).length}>
                <OptionDiv>
                    <CancelIcon 
                        onClick={()=> dispatch(unselectedNotes())}
                    style={{
                        fontSize: '1.5em',
                        marginRight: '0.5em'
                    }}/>
                    <ItemSelected> {selectedNotes.notes.filter(note => note.selected === true).length}  Items Selecteds</ItemSelected>
                </OptionDiv>

                <OptionDiv>
                    <ArchiveIcon 
                        onClick={()=> dispatch(archiveSelectedNotes())}
                    style={{
                        fontSize: '1.5em',
                        marginRight: '0.5em'
                    }}/>
                    <TrashIcon 
                        onClick={()=> dispatch(deleteSelectedNotes())}
                    style={{
                        fontSize: '1.5em',
                    }}/>
                </OptionDiv>
                
            </OptionNotes>
            )} 
            
            {state.navPage === 'TRASH_PAGE' && (
                <OptionTrash selectedNotes={selectedNotes.notes.filter(note => note.selected === true).length}>
                <OptionDiv>
                    <CancelIcon 
                        onClick={()=> dispatch(unselectedNotes())}
                    style={{
                        fontSize: '1.5em',
                        marginRight: '0.5em'
                    }}/>
                    <ItemSelected> {selectedNotes.notes.filter(note => note.selected === true).length}  Elements going to be deleted</ItemSelected>
                </OptionDiv>

                <OptionDiv>
                    <UndoIcon
                        onClick={()=> dispatch(undoDeletedNotes())}  
                        style={{
                            fontSize: '1.3em',
                            marginRight: '0.5em'
                        }}/>
                    <TrashIcon 
                        onClick={()=> dispatch(dropSelectedNotes())}
                    style={{
                        fontSize: '1.5em',
                    }}/>
                </OptionDiv>
            </OptionTrash>
            )}

            {state.navPage === 'ARCHIVE_PAGE' && (
                <OptionTrash selectedNotes={selectedNotes.notes.filter(note => note.selected === true).length}>
                <OptionDiv>
                    <CancelIcon 
                        onClick={()=> dispatch(unselectedNotes())}
                    style={{
                        fontSize: '1.5em',
                        marginRight: '0.5em'
                    }}/>
                    <ItemSelected> {selectedNotes.notes.filter(note => note.selected === true).length} Archived elements selected</ItemSelected>
                </OptionDiv>

                <OptionDiv>
                    <UndoIcon
                        onClick={()=> dispatch(undoDeletedNotes())}  
                        style={{
                            fontSize: '1.3em',
                            marginRight: '0.5em'
                        }}/>
                    <TrashIcon 
                        onClick={()=> dispatch(deleteSelectedNotes())}
                    style={{
                        fontSize: '1.5em',
                    }}/>
                </OptionDiv>
            </OptionTrash>
            )}
            
            <Header selectedNotes={selectedNotes.notes.filter(note => note.selected === true).length}>
                <MenuIcon onClick={()=>{
                    setToggleMenu(!toggleMenu)
                    console.log(toggleMenu)
                }}/>
                <InputSearch placeholder="Search..."/>
                <ProfileImg src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
            </Header>
            <Body>
                <Sidebar toggleMenu={toggleMenu}  onMouseLeave={()=>setToggleMenu(false)} onMouseEnter={()=>{setToggleMenu(true)}}>
                    <SidebarOption picked={state.navPage === 'NOTE_PAGE' ? true : false} toggleMenu={toggleMenu} onClick={()=>dispatch(changeNotePage())}>
                        <NotesIcon />
                        <SidebarSpan toggleMenu={toggleMenu}>Notes</SidebarSpan>
                    </SidebarOption>

                    <SidebarOption toggleMenu={toggleMenu} >
                        <EditIcon />
                        <SidebarSpan toggleMenu={toggleMenu}>Edit Tags</SidebarSpan>
                    </SidebarOption>

                    <SidebarOption picked={state.navPage === 'ARCHIVE_PAGE' ? true : false} toggleMenu={toggleMenu} onClick={()=>dispatch(changeArchivePage())}>
                        <ArchiveIcon />
                        <SidebarSpan toggleMenu={toggleMenu}>Archive</SidebarSpan>
                    </SidebarOption>

                    <SidebarOption picked={state.navPage === 'TRASH_PAGE' ? true : false} toggleMenu={toggleMenu} onClick={()=>dispatch(changeTrashPage())}>
                        <TrashIcon />
                        <SidebarSpan toggleMenu={toggleMenu}>Trash</SidebarSpan>
                    </SidebarOption>


                </Sidebar>
                <Content>
                    {/* Content Page Handler */}
                    {
                        {
                            'NOTE_PAGE': <Note/>,
                            'ARCHIVE_PAGE': <Archive/>,
                            'TRASH_PAGE': <Trash/>
                        }[state.navPage]
                    }
                </Content>
            </Body>
        </DashboardContainer>
    )
}

export default Dashboard
