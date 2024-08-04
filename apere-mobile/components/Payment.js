import { ScrollView, View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Payment = () => {
    const navigation = useNavigation();
    const [totalPrice, setTotalPrice] = useState(0);
    const basket = useSelector(state => state.basket);

    const goBack = () => {
        navigation.navigate('Checkout')
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, marginTop: 10, width: '100%', }}>
                        <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>Payment</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.checkoutContainer}>
                            <View style={styles.orderIdContainer}>
                                <Text>Order #1268381</Text>
                            </View>
                            <View style={styles.unitContainer}>
                                <View style={styles.unit}>
                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <View style={{ flexDirection: 'row', gap: 10 }}>
                                            <Image source={require('../assets/cartIcon.png')} />
                                            <View>
                                                <Text style={{ fontSize: 12 }}>{basket.length} Items</Text>
                                                <Text style={{ fontSize: 8, color: '#626262' }}>{selectedProducts.map(product => product.name).join(', ')}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/editIcon.png')} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.unit}>
                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <View style={{ flexDirection: 'row', gap: 10 }}>
                                            <Image source={require('../assets/locoIcon.png')} />
                                            <View>
                                                <Text style={{ fontSize: 12 }}>Delivery Address</Text>
                                                <Text style={{ fontSize: 8, color: '#626262' }}>Fadeyi, Lagos</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/editIcon.png')} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.unit}>
                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <View style={{ flexDirection: 'row', gap: 10 }}>
                                            <Image source={require('../assets/Instruct.png')} />
                                            <View>
                                                <Text style={{ fontSize: 12 }}>Delivery Instructions</Text>
                                                <Text style={{ fontSize: 8, color: '#626262' }}>My house is just direct...</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/editIcon.png')} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.unit}>
                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <View style={{ flexDirection: 'row', gap: 10 }}>
                                            <Image source={require('../assets/tock.png')} />
                                            <View>
                                                <Text style={{ fontSize: 12 }}>Delivery Date & Time</Text>
                                                <Text style={{ fontSize: 8, color: '#626262' }}>
                                                    {deliveryDate && deliveryTime ? formatDeliveryDateTime(deliveryDate, deliveryTime) : 'Select delivery date & time'}
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/editIcon.png')} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text>Price:</Text>
                                    <Text style={{ fontSize: 16, color: '#353535' }}>N{totalPrice.toFixed(2)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    header: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        height: 78,
        width: '100%',
        backgroundColor: "#C3FBAB",
    },
    mainContainer: {
        margin: 10,
        flex: 1,
        backgroundColor: 'white',
    },
    checkoutContainer: {
        height: 352,
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        position: 'relative',
    },
    discountContainer: {
        marginTop: 20,
        height: 118,
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        position: 'relative',
    },
    orderIdContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
    },
    unitContainer: {
        padding: 10,
        width: '100%',
        gap: 7,
        backgroundColor: '#Fff',
        borderRadius: 10,
    },
    unit: {
        height: 60,
        paddingVertical: 7,
        borderWidth: 1,
        borderRadius: 10,
    }

});
