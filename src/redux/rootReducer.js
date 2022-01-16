import {combineReducers} from 'redux'
import navReducer from './navigation/navReducer'
import notesReducer from './notes/notesReducer'

const rootStore = combineReducers({
    navPage: navReducer,
    notes: notesReducer
})

export default rootStore