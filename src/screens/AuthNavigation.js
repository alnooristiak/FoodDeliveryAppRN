import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';



const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        initialRouteName='WelcomeScreen'
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown:false,}} />

        <Stack.Screen
        name="LoginScreen" 
        options={{headerShown:false,}}
        component={LoginScreen} />

        <Stack.Screen 
        name="SignUpScreen" 
        options={{headerShown:false,}}
        component={SignUpScreen} />

        {/* Home screen */}
        <Stack.Screen 
        name="HomeScreen" 
        options={{headerShown:false,}}
        component={HomeScreen} />

    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})