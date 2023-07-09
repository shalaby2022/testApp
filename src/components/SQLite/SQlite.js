import {Alert} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

//****************** Users DATABASE ******************//
// create User Table
export const initalUserDataBase = async () => {
  const db = await SQLite.openDatabase('Users.db');
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, Name VARCHAR, Email VARCHAR)`,
      [],
      result => {
        console.log('Users Table Initalized successfully');
      },
      error => {
        console.log('Create table error', error.message);
      },
    );
  });

  return db;
};

// insert User to record
export const insertUserToDB = async (name, email, password, navigation) => {
  const db = await SQLite.openDatabase('Users.db');
  if (name.length == 0 || email.length == 0 || password.length == 0) {
    Alert.alert(`All fields are required!`);
  } else {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'INSERT INTO Users (Name, Email) VALUES (?, ?)',
          [name, email],
          result => {
            Alert.alert('Success', 'User created successfully.');
          },
          error => {
            console.log('Create user error', `"${error.message}"`);
          },
        );
      });
      navigation?.navigate('SQLite');
    } catch (er) {
      console.log(er.message);
    }
  }
};

// update User record
export const UpdateUserDB = async (name, email, id, navigation) => {
  console.log(name, email, id);
  try {
    const db = await SQLite.openDatabase('Users.db');
    await db.transaction(async tx => {
      await tx.executeSql(
        'UPDATE Users SET Name = ?, Email = ? WHERE id = ?',
        [name, email, id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert('User updated successfully');
            navigation.goBack();
          }
        },
        er => {
          console.log(er.message);
          Alert.alert('Updating Failed');
        },
      );
    });
  } catch (er) {
    console.log(er);
  }
};

// delete user record
export const deleteUserFromDB = async id => {
  try {
    const db = await SQLite.openDatabase('Users.db');
    await db.transaction(async tx => {
      await tx.executeSql(
        'DELETE FROM Users WHERE id = ?',
        [id],
        (tx, resultSet) => {
          Alert.alert('User deleted successfully');
        },
        error => {
          console.log('Delete user error', error);
        },
      );
    });
  } catch (er) {
    console.log(`Error ${er.message}`);
  }
};

// fetch specific user
export const getUserFromDB = async (setName, setEmail) => {
  try {
    const db = await SQLite.openDatabase('Users.db');
    await db.transaction(async tx => {
      await tx.executeSql('SELECT * FROM Users', [], (tx, resultSet) => {
        var length = resultSet.rows.length;
        if (length > 0) {
          let name = resultSet.rows.item(0).Name;
          let email = resultSet.rows.item(0).Email;
          setName(name);
          setEmail(email);
        }
      });
    });
  } catch (er) {
    console.log(`Error ${er.message}`);
  }
};

// fetch All users
export const getAllUsersFromDB = async setUsers => {
  try {
    const db = await SQLite.openDatabase('Users.db');
    await db.transaction(async tx => {
      await tx.executeSql('SELECT * FROM Users', [], (tx, resultSet) => {
        var length = resultSet.rows.length;
        let users = [];
        if (length > 0) {
          for (var i = 0; i < length; i++) {
            users.push(resultSet.rows.item(i));
          }
          setUsers(users);
        }
      });
    });
  } catch (er) {
    // console.log(er);
    console.log(`Error ${er.message}`);
  }
};

//**************** Products DATABASE   ****************//
export const initalProductsDataBase = async () => {
  const db = await SQLite.openDatabase('Products.db');
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Products (id INTEGER PRIMARY KEY AUTOINCREMENT, color VARCHAR(20), name VARCHAR,price DECIMAL,sku VARCHAR)`,
      [],
      result => {
        console.log('Products Table Initalized successfully');
      },
      error => {
        console.log('Create table error', error);
      },
    );
  });
};

// insert product to record
export const insertProductToDB = async (
  color,
  name,
  price,
  sku,
  navigation,
) => {
  const db = await SQLite.openDatabase('Products.db');
  if (
    color.length == 0 ||
    name.length == 0 ||
    price.length == 0 ||
    sku.length == 0
  ) {
    Alert.alert(`All fields are required!`);
  } else {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'INSERT INTO Products (sku, name, color, price) VALUES (?, ?)',
          [sku, name, color, price],
          result => {
            Alert.alert('Product created successfully.');
          },
          error => {
            console.log('Create product error', `"${error.message}"`);
          },
        );
      });
      navigation?.navigate('SQLite');
    } catch (er) {
      console.log(er);
    }
  }
};

// update product record
export const UpdateProductDB = async (name, color, price, sku) => {
  try {
    const db = await SQLite.openDatabase('Products.db');
    await db.transaction(tx => {
      tx.executeSql(
        'UPDATE Users set name=?, color=?, price=?  where sku=?',
        [name, color, price, sku],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert('Product updated successfully');
          }
          Alert.alert('Updating Failed');
        },
      );
    });
  } catch (er) {
    console.log(er);
  }
};

// delete product record
export const deleteProductFromDB = async sku => {
  try {
    const db = await SQLite.openDatabase('Products.db');
    await db.transaction(async tx => {
      await tx.executeSql(
        'DELETE FROM Products WHERE sku = ?',
        [sku],
        (tx, resultSet) => {
          Alert.alert('Product deleted successfully');
        },
        error => {
          console.log('Delete product error', error);
        },
      );
    });
  } catch (er) {
    console.log(`Error ${er.message}`);
  }
};

// fetch specific product
export const getProductFromDB = async setProcut => {
  try {
    const db = await SQLite.openDatabase('Products.db');
    await db.transaction(async tx => {
      await tx.executeSql('SELECT * FROM Products', [], (tx, resultSet) => {
        var length = resultSet.rows.length;
        if (length > 0) {
          let product = resultSet.rows.item(0);
          console.log({name, email});
          setProcut(product);
        }
      });
    });
  } catch (er) {
    console.log(`Error ${er.message}`);
  }
};

// fetch All users
export const getAllProductsFromDB = async setProducts => {
  try {
    const db = await SQLite.openDatabase('Products.db');
    await db.transaction(async tx => {
      await tx.executeSql('SELECT * FROM Products', [], (tx, resultSet) => {
        var length = resultSet.rows.length;
        let products = [];
        if (length > 0) {
          for (var i = 0; i < length; i++) {
            products.push(resultSet.rows.item(i));
          }
          setProducts(products);
        }
      });
    });
  } catch (er) {
    // console.log(er);
    console.log(`Error ${er.message}`);
  }
};
