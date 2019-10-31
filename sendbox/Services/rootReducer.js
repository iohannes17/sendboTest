
/**
 * @class rootReducer
 * It manages all reducers in the state
 */

import {combineReducers} from 'redux';
import loginReducer from './ApiStateReducer/Login';
import RegisterReducer from './ApiStateReducer/register';
import UserInformationReducer from './ApiStateReducer/userinfo'
import  createAddressReducer from './ApiStateReducer/createAddress'







const appReducer = combineReducers({
  appLogin: loginReducer,
  appRegister:RegisterReducer,
  userData:UserInformationReducer,
  createUserAddress:createAddressReducer
  

});



export default rootReducers = (state,action) =>{
    
    if(action.type === 'RESET'){

        state = undefined
    }

    return appReducer(state,action)
}