import React from 'react';
import { createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen';
import Register from '../screens/Register/RegisterScreen'




const SignedOutNavigator = createStackNavigator({

	login: {screen: LoginScreen},
	registerScreen:{screen: Register}

}, 

{
	initialRouteName: "login",
	mode: "modal",
	headerMode: "none",	
}
);

export default SignedOutNavigator