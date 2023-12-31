import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {insertUserToDB} from '../SQLite/SQlite';
import {IMAGES} from '../../Constants/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = navigation;

  return (
    <View style={styles().container}>
      <ImageBackground
        source={IMAGES.iris10}
        resizeMode="cover"
        style={styles().image}
      />
      <View style={styles().wrapper}>
        <View style={styles().headerWrapper}>
          <Text style={styles().signText}>Register</Text>
        </View>

        <KeyboardAwareScrollView enableAutomaticScroll={true} style={{flex: 1}}>
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

          <View style={styles().inputsWrapper}>
            <Text style={styles().infoHeader}>Password:</Text>
            <TextInput
              style={styles().input}
              value={password}
              onChangeText={e => setPassword(e)}
            />
          </View>

          <TouchableOpacity
            style={styles().BtnWrapper}
            onPress={() => insertUserToDB(name, email, password, nav)}>
            <Text style={styles().btnText}>Register</Text>
          </TouchableOpacity>

          <View style={styles().NoAccountText}>
            <Text style={{fontSize: 12, color: '#333'}}>
              Already Have an account,{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles().registerBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 7,
      backgroundColor: '#eee',
    },
    image: {
      height: 270,
      justifyContent: 'center',
    },
    wrapper: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      borderTopRightRadius: 45,
      borderTopLeftRadius: 45,
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
      color: '#555',
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
