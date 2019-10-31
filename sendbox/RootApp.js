//
//  App.js
//  SendBox
//
//  Created by Iohannes
//  Copyright © 2019 SendBox. All rights reserved.
//

import React from "react"
import {createRootNavigator} from './navigation/AppNavigator';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginApp} from './Services/ApiActions/Login';
import { Platform, StatusBar,StatusBarIOS,AsyncStorage,View} from 'react-native'
import {Root} from 'native-base';









 class RootApp extends React.Component {

	constructor(props) {
		super(props);
		
	}

	

	render() {
	
		const AppNavigator = createRootNavigator(this.props.isLoggedIn);

		return (
		
         <Root>
		   <AppNavigator/>
		</Root>
	   );
	}
}


const mapStateToProps = state =>{
	return{
		isLoggedIn: state.appLogin.isLoggedIn,
		
	};
  }
  
  RootApp.propTypes ={
	isLoggedIn:PropTypes.bool.isRequired,
  }

  export default connect(mapStateToProps, {})(RootApp);



  