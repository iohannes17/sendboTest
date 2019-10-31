
//
//  Created by Iohannes
//  Copyright © 2019 SendBox. All rights reserved.
//

import React from "react"
import { View, TouchableOpacity, Text,Image,StatusBar,ActivityIndicator,Alert} from "react-native"
import styles from './styles';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Form, Item, Input, Label } from 'native-base';
import { Ionicons } from '@expo/vector-icons';








class ShipmentDetails extends React.Component {

   
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
       
        };
        
    }


    render() {
        return (
            <View style={styles.container}>
            
             
          </View>
        );
    }
}





const mapStateToProps = state =>{
	return{
		
	};
  }
  
  ShipmentDetails.propTypes ={
	
  }

  export default connect(mapStateToProps, {})(ShipmentDetails);









