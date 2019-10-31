import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'; 



const ButtonContainer = StyleSheet.create({
  styling:{
    height: hp('7%'),
    backgroundColor:'transparent',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
    
  }
});
 

class CButton extends Component {
  render() {
   

    return (
      <TouchableOpacity
        style={ButtonContainer.styling}
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


CButton.propTypes={
  text:PropTypes.string.isRequired,
  onPress:PropTypes.func.isRequired,
  textcolor:PropTypes.string,
  fontSize:PropTypes.number,
  fontFamily:PropTypes.string,
  borderColor:PropTypes.number,
  borderRadius:PropTypes.number,
  
}


export default (CButton);
