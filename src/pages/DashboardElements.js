import styled from 'styled-components'
import {ImMenu} from 'react-icons/im'
import {BsLightbulb, BsTrash, BsArchive, BsPen, BsXCircleFill } from 'react-icons/bs'
import {FaUndo} from 'react-icons/fa'

export const DashboardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const OptionNotes = styled.div`
    position: absolute;
    top: ${props => props.selectedNotes > 0 ? '0' : '-100%'};
    height: 8vh;
    display: flex;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid black;
    justify-content: space-between;
    padding-left: 0.8em;
    padding-right: 0.8em;
    transition: top 0.5s ease-in-out;
    cursor: pointer;
`

export const OptionTrash = styled.div`
    position: absolute;
    top: ${props => props.selectedNotes > 0 ? '0' : '-100%'};
    height: 8vh;
    display: flex;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid black;
    justify-content: space-between;
    padding-left: 0.8em;
    padding-right: 0.8em;
    transition: top 0.5s ease-in-out;
    cursor: pointer;
`

export const OptionDiv = styled.div`
    display: flex;
    align-items: center;
`



export const CancelIcon = styled(BsXCircleFill)``
export const ItemSelected = styled.p``

export const Header = styled.div`
    z-index: ${props => props.selectedNotes > 0 ? -1 : 0};
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.5em;
    padding-right: 0.5em;
`

export const MenuIcon = styled(ImMenu)`
    font-size: 2.5em;
    cursor: pointer;
    color: gray;
`

export const InputSearch = styled.input`
    background-color: #F1F3F4;
    outline: none;
    border: none;
    border-radius: 25px;
    padding: 0.4em 0.8em ;
    font-size: 1.2em;
    transition: all 0.3s ease;

    &:focus{
        background-color: white;
        box-shadow: 0px 5px 17px 0px rgba(0,0,0,0.29);
-webkit-box-shadow: 0px 5px 17px 0px rgba(0,0,0,0.29);
-moz-box-shadow: 0px 5px 17px 0px rgba(0,0,0,0.29);
    }
`

export const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border: 3px solid white;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover{
        border: 3px solid rgba(98, 98, 98, 0.2);
    }
`

export const Body = styled.div`
    position: relative;
    display: flex;
`
export const SidebarOption = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 0.8em 1.2em;
    overflow-x: hidden;

    border-top-left-radius: ${props => props.toggleMenu ? "0px" : "25px"};
    border-top-right-radius: 25px;
    border-bottom-left-radius: ${props => props.toggleMenu ? "0px" : "25px"};
    border-bottom-right-radius: 25px;


    padding: 0.8em 0.8em;
    /*padding-left: 0.5em; */
    background-color: ${props => props.picked ? "#FEEFC3" : "white" };
    /* border-top-right-radius: 25px;
    border-bottom-right-radius: 25px; */
    font-weight: bold;

    &:hover{
        
        background-color: ${props => props.picked ? "#FEEFC3" : "#F1F3F4" };

    }
`

export const Sidebar = styled.div`
    padding-top: 0.5em;
    background-color: white;
    width: ${props => props.toggleMenu ? "280px" : "42px"};
    position: absolute;
    height: 90vh;
    transition: all 0.3s ease;

    &:hover{

        width: 280px;

        ${SidebarOption}{
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
    }
`


export const NotesIcon = styled(BsLightbulb)`
     
`
export const EditIcon = styled(BsPen)`
     
`
export const ArchiveIcon = styled(BsArchive)``
export const TrashIcon = styled(BsTrash)``

export const UndoIcon = styled(FaUndo)``



export const SidebarSpan = styled.span`
    margin-left: 0.5em;
    font-size: ${props => props.toggleMenu ? "1em" : "0px"};
    display: ${props => props.toggleMenu ? "block" : "none"};
`

export const Content = styled.div`
    margin: 0.5em;
    margin-left: 280px;
    width: 100%;
    height: 89vh;
    /* background-color: green; */
    padding: 0.3em 0.5em 0 0.5em;

    overflow-y: scroll;
    

    @media only screen and (max-width: 600px) {
        margin-left: 75px;
    }


`