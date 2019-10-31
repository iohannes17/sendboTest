/**
 * Reducer updates state with to app navigation
 * or Error message
 */

import {USER_INFO_ERROR,USER_INFO_REQUEST,USER_INFO_SUCCESS} from '../../constants/reduxConstants';



const initialState ={

  isLoading:false,
  data:''
};


const UserInformationReducer = (state = initialState, action) =>{
   
 
    switch(action.type){


         case USER_INFO_ERROR:
              return{...state, isLoading:false,};

         case USER_INFO_SUCCESS:
         
              return {...state, data:action.payload,isLoading:false};

        case USER_INFO_REQUEST:
    
        return {...state, isLoading:true};


         default:
            return state;     
    }

};
 export default UserInformationReducer;