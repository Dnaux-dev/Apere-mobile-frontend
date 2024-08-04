import React, {useState} from 'react';
import { SafeAreaView, FlatList, Text, Pressable, Image, View, StyleSheet } from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons';
import DropDown from './DropDown';



const AllProducts = () => {
  const data = [
    { name: 'Rice', price: 'N700.00', image: require('../assets/rice.png') },
    { name: 'Beans', price: 'N450.00', image: require('../assets/beans.png') },
    { name: 'Garri', price: 'N1000.00', image: require('../assets/garri.png') },
    { name: 'Spaghetti', price: 'N500.00', image: require('../assets/spag.png') },
    { name: 'Gino Thyme', price: 'N50.00', image: require('../assets/Thyme.png') },
    { name: 'Gino Curry', price: 'N50.00', image: require('../assets/Curry.png') },
    { name: 'Ground Pepper', price: 'N350.00', image: require('../assets/groundpepper.png') },
    { name: 'CrayFish', price: 'N300.00', image: require('../assets/crayfish.png') },
    { name: 'Gino Tomato', price: 'N100.00', image: require('../assets/tomatopaste.png') },
    { name: 'Indomie Noodles', price: 'N120.00', image: require('../assets/indomie.png') },
    { name: 'Palm Oil', price: 'N1000.00', image: require('../assets/palm-oil.png') },
    { name: 'Veg.Oil', price: 'N1100.00', image: require('../assets/oil.png') },
  ];

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    const results = data.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(results);
  };


  const renderItem = ({ item }) => (
    <Pressable style={styles.productContainer}>
      <Feather name="plus-circle" style={styles.plusIcon} size={24} color="#38B000" />
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <DropDown />
        <Fontisto
          name="shopping-basket"
          size={17}
          color="#fff"
          backgroundColor="#38B000"
          style={styles.shoppingBasketIcon}
        />
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>All Products</Text>
     {/* <SearchProduct onSearch={handleSearch} /> */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    margin: 15,
  },
  listContainer: {
    paddingLeft: 12,
  },
  productContainer: {
    width: 160,
    height: 250,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 10,
    margin: 5,
  },
  plusIcon: {
    marginLeft: 'auto',
  },
  productImage: {
    width: 80,
    height: 80,
    marginTop: -10,
  },
  productDetails: {
    alignItems: 'center',
    gap: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
  },
  productPrice: {
    color: '#38B000',
    fontSize: 16,
    fontWeight: '700',
  },
  shoppingBasketIcon: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 50,
  },
});

export default AllProducts;
