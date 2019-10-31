import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Text,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'; 

const ButtonContainer= StyleSheet.create({

    container:{
      width: wp('30%'),
      height: hp('3%'),
      backgroundColor:'transparent',
      justifyContent: 'center',
      alignItems:'center',
      alignSelf:'flex-end',
      marginTop:hp('2%'),
      marginRight:wp('1.6%'),
  
      
    },
})
  




class FButton extends Component {
  render() {
   

    return (
      <TouchableOpacity
       style={ButtonContainer.container}
        onPress={this.props.onPress}>
        <Text style={{color:this.props.textcolor,
          fontSize:this.props.fontSize,
          fontFamily:this.props.fontFamily,
          borderColor:this.props.borderColor,
          borderRadius:this.props.borderRadius
          }}>
          { this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}


FButton.propTypes={
  text:PropTypes.string.isRequired,
  onPress:PropTypes.func.isRequired,
  textcolor:PropTypes.string,
  fontSize:PropTypes.number,
  fontFamily:PropTypes.string,
  borderColor:PropTypes.number,
  borderRadius:PropTypes.number,
}


export default FButton;
