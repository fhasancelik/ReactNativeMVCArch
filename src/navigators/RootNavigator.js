import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DataContext } from '../context/context'
import { BottomNavigation } from 'react-native-paper'
import BottomNavigators from './BottomNavigators'
import AuthNavigator from './AuthNavigator'

const RootNavigator = () => {

const Root=createNativeStackNavigator()

const{userAvaible}=useContext(DataContext)

  return (
  


   <>
      {userAvaible===true?(<BottomNavigators/>):<AuthNavigator/>}
</>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})