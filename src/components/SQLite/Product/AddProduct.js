import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {insertProductToDB} from '../SQlite';

const AddProduct = ({navigation}) => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');

  return (
    <View style={styles().container}>
      <View style={styles().wrapper}>
        <View style={styles().headerWrapper}>
          <Text style={styles().signText}>Add Product</Text>
        </View>

        <ScrollView style={{flex: 1}}>
          <View style={styles().inputsWrapper}>
            <Text style={styles().infoHeader}>Color:</Text>
            <TextInput
              style={styles().input}
              value={color}
              onChangeText={e => setColor(e)}
            />
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
            <Text style={styles().infoHeader}>Price:</Text>
            <TextInput
              style={styles().input}
              value={price}
              onChangeText={e => setPrice(e)}
            />
          </View>

          <View style={styles().inputsWrapper}>
            <Text style={styles().infoHeader}>Sku:</Text>
            <TextInput
              style={styles().input}
              value={sku}
              onChangeText={e => setSku(e)}
            />
          </View>

          <View style={styles().inputsWrapper}>
            <Text style={styles().infoHeader}>Category:</Text>
            <TextInput
              style={styles().input}
              value={category}
              onChangeText={e => setCategory(e)}
            />
          </View>

          <TouchableOpacity
            style={styles().BtnWrapper}
            onPress={() =>
              insertProductToDB(color, name, price, sku, category, navigation)
            }>
            <Text style={styles().btnText}>Add</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddProduct;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 7,
      backgroundColor: '#fff',
    },
    wrapper: {
      flex: 1,
      width: '100%',
      backgroundColor: '#eee',
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
