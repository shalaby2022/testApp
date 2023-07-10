import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UpdateProductDB} from '../SQlite';

const EditProduct = ({route, navigation}) => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    let params = route?.params?.product;
    if (Object.keys(params).length > 0) {
      setColor(params.color);
      setName(params.name);
      setPrice(params.price.toString());
      setSku(params.sku);
      setCategory(params.category);
    }
  }, []);

  return (
    <View style={styles().container}>
      <View style={styles().wrapper}>
        <View style={styles().headerWrapper}>
          <Text style={styles().signText}>Edit Product</Text>
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
              UpdateProductDB(color, name, price, category, sku, navigation)
            }>
            <Text style={styles().btnText}>Edit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProduct;

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
