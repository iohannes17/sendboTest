//
//  App.js
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//
 
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import React from "react"
import RootApp from './RootApp'
import {Component} from 'react'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducers from './Services/rootReducer';







const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducers);





export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
			notification: {},
		}
	}

	
	

	componentDidMount() {
	
    this.initProjectFonts()
    
}




	
	async initProjectFonts() {
	
		await Font.loadAsync({
			"Lato-Bold": require("./assets/fonts/LatoBold.ttf"),
			".SFNSText": require("./assets/fonts/SFNSText.ttf"),
			"Lato-Black": require("./assets/fonts/LatoBlack.ttf"),
			"Lato-Regular": require("./assets/fonts/LatoRegular.ttf"),
			"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
			"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	
	}

	

	render() {
	
		if (!this.state.fontsReady)
		 { 
			 return (<AppLoading/>); 
    }
    else{
		
		return <Provider store={store}>
			<RootApp/> 
			</Provider>;
      }
		
		
		   
	}
}

 // "react-native-gesture-handler": "~1.3.0"