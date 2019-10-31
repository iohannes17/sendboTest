import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {Text,TouchableHighlight,View,StyleSheet} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'; 



const ButtonContainer = StyleSheet.create({
    button:{
        height:hp('8%'),
        backgroundColor:'transparent',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:hp('4%'),
        borderColor:'#898989',
        borderWidth:1,
        width:wp('90%'),
        
    },
})
 



class LoginButton extends Component {
  render() {
   

    return (
      <TouchableHighlight
       style={ButtonContainer.button}
        onPress={this.props.onPress}>
        <Text style={{color:this.props.textcolor,
          fontSize:this.props.fontSize,
          fontFamily:this.props.fontFamily,
    
          }}>
          { this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}


LoginButton.propTypes={
  text:PropTypes.string.isRequired,
  onPress:PropTypes.func.isRequired,
  textcolor:PropTypes.string,
  fontSize:PropTypes.number,
  fontFamily:PropTypes.string,
 
}


export default (LoginButton);
