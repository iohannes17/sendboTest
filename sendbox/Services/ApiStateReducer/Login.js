/**
 * Reducer updates state with to app navigation
 * or Error message
 */

import {LOGIN_ERROR,LOGIN_REQUEST,LOGIN_SUCCESS} from '../../constants/reduxConstants';



const initialState ={

  token:'',
  isLoading:false,
  isLoggedIn:false
};


const LoginReducer = (state = initialState, action) =>{
   
 
    switch(action.type){


         case LOGIN_ERROR:
              return{...state, isLoading:false,isLoggedIn:false};

         case LOGIN_SUCCESS:
         
              return {...state, token:action.payload,isLoading:false,isLoggedIn:true};

        case LOGIN_REQUEST:
    
        return {...state, isLoading:true};


         default:
            return state;     
    }

};
 export default  LoginReducer;