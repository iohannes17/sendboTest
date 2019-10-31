import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'; 

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
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
          maxLength={30}
          
        />
         <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.props.onPress}>

          <Image source={this.props.sources} style={styles.iconEye} />
        </TouchableOpacity>
      </View>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
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
    width:wp('75%'),
    height: hp('8%'),
    color: '#fff',
    letterSpacing:2,
    fontSize:hp('2.0%'),
    fontFamily:'Lato-Regular',
    alignSelf:"flex-end",
    

    
  },
  inputWrapper: {
    backgroundColor: 'transparent',
    width:wp('85%'),
    height: hp('8%'),
    marginTop:20,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderColor: "rgb(57, 81, 104)",
    borderWidth:1,
    borderRadius: 7,
  
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 6,
    zIndex: 99,
    top: 18,
    tintColor: '#939393',
  },
  btnEye: {
    position: 'absolute',
    top: 10,
    right: 25,
    width: 22,
    height: 22,
  },
  iconEye: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: 6,
    top: 4,
    tintColor: '#fff',
  },
});
