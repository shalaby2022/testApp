import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deleteUserFromDB, getAllUsersFromDB, getUserFromDB} from '../SQlite';
import {IMAGES} from '../../../Constants/Images';

const SqlUsers = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsersFromDB(setUsers);
    getUserFromDB(setName, setEmail);
  }, [users]);

  return (
    <View style={itemstyles().container}>
      <Text style={itemstyles().header}>Welcome - {name}</Text>

      <ScrollView style={{flex: 1}}>
        {users &&
          users.map(user => (
            <View key={user.id} style={itemstyles().itemContainer}>
              <View>
                <Text style={{fontWeight: '500', color: '#555'}}>
                  Email: {user.Email}
                </Text>
                <Text style={{fontWeight: '500', color: '#555'}}>
                  Name: {user.Name}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={[itemstyles().btnWrapper, {borderColor: '#0a0'}]}
                  onPress={() => navigation.navigate('EditUser', {user})}>
                  <Image
                    source={IMAGES.edit}
                    style={[itemstyles().img, {tintColor: '#0a0'}]}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={itemstyles().btnWrapper}
                  onPress={() => deleteUserFromDB(user.id)}>
                  <Image source={IMAGES.delete} style={itemstyles().img} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>

      <TouchableOpacity disabled={true} style={itemstyles().addBtnWrapper}>
        <Text style={itemstyles().addBtnText}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SqlUsers;

const itemstyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingStart: 12,
      paddingVertical: 12,
      color: '#333',
    },
    info: {
      fontWeight: '600',
      paddingTop: 3,
      color: '#333',
    },
    img: {width: 22, height: 22},
    itemContainer: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: '#fff',
      marginTop: 10,
      alignSelf: 'center',
      width: '94%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    btnWrapper: {
      borderColor: '#a00',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      marginStart: 10,
    },
    btnText: {
      color: '#fff',
      fontWeight: '600',
    },
    addBtnWrapper: {
      backgroundColor: '#33f',
      padding: 15,
      borderRadius: 10,
      width: '38%',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 15,
    },
    addBtnText: {
      fontWeight: '600',
      fontSize: 16,
      color: '#fff',
    },
  });
