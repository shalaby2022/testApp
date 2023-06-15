import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QRcodePage from './src/pages/QRcodePage';
import QRscan from './src/components/QRscanner';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <QRcodePage /> */}
      <QRscan />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
