import {Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback,SafeAreaView, Alert} from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style';
import { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from "firebase/firestore";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    
    const handleRegister = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with', user.email);
                try {
                    const docRef = addDoc(collection(db, "users"), {
                        email: user.email,
                        key:Math.random().toString().substring(7)
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })
            .catch((error) => Alert.alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with', user.email);
            })
            .catch(error => alert(error.message))
    }

// Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('TabNavigator')
            }
        })
        return unsubscribe
    }, [])

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={gStyle.logContainer}>
            <Text style={gStyle.title}>Let's Start!</Text>        
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={gStyle.avoidingView} 
            >   
                <View style={gStyle.inputContainer}>
                    <TextInput
                        placeholder='Email'
                        value={email}
                        onChangeText={text=>setEmail(text)}      
                        style={gStyle.input}
                    />
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={text=>setPassword(text)}         
                        secureTextEntry={true}
                        style={gStyle.input}  
                    />
                </View>
                <View style={gStyle.buttonContainer}>
                    <TouchableOpacity
                        style={gStyle.logRegButton}
                        onPress={handleLogin}
                    >
                        <Text style={gStyle.boldText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={gStyle.logRegButton}
                        onPress={handleRegister}
                    >
                        <Text style={gStyle.boldText}>Register</Text>
                    </TouchableOpacity>   
                </View> 
            </KeyboardAvoidingView>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Login




