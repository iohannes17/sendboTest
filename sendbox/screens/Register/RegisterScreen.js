import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,Alert,Image,StatusBar,ActivityIndicator} from 'react-native'
import {connect} from 'react-redux';
import styles from './styles';
import {registerUser} from '../../Services/ApiActions/register'
import { Form, Item, Input, Label } from 'native-base';












class Register extends React.Component {


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
            email:'',
            username:'',
            password:'',
            cpassword:'',
            phone:''
        };
        
    }



	  _createUser = async ()=>{

		if(this.state.username === '' ||
		  this.state.email=== '' ||
		  this.state.phone === '' ||
		  this.state.password === ''||
		  this.state.cpassword === '' ){

		      Alert.alert('','Please fil all field')
			
          } 
          else if(this.state.password != this.state.cpassword){
              Alert.alert('',"Passwords must match")
          }

        else{
			 
		 const data ={
            username:this.state.username,
            email: this.state.email,
            password: this.state.password,
            phone:this.state.phone
				   
			 };

			
			 this.props.registerUser(data)
			
		  }

      }
      
      _backtoLogin=()=>{
        this.props.navigation.navigate('login')

      }









  

   

    render() {
        return (
            <View style={styles.container}>
             <StatusBar hidden/>

              <View style={{backgroundColor:'#373f4b',height:550,width:450,transform:[{rotate:"45deg"}],top:-500,position:'absolute',left:-115,
                 borderRadius:50,elevation:2}}>  
            </View> 

               
               <Form style={styles.formstyle}>           
                    <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Username</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({username:value})} value={this.state.username} maxLength={100} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Email</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({email:value})} value={this.state.email} maxLength={100} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Phone Number</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({phone:value})} value={this.state.phone} maxLength={13} />
					</Item>

                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Password</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({password:value})} value={this.state.password} secureTextEntry={true}/>
					</Item>


                     <Item stackedLabel style={styles.itemStyle}>
						<Label style={styles.labelStyle}>Confirm Password</Label>
						    <Input style={styles.inputStyle} onChangeText={(value)=> this.setState({cpassword:value})} value={this.state.cpassword} secureTextEntry={true}/>
					</Item>

                       
                       {
                         this.props.isLoading ?

                                <ActivityIndicator color="#000000" size={30}/> 
                                :

                                <TouchableOpacity style={styles.buttonView} onPress={this._createUser}>
                                        <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>	


                       }
                    

                        <TouchableOpacity style={styles.loginbuttonView} onPress={this._backtoLogin}>
                    <Text style={styles.loginbuttonText}>Already have an account?...Login Now</Text>
                    </TouchableOpacity>		


             </Form>

                  
          
             
          </View>
        );
    }
}


const mapStateToProps = state =>{
	return{
		isLoading:state.appRegister.isRegistering
		
	};
  }
  
  Register.propTypes ={

    registerUser:PropTypes.func.isRequired,
    isLoading:PropTypes.bool

  }

  export default connect(mapStateToProps, {registerUser})(Register);
