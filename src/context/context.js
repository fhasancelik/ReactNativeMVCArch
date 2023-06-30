import React, {createContext, useEffect, useState} from 'react';

import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DataContext = createContext();

const DataProvider = ({children}) => {

const [userAvaible,setUserAvaible]=useState(false)

const [productInfo,setProductInfo]=useState(null)

  return (
    <DataContext.Provider
      value={{
      productInfo,
      setProductInfo,
      userAvaible,
      setUserAvaible
      }}>
      {children}
    </DataContext.Provider>
  );
};
export {DataProvider, DataContext};