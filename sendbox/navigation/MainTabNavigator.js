import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator,} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/Dashboard/BottomNavBar/Dashboard'
import AddressScreen  from '../screens/Dashboard/BottomNavBar/Address/address'
import ShipmentScreen  from '../screens/Dashboard/BottomNavBar/Shipment/shipment'
import UpdateAddress  from '../screens/Dashboard/BottomNavBar/Address/updateAddress'
import  CreateAddress from '../screens/Dashboard/BottomNavBar/Address/createAddress'
import  CreateShipment from '../screens/Dashboard/BottomNavBar/Shipment/createShipment'
import  UpdateShipment from '../screens/Dashboard/BottomNavBar/Shipment/updateShipment'
import ShipmentDetails  from '../screens/Dashboard/BottomNavBar/Shipment/viewShipmentDetail'





/**
 * Home screen..displays user profile details
 */
const homeStack = createStackNavigator({
    home: DashboardScreen,
  
  },{
    initialRouteName:'home',
    defaultNavigationOptions:{
     headerStyle:{ backgroundColor:"#101112",},
     headerTintColor:"white"   
    },
  } 
);
  

  homeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        height={18}
        width={21}
        source={require("../assets/images/home.png")}
       
      />
    ),
  };

  /**
   * Address top navigator, it has three screens
   * create address
   * user addresslist
   * update user address
   */

  const AddressStack = createMaterialTopTabNavigator({
   
    createAddy: CreateAddress,
    addresslist: AddressScreen,
    updateAddy:UpdateAddress
  
  },{
   
    initialRouteName:'addresslist',
    defaultNavigationOptions:{
      tabBarVisible:false,  
    },
    tabBarOptions: {  
      showLabel:false,  
      style: {  
          backgroundColor:'red'  
      }  
  },  
    
  
  } 
);
  

  AddressStack.navigationOptions = {
    swipeEnabled:true,
    tabBarLabel: 'Addresses',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        height={20}
        width={21}
        source={require("../assets/images/address.png")}
       
      />
    ),
  };


  /**
   * shipmentstack screen list implementing a stack navigator
   * to move from update shipment and view shipment details
   */

  const shipmentlistStack = createStackNavigator({
    shipmentlist: ShipmentScreen,
    updateshipment: UpdateShipment,
    shipmentdetails: ShipmentDetails
  
  },{
    initialRouteName:'shipmentlist',
    defaultNavigationOptions:{
     headerStyle:{ backgroundColor:"#000000",},
     headerTintColor:"white"   
    },
  } 
);



/**
 * shipment stack has a combnation of top navigator and stack navigator
 * shipmentliststack implements stack navigator 
 * shipment stack implements top navigator which also implemets a shipmentlist stack
 */

  const ShipmentStack = createMaterialTopTabNavigator({
   
    createshipment: CreateShipment,
    shipmentlistStack
  },{
    initialRouteName:'shipmentlistStack',
    tabBarVisible:false,
    defaultNavigationOptions:{
      header:null,
      tabBarVisible:false,
      
      
    },
    tabBarOptions: {  
      showLabel:false,  
      style: {  
          backgroundColor:'red'  
      }  
    }
  }
);
  

  ShipmentStack.navigationOptions = {
    tabBarLabel: 'Shipments',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        height={20}
        width={21}
        source={require("../assets/images/shipment.png")}
       
      />
    ),
  };






/**
 * Bottom navigator which serves as the base for all navigators defined
 * implements homestack, shipmentstack and addresstack
 */

const main = createMaterialBottomTabNavigator({
  homeStack,
  AddressStack,
  ShipmentStack

  
},

{  
    initialRouteName: "homeStack",  
    activeColor: '#000000',  
    inactiveColor: '#bdbdbd',
    barStyle: { backgroundColor: "#ffffff",
              
               },
    
    
  },  



);

export default main