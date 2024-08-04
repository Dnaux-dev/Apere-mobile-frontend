import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToBasket } from '../../actions';

const ProductModal = ({ isVisible, closeModal, product, productDetails }) => {
    const [isHalfActive, setIsHalfActive] = useState(false);
    const [isOneActive, setIsOneActive] = useState(false);
    const [quantityHalf, setQuantityHalf] = useState(1);
    const [quantityOne, setQuantityOne] = useState(1);
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    const dispatch = useDispatch(); // Get dispatch function from Redux

    // Your other code...

    const addToBasketHandler = () => {
        if (!isHalfActive && !isOneActive) {
            setError("Please select your preferred option.");
            return;
        }
    
        const selectedOptionName = isHalfActive ? "Half" : "One";
        const selectedQuantity = selectedOptionName === "Half" ? quantityHalf : quantityOne;
        const selectedPrice = selectedOptionName === "Half" ? calculatePrice(1700, quantityHalf) : calculatePrice(3500, quantityOne);
    
        const selectedProduct = {
            ...product, // Include all existing product information
            selectedOptionName: selectedOptionName,
            quantity: selectedQuantity,
            price: selectedPrice // Include the price of the selected option
        };
    
        dispatch(addToBasket(selectedProduct));
        closeModal();
    };
    
    

    const handleHalfPress = () => {
        setIsHalfActive(!isHalfActive);
        setIsOneActive(false);
        setError(null); // Clear error message when an option is selected
    };

    const handleOnePress = () => {
        setIsOneActive(!isOneActive);
        setIsHalfActive(false);
        setError(null); // Clear error message when an option is selected
    };

    const handleIncrementOne = () => {
        setQuantityOne(quantityOne + 1);
    };

    const handleIncrementHalf = () => {
        setQuantityHalf(quantityHalf + 1);
    }

    const handleDecrementOne = () => {
        if (quantityOne > 1) {
            setQuantityOne(quantityOne - 1);
        }
    };
    const handleDecrementHalf = () => {
        if (quantityHalf > 1) {
            setQuantityHalf(quantityHalf - 1);
        }
    };

    const calculatePrice = (price, quantity) => {
        return price * quantity;
    };

    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.modalContent}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 350, marginTop: 10 }}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Entypo name="share" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: 225.49, height: 215, backgroundColor: '#F3F3F3', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                            <Image source={product.image} style={styles.productImage} />
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                            <Text>{product.desc}</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <View style={{ height: 400, width: '100%' }}>
                                <Text style={styles.selectOptionText}>Select your preferred option:</Text>
                                <TouchableOpacity style={[styles.additionalContainer, isHalfActive && styles.halfBuyButton]} onPress={handleHalfPress}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Half</Text>
                                            <Text style={{ fontSize: 12, marginTop: 3, marginLeft: 3 }}>(1/2 Paint Bucket)</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>N{calculatePrice(1700, quantityHalf).toFixed(2)}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                {isHalfActive && (
                                                    <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 5, marginLeft: 10, paddingHorizontal: 5, marginTop: 4 }}>
                                                        <TouchableOpacity style={{ padding: 5 }} onPress={handleDecrementHalf}>
                                                            <Text>-</Text>
                                                        </TouchableOpacity>
                                                        <View style={{ borderLeftWidth: 1, borderRightWidth: 1, borderColor: 'black' }}>
                                                            <Text style={{ padding: 5 }}>{quantityHalf}</Text>
                                                        </View>
                                                        <TouchableOpacity style={{ padding: 5 }} onPress={handleIncrementHalf}>
                                                            <Text>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.additionalContainer, isOneActive && styles.FullBuyButton]} onPress={handleOnePress}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>One</Text>
                                            <Text style={{ fontSize: 12, marginTop: 3, marginLeft: 3 }}>(1 Paint Bucket)</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>N{calculatePrice(3500, quantityOne).toFixed(2)}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                {isOneActive && (
                                                    <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 5, marginLeft: 10, paddingHorizontal: 5, marginTop: 4 }}>
                                                        <TouchableOpacity style={{ padding: 5 }} onPress={handleDecrementOne}>
                                                            <Text>-</Text>
                                                        </TouchableOpacity>
                                                        <View style={{ borderLeftWidth: 1, borderRightWidth: 1, borderColor: 'black' }}>
                                                            <Text style={{ padding: 5 }}>{quantityOne}</Text>
                                                        </View>
                                                        <TouchableOpacity style={{ padding: 5 }} onPress={handleIncrementOne}>
                                                            <Text>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.BasketButton}
                                    onPress={addToBasketHandler}
                                >
                                    <View style={styles.container}>
                                        <Text>Add to Basket</Text>
                                    </View>
                                </TouchableOpacity>
                                {error && (
                                    <View style={styles.errorContainer}>
                                        <Text style={styles.errorText}>{error}</Text>
                                    </View>
                                )}

                            </View>
                        </View>

                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );

};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalContent: {
        flexGrow: 1,
        height: '90%',
        backgroundColor: '#fff',
        marginTop: 30,
        paddingTop: 50,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        borderWidth: 0.5,
        borderColor: '#fff',
        alignItems: 'center',
    },
    productImage: {
        width: 204.51,
        height: 136.34,
        marginBottom: 10,
    },
    productName: {
        fontSize: 24,
        color: '#595959',
        marginLeft: 10,
        marginTop: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        float: 'right',
    },
    iconButton: {
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%'
    },
    buyButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 10,
        // width: '100%',
        height: 73,
        borderWidth: 1,
    },
    activeBuyButton: {
        backgroundColor: '#E0FFD2',
    },
    halfBuyButton: {
        backgroundColor: '#E0FFD2',
        height: 73,
    },
    FullBuyButton: {
        backgroundColor: '#E0FFD2',
        height: 73,
    },
    buttonText: {
        color: '#353535',
        fontWeight: 'bold',
        fontSize: 24,
    },
    container: {
        flex: 1,
    },
    addToBasket: {
        flex: 1,
    },
    BasketButton: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 30,
        borderColor: '#797979',
        width: '100%',
        height: 38,
        borderWidth: 0.5,
        marginBottom: 10,
        marginTop: 30,
    },
    selectOptionText: {
        color: 'black',
        fontSize: 10,
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    additionalContainer: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '100%',
        height: 50,
        borderWidth: 1,
        marginTop: 10
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityText: {
        fontSize: 20,
        marginHorizontal: 10,
    },

    errorContainer: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'center',
    },
    errorText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ProductModal;

















