import {View, Text, TouchableOpacity, Alert, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {StoryContainer} from 'react-native-stories-view';
import {IMAGES} from '../../Constants/Images';

const StoryComp = () => {
  const images = [
    'https://i1.sndcdn.com/artworks-IrhmhgPltsdrwMu8-thZohQ-t500x500.jpg',
    'https://sosugary.com/wp-content/uploads/2022/01/TheWeeknd_001.jpg',
  ];
  const [enable, setEnable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [inpVal, setInpVal] = useState();
  return (
    <View style={styles().container}>
      <Text>Story</Text>
      <TouchableOpacity onPress={() => setIsClicked(true)}>
        <Text>Click</Text>
      </TouchableOpacity>
      {isClicked && (
        <StoryContainer
          visible={true}
          enableProgress={enable}
          images={images}
          duration={60}
          onComplete={() => setIsClicked(false)}
          barStyle={{
            barActiveColor: '#30a',
            barInActiveColor: 'grey',
            barHeight: 5,
          }}
          containerStyle={{
            width: '100%',
            height: '100%',
          }}
          footerComponent={
            <View>
              <TextInput
                value={inpVal}
                onChangeText={e => setInpVal(e)}
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  width: '85%',
                  alignSelf: 'center',
                }}
              />
            </View>
          }
          onReplyTextChange
        />
      )}
    </View>
  );
};

export default StoryComp;
