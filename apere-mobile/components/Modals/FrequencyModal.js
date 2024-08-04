// FrequencyModal.js
import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const FrequencyModal = ({ isVisible, handleBackPress, handleFinished }) => {
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {}}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={{ marginTop: 20, gap: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>How often would you like your list to be delivered?</Text>
                    </View>
                    {/* Add your frequency selection buttons here */}
                    <View style={{ marginTop: 'auto', flexDirection: 'row', gap: 15 }}>
                        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.doneButton} onPress={handleFinished}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

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
});

export default FrequencyModal;
