import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../firebase.config';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const goBack = () => { 
        navigation.navigate('onboarding'); 
    }

    const handleEmailBlur = () => {
        setEmailFocused(false);
    };

    const handleEmailFocus = () => {
        setEmailFocused(true);
    };

    const handlePasswordBlur = () => {
        setPasswordFocused(false);
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handleLogin = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            setEmail('');
            setEmailFocused(false);
            return;
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            setPasswordError('Please enter your password.');
            setPasswordFocused(false);
            return;
        } else {
            setPasswordError('');
        }

        console.log('Valid email:', email);
        console.log('Password:', password);

        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User logged in successfully');
                    navigation.navigate('Home');
                })
                .catch(error => {
                    console.log('Error logging in:', error.message);
                });
        } catch (error) {
            console.log('Error logging in:', error.message);
        }
    };

    const goToRegister = () => {
        navigation.navigate('Register');
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, width: '100%', backgroundColor: "#C3FBAB" }}>
                    <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row' }}>
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>Login</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <Text style={{ fontSize: 16 }}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={goToRegister}>
                            <Text style={{ color: '#38B000', borderBottomWidth: 1, borderBottomColor: '#38B000', fontSize: 16 }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                        {emailFocused && <Text style={[styles.label, styles.labelFocused]}>Email Address</Text>}
                        <TextInput
                            style={[styles.input, emailError ? styles.inputError : null]}
                            placeholder={!emailFocused ? "Email Address" : ""}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onBlur={handleEmailBlur}
                            onFocus={handleEmailFocus}
                        />
                        {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}
                    </View>
                    <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                        {passwordFocused && <Text style={[styles.label, styles.labelFocused]}>Password</Text>}
                        <TextInput
                            style={[styles.input, passwordError ? styles.inputError : null]}
                            placeholder={!passwordFocused ? "Password" : ""}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            onBlur={handlePasswordBlur}
                            onFocus={handlePasswordFocus}
                        />
                        {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
                    </View>
                    <TouchableOpacity onPress={handleLogin} style={{ marginTop: 'auto', backgroundColor: '#38B000', width: 322, height: 62, marginBottom: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} >
                        <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
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

export default LoginScreen;
