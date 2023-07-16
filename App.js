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
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

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
      if (Authed === 'true') {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'channel', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
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
