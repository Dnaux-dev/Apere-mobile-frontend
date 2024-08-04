import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LocationModal from '../components/Modals/LocationModal';

const DeliveryAddress = () => {
    const navigation = useNavigation();
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [addressError, setAddressError] = useState('');
    const [apartmentError, setApartmentError] = useState('');
    const [focusedAddress, setFocusedAddress] = useState(false);
    const [focusedApartment, setFocusedApartment] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true); // Set to true initially
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [modalError, setModalError] = useState('');

    useEffect(() => {
        // Fetch data or perform any other initialization logic here
    }, []);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handlePlaceSelect = (place) => {
        setSelectedPlace(place);
        setIsModalVisible(false);
        setModalError('');
    };

    const goBack = () => {
        if (navigation) {
            navigation.navigate('Verify'); // Navigate to the Verify screen
        } else {
            console.log("Navigation object is undefined");
        }
    };

    const handleAddressBlur = () => {
        setFocusedAddress(false);
    };

    const handleAddressFocus = () => {
        setFocusedAddress(true);
    };

    const handleApartmentBlur = () => {
        setFocusedApartment(false);
    };

    const handleApartmentFocus = () => {
        setFocusedApartment(true);
    }

    const handleRegister = () => {
        // Perform form validation
        const isAddressValid = validateAddress(address);
        const isApartmentValid = validateApartment(apartment);

        // Check if there are no errors
        if (isAddressValid && isApartmentValid && selectedPlace) {
            navigation.navigate('Create'); // Navigate to the Create Account screen
        }
    };


    const validateAddress = (address) => {
        if (!address.trim()) {
            setAddressError('Please enter your address.');
            return false;
        }
        setAddressError('');
        return true;
    };

    const validateApartment = (apartment) => {
        if (!apartment.trim()) {
            setApartmentError('Please enter your apartment.');
            return false;
        }
        setApartmentError('');
        return true;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, width: 393, backgroundColor: "#C3FBAB" }}>
                    <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row'}}>
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>Add Delivery Address</Text>
                    </TouchableOpacity>
                   
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginTop: 40 }}>
                    <TouchableOpacity onPress={toggleModal} style={styles.input}>
                        <Text style={{ marginRight: 10, fontSize: 16 }}>
                            {selectedPlace ? selectedPlace.name : 'Where are you located?'}
                        </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </TouchableOpacity>
                    <LocationModal isVisible={isModalVisible} closeModal={toggleModal} handlePlaceSelect={handlePlaceSelect} />
                    {modalError ? <Text style={styles.errorMessage}>{modalError}</Text> : null}
                    <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                        {focusedAddress && <Text style={[styles.label, styles.labelFocused]}>Address</Text>}
                        <TextInput
                            style={[styles.input, addressError ? styles.inputError : null]}
                            placeholder={!focusedAddress ? "Address" : ""}
                            value={address}
                            onChangeText={setAddress}
                            onBlur={handleAddressBlur}
                            onFocus={handleAddressFocus}
                        />
                        {addressError ? <Text style={styles.errorMessage}>{addressError}</Text> : null}
                    </View>
                    <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', marginBottom: apartmentError ? 20 : 0 }}>
                        {focusedApartment && <Text style={[styles.label, styles.labelFocused]}>Apartment Number</Text>}
                        <TextInput
                            style={[styles.input, apartmentError ? styles.inputError : null]}
                            placeholder={!focusedApartment ? "Apartment Number" : ""}
                            value={apartment}
                            onChangeText={setApartment}
                            onBlur={handleApartmentBlur}
                            onFocus={handleApartmentFocus}
                        />
                        {apartmentError ? <Text style={[styles.errorMessage, styles.errorMessage2]}>{apartmentError}</Text> : null}
                    </View>

                    <TouchableOpacity onPress={handleRegister} style={{ marginTop: apartmentError ? 20 : 'auto', marginBottom: 20, backgroundColor: '#38B000', width: 322, height: 62, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} >
                        <Text style={{ fontSize: 20, color: '#fff' }}>Continue</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    label: {
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        zIndex: 1,
        transitionDuration: '0.3s',
        transform: [{ translateY: 20 }],
        position: 'absolute',
        top: -20,
        left: 20
    },
    labelFocused: {
        transform: [{ translateY: 0 }],
        fontSize: 12,
        top: 0,
    },
    inputError: {
        borderColor: 'red',
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'left',
        width: '100%'
    },

    errorMessage2: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'left',
        width: '100%',
        marginBottom: 30
    },
    input: {
        marginVertical: 10,
        width: '100%',
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default DeliveryAddress;
