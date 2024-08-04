import React, { useState, useRef } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

const VerifyScreen = ({ route }) => {
    const [inputValues, setInputValues] = useState(["", "", "", ""]);
    const navigation = useNavigation();
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const { email } = route.params || { email: "" };

    const goBack = () => {
        navigation.navigate('Register'); // Navigate to the Register screen
    };

    const handleChange = (text, index) => {
        // Allow only numbers 
        const numericValue = text.replace(/[^0-9]/g, "");
        const newInputValues = [...inputValues];
        newInputValues[index] = numericValue;
        setInputValues(newInputValues);

        // Move focus to the next input or previous if backspace is pressed
        if (numericValue === "" && index > 0 && inputRefs[index - 1].current) {
            inputRefs[index - 1].current.focus();
        } else if (numericValue !== "" && index < inputRefs.length - 1 && inputRefs[index + 1].current) {
            inputRefs[index + 1].current.focus();
        }

        // Check if all input fields are filled
        if (newInputValues.every(value => value.length === 1)) {
            // If all fields are filled, navigate to CreateAccount screen
            navigation.navigate('DeliveryAddress');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, width: '100%', backgroundColor: "#C3FBAB" }}>
                    <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row'}}>
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>Verify your Email Address</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 30, marginTop: 20, fontSize: 16 }}>Enter the 4 digit verification code that was sent to {email}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                    {[0, 1, 2, 3].map((index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            style={{
                                width: 60,
                                height: 60,
                                backgroundColor: '#F6F6F6',
                                borderRadius: 10,
                                padding: 10,
                                fontSize: 20,
                                textAlign: 'center',
                                marginRight: 10,
                            }}
                            onChangeText={(text) => handleChange(text, index)}
                            value={inputValues[index]}
                            keyboardType="numeric"
                            secureTextEntry={true} // Set secureTextEntry to true
                            accessible={true}
                            accessibilityLabel={`Verification code ${index + 1}`}
                            maxLength={1}
                        />
                    ))}
                </View>
                <View style={{ marginLeft: 30, marginTop: 20, color: '#007bff', flexDirection: 'row'}}>
                    <Text>Didn't get code?</Text>
                    <TouchableOpacity>
                    <Text style={{marginLeft: 3, color: '#000', fontWeight:500, textDecorationLine: 'underline' }}>Resend</Text>
                    </TouchableOpacity>
                 </View>
            </View>
        </SafeAreaView>
    )
}

export default VerifyScreen;
