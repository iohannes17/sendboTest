import {Image,View,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'; 



export default class LogoImage extends Component {
  render() {
    return (
      <View style={styles.container}>
           <Image source={this.props.sources} style={styles.iconEye} />
        
      </View>
    )
  }
}




LogoImage.propTypes = {
  sources: PropTypes.number,
};


const styles = StyleSheet.create({
  iconEye: {
    width: wp('45%'),
    height: hp('26%'),
    //  tintColor: '#d66e36',
  },

  container:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:hp('10%'),
    marginBottom:hp('4%')
  }

});