import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QRscan = () => {
  const [start, setStart] = React.useState(false);
  const [on, setOn] = React.useState(RNCamera.Constants.FlashMode.off);

  const onSuccess = e => {
    Linking.openURL(e.data).catch(er => console.error('An error occured', er));
  };

  const activeQR = () => {};

  const scanAgain = () => {};

  const torchControl = () => {
    if (on == RNCamera.Constants.FlashMode.on) {
      setOn(RNCamera.Constants.FlashMode.off);
    } else {
      setOn(RNCamera.Constants.FlashMode.on);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#777'}}>
      <TouchableOpacity onPress={() => setStart(true)} style={styles.start}>
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
      {start && (
        <>
          <QRCodeScanner
            reactivateTimeout={2000}
            onRead={onSuccess}
            flashMode={on}
            topContent={
              <Text style={styles.centerText}>React Native QR_code</Text>
            }
            // bottomContent={
            //   <TouchableOpacity>
            //     <Text style={styles.buttonText}>Flash</Text>
            //   </TouchableOpacity>
            // }
          />
          <TouchableOpacity style={styles.stop} onPress={() => setStart(false)}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default QRscan;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ddd',
    fontWeight: '600',
  },
  start: {
    width: '38%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'tomato',
    borderRadius: 25,
    marginVertical: 10,
  },
  stop: {
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'green',
    borderRadius: 25,
    marginVertical: 10,
  },
});
