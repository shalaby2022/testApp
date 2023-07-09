import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SQLiteComp from '../components/SQLite';
import QRcodePage from '../pages/QRcodePage';
import QRscan from '../components/QRscanner';
import StoryComp from '../components/Story';
import Image3D from '../components/Image3D';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SQLite" component={SQLiteComp} />
      <Tab.Screen name="QRcodePage" component={QRcodePage} />
      <Tab.Screen name="QRscan" component={QRscan} />
      <Tab.Screen name="StoryComp" component={StoryComp} />
      <Tab.Screen name="Image3D" component={Image3D} />
    </Tab.Navigator>
  );
};

export default MyTabs;
