import {BASE_URL,CREATE_ADDRESS_ERROR,CREATE_ADDRESS_REQUEST,CREATE_ADDRESS_SUCCESS} from '../../constants/reduxConstants';
import axios from 'axios'
import {Alert} from 'react-native'





/**
 * 
 * @param {json} json 
 * Called upon successful address creation from endpoint
 */
export const createAddressuccess =json => ({
     type:CREATE_ADDRESS_SUCCESS,
     payload:json,
});



/**
 * 
 * @param {error} error
 * Called upon error/failure to create address from endpoint
 */

export const createAddressError = error => ({
  type: CREATE_ADDRESS_ERROR,
  payload: error,
});


/**
 * 
 * 
 * Signals the create address request from client
 */

export const  createAddressRequest = () => ({
  type:CREATE_ADDRESS_REQUEST,
 
});




/**
 * 
 * @param {userData}
 * Trggers create address API,
 * adds address to user profile
 */


export const createUserAddress = (userData) =>{
    
   return async dispatch =>{
     try{

      dispatch(createAddressRequest());
                 
      axios({
         method: 'post',
         url: BASE_URL+'addresses',
         data: userData
       }) 
       
       .then(response=> {
           console.log(response.data)
           Alert.alert('','Address added successfully')
           dispatch(createAddressuccess('good'))
       })
       
       .catch(error =>{
           Alert.alert('','Address Could not be added')
           console.log(error)
           dispatch(createAddressError(''))
       })
       
     
     
    }catch(error){
       dispatch(createAddressError('bad'))
       Alert.alert('','Network error')
       console.log(error)
    }
  
  };
 } ;




