import React, { useState } from "react";
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, StatusBar, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker from Expo
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');

    const [focusedFirstName, setFocusedFirstName] = useState(false);
    const [focusedLastName, setFocusedLastName] = useState(false);
    const [focusedPhoneNumber, setFocusedPhoneNumber] = useState(false);
    const [focusedEmail, setFocusedEmail] = useState(false);

    const navigation = useNavigation();
    const goBack = () => {
        navigation.navigate('Profile')
    }

    const [profileImage, setProfileImage] = useState(require('../../assets/profileImage.png'));
    const selectImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('Permission required', 'You need to enable access to your photo library to select a profile picture.');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (!pickerResult.canceled) {
            const selectedImage = pickerResult.assets[0];
            console.log(selectedImage.uri);
            setProfileImage({ uri: selectedImage.uri });
        }
    };

    const validateEmail = (email) => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validateFirstName = (firstName) => {
        if (!firstName.trim()) {
            setFirstNameError('Please enter your first name.');
            return false;
        }
        setFirstNameError('');
        return true;
    };

    const validateLastName = (lastName) => {
        if (!lastName.trim()) {
            setLastNameError('Please enter your last name.');
            return false
        }
        setLastNameError('');
        return true;
    };

    const validatePhoneNumber = (phoneNumber) => {
        const strippedPhoneNumber = phoneNumber.replace(/\D/g, '');
        if (strippedPhoneNumber.length !== 11) {
            setPhoneNumberError('Please enter a valid 11-digit phone number.');
            return false;
        }
        setPhoneNumberError('');
        return true;
    };

    const handleEmailBlur = () => {
        setFocusedEmail(false);
    }

    const handleEmailFocus = () => {
        setFocusedEmail(true);
    }

    const handleFirstNameBlur = () => {
        setFocusedFirstName(false);
    };

    const handleFirstNameFocus = () => {
        setFocusedFirstName(true);
    };

    const handleLastNameBlur = () => {
        setFocusedLastName(false);
    };

    const handleLastNameFocus = () => {
        setFocusedLastName(true);
    };

    const handlePhoneNumberBlur = () => {
        setFocusedPhoneNumber(false);
    };

    const handlePhoneNumberFocus = () => {
        setFocusedPhoneNumber(true);
    };

    const handleUpdateProfile = () => {
        const isFirstNameValid = validateFirstName(firstName);
        const isLastNameValid = validateLastName(lastName);
        const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
        const isEmailValid = validateEmail(email);

        if (!isFirstNameValid || !isLastNameValid || !isPhoneNumberValid || !isEmailValid) {
            return;
        }

        // Proceed with update profile logic
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Phone Number:', phoneNumber);
        console.log('Email:', email);
    }






    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, width: '100%', backgroundColor: '#C3FBAB' }}>
                <TouchableOpacity onPress={goBack}>
                    <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, fontSize: 18 }}>Edit Profile</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ margin: 10, gap: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 }}>
                        <Image
                            source={profileImage}
                            style={{ width: 100, height: 100, borderRadius: 75, position: 'relative' }}
                        />
                        <TouchableOpacity onPress={selectImage} style={styles.editIcon}>
                            <Image
                                source={require('../../assets/editImageIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 40 }}>
                        <View style={{width: '100%', marginBottom: 70}}>
                            <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                                {focusedFirstName && <Text style={[styles.label, styles.labelFocused]}>First Name</Text>}
                                <TextInput
                                    style={[styles.input, firstNameError ? styles.inputError : null]}
                                    placeholder={!focusedFirstName ? "First Name" : ""}
                                    value={firstName}
                                    onChangeText={setFirstName}

                                    autoCapitalize="none"
                                    onBlur={handleFirstNameBlur}
                                    onFocus={handleFirstNameFocus}
                                />
                                {firstNameError ? <Text style={styles.errorMessage}>{firstNameError}</Text> : null}
                            </View>
                            <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                                {focusedLastName && <Text style={[styles.label, styles.labelFocused]}>Last Name</Text>}
                                <TextInput
                                    style={[styles.input, lastNameError ? styles.inputError : null]}
                                    placeholder={!focusedLastName ? "Last Name" : ""}
                                    value={lastName}
                                    onChangeText={setLastName}

                                    autoCapitalize="none"
                                    onBlur={handleLastNameBlur}
                                    onFocus={handleLastNameFocus}
                                />
                                {lastNameError ? <Text style={styles.errorMessage}>{lastNameError}</Text> : null}
                            </View>
                            <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                                {focusedPhoneNumber && <Text style={[styles.label, styles.labelFocused]}>Phone Number</Text>}
                                <TextInput
                                    style={[styles.input, lastNameError ? styles.inputError : null]}
                                    placeholder={!focusedPhoneNumber ? "Phone Number" : ""}
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    // keyboardType="phonenumber"
                                    autoCapitalize="none"
                                    onBlur={handlePhoneNumberBlur}
                                    onFocus={handlePhoneNumberFocus}
                                />
                                {phoneNumberError ? <Text style={styles.errorMessage}>{phoneNumberError}</Text> : null}
                            </View>
                            <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', }}>
                                {focusedEmail && <Text style={[styles.label, styles.labelFocused]}>Email Address</Text>}
                                <TextInput
                                    style={[styles.input, emailError ? styles.inputError : null]}
                                    placeholder={!focusedEmail ? "Email Address" : ""}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onBlur={handleEmailBlur}
                                    onFocus={handleEmailFocus}
                                />
                                {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}
                            </View>
                        </View>

                        <TouchableOpacity onPress={handleUpdateProfile} style={{ marginTop: 'auto', backgroundColor: 'transparent', width: '100%', height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 30, borderWidth: 1, borderColor: '#D7D7D7' }} >
                            <Text style={{ fontSize: 16, color: '#000' }}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    editIcon: {
        position: 'absolute',
        bottom: 10,
        right: 120,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        padding: 5,
    },
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
    input: {
        marginVertical: 10,
        width: '100%',
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
});

export default EditProfile;
