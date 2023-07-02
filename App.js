import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QRcodePage from './src/pages/QRcodePage';
import QRscan from './src/components/QRscanner';
import StoryComp from './src/components/Story';
import NativeStory from './src/components/NativeStory';
import InstaStoryComp from './src/components/InstaStory';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <QRcodePage /> */}
      {/* <QRscan /> */}
      <StoryComp />
      {/* <NativeStory /> */}
      {/* <InstaStoryComp /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
