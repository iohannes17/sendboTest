import React from "react"
import {View,StyleSheet} from "react-native"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'




export default class DashContainer extends React.Component  {

  render() {
    return (
      <View style={styles.container}>
      {this.props.children}
        
      </View>
    )
  }
}


const styles = StyleSheet.create({

    container :{
        width:wp('100%'),
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height:hp('25%'),
        backgroundColor:"rgb(255, 192, 0)",    
        justifyContent:'center',
        alignContent:'center',   
    },

});