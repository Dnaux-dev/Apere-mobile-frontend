import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DropDown from './DropDown';
import ProductModal from '../components/Modals/ProductModal'; // Import ProductModal component

const ProductList = () => {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  const data = [
    { id: '1', name: 'Tomato', price: 'N2500 - N30000', image: require('../assets/tomatoes.png'), desc:'Experience the epitome of freshness with our succulent tomatoes. Handpicked at peak ripeness, these vibrant gems boast unparalleled flavor and essential nutrients. Whether sliced, diced, or simmered, they add a burst of tangy sweetness to any dish. Sourced sustainably.' },
    { id: '2', name: 'Palm Oil', price: 'N2500 - N60000', image: require('../assets/pam-oil.png'), desc:'Experience the epitome of freshness with our succulent tomatoes. Handpicked at peak ripeness, these vibrant gems boast unparalleled flavor and essential nutrients. Whether sliced, diced, or simmered, they add a burst of tangy sweetness to any dish. Sourced sustainably.' },
    { id: '3', name: 'Garri', price: 'N2500 - N60000', image: require('../assets/garri-paint.png'), desc:'Experience the epitome of freshness with our succulent tomatoes. Handpicked at peak ripeness, these vibrant gems boast unparalleled flavor and essential nutrients. Whether sliced, diced, or simmered, they add a burst of tangy sweetness to any dish. Sourced sustainably.' },
    { id: '4', name: 'Tubers', price: 'N2500 - N60000', image: require('../assets/tubers.png'), desc:'Experience the epitome of freshness with our succulent tomatoes. Handpicked at peak ripeness, these vibrant gems boast unparalleled flavor and essential nutrients. Whether sliced, diced, or simmered, they add a burst of tangy sweetness to any dish. Sourced sustainably.' },
  ];

  const renderButton = () => (
    <Pressable style={styles.addToBasketButton}>
      <Text style={styles.addToBasketButtonText}>Add to basket</Text>
    </Pressable>
  );

  const openModal = (item) => {
    setSelectedProduct(item); // Set the selected product
    setModalVisible(true); // Show the modal
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.productContainer} onPress={() => openModal(item)}>
      <View style={{backgroundColor: '#F3F3F3', width: 86, height: 86, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
        <Image source={item.image} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        {renderButton()}
      </View>
    </Pressable>
  );

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      {selectedProduct && ( // Conditionally render ProductModal only if selectedProduct is not null
        <ProductModal
          isVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
          product={selectedProduct}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    gap: 8,
  },
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 104,
    height: 154,
    borderRadius: 15,
    borderColor: '#c2c2c2',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    padding: 5,
    elevation: 2,
  },
  addToBasketButton: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#c2c2c2',
    paddingHorizontal: 8,
    width: 84,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToBasketButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 7
  },
  productImage: {
    width: 78,
    height: 52,
    marginTop: -10,
  },
  productDetails: {
    alignItems: 'center',
    gap: 5,
  },
  productName: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 3
  },
  productPrice: {
    color: '#000',
    fontSize: 6,
    fontWeight: '500',
  },
  shoppingBasketIcon: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 50,
  },
});

export default ProductList;
