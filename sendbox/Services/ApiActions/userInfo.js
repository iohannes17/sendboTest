import {BASE_URL,USER_INFO_ERROR,USER_INFO_REQUEST,USER_INFO_SUCCESS} from '../../constants/reduxConstants';
import axios from 'axios'
import{Alert} from 'react-native'





/**
 * 
 * @param {json} json 
 * Called upon success in fetching user information from endpoint
 */
export const getUserInfomationSuccess =json => ({
     type:USER_INFO_SUCCESS,
     payload:json,
});



/**
 * 
 * @param {error} error
 * Called upon error/failure to fetch userinfo from endpoint
 */

export const getUserInformationError = error => ({
  type:USER_INFO_ERROR,
  payload: error,
});



/**
 * 
 * 
 * Signals the fetch request from client
 */

export const getUserInformationRequest = () => ({
  type:USER_INFO_REQUEST
 
});




/**
 * 
 * @param {id}
 * Trggers user loginRequest to API,
 * verifies user and returns a JWT token 
 */


export const getUserInformation = (id) =>{
    
   return async dispatch =>{
     try{

      dispatch(getUserInformationRequest());
      console.log('inside userinfo')
                 
      axios({
         method: 'get',
         url: BASE_URL+'users/me',
         headers:{
            "Authorization": "Bearer "+id
        
         }
       }) 
       
       .then(response=> {
           console.log(response.data)
           dispatch(getUserInfomationSuccess(response.data))
       })
       
       .catch(error =>{
           
           console.log(error)
           dispatch(getUserInformationError(''))
       })
       
     
     
    }catch(error){
       dispatch(getUserInformationError('bad'))
       Alert.alert('Network Error')
       console.log(error)
    }
  
  };
 } ;




