import {ToastAndroid,AsyncStorage} from 'react-native'



export const logoutSuccess =json => ({
     type:'RESET',
     payload:json,
});

export const logoutError = error => ({
  type: 'RESET_ERROR',
  payload: error,
});


export const logOutApp = () =>{
    
   return async dispatch =>{
     try{
         dispatch(logoutSuccess(false));
      
      
     }catch(error){
        dispatch(logoutError(false));
        ToastAndroid.showWithGravity(
          'LogOut Error',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
     }
   
   };
  } ;




