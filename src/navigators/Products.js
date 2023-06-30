import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListProduct from '../screens/ListProduct'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductDetailController from '../controllers/ProductDetailController'

const Products = () => {
    const Stack=createNativeStackNavigator()
  return (
  <Stack.Navigator>
    <Stack.Screen name='ProductsList' component={ListProduct}/>
    <Stack.Screen name='ProductDetail' component={ProductDetailController}/>
  </Stack.Navigator>
  )
}

export default Products

const styles = StyleSheet.create({})