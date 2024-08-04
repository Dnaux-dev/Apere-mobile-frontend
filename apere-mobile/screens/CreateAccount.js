import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [focusedFirstName, setFocusedFirstName] = useState(false);
    const [focusedLastName, setFocusedLastName] = useState(false);
    const [focusedPhoneNumber, setFocusedPhoneNumber] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);
    const [passwordRequirements, setPasswordRequirements] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);


    const goBack = () => {
        navigation.navigate('onboarding');
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

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            specialChar: /[^a-zA-Z0-9]/.test(password),
        };

        setPasswordRequirements(requirements);

        if (!passwordRegex.test(password)) {
            return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
        }

        return ''; // Empty string indicates valid password
    };

    const validateConfirmPassword = (confirmPassword, password) => {
        if (confirmPassword !== password) {
            return 'Passwords do not match.';
        }

        return ''; // Empty string indicates passwords match
    };
    const handleCreateAccount = () => {
        const isFirstNameValid = validateFirstName(firstName);
        const isLastNameValid = validateLastName(lastName);
        const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
        const passwordError = validatePassword(password);
        const confirmPasswordError = validateConfirmPassword(confirmPassword, password);

        if (!isFirstNameValid || !isLastNameValid || !isPhoneNumberValid || passwordError || confirmPasswordError) {

            setPasswordError(passwordError);
            setConfirmPasswordError(confirmPasswordError);
            return;
        }
    
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        navigation.navigate('Home');
    };
    

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

    const handlePasswordBlur = () => {
        setFocusedPassword(false);
    };

    const handlePasswordFocus = () => {
        setFocusedPassword(true);
    };

    const handleConfirmPasswordBlur = () => {
        setFocusedConfirmPassword(false);
    };

    const handleConfirmPasswordFocus = () => {
        setFocusedConfirmPassword(true);
    };

    const handleTogglePasswordVisibility = () => {
        setTogglePasswordVisibility(!togglePasswordVisibility);
    };

    return (
        <SafeAreaView style={{  flexGrow: 1,
            backgroundColor: 'white',
            paddingBottom: 20, }}>
            <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, width: '100%', backgroundColor: "#C3FBAB" }}>
                    <TouchableOpacity onPress={goBack} style={{flexDirection:'row'}}>
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>Create Account</Text>
                    </TouchableOpacity>
                    
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginTop: 40 }}>
                        <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                            {focusedFirstName && <Text style={[styles.label, styles.labelFocused]}>First Name</Text>}
                            <TextInput
                                style={[styles.input, firstNameError ? styles.inputError : null]}
                                placeholder={!focusedFirstName ? "First Name" : ""}
                                value={firstName}
                                onChangeText={setFirstName}
                                // keyboardType="firstname"
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
                                // keyboardType="lastname"
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
                        <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                            {focusedPassword && <Text style={[styles.label, styles.labelFocused]}>Password</Text>}
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                <TextInput
                                    style={[styles.input, passwordError ? styles.inputError : null]}
                                    placeholder={!focusedPassword ? "Password" : ""}
                                    value={password}
                                    onChangeText={setPassword}
                                    // keyboardType="password"
                                    autoCapitalize="none"
                                    secureTextEntry={!togglePasswordVisibility} // Hide or show password based on togglePasswordVisibility
                                    onBlur={handlePasswordBlur}
                                    onFocus={handlePasswordFocus}
                                />
                                <TouchableOpacity onPress={handleTogglePasswordVisibility} style={{position:'absolute', right: 8}}>
                                    <MaterialIcons name={togglePasswordVisibility ? "visibility-off" : "visibility"} size={24} color="black"/>
                                </TouchableOpacity>
                            </View>
                            {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
                        </View>

                        <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                            {focusedConfirmPassword && <Text style={[styles.label, styles.labelFocused]}>Confirm Password</Text>}
                            <TextInput
                                style={[styles.input, confirmPasswordError ? styles.inputError : null]}
                                placeholder={!focusedConfirmPassword ? "Confirm Password" : ""}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!togglePasswordVisibility}
                                autoCapitalize="none"
                                onBlur={handleConfirmPasswordBlur}
                                onFocus={handleConfirmPasswordFocus}
                            />
                            <TouchableOpacity onPress= {handleTogglePasswordVisibility} style={{position:'absolute', right: 8, top: 20}}>
                                <MaterialIcons name={togglePasswordVisibility ? "visibility-off" : "visibility"} size={24} color="black"/>
                            </TouchableOpacity>
                            {confirmPasswordError ? <Text style={styles.errorMessage}>{confirmPasswordError}</Text> : null}
                        </View>
                        <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    input: {
        marginVertical: 10,
        width: '100%',
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 'auto',
        backgroundColor: '#38B000',
        width: 322,
        height: 62,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    passwordRequirements: {
        marginTop: 5,
        textAlign: 'left',
        width: '100%',
        fontWeight: 'bold'
    },
    passwordRequirementItem: {
        textAlign: 'left',
        width: '100%'
    },
    passwordRequirementItemMet: {
        color: 'green',
    }
});

export default CreateAccount;
