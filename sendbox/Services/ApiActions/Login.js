import {LOGIN_ERROR,LOGIN_REQUEST,LOGIN_SUCCESS,BASE_URL} from '../../constants/reduxConstants';
import axios from 'axios'





/**
 * 
 * @param {json} json 
 * Called upon successful login from endpoint
 */
export const loginSuccess =json => ({
     type:LOGIN_SUCCESS,
     payload:json,
});



/**
 * 
 * @param {error} error
 * Called upon error/failure to login from endpoint
 */

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error,
});



/**
 * 
 * 
 * Signals the login request from client
 */

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
 
});




/**
 * 
 * @param {userData}
 * Trggers user loginRequest to API,
 * verifies user and returns a JWT token 
 */


export const loginApp = (userData) =>{
    
   return async dispatch =>{
     try{

      dispatch(loginRequest());
                 
      axios({
         method: 'post',
         url:'https://sendbox-challenge.herokuapp.com/auth/local',
         data: userData
       }) 
       
       .then(response=> {
           console.log(response.data)
           dispatch(loginSuccess(response.data.jwt))
       })
       
       .catch(error =>{
           alert('Username or Password Incorrect')
           console.log(error)
           dispatch(loginError(''))
       })
       
     
     
    }catch(error){
       dispatch(loginError('bad'))
       alert('Network Error')
       console.log(error)
    }
  
  };
 } ;




