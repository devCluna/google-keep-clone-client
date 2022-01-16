import styled from 'styled-components'
import {TiTick} from 'react-icons/ti'

export const TitlePage = styled.h3``

export const NoteList = styled.div`   
   display: flex;
   overflow-y: hidden;
   padding: 0.8em;
   flex-wrap: wrap;
   gap: 10px;
`
export const NoteTick = styled.div`
    position: absolute;
    display: ${props=> props.selected ? 'flex' : 'none'};
    
    align-items: center;
    top: -4px;
    left: -5px;
    width: 15px;
    height: 15px;
    border-radius: 12px;
    background: ${props=> props.selected ? 'green' : 'black'};
`
export const NoteIconTick = styled(TiTick)`
    color: white;
    
`

export const NoteItem = styled.div`
    
    position: relative;
    user-select: none;
    cursor: pointer;
    border: ${props => props.selected ?"2px solid #707274" : "1px solid #707274"};
    padding: 0.5em;
    min-width: 180px;
    max-width: 250px;
    border-radius: 12px;

    &:hover{
        ${NoteTick}{
            display: flex;
        }
    }
`


export const NoteTitle = styled.h2`
    margin:0 ;
    font-size: 1.2em;
`

export const NoteDescription = styled.p`
    margin: 0;
`