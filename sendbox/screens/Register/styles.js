import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({

		container: {
			backgroundColor: "#eeeeee",
			flex: 1,
		},
		itemStyle:{
            borderColor:'#373f4b',
            borderWidth:2,
            backgroundColor:'#373f4b',
            height:hp('2%'),
            width:wp('90'),
			borderRadius:10,
			marginTop:10
          
		  },
		  
		  formstyle:{
			
			top:180,
			position:'absolute',
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

		buttonView:{
			width:wp('40%'),
			height:hp('5%'),
			borderRadius: 10,
			backgroundColor:'#373f4b',
			marginTop:20,
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

		loginbuttonView:{
		
			borderRadius: 10,
			marginTop:25,
			alignItems:'center',
			alignSelf:'center'
		},

			
loginbuttonText:{
    fontFamily:'Poppins-Bold',
    fontSize:14,
    textAlign:'center',
    fontWeight:'bold',
    fontStyle:'normal',
	color:'#373f4b',
	
   
},
		
	
		
		


	
})
