
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
import {logOutApp} from '../../../Services/ApiActions/logOut'
import {getUserInformation} from '../../../Services/ApiActions/userInfo'
import { Ionicons } from '@expo/vector-icons';
import user from '../../../assets/images/man-user.png'







class DashboardScreen extends React.Component {


	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				
			headerStyle: {
				backgroundColor: '#373f4b',
				
				
			  },
			 
			headerRight: <Ionicons name="ios-log-out" size={35} color="#ffffff"/>,
			headerLeft: <Text style={styles.headerText}>Profile</Text>
			  
			}
	}


	constructor(props) {
		super(props);
		this.state = {
		   name:'Not Available',
		  
		};
	}


	componentDidMount(){
	  const token = this.props.token;
	  this.props.getUserInformation(token);
	}
   


	logOut= async ()=>{
		this.props.logOutApp();
		AsyncStorage.removeItem('user_name');
		
	}
	 

	render() {

		const email = this.props.userInfo === ''? 'Not available' : this.props.userInfo.email

	
	
		return   <View Style={styles.dashboardView}>
		           
				    <View style={{
						top:0,
						position:'absolute',
						height:hp('40%'),
						width:wp('100%'),
						borderBottomRightRadius:75,
						backgroundColor:'#373f4b'
					}}>

					</View>

					 <View style={styles.profileCardView}>
                        <Image source={user} style={styles.profileLogo}/>
						<Text style={{
							fontSize:20,
							fontFamily:"Poppins-Bold",
							textAlign:'center',
							fontStyle:'normal',
							marginTop:10
						}}>{email}</Text>
                   </View>
					   
		           
	           </View>
	 }
	 
}



const mapStateToProps = state =>{
	return{
		token: state.appLogin.token,
		userInfo:state.userData.data
		
	};
  }
  
DashboardScreen.propTypes ={
	logOutApp:PropTypes.func.isRequired,
	getUserInformation:PropTypes.func.isRequired,
	token:PropTypes.string,
	userInfo:PropTypes.any
  }

  export default connect(mapStateToProps, {logOutApp,getUserInformation})(DashboardScreen);









