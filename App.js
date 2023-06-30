import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListProduct from './src/screens/ListProduct'
import LoadingAnimation from './src/animation/LoadingAnimation'
import BottomNavigators from './src/navigators/BottomNavigators'
import { NavigationContainer } from '@react-navigation/native'
import { DataProvider } from './src/context/context'
import RootNavigator from './src/navigators/RootNavigator'

const App = () => {
  return (
<DataProvider >
<SafeAreaView style={{flex:1}}>
<NavigationContainer>
<RootNavigator/>
</NavigationContainer>
</SafeAreaView>
</DataProvider>
  )
}

export default App

const styles = StyleSheet.create({})