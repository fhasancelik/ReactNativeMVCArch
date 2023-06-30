import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ListProduct from '../screens/ListProduct';
import Profile from '../screens/Profile';
import Products from './Products';
import ProductDetailController from '../controllers/ProductDetailController';

const BottomNavigators = () => {
    const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
    <Tab.Screen options={{
        tabBarIcon:'home'
    }} name="Products" component={Products} />
    <Tab.Screen options={{
        tabBarIcon:'home'
    }} name="Profile" component={Profile} />




  </Tab.Navigator>
  )
}

export default BottomNavigators

const styles = StyleSheet.create({})