import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyController from './src/controllers/MyController'

const App = () => {
  return (
<SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<MyController/>
</SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})