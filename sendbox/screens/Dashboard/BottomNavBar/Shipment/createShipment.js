
//
//  Created by Iohannes
//  Copyright © 2019 SendBox. All rights reserved.
//

import React from "react"
import { View,ScrollView,Text,ActivityIndicator,Alert,TouchableHighlight,TouchableOpacity,Picker,KeyboardAvoidingView} from "react-native"
import styles from './styles';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Form, Item, Input, Label } from 'native-base';
import { Ionicons } from '@expo/vector-icons';







class CreateShipment extends React.Component {

   
    static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props){
		super(props);
		this.state = {
			appView:'shipmentform',
			activeColorOrigin:'transparent',
			activeColorDestination:'transparent',
			textColorOrigin:'rgb(255, 192, 0)',
			textColorDestination:'rgb(255, 192, 0)',
			buttonType:'origin',
			name:'',
			city:'',
			country:'',
			statee:'',
			phone:'',
			weight:'',
			itemQuanity:'',
			itemDescription:'',
			courier:''
		
		};
		
	  }

	  onOriginPressed = () => {
		this.setState({
			appView: 'detailsform',
			activeColorOrigin:'rgb(255, 192, 0)',
			activeColorDestination:'transparent',
			textColorOrigin:'#000000',
			textColorDestination:'rgb(255, 192, 0)',
			buttonType:'origin',
		});
	  }


	  onDestinationPressed = () => {
		this.setState({
			appView:'detailsform',
			activeColorOrigin:'transparent',
			activeColorDestination:'rgb(255, 192, 0)',
			textColorOrigin:'rgb(255, 192, 0)',
			 textColorDestination:'#000000',
			 buttonType:'destination',
		});
	  }

	  onReturntoShipmentForm=()=>{
		  this.setState({
			appView:'shipmentform',
			activeColorOrigin:'transparent',
			activeColorDestination:'transparent',
			textColorOrigin:'rgb(255, 192, 0)',
			textColorDestination:'rgb(255, 192, 0)',
		  })
	  }



    render() {

		 
		const appDisplay = this.state.appView;
		let appView; 
         if(appDisplay === 'detailsform'){
						appView =
						 <View>
							   
							   <Form style={styles.formstyle}>           
                    <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Username</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({username:value})} value={this.state.username} maxLength={100} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Email</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({email:value})} value={this.state.email} maxLength={100} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Phone Number</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({phone:value})} value={this.state.phone} maxLength={13} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Password</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({password:value})} value={this.state.password} secureTextEntry={true}/>
					</Item>


                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Confirm Password</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({cpassword:value})} value={this.state.cpassword} secureTextEntry={true}/>
					</Item>



					{
						     this.state.buttonType === 'origin'?
						                <TouchableOpacity style={styles.buttonViewForm}>
						                    <Text style={styles.buttonTextForm}>Submit Origin</Text>
										 </TouchableOpacity> :

											<TouchableOpacity style={styles.buttonViewForm}>
											<Text style={styles.buttonTextForm}>Submit Destination</Text>
											</TouchableOpacity>
																					
                 	}

                        

                   <TouchableOpacity style={styles.shipmentbuttonView} onPress={this.onReturntoShipmentForm}>
                    <Text style={styles.shipmentbuttonText}>Back to Shipment Form</Text>
                    </TouchableOpacity>		

               </Form>
             </View>;

		}
		

		 else{
			appView =    <View style={{elevation:1,flex:1,alignItems:'center'}}>

						   <ScrollView scrollEnabled={true} showsHorizontalScrollIndicator={true}>
        
					   	 <Text style={styles.detailsHeader}>Origin Details</Text>

<Text style={styles.detailsLeftText}>Name :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>

	<Text style={styles.detailsLeftText}>City :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>

	<Text style={styles.detailsLeftText}>Street :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>

	<Text style={styles.detailsLeftText}>Country :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>


  <Text style={styles.detailsLeftText}>Phone :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>



	 <Text style={styles.detailsHeader}>Destination Details</Text>

	 <Text style={styles.detailsLeftText}>Name :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>

	<Text style={styles.detailsLeftText}>City :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>

	<Text style={styles.detailsLeftText}>Street :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>

	<Text style={styles.detailsLeftText}>Country :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>


  <Text style={styles.detailsLeftText}>Phone :  <Text
  style={styles.detailsRightText}>John doe </Text></Text>




                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Weight</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({weight:value})} value={this.state.weight}/>
					</Item>


                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Item Description</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({itemDescription:value})} value={this.state.itemDescription}/>
					</Item>

					 <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Item Quantity</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({itemQuanity:value})} value={this.state.itemQuanity}/>
					</Item>


					<Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Select Courier</Label>
						<Picker
						selectedValue={this.state.courier}
						style={{ width:wp('80%') }}
						onValueChange={(itemValue) => this.setState({ courier: itemValue })}>
						<Picker.Item label="DHL" value="DHL" />
						<Picker.Item label="DPD" value="DPD" />
						</Picker>

						    
					</Item>



					   <TouchableOpacity style={styles.buttonViewForm}>
						                    <Text style={styles.buttonTextForm}>Submit Shipment</Text>
										 </TouchableOpacity>

					<View style={{height:hp('20%')}}></View>
			             </ScrollView>
	                 </View>;
              
		 }
        return (
            <View style={styles.container}>
			         
					 <Text style={styles.logoText}>Shipment Form</Text>

				<View style={styles.divider}></View>

				<View style={styles.selectionButtonContainer}>
						<View style={styles.buttonView}>

							<TouchableHighlight style={[styles.buttonAction,
			{backgroundColor:this.state.activeColorOrigin}
								  ]} onPress={this.onOriginPressed}>

				<Text style={[{color:this.state.textColorOrigin},styles.buttonActionText]}>
                                      Origin Form</Text>
			</TouchableHighlight>
		  </View>


		  <View style={styles.buttonView}>

			  <TouchableHighlight style={[styles.buttonAction,
			                        {backgroundColor:this.state.activeColorDestination,}]}
				                      onPress={this.onDestinationPressed}>

					<Text style={[{color:this.state.textColorDestination},styles.buttonActionText]}>
						
						Destination Form</Text>
			  </TouchableHighlight>
		  </View>
	 </View>
				<View style={styles.divider}></View>

	  

		 {appView}
 
             
             
          </View>
        );
	}

}





const mapStateToProps = state =>{
	return{
			};
  }
  
CreateShipment.propTypes ={

  }

  export default connect(mapStateToProps, {})(CreateShipment);









