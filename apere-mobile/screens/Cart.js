import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CheckoutModal from '../components/Modals/CheckoutModal';

const Cart = ({ route }) => {
    const { selectedProducts, setSelectedProducts } = route.params || { selectedProducts: [], setSelectedProducts: () => {} }; 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();
    const [totalPrice, setTotalPrice] = useState(0);
    const [updateKey, setUpdateKey] = useState(0); // State to trigger re-render

    const handleCheckout = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [selectedProducts]);

    const calculateTotalPrice = () => {
        let total = 0;
        selectedProducts.forEach(product => {
            total += product.quantity * product.price;
        });
        setTotalPrice(total);
    };

    const goBack = () => {
        navigation.navigate('Home', { selectedProducts, setSelectedProducts });
    };
    
    const deleteProduct = (index) => {
        const updatedProducts = [...selectedProducts];
        updatedProducts.splice(index, 1);
        setSelectedProducts(updatedProducts);
    };

    const handleDecrement = (index) => {
        const updatedProducts = [...selectedProducts];
        if (updatedProducts[index].quantity > 0) {
            updatedProducts[index].quantity -= 1;
            if (updatedProducts[index].quantity === 1) {
                deleteProduct(index); 
            } else {
                setSelectedProducts(updatedProducts); 
                calculateTotalPrice(); 
                setUpdateKey(prevKey => prevKey + 1); 
            }
        }
    };

    const handleIncrement = (index) => {
        const updatedProducts = [...selectedProducts];
        updatedProducts[index].quantity += 1;
        setSelectedProducts(updatedProducts);
        calculateTotalPrice(); 
        setUpdateKey(prevKey => prevKey + 1); 
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#C3FBAB' barStyle='dark-content' />
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                    <Text style={{ marginLeft: 10, fontSize: 18 }}>Basket</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={[styles.listContainer]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Basket</Text>
                        <Text style={{ fontSize: 16, color: '#353535' }}>N{totalPrice.toFixed(2)}</Text>
                    </View>
                    <View style={{ height: 400 }}>
                        <FlatList
                            data={selectedProducts}
                            renderItem={({ item, index }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, borderWidth: 0.5, borderColor: '#000', borderRadius: 15, paddingHorizontal: 10, height: 90, paddingVertical: 5 }}>
                                    <View style={{ width: 90.19, height: 74, backgroundColor: '#F3F3F3', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                        <Image source={item.image} style={{ width: 75, height: 50, }} />
                                    </View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>{item.name}</Text>
                                            <Text> - </Text>
                                            <Text>{item.selectedOptionName ? item.selectedOptionName : ''} paint</Text>
                                        </View>
                                        {/* Calculate and display the price based on quantity */}
                                        <Text>N{(item.quantity * item.price).toFixed(2)}</Text>
                                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 5, marginLeft: 10, paddingHorizontal: 5, marginTop: 4 }}>
                                            <TouchableOpacity style={{ padding: 5 }} onPress={() => handleDecrement(index)}>
                                                <Text>-</Text>
                                            </TouchableOpacity>
                                            <View style={{ borderLeftWidth: 1, borderRightWidth: 1, borderColor: 'black' }}>
                                                <Text style={{ padding: 5 }}>{item.quantity}</Text>
                                            </View>
                                            <TouchableOpacity style={{ padding: 5 }} onPress={() => handleIncrement(index)}>
                                                <Text>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={updateKey} 
                            style={{ flex: 1 }}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginTop: 'auto', gap: 50, bottom: 30, borderTopColor: '#000', borderTopWidth: 0.5, width:'100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 16 }}>Price</Text>
                    <Text style={{ fontSize: 16 }}>N{totalPrice.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.createListButton} onPress={handleCheckout}>
                    <Text style={{ fontSize: 16 }}>Checkout</Text>
                </TouchableOpacity>
                <CheckoutModal isVisible={isModalVisible} closeModal={closeModal} />
            </View>
        </View>
    );
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 78,
        width: '100%',
        backgroundColor: '#C3FBAB',
    },
    listContainer: {
        padding: 15,
        margin: 20,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
    },
    createListButton: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        width: 333,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#D7D7D7'
    }
});
