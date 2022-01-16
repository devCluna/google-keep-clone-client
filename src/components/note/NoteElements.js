import styled from 'styled-components'
import {TiTick} from 'react-icons/ti'


export const NoteContainer = styled.div`
    width: 100%;
`

export const TypeNote = styled.div`
    width: 350px;
    margin-top: 0.9em;
    margin-bottom: 12px;
    padding: 0.5em;
    cursor: text;

    color: #5E5E5A;
    border-bottom: 1px solid #CCCCCC;
    border-bottom: 1px solid transparent;

    &:hover{
        border-bottom: 1px solid #5E5E5A;
        
    }
`

export const Input = styled.input`
    margin-bottom: 0.5em;
    border: none;
    border-bottom: 1px solid #CCCCCC;
    outline: none;

    &:focus{
        border-bottom: 1px solid;
    }
`

export const ModalForm = styled.div`
    display: flex;
    flex-direction: column;
`

export const Tags = styled.div`
display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	min-height: 48px;
	width: auto;
	padding: 0.2em 8px;
	border: 1px solid rgb(214, 216, 218);
	border-radius: 6px;
`

export const TagsList = styled.ul`
    padding: 0;
    display: flex;
	flex-wrap: wrap;
	padding: 0;
	margin: 8px 0 0 0;
`
export const TagElement = styled.li`
    user-select: none;
    list-style: none;
    width: auto;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	padding: 0 8px;
	font-size: 14px;
    font-weight: bold;
	list-style: none;
	border-radius: 6px;
	margin: 0 8px 8px 0;
	background: #0052cc;

    span{
        display: block;
		width: 16px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		font-size: 14px;
		margin-left: 8px;
		color: #0052cc;
		border-radius: 50%;
		background: #fff;
		cursor: pointer;
    }
    
`

export const InputTags = styled.input`
    align-self: center;
    width: auto;
    border: none;
    outline: none;
`

export const ButtonSection = styled.div`
    padding-top: 0.5em;
    display: flex;
    justify-content: space-around;
`

export const Button = styled.button`
    cursor: pointer;
    color: ${props => props.save === true ? 'green' : 'red'} ;
    background: none;
    border: none;
    text-decoration: underline;
    padding: 0.5em 1.2em;
    font-weight: bold;

    :hover{
        background-color: #CCCCCC;
    }
`

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