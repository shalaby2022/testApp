import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {StoryContainer} from 'react-native-stories-view';
import {IMAGES} from '../../Constants/Images';

const StoryComp = () => {
  const images = [
    {
      uri: 'https://i1.sndcdn.com/artworks-IrhmhgPltsdrwMu8-thZohQ-t500x500.jpg',
      type: 'image',
    },
    {
      uri: 'https://sosugary.com/wp-content/uploads/2022/01/TheWeeknd_001.jpg',
      type: 'image',
    },
    {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      type: 'video',
    },
  ];

  const [enable, setEnable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [inpVal, setInpVal] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const handleReply = () => {
    setEnable(false);
    setModalVisible(true);
  };

  const handleSendReply = () => {
    setModalVisible(!modalVisible);
    setEnable(true);
  };

  return (
    <View style={styles().container}>
      <TouchableOpacity
        onPress={() => setIsClicked(true)}
        style={styles().showStory}>
        <Text style={styles().showStoryText}>Show Story</Text>
      </TouchableOpacity>
      {isClicked && (
        <View style={{flex: 1}}>
          <StoryContainer
            visible={true}
            enableProgress={enable}
            images={images.map(item => item.uri)}
            types={images.map(item => item.type)}
            duration={60}
            onComplete={() => setIsClicked(false)}
            barStyle={styles().storyBarStyle}
            containerStyle={styles().storyContainerStyle}
          />

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles().centeredView}>
              <View style={styles().modalView}>
                <TextInput
                  value={inpVal}
                  placeholder="type something ..."
                  placeholderTextColor={'#fff'}
                  onChangeText={e => setInpVal(e)}
                  style={styles().textInputStyle}
                />
                <Pressable style={styles().button} onPress={handleSendReply}>
                  <Image source={IMAGES.send} style={styles().sendImg} />
                </Pressable>
              </View>
            </View>
          </Modal>
          {!modalVisible && (
            <Pressable onPress={handleReply} style={styles().replyButton}>
              <Text style={styles().replyText}>Reply</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default StoryComp;
