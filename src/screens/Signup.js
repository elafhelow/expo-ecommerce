import React, { Component } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,ImageBackground} from 'react-native';

export default class Signup extends Component {
  
  
  render() {
    return (
      
<ImageBackground source={require("../assets/flat.jpg") }style={{height:"100%"}}>

  
<View style={styles.cantainer}>
<Text style={ {fontSize: 40,
    marginLeft: 70,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 20,}}>Makeup Store</Text>

        <View style={{
    backgroundColor: 'white',
    height: 800,
    marginTop: 100,
  
    borderTopLeftRadius: 70,
  }}>
          <Text style={ {
    color: 'black',
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 35,
    justifyContent: 'center',
    alignItems: 'center'
  }}>Sign up</Text>
   
   <TextInput style={{
    height: 40,
    width: 270,
    marginLeft: 60,
    borderBottomWidth: 1,
    marginTop: 30,
  }} placeholder="First Name " onChangeText={(email => { this.setState({ email }) })} />
      <TextInput style={{
    height: 40,
    width: 270,
    marginLeft: 60,
    borderBottomWidth: 1,
    marginTop: 30,
  }} placeholder="Last Name" onChangeText={(email => { this.setState({ email }) })} />
          <TextInput style={{
    height: 40,
    width: 270,
    marginLeft: 60,
    borderBottomWidth: 1,
    marginTop: 30,
  }} placeholder="Email" onChangeText={(email => { this.setState({ email }) })} />
          <TextInput style={{
    height: 40,
    width: 270,
    marginLeft: 60,
    borderBottomWidth: 1,
    marginTop: 30,
  }} placeholder="Password" onChangeText={(pass => { this.setState({ pass }) })} />
          <TouchableOpacity style={{
    height: 50,
    width: 300,
    backgroundColor: '#F2789F',
    borderRadius: 80,
    borderWidth: 1,
    borderColor:'#F2789F',
    marginLeft: 45,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }} onPress={() => props.navigation.navigate('BottomTabScreen')}>
            <Text style={{color: 'white',  fontWeight: 'bold',  fontSize: 20,}}>sign up</Text>
          </TouchableOpacity>
          <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }}>
            <Text style={{
    fontSize: 15,
    marginTop: 15,
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center'
    }}>Already have an acount?</Text>
            <TouchableOpacity
              style={{marginRight: 80}}onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontSize: 15,marginRight:70,marginTop: 15,fontWeight: 'bold',color:'#3AA3D4'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
</ImageBackground>  
      
    );
  }
}

const styles = StyleSheet.create({
  cantainer: {
  

    backgroundColor: '#F2789F',
    height: 800,
    opacity:0.85
  
  },
 
  

    
});


        /*<View style ={{width:200,height:90}}>
        <Text >Its Login Screen </Text>
        
        <Button title={'SignUp'} onPress ={()=>props.navigation.navigate('SignUp')}/>

    </View>*/



/* <View style ={{width:200,height:90}}>
       <Text>Its Signup Screen </Text>
      <Button title='Login' onPress ={()=>props.navigation.navigate('Login')}/>

  </View>*/