
//
//  Created by Iohannes
//  Copyright © 2019 SendBox. All rights reserved.
//

import React from "react"
import { View, TouchableOpacity, Text,Image,ImageBackground,AsyncStorage,Platform} from "react-native"
import styles from './styles';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';







class ShipmentScreen extends React.Component {


	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}


	constructor(props) {
		super(props);
		this.state = {
		   name:'Not Available',
		  
		};
	}
   


	
	 

	render() {

	
	
		return   <View Style={styles.dashboardView}>
		           
				   <Text>Hello world</Text>
		           
	           </View>
	 }
	 
}



const mapStateToProps = state =>{
	return{
		
		
	};
  }
  
ShipmentScreen.propTypes ={

  }

  export default connect(mapStateToProps, {})(ShipmentScreen);









