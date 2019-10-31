/**
 * Reducer updates state in store
 * Register reducer
 */

import {REGISTER_ERROR,REGISTER_REQUEST,REGISTER_SUCCESS} from '../../constants/reduxConstants';



const initialState ={
  isRegistering:false,
  response:''
};


const RegisterReducer = (state = initialState, action) =>{
   
 
    switch(action.type){


         case REGISTER_ERROR:
              return{...state, isRegistering:false};

         case REGISTER_SUCCESS:
         
              return {...state,response:action.payload,isRegistering:false};

        case REGISTER_REQUEST:
    
        return {...state,isRegistering:true};      

         default:
            return state;     
    }

};
 export default RegisterReducer ;