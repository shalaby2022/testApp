import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigations/AuthStack';
import MyTabs from './src/navigations/Tab';
import {
  getAllUsersFromDB,
  getUserFromDB,
  initalProductsDataBase,
  initalUserDataBase,
} from './src/components/SQLite/SQlite';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    initalUserDataBase();
    initalProductsDataBase();
    getUserFromDB(setName, setEmail);
    getAllUsersFromDB(setUsers);
  }, [email]);

  useEffect(() => {
    const checkAuth = async () => {
      let Authed = await AsyncStorage.getItem('isAuthed');
      console.log('isAuthed', isAuthed);
      if (Authed === 'true') {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, paddingVertical: 14}}>
      <NavigationContainer>
        {isAuthed ? <MyTabs /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
  );
};
