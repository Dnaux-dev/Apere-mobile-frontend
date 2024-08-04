import React, { useState } from 'react';
import {FlatList, ScrollView, StatusBar, TouchableOpacity, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchProduct from '../../SearchProduct';
import CategoryList from '../../CategoryList';
import TabNavigator from '../../../navigation/TabNavigator'; // Import the TabNavigator component
import ProductModal from '../../Modals/ProductModal';

const CategoryDetail = ({ route }) => {
    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
    const [selectedProduct, setSelectedProduct] = useState(null);
    const data = [
        { id: '1', name: 'Tomato', price: 'N2500 - N30000', image: require('../../../assets/tomatoes.png') },
        { id: '2', name: 'Palm Oil', price: 'N2500 - N60000', image: require('../../../assets/pam-oil.png') },
        { id: '3', name: 'Garri', price: 'N2500 - N60000', image: require('../../../assets/garri-paint.png') },
        { id: '4', name: 'Tubers', price: 'N2500 - N60000', image: require('../../../assets/tubers.png') },
    ];

    const navigation = useNavigation();
   
    const { title } = route.params;

    const renderButton = () => (
        <TouchableOpacity style={styles.addToBasketButton}>
            <Text style={styles.addToBasketButtonText}>Add to basket</Text>
        </TouchableOpacity>
    );

    const openModal = (item) => {
        setSelectedProduct(item); // Set the selected product
        setModalVisible(true); // Show the modal
    };

    const removeCategoryItem = (id) => {
        // Implement the logic to remove the category item
        console.log(`Removing category item with id ${id}`);
      };
    

    const renderItem = ({ item }) => (
        <Pressable style={styles.productItem} onPress={() => openModal(item)}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.productImage} resizeMode="contain" />
            </View>
            <View style={styles.productDetails}>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                </View>
                {renderButton()}
            </View>
        </Pressable>
    );
    
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <SearchProduct style={styles.searchProduct} />
                    </View>
                    <View style={{ marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: '#D5D5D5', paddingBottom: 10 }}>
                        <CategoryList removeCategoryItem={removeCategoryItem} selectedCategory={title} />
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.productContainer}
                    />
                </View>
            </ScrollView>
    
            {/* Include the TabNavigator component */}
           
            {selectedProduct && ( // Conditionally render ProductModal only if selectedProduct is not null
                <ProductModal
                    isVisible={modalVisible}
                    closeModal={() => setModalVisible(false)}
                    product={selectedProduct}
                />
            )}
        </View>
    );
    
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 98,
        width: 393,
        backgroundColor: "#C3FBAB"
    },
    headerText: {
        marginLeft: 10,
        fontSize: 18
    },
    searchContainer: {
        marginTop: 10,
    },
    searchProduct: {
        width: '100%',
    },
    productContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        borderColor: '#F3F3F3',
        backgroundColor: '#FFF',
        padding: 5,
        elevation: 2, //
        borderRadius: 8
    },
    imageContainer: {
        marginRight: 10,
        backgroundColor: '#F3F3F3',
        width: 86,
        height: 82,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F3F3F3',
        borderWidth: 1,
        borderRadius: 8,
    },
    productImage: {
        width: 78,
        height: 52,
    },
    productDetails: {
        // flex: 1,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 11,
    },
    addToBasketButton: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        // paddingHorizontal: 10,
        marginLeft: 20,
        borderWidth: 0.5,
        width: 99.46,
        height: 27.6,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToBasketButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 8.92
    },
});

export default CategoryDetail;
