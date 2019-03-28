import { combineReducers } from 'redux';

import newBornReducer from './newBornReducer';
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
 newBornReducer,
 userReducer, 
 usersReducer
});
