import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRcode = ({value, getRef}) => {
  return (
    <QRCode
      value={value}
      size={250}
      logoSize={60}
      color="black"
      logo={require('../../assets/images.png')}
      getRef={getRef}
    />
  );
};

export default QRcode;
