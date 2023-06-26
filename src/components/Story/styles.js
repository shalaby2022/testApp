import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalView: {
      width: '100%',
      margin: 20,
      backgroundColor: 'rgba(100,100,100, 0.3)',
      borderRadius: 20,
      padding: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    replyButton: {
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      elevation: 2,
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 15,
    },
    replyText: {
      fontWeight: '700',
      color: '#fff',
      fontSize: 17,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    sendImg: {
      width: 20,
      height: 20,
      tintColor: '#fff',
    },
    textInputStyle: {
      borderWidth: 2,
      borderColor: '#fff',
      flex: 2,
      padding: 10,
      borderRadius: 15,
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
