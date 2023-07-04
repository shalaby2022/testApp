import {View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import _ from 'lodash';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';

const {width, height} = Dimensions.get('window');

const Image3D = () => {
  const images = _.reverse([
    require('../../assets/iris-1.jpg'),
    require('../../assets/iris-2.jpg'),
    require('../../assets/iris-3.jpg'),
    require('../../assets/iris-7.jpg'),
    require('../../assets/iris-10.jpg'),
    require('../../assets/iris-12.jpg'),
    require('../../assets/iris-13.jpg'),
    require('../../assets/iris-14.jpg'),
    require('../../assets/iris-15.jpg'),
    require('../../assets/iris-16.jpg'),
    require('../../assets/iris-17.jpg'),
    require('../../assets/iris-18.jpg'),
    require('../../assets/iris-19.jpg'),
    require('../../assets/iris-20.jpg'),
    require('../../assets/iris-21.jpg'),
    require('../../assets/iris-22.jpg'),
  ]);
  return (
    <View style={styles().container}>
      <Image360Viewer
        srcset={images}
        width={width}
        height={height}
        resize={'contain'}
      />
    </View>
  );
};

export default Image3D;
