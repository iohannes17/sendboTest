import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
	dashboardView: {
	    backgroundColor: "#1a1c1f",
		
	
		
	},

	headerText:{
		color:'#ffffff', 
		fontSize:18,
		fontFamily:'Poppins-Bold',
		marginLeft:15
	},

	profileLogo:{
		width:90,
		height:90,
		alignSelf:'center',
		marginTop:30
	},
	profileCardView:{
    top:120,
	position:'absolute',
	height:hp('40%'),
	width:wp('80%'),
	borderBottomRightRadius:75,
	backgroundColor:'white',
	alignSelf:'center',
	alignContent:'center',
	alignItems:'center',
	elevation:2
	}
   
	
})
