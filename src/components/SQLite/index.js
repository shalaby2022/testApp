import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {deleteUserFromDB, getAllUsersFromDB, getUserFromDB} from './SQlite';

const SQLiteComp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsersFromDB(setUsers);
    getUserFromDB(setName, setEmail);
  }, [users]);

  return (
    <View style={styles().container}>
      <Text style={{paddingStart: 10}}>Welcome - {name}</Text>
      {users &&
        users.map(user => (
          <TouchableOpacity
            key={user.id}
            style={itemstyles().itemContainer}
            onPress={() => navigation.navigate('UserInfo', {user})}>
            <View>
              <Text>
                {user.Email} - {user.Name}
              </Text>
            </View>
            <TouchableOpacity
              style={itemstyles().btnWrapper}
              onPress={() => deleteUserFromDB(user.id)}>
              <Text style={itemstyles().btnText}>Remove</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default SQLiteComp;

const itemstyles = () =>
  StyleSheet.create({
    itemContainer: {
      padding: 10,
      backgroundColor: '#0f0',
      marginTop: 10,
      alignSelf: 'center',
      width: '97%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    btnWrapper: {
      backgroundColor: '#a00',
      padding: 10,
      borderRadius: 10,
    },
    btnText: {
      color: '#fff',
      fontWeight: '600',
    },
  });
