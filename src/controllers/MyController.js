import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserModel from '../models/MyModel';
import MyComponent from '../components/MyComponent';

const MyController = () => {
  const [user, setUser] = useState(
    new UserModel(
      'Hasan Çelik',
      'hasancelikjob@gmail.com',
      'React Native Developer',
      'Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendisomittam deseruisse consequuntur ius an',
      'https://bootdey.com/img/Content/avatar/avatar6.png',
    ),
  );
  return <MyComponent user={user} />;
};

export default MyController;

const styles = StyleSheet.create({});
