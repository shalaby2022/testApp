import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SqlUsers from '../components/SQLite/User';
import EditUser from '../components/SQLite/User/EditUser';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserStack"
        component={SqlUsers}
        options={{headerShown: false}}
      />
      <Stack.Screen name="EditUser" component={EditUser} />
    </Stack.Navigator>
  );
};

export default UserStack;
