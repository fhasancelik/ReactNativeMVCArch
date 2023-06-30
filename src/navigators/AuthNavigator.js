import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/AuthScreens/SignIn'
import SignUp from '../screens/AuthScreens/SignUp'

const AuthNavigator = () => {

const Auth=createNativeStackNavigator()

  return (
  <Auth.Navigator>
    <Auth.Screen options={{headerShown:false}} name='SignIn' component={SignIn}/>
    <Auth.Screen options={{headerShown:false}}  name='SignUp' component={SignUp}/>
  </Auth.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})