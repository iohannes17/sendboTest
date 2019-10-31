
//
//  Created by Iohannes
//  Copyright © 2019 SendBox. All rights reserved.
//

import React from "react"
import { View, TouchableOpacity, Text,Image,ImageBackground,AsyncStorage,Platform,ActivityIndicator} from "react-native"
import styles from './styles';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Form, Item, Input, Label } from 'native-base';







class UpdateAddress extends React.Component {

 
	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				headerTitle:'Update Address'

			}
  }




    constructor(props) {
        super(props);
        this.state = {
        street: "",
        city: "",
        statee: "",
        country: "",
        email: "",
        friendly_name: "",
        
        };
        
    }



	  _createAddress = ()=>{

		if(this.state.friendly_name === '' ||
		  this.state.city=== '' ||
		  this.state.statee === '' ||
		  this.state.country === ''||
		  this.state.email === '' ){

		      Alert.alert('','Please fill all field')
			
          } 
         

        else{
			 
		 const data ={
           
			street: this.state.street,
			city: this.state.city,
			state:this.state.statee,
			country:this.state.country,
			email: this.state.email,
			friendly_name: this.state.friendly_name,
			user: this.props.userInfo.id
				   
			 };

			
			 this.props.createAddress(data)
			
		  }

      }
      
     
   

    render() {
        return (
            <View style={styles.container}>
             
			 <Text style={styles.logoText}>Update Address</Text>
            
               
               <Form style={styles.formstyle}>           
                    <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>friendly Name</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({friendly_name:value})} value={this.state.friendly_name} maxLength={100} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Email</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({email:value})} value={this.state.email} maxLength={100} />
					</Item>

					 <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Street</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({street:value})} value={this.state.street} maxLength={100} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>City</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({city:value})} value={this.state.city} maxLength={13} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>State</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({statee:value})} value={this.state.statee}/>
					</Item>


                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Country</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({country:value})} value={this.state.country}/>
					</Item>

                       
                                <TouchableOpacity style={styles.buttonView} onPress={this._createUser}>
                                        <Text style={styles.buttonText}>Update Address</Text>
                                </TouchableOpacity>	


                       
                    
             </Form>

                  
          
             
          </View>
        );
    }
}





const mapStateToProps = state =>{
	return{
		
		
	};
  }
  
UpdateAddress.propTypes ={
	
  }

  export default connect(mapStateToProps, {})(UpdateAddress);









