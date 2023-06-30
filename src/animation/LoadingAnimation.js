import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingAnimation = () => {
  return (
    <LottieView

    style={{flex:1}}
      source={require('../assets/147786-looping-squares.json')}
      autoPlay
      loop
    />
  );
};

export default LoadingAnimation