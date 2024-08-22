import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const Navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [focused, setFocused] = useState(false);

    const goBack = () => {
        Navigation.navigate('onboarding'); 
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleRegister = () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setEmail('');
            setFocused(false); // Unfocus the input
        } else {
            setError('');
            // Navigate to the Verify screen if the email is valid
            Navigation.navigate('Verify');
        }
    };
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, width: '100%', backgroundColor: "#C3FBAB" }}>
                    <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row' }}>
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>Enter your Email Address</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginTop: 40 }}>
                    <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                        {focused && <Text style={[styles.label, styles.labelFocused]}>Email Address</Text>}
                        <TextInput
                            style={[styles.input, error ? styles.inputError : null]}
                            placeholder={!focused ? "Email Address" : ""}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
                    </View>
                    <TouchableOpacity onPress={handleRegister} style={{ marginTop: 'auto', backgroundColor: '#38B000', width: 322, height: 62, marginBottom: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} >
                        <Text style={{ fontSize: 20, color: '#fff' }}>Sign up</Text>
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

export default RegisterScreen;
