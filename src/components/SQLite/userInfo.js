import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {UpdateUserDB} from './SQlite';

const UserInfo = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState();
  const nav = navigation;

  useEffect(() => {
    let params = route?.params?.user;
    if (Object.keys(params).length > 0) {
      setName(params.Name);
      setEmail(params.Email);
      setId(params.id);
    }
  }, []);

  return (
    <View style={styles().container}>
      <ImageBackground
        source={require('../../assets/iris-10.jpg')}
        resizeMode="cover"
        style={styles().image}
      />
      <View style={styles().wrapper}>
        <View style={styles().headerWrapper}>
          <Text style={styles().signText}>Update</Text>
        </View>

        <View style={styles().inputsWrapper}>
          <Text style={styles().infoHeader}>Name:</Text>
          <TextInput
            style={styles().input}
            value={name}
            onChangeText={e => setName(e)}
          />
        </View>

        <View style={styles().inputsWrapper}>
          <Text style={styles().infoHeader}>Email:</Text>
          <TextInput
            style={styles().input}
            value={email}
            onChangeText={e => setEmail(e)}
          />
        </View>

        <TouchableOpacity
          style={styles().BtnWrapper}
          onPress={() => UpdateUserDB(name, email, id, nav)}>
          <Text style={styles().btnText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 7,
      backgroundColor: '#fff',
    },
    image: {
      height: 330,
      justifyContent: 'center',
    },
    wrapper: {
      width: '100%',
      height: '100%',
      backgroundColor: '#eee',
      borderTopRightRadius: 45,
      borderTopLeftRadius: 45,
      position: 'absolute',
      top: 250,
    },
    headerWrapper: {
      alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: 15,
    },
    signText: {
      color: '#03f',
      fontSize: 50,
      fontWeight: 'bold',
    },
    inputsWrapper: {
      width: '100%',
      marginBottom: 8,
    },
    infoHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingVertical: 10,
      color: '#333',
    },
    input: {
      height: 45,
      borderRadius: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      width: '90%',
      alignSelf: 'center',
      paddingHorizontal: 10,
    },
    BtnWrapper: {
      width: '40%',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 8,
      paddingVertical: 12,
      borderRadius: 12,
      backgroundColor: 'blue',
    },
    btnText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    registerBtnText: {
      textDecorationLine: 'underline',
      color: '#00f',
    },
    NoAccountText: {
      alignSelf: 'center',
      alignItems: 'baseline',
      flexDirection: 'row',
    },
  });
