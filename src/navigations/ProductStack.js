import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SQLiteComp from '../components/SQLite/User';
import EditUser from '../components/SQLite/User/EditUser';
import SqlProducts from '../components/SQLite/Product';
import AddProduct from '../components/SQLite/Product/AddProduct';
import EditProduct from '../components/SQLite/Product/EditProduct';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsStack"
        component={SqlProducts}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="EditProduct" component={EditProduct} />
    </Stack.Navigator>
  );
};

export default ProductStack;
