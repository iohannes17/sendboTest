/**
 * Reducer updates state with to app navigation
 * or Error message
 */

import {CREATE_ADDRESS_ERROR,CREATE_ADDRESS_REQUEST,CREATE_ADDRESS_SUCCESS} from '../../constants/reduxConstants';



const initialState ={

  response:'',
  isLoading:false,
  
};


const createAddressReducer = (state = initialState, action) =>{
   
 
    switch(action.type){


         case CREATE_ADDRESS_ERROR:
              return{...state, isLoading:false};

         case CREATE_ADDRESS_SUCCESS:
         
              return {...state, token:action.payload,isLoading:false};

        case CREATE_ADDRESS_REQUEST:
    
        return {...state, isLoading:true};


         default:
            return state;     
    }

};
 export default createAddressReducer;