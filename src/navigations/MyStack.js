import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserStack from './UserSTack';
import MyTabs from './Tab';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserStack" component={UserStack} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default MyStack;
