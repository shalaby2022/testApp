import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../Constants/Images';

const {height, width} = Dimensions.get('window');

const NativeStory = () => {
  //   const navigation = useNavigation();
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState([
    {
      content: IMAGES.images,
      type: 'image',
      finish: 0,
    },
    {
      content: IMAGES.dask,
      type: 'image',
      finish: 0,
    },
    {
      content: IMAGES.dawn,
      type: 'image',
      finish: 0,
    },
    {
      content: IMAGES.dask,
      type: 'image',
      finish: 0,
    },
  ]);

  const progress = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(({finished}) => {
      console.log('finishedddddd', finished);
      if (finished) {
        handleNextPress();
      }
    });
  };

  const handleNextPress = () => {
    if (current < content.length - 1) {
      let tempData = content;
      tempData[current].finish = 1;
      setContent(tempData);
      progress.setValue(0);
      setCurrent(current + 1);
    } else {
      close();
    }
  };

  const handlePreviousPress = () => {
    if (current - 1 >= 0) {
      let tempData = content;
      tempData[current].finish = 0;
      setContent(tempData);
      setCurrent(current - 1);
      progress.setValue(0);
    } else {
      close();
    }
  };

  const close = () => {
    progress.setValue(0);
    // navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      {/* story images */}
      <Image
        source={content[current].content}
        style={styles.storyStyle}
        onLoadEnd={() => {
          progress.setValue(0);
          start();
        }}
      />
      {/* loading bars */}
      <View style={styles.loadingWrapper}>
        {content &&
          content.map((item, index) => (
            <View style={styles.loaderStyle} key={index}>
              <Animated.View
                style={{
                  flex: current == index ? progress : content[index].finish,
                  height: '100%',
                  backgroundColor: 'rgba(255,255,255,0.75)',
                }}></Animated.View>
            </View>
          ))}
      </View>

      {/* user-info-wrapper */}
      <View style={styles.userWrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={IMAGES.user} style={styles.userImgStyle} />
          <Text style={styles.userName}>Ahmed Sabry</Text>
        </View>
        <TouchableOpacity onPress={close}>
          <Image source={IMAGES.close} style={styles.closeImgStyle} />
        </TouchableOpacity>
      </View>

      {/* swip-wrapper */}
      <View style={styles.swipWrapper}>
        <TouchableOpacity style={styles.swipBtn} onPress={handlePreviousPress}>
          <View />
        </TouchableOpacity>
        <TouchableOpacity style={styles.swipBtn} onPress={handleNextPress}>
          <View />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NativeStory;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#000',
  },
  storyStyle: {
    width: width,
    height: height,
  },
  loadingWrapper: {
    width: width - 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
  },
  loaderStyle: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginEnd: 5,
  },
  swipWrapper: {
    width: width,
    height: height,
    position: 'absolute',
    top: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  swipBtn: {
    width: '30%',
    height: height,
  },
  userWrapper: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
  },
  userImgStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginStart: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 9,
    color: '#fff',
  },
  closeImgStyle: {
    width: 20,
    height: 20,
    marginEnd: 20,
    tintColor: '#fff',
  },
});
