import {REGISTER_ERROR,REGISTER_REQUEST,REGISTER_SUCCESS,BASE_URL} from '../../constants/reduxConstants';
import axios from 'axios'
import {Alert} from 'react-native'



/**
 * 
 * @param {json} json 
 * Called upon successful registration from endpoint
 */
export const RegisterSuccess =json => ({
     type:REGISTER_SUCCESS,
     payload:json,
});


/**
 * @param{error}
 * Called on error of regsitration or netweok failure
 */

export const RegisterError = error => ({
  type:REGISTER_ERROR,
  payload: error,
});


/**
 * Signals a registration request from client
 */


export const RegisterRequest = ()=>(
    {
        type:REGISTER_REQUEST
    }
);



/**
 * @param {userData}
 * @function registerUser
 * 
 * hits the API endpoint to register user
 */

export const registerUser = (userData) =>{
    
   return async dispatch =>{
     try{
        
           dispatch(RegisterRequest());
                 
       axios({
          method: 'post',
          url:BASE_URL+'auth/local/register',
          data: userData
        }) 
        
        .then(response=> {
            console.log(response.data)
            dispatch(RegisterSuccess('good'))
            Alert.alert('','Registration Successfull')

        })
        
        .catch(error =>{
            alert('Registration Error')
            console.log(error)
            dispatch(RegisterError('bad'))
        })
        
      
      
     }catch(error){
        dispatch(RegisterError('bad'))
        Alert.alert('','Network Error')

     }
   
   };
  } ;




