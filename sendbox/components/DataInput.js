import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image,TouchableOpacity,Text} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'; 

export default class DataInput extends Component {
  render() {
    return (

     <View style={{
       alignContent:'center',
       justifyContent:'center',
       height:hp('6%'),
       width:wp('90%'),
       marginTop:5,
       marginBottom:5,
       flexDirection:'column',
       alignSelf:'center' }}>      
       
       <Text style={styles.inlineLeftText}> {this.props.text} &nbsp; &nbsp; </Text>

       <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor='#fff'
          underlineColorAndroid="transparent"
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          keyboardAppearance={'light'}
          maxLength={300}
          
        />
         <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.props.onPress}>

          <Image source={this.props.sources} style={styles.iconEye} />
        </TouchableOpacity>
      </View>
       
       
        </View>
    );
  }
}

DataInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  value:PropTypes.string,
  onChangeText:PropTypes.func,
  onPress:PropTypes.func,
  sources: PropTypes.number,
};


const styles = StyleSheet.create({
  input: {

    backgroundColor:'transparent',
    width:wp('70%'),
    height: hp('2%'),
    color: '#fff',
    fontSize:13,
    letterSpacing:2,
    fontFamily:'Lato-Regular',
    borderBottomColor: "rgb(57, 81, 104)",
    borderBottomWidth:1,
    alignSelf:'flex-start'
    

    
  },
  inputWrapper: {
    marginTop:50,
    backgroundColor: 'transparent',
    width:wp('75%'),
    height: hp('3%'),
    justifyContent:'center',
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
   
  
  },
  inlineLeftText: {
    position: 'absolute',
    zIndex: 99,
    fontFamily: "Lato-Bold",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    color:'#ffffff',
    left: 30,
    marginBottom:10
  
  },
  btnEye: {
    width: 25,
    height: 22,
    position:'absolute',
    zIndex:99,
    bottom:3.5,
    right:3

  },
  iconEye: {
    width: 25,
    height: 22,
    tintColor: 'rgb(255, 192, 0)',
    position:'absolute',
    zIndex:99,
    bottom:3.5,
    right:3
  },

});
