import React,{useEffect, useState} from 'react'
<<<<<<< HEAD
import { StyleSheet, StatusBar,Text, View, KeyboardAvoidingView,Input,Image,Button } from 'react-native'
=======
import { StyleSheet, StatusBar,Text, View, KeyboardAvoidingView, Linking } from 'react-native'
>>>>>>> 3ba468639d362f911c88e5310641d9666b826a45
//import {StatusBar} from "react-native-vector-icons"
//import {Button, Input, Image} from "react-native-elements"
import { auth } from '../firebase';


const SignupScreen = ({navigation}) => {


    const setToken = () => {
		fetch('https://ancient-wave-59600.herokuapp.com/create-user', {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer'
		})
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				Linking.openURL(result.url);
			});
	};

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged((authUser)=>{
            console.log(authUser);
            if(authUser){
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    },[])
    const signIn =()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((error)=>alert(error));
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar styles="light"/>
            <Image 
            source={{uri:"https://media-exp1.licdn.com/dms/image/C4D0BAQGaazL3vmOnEg/company-logo_200_200/0/1519952246835?e=2159024400&v=beta&t=3nTkRzGGqry_fFfnjy2vCU6KWHtfl1iMf15sbgTa81U",}}
            style={{width:200,height:200}}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Email" value={email} onChangeText={(text)=> setEmail(text)} autoFocus type="Email"/>
                <Input placeholder="Password" value={password} onChangeText={(text)=> setPassword(text)} secureTextEntry type="password"/>
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button containerStyle={styles.button} onPress={setToken} title="Test"/>
            <Button onPress={()=>navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register"/>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        backgroundColor:"white",
        
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
})

