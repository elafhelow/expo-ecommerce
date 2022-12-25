import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  var handleSubmitForm = () => {
    let error = {};
    if (!email) {
      error.email = "Email Address field is required";
    } else if (!password) {
      error.password = "Password field is required";
    } else if (password.length < 8) {
      error.password = "Your password needs to be more than 8 characters";
    }
    if (error.password || error.email) {
      setErrorMessage(error);
    } else {
      setErrorMessage({});
      console.log(props.navigation.navigate("BottomTabScreen"));
    }
  };

  return (
    <ImageBackground source={require("../assets/flat.jpg")}>
      <View style={styles.cantainer}>
        <Text
          style={{
            fontSize: 40,
            marginLeft: 70,
            fontWeight: "bold",
            color: "white",
            position: "absolute",
            marginTop: 120,
          }}
        >
          Makeup Store
        </Text>

        <View
          style={{
            backgroundColor: "white",
            height: 600,
            marginTop: 240,

            borderTopLeftRadius: 70,
          }}
        >
          <Text
            style={{
              color: "black",
              marginTop: 30,
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: 35,
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "bold",

              marginTop: 40,
              fontSize: 15,
              marginLeft: 115,
            }}
          >
            Login to your account
          </Text>
          <TextInput
            style={{
              height: 40,
              width: 270,
              marginLeft: 60,
              borderBottomWidth: 1,
              marginTop: 30,
            }}
            placeholder="Email"
            onChangeText={setEmail}
          />
          {errorMessage.email && (
            <Text style={styles.errorMessage}>{errorMessage.email}</Text>
          )}

          <TextInput
            style={{
              height: 40,
              width: 270,
              marginLeft: 60,
              borderBottomWidth: 1,
              marginTop: 30,
            }}
            placeholder="Password"
            onChangeText={setPassword}
          />
          {errorMessage.password && (
            <Text style={styles.errorMessage}>{errorMessage.password}</Text>
          )}
          <TouchableOpacity
            style={{
              height: 50,
              width: 300,
              backgroundColor: "#F2789F",
              borderRadius: 80,
              borderWidth: 1,
              borderColor: "#F2789F",
              marginLeft: 45,
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleSubmitForm}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                marginLeft: 100,
              }}
            >
              Create an account?
            </Text>
            <TouchableOpacity
              style={{ marginRight: 80 }}
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 70,
                  marginTop: 15,
                  fontWeight: "bold",
                  color: "#3AA3D4",
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: "#F2789F",
    height: 800,
  },
  cantainer: {
    backgroundColor: "#F2789F95",
    height: 800,
  },
  messageContainer: {
    backgroundColor: "rgb(255, 203, 203)",
    borderRadius: 16,
    paddingVertical: 16,
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 18,
    color: "red",
    fontWeigh: "bold",
    alignSelf: "center",
  },
});

/*<View style ={{width:200,height:90}}>
        <Text >Its Login Screen </Text>
        
        <Button title={'SignUp'} onPress ={()=>props.navigation.navigate('SignUp')}/>

    </View>*/
