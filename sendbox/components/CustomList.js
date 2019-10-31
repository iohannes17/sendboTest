import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View,Touch } from "react-native";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


class CustomListview extends Component {
  _keyExtractor = item => item.updated_at;

  _renderItem = ({ item }) => {
    const {coinName,coinValue,equivalene,valueInCureency,forexPower,forexAddlogo} = item;

    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View style={{ paddingRight: 3 }}>
            <Text style={styles.vincardTextStyle}>
              {vin} {"\n"}
              {created_at} {"\n"}
             
            </Text>
          </View>
          <View
            style={styles.faceImageStyle}>
           
            <Image style={styles.faceImageStyle} source={{uri:imageurl+'car.png'}}/>
            </View>
          </View>
      </View>
    );
  };



  

  render() {
    return (
      <FlatList
        style={{ flex: 1, }}
        data={this.props.cryptos}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

CustomListview.propTypes = {
  cryptos: PropTypes.array,

};





const mapStateToProps = state =>{
  return{};
}

export default connect(mapStateToProps,{getForeign,getLocal})(CustomListview);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 18,
    backgroundColor: "white",
    padding: 5,
    elevation:3
  },
  faceImageStyle: {
    width: wp('20%'),
    height: hp('10%'),

  },
  vincardTextStyle: {
    color:'#339FE7',
    textAlign: "left",
    fontStyle:'normal',
    fontWeight:"200",
    fontFamily:'Lato-Bold',
    padding: 5

  }
});

