import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QRcodePage from './src/pages/QRcodePage';
import QRscan from './src/components/QRscanner';
import StoryComp from './src/components/Story';
import NativeStory from './src/components/NativeStory';
import InstaStoryComp from './src/components/InstaStory';
import Image3D from './src/components/Image3D';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <QRcodePage /> */}
      {/* <QRscan /> */}
      {/* <StoryComp /> */}
      {/* <NativeStory /> */}
      {/* <InstaStoryComp /> */}
      <Image3D />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
