import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {deleteProductFromDB, getAllProductsFromDB} from '../SQlite';
import {IMAGES} from '../../../Constants/Images';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

const SqlProducts = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsFromDB(setProducts);
  }, [products]);

  const ShowIOSNotification = (title, body) => {
    PushNotificationIOS.addNotificationRequest({
      id: 'channel',
      title,
      body,
    });
  };

  const ShowAndroidNotification = (title, message) => {
    PushNotification.localNotification({
      channelId: 'channel',
      title,
      message,
      largeIconUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    });
  };

  return (
    <View style={itemstyles().container}>
      <Text style={itemstyles().header}>Products</Text>
      <ScrollView style={{flex: 1}}>
        {products &&
          products.map(product => (
            <TouchableOpacity
              key={product.id}
              style={itemstyles().itemContainer}
              onPress={() =>
                Platform.OS == 'ios'
                  ? ShowIOSNotification(
                      'testApp Notification',
                      product.category,
                    )
                  : Platform.OS == 'android'
                  ? ShowAndroidNotification(
                      'testApp Notification',
                      product.category,
                    )
                  : console.log('first')
              }>
              <View>
                <Text style={itemstyles().info}>Name: {product.name}</Text>
                <Text style={itemstyles().info}>Price: {product.price}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={itemstyles().info}>Color:</Text>
                  <View style={itemstyles().colorView(product.color)} />
                </View>
                <Text style={itemstyles().info}>
                  Category: {product.category}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={[itemstyles().btnWrapper, {borderColor: '#0a0'}]}
                  onPress={() => navigation.navigate('EditProduct', {product})}>
                  <Image
                    source={IMAGES.edit}
                    style={[itemstyles().img, {tintColor: '#0a0'}]}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={itemstyles().btnWrapper}
                  onPress={() => deleteProductFromDB(product.sku)}>
                  <Image source={IMAGES.delete} style={itemstyles().img} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddProduct')}
        style={itemstyles().addBtnWrapper}>
        <Text style={itemstyles().addBtnText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SqlProducts;

const itemstyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      color: '#eee',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingStart: 12,
      paddingVertical: 12,
      color: '#222',
    },
    info: {
      fontWeight: '600',
      paddingTop: 3,
      color: '#333',
    },
    img: {
      width: 22,
      height: 22,
    },
    colorView: color => ({
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: color,
      marginStart: 10,
    }),
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
