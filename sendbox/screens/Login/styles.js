import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
	container: {
	    backgroundColor: "#eeeeee",
		flex: 1,
	},

	buttonView:{
		width:wp('40%'),
		height:hp('5%'),
		borderRadius: 10,
		backgroundColor:'#373f4b',
		marginTop:20,
		alignItems:'center',
		alignSelf:'center'
	},

	accbuttonView:{
		
		borderRadius: 10,
		marginTop:25,
		alignItems:'center',
		alignSelf:'center'
	},

	
buttonText:{
    fontFamily:'Poppins-Bold',
    fontSize:12,
    textAlign:'center',
    fontWeight:'bold',
    fontStyle:'normal',
	color:'#eeeeee',
	marginTop:9
   
},

	
accbuttonText:{
    fontFamily:'Poppins-Bold',
    fontSize:14,
    textAlign:'center',
    fontWeight:'bold',
    fontStyle:'normal',
	color:'#373f4b',
	
   
},
formstyle:{
	width:wp('80%'),
	top:200,
	position:'absolute',
	right:10,
	justifyContent:'center',
	alignItems:'center'
},

fbButton:{
	zIndex:100,  
	borderBottomRightRadius:26,
	borderTopRightRadius:26,
	padding:10,
	backgroundColor:'#f5f5f5',
	transform:[{rotate:"315deg"}],                        
	height:50,
	width:120,
	position:'absolute',
	left:105,
	top:72
},

fbLoginText:{
	color:'#373f4b',
	fontSize:20,
	textAlign:'center',
},

inputStyle:{
	color:'#000000',
	paddingLeft:10,
},


})
