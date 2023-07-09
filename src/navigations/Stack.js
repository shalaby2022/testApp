import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login';
import Register from '../components/Register';
import SQLiteComp from '../components/SQLite';
import UserInfo from '../components/SQLite/userInfo';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SQLite" component={SQLiteComp} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
    </Stack.Navigator>
  );
};

export default AuthStack;
