import React from 'react';
import {SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigations/Stack';
import MyTabs from './src/navigations/Tab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="MyTabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
