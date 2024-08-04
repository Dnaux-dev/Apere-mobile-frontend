import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'

const CreateNewGroup = ( {isVisible, closeModal}) => {
    const [showTimeModal, setShowTimeModal] = useState(false);
    const [showFrequencyModal, setShowFrequencyModal] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState(null);
    const frequencyOptions = ['One Off', 'Weekly', 'Every 2 Weeks', 'Monthly'];
    const [error, setError] = useState(null);

    const handleDonePress =() => {
        closeModal();
        setShowFrequencyModal(true);
    };

    const handleBackPress = () => {
        if (showFrequencyModal) {
            setShowFrequencyModal(false);
            setShowTimeModal(true);
        } else if (showTimeModal) {
            setShowTimeModal(false);
            closeModal();
        }
    
    };

    const handleFrequencySelect = (frequency) => {
        setSelectedFrequency(frequency);
        setError(null);
    };

    const handleFinished =() => {
        if (!selectedFrequency) {
            setError('Please choose an option');
            return;
        }
        if (Array.isArray(selectedFrequency)) {
            setError('You can only choose one option');
            return;
        }
        closeModal();
        setShowFrequencyModal(false);
    }
    return (
        <Modal
            visible={isVisible || showTimeModal || showFrequencyModal}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                {showFrequencyModal ? (
                    <View style={styles.modalContent2}>
                        <View style={{ marginTop: 20, gap: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>How often would you like your list to be delivered?</Text>
                        </View>
                        {/* Render frequency selection buttons */}
                        <View style={{ marginTop: 'auto', flexDirection: 'column', flexWrap: 'wrap', gap: 5, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            {frequencyOptions.map((option, index) => (
                                <TouchableOpacity key={index} style={[styles.frequencyButton, index !== 0 && styles.border, selectedFrequency === option && styles.selected]} onPress={() => handleFrequencySelect(option)}>
                                    <Text style={{fontSize: 20}}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* Error message */}
                        {error && <Text style={styles.errorMessage}>{error}</Text>}
                        {/* Back and Done buttons */}
                        <View style={{ marginTop: 20, flexDirection: 'row', gap: 15 }}>
                            <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.doneButton} onPress={handleFinished}>
                                <Text>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : showTimeModal ? (
                    <View style={styles.modalContent}>
                        <View style={{ marginTop: 20, gap: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>What is the name of the Group?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Group Name"
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={{ marginTop: 30, flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 153, height: 48, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} onPress={handleBackPress}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#E0FDD4', width: 153, height: 48, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} onPress={handleDonePress}>
                                <Text>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View style={styles.modalContent}>
                        <View style={{ marginTop: 20, gap: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>What is the name of the Group?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Group Name"
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={{ marginTop: 30, flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 153, height: 48, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} onPress={closeModal}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#E0FDD4', width: 153, height: 48, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} onPress={handleDonePress}>
                                <Text>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </Modal>
    )
}

export default CreateNewGroup

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        marginTop: 'auto', // Push content to the bottom
        backgroundColor: 'white',
        width: '100%',
        height: 300, // Maximum height for the content
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalContent2: {
        marginTop: 'auto', // Push content to the bottom
        backgroundColor: 'white',
        width: '100%',
        height: 400, // Maximum height for the content
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
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
    backButton: {
        width: 153,
        height: 48,
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneButton: {
        backgroundColor: '#E0FDD4',
        width: 153,
        height: 48,
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    frequencyButton: {
        width: '100%',
        alignItems: 'flex-start',
        height: 41,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    border: {
        borderColor: '#000',
    },
    selected: {
        backgroundColor: '#E0FDD4',
    },
    errorMessage: {
        color: 'red',
        marginTop: 10,
    },
});
