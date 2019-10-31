import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({

		container: {
			backgroundColor: "#eeeeee",
			flex: 1,
		},

	divider:{
		height:hp('2.5%'),
		width:wp('100%'),
		alignContent:'center',
		justifyContent:'center'
	},

	selectionButtonContainer:{
		flexDirection:'row',
		backgroundColor:'transparent',
		height:hp('10%'),
		width:wp('100%'),
		alignContent:'center',
		justifyContent:'center'
	},

	buttonView:{
		alignContent:'center',
		justifyContent:'center',
		alignItems:'center',
		height:hp('12%'),
		 width:wp('50%'),
		 backgroundColor:'transparent'

	},

	buttonAction: 
	{
		alignContent:'center',
	justifyContent:'center',
	alignItems:'center',
	height:hp('8%'),
	 width:wp('40%'),
	 borderRadius:10,
	 borderWidth:1,
	 borderColor:'rgb(255, 192, 0)',
	},
	

logoText:{
	textAlign:'center',
	fontSize:20,fontWeight:"900",
	fontFamily:'Poppins-Bold',
	marginTop:40
 },

 buttonActionText:
 {
 fontFamily: "Lato-Regular",
 fontSize: 13,
 fontStyle: "normal",
 fontWeight: "normal",
 textAlign: "center",
},


itemStyle:{
	borderColor:'#373f4b',
	borderWidth:2,
	backgroundColor:'#373f4b',
	height:hp('2%'),
	width:wp('80'),
	borderRadius:10,
	marginTop:10
  
  },
  
  formstyle:{

	 right:20,
	justifyContent:'center',
	alignItems:'center',
	alignSelf:'center'
},

labelStyle:{
	padding:10,
	color:'#ffffff',
	fontSize:9,
	fontFamily:'Poppins-Bold'
},
inputStyle:{
	color:'#ffffff',
	paddingLeft:10,
},

buttonViewForm:{
	width:wp('40%'),
	height:hp('5%'),
	borderRadius: 10,
	backgroundColor:'#373f4b',
	marginTop:20,
	alignItems:'center',
	alignSelf:'center'
},

buttonTextForm:{
	fontFamily:'Poppins-Bold',
	fontSize:12,
	textAlign:'center',
	fontWeight:'bold',
	fontStyle:'normal',
	color:'#eeeeee',
	marginTop:9
   
},

shipmentbuttonView:{

	borderRadius: 10,
	marginTop:25,
	alignItems:'center',
	alignSelf:'center'
},

	
shipmentbuttonText:{
fontFamily:'Poppins-Bold',
fontSize:14,
textAlign:'center',
fontWeight:'bold',
fontStyle:'normal',
color:'#373f4b',


},

detailsLeftText:{
	color:'black',
	fontFamily:'Poppins-Bold',
	fontSize:10,fontWeight:'900',
	marginTop:20,textAlign:'center'
},

detailsRightText:{
	color:'black',
	fontFamily:'Poppins-Bold',
	fontSize:10,fontWeight:'900',
	marginTop:10,textAlign:'center'
},
detailsHeader:{
color:'gold',
fontFamily:'Poppins-Bold',
fontSize:16,fontWeight:'900',
marginTop:10,textAlign:'center'
}
	
		
		


	
})



