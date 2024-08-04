import { ScrollView, View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Checkout = ({ route }) => {
    const navigation = useNavigation();
    const [totalPrice, setTotalPrice] = useState(0);
    const basket = useSelector(state => state.basket);
    const { selectedProducts = [], deliveryDate, deliveryTime } = route.params || {};

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

    const calculateTotalWithDeliveryFee = () => {
        const deliveryFee = 1200; // Assuming delivery fee is N1200
        return totalPrice + deliveryFee;
    };

    const goBack = () => {
        const { selectedProducts, setSelectedProducts } = route.params;
        navigation.navigate('Cart', { selectedProducts, setSelectedProducts });
    };


    const formatDeliveryDateTime = (dateString, timeString) => {
        // Convert dateString to Date object
        const date = new Date(dateString);
        // Extract day of the week
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[date.getDay()];
    
        // Extract day of the month with proper suffix
        const dayOfMonth = date.getDate();
        const suffix = dayOfMonth % 10 === 1 && dayOfMonth !== 11 ? 'st' : (dayOfMonth % 10 === 2 && dayOfMonth !== 12 ? 'nd' : (dayOfMonth % 10 === 3 && dayOfMonth !== 13 ? 'rd' : 'th'));
    
        // Extract month
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = months[date.getMonth()];
    
        // Combine all parts to form the desired format
        const formattedDate = `${dayOfWeek}, ${dayOfMonth}${suffix} of ${month}, ${timeString}`;
    
        return formattedDate;
    };

    const goToPayment = () =>{
        navigation.navigate('Payment')
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, marginTop: 10, width: '100%', }}>
                        <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
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


                    <View style={styles.discountContainer}>
                        <View style={{ flexDirection: 'row', padding: 10, gap: 5 }}>
                            <Image source={require('../assets/widg.png')} />
                            <Text style={{ fontSize: 16, marginTop: 4 }}>Apply discount code</Text>
                        </View>
                        <View>
                            <TextInput placeholder='Enter a discount code' style={{ borderWidth: 1, borderRadius: 5, padding: 10, margin: 10 }} />
                        </View>
                    </View>
                    <Text style={{ fontSize: 10, textDecorationLine: 'underline', marginTop: 5 }}>Make this order a Shopping list?</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: 'grey' }}>Price</Text>
                        <Text style={{ fontSize: 16, color: 'grey' }}>N{totalPrice.toFixed(2)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: 'grey' }}>Delivery Fee</Text>
                        <Text style={{ fontSize: 16, color: 'grey' }}>N1,200.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#38B000', fontSize: 16, fontWeight: 'bold' }}>Total:</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>N{calculateTotalWithDeliveryFee().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity onPress={goToPayment} style={{ backgroundColor: 'transparent', padding: 10, borderRadius: 30, borderWidth: 0.7, borderColor: 'grey', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                        <Text style={{ color: '#000', fontSize: 16 }}>Proceed to Payment</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

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

export default Checkout;
