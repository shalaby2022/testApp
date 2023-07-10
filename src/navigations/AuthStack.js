import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login';
import Register from '../components/Register';
import MyTabs from './Tab';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default AuthStack;
