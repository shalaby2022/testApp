import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QRcodePage from '../pages/QRcodePage';
import Image3D from '../components/Image3D';
import UserStack from './UserSTack';
import ProductStack from './ProductStack';
import StoryComp from '../components/Story';
import QRscan from '../components/QRscanner';
import {Image} from 'react-native';
import {IMAGES} from '../Constants/Images';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="QRcodePage"
        component={QRcodePage}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={IMAGES.qrCode}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="QRScan"
        component={QRscan}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={IMAGES.scanner}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Users"
        component={UserStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={IMAGES.users}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={IMAGES.products}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Image3D"
        component={Image3D}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={IMAGES.image3D}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name="StoryComp" component={StoryComp} /> */}
    </Tab.Navigator>
  );
};

export default MyTabs;
