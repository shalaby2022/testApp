import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import QRcode from '../components/QRcode';

const QRcodePage = () => {
  const initialItemState = [
    'https://google.com',
    'https://facebook.com',
    'https://instagram.com',
  ];

  const handleSelect = () => {
    const randomNum = Math.floor(
      Math.random() * initialItemState.length - 1 + 1,
    );
    return initialItemState[randomNum];
  };

  const [productQRref, setProductQRref] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <QRcode value={handleSelect()} getRef={c => setProductQRref(c)} />
      <View style={{height: 50}} />
      <QRcode value={handleSelect()} getRef={c => setProductQRref(c)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRcodePage;
