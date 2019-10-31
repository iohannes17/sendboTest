import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,Alert,Image,StatusBar,AsyncStorage,ActivityIndicator} from 'react-native'
import * as Facebook from 'expo-facebook';
import {connect} from 'react-redux';
import {loginApp} from '../../Services/ApiActions/Login';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import Toast,{DURATION} from 'react-native-easy-toast'
import { Form, Item, Input, Label } from 'native-base';
import logo from '../../assets/images/gift.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'













class LoginScreen extends React.Component {




  static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}






    constructor(props) {
        super(props);
        this.state = {
          identifier:'',
          password:''
        };
        
    }


  

    logIn = async()=> {
      try {
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync('2351626564954744', {
          permissions: ['public_profile','email'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const response2 = await fetch(
            `https://graph.facebook.com/me?fields=id,name,email,birthday&access_token=${token}`);
            AsyncStorage.setItem('facebook_token',token)
         
        
          //fetching converting response to json
          let res = (await response.json())
          let res2 = (await response2.json())

          //saving user name in storage
          Alert.alert('Logged in!', `Hi ${res.name}!`);  
          AsyncStorage.setItem('user_name',res.name);
          AsyncStorage.setItem('user_email',res2.email)

          this.props.loginApp();

            //computing user login details email and token
          const data={
            username: res2.email,
            password: await AsyncStorage.getItem('tokenkey')
         }

    
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    }


    register=()=>{
      this.props.navigation.navigate('registerScreen')
    }



    userLogin = ()=>{

      if(this.state.identifier === '' ||
          this.state.password === ''){
  
            Alert.alert('','Please fill all field')
        
            } 
            
  
          else{
         
       const data ={
              identifier:this.state.identifier,
              password: this.state.password,     
         };
  
        
         this.props.loginApp(data)
        
        }
  
        }
       



    render() {
        return (
            <View style={styles.container}>
             <StatusBar hidden/>

              <View style={{backgroundColor:'#373f4b',height:550,width:450,transform:[{rotate:"45deg"}],top:-500,position:'absolute',left:-115,
                 borderRadius:50,elevation:2}}>  

                        
                   </View> 
                  
            
              <View style={{height:550,width:450,transform:[{rotate:"45deg"}],top:-450,position:'absolute',left:-90,
                 borderRadius:0,opacity:0.7}}>   

                  </View> 

                            <Image source={logo} style={{
                              height:70,
                              width:70,
                              top:120,
                              position:'absolute',
                              right:120,
                              alignSelf:'center'
                            }}/>
           

                  <Form style={styles.formstyle}>
                        <Item floatingLabel>
                          <Label>Username/Email</Label>
                          <Input style={styles.inputStyle} 
                          onChangeText={(value)=> this.setState({identifier:value})} value={this.state.identifier} maxLength={100}/>
                        </Item>
                        <Item floatingLabel last>
                          <Label>Password</Label>
                          <Input style={styles.inputStyle} 
                          onChangeText={(value)=> this.setState({password:value})} value={this.state.password} secureTextEntry={true}/>
                        </Item>


                        {
                          this.props.isLoading ?
                             <ActivityIndicator color="#000000" size={32}/>
                             :
                             <TouchableOpacity style={styles.buttonView} onPress={this.userLogin}>
                             <Text style={styles.buttonText}>LOGIN</Text>
                         </TouchableOpacity>	
                       }

                    
                   <TouchableOpacity style={styles.accbuttonView} onPress={this.register}>
                    
                      <Text style={styles.accbuttonText}>Don't have an account?...Register Now</Text>
                      </TouchableOpacity>			
                   </Form>



       <View style={{backgroundColor:'#373f4b',bottom:-150,height:290,width:290,transform:[{rotate:"45deg"}],position:'absolute',borderRadius:60,left:-10}}>

              </View>  

              <LinearGradient
														colors={['#373f4b','#eeeeee']}
														start={[0.0, 1.0]}
														end={[0.9, 0.6]}
														locations={[0.0, 1.0]}
														style={{bottom:-200,height:400,width:400,transform:[{rotate:"45deg"}],position:'absolute',borderRadius:60,left:-200}}>
                              

                           <TouchableOpacity
                          onPressIn={this.logIn}
                           style={styles.fbButton}>
                          <Text style={styles.fbLoginText}>facebook</Text>
                          </TouchableOpacity>
           
           	</LinearGradient>		
               

               <Toast ref="toast"
                style={{backgroundColor:'#000000'}}
                position="bottom"
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{color:'#00C9FF'}}
            />
            
                         
            </View>
        );
    }
}


const mapStateToProps = state =>{
	return{
		isLoading:state.appLogin.isLoading
		
	};
  }
  
  LoginScreen.propTypes ={
  loginApp:PropTypes.func.isRequired,
  isLoading:PropTypes.bool
  }

  export default connect(mapStateToProps, {loginApp})(LoginScreen);
