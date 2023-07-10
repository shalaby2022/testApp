import {View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import _ from 'lodash';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';
import {IMAGES} from '../../Constants/Images';

const {width, height} = Dimensions.get('window');

const Image3D = () => {
  const images = _.reverse([
    IMAGES.iris1,
    IMAGES.iris2,
    IMAGES.iris3,
    IMAGES.iris7,
    IMAGES.iris10,
    IMAGES.iris12,
    IMAGES.iris13,
    IMAGES.iris14,
    IMAGES.iris15,
    IMAGES.iris17,
    IMAGES.iris19,
    IMAGES.iris20,
    IMAGES.iris21,
    IMAGES.iris22,
    IMAGES.iris26,
    IMAGES.iris29,
    IMAGES.iris31,
    IMAGES.iris33,
    IMAGES.iris36,
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
