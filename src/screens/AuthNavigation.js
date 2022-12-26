import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import LoginScreen from './LoginScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        initialRouteName='WelcomeScreen'
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown:false,}}
         />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HLoginScreenome" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})