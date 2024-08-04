import React, { useState } from 'react';
import { Image, Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CheckoutModal = ({ isVisible, closeModal }) => { // Add selectedProducts as a prop
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const basket = useSelector(state => state.basket);
    const [showTimeModal, setShowTimeModal] = useState(false);
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date.dateString);
    };

    const markedDates = {
        [selectedDate]: { selected: true, selectedColor: 'black' }, // Mark the selected date
    };


    const handleDonePress = () => {
        closeModal();
        setShowTimeModal(true);
    };

    const handleFinished = () => {
        setShowTimeModal(false);
        navigation.navigate('Checkout', {
            selectedProducts: basket,
            setSelectedProducts,
            deliveryDate: selectedTime && selectedTime.dateString ? selectedTime.dateString : null,
            deliveryTime: selectedTime && selectedTime.timeSlot ? selectedTime.timeSlot : null
        });
    };
    

    const handleBackPress = () => {
        setShowTimeModal(false);
    };

    const handleTimeSelection = (timeSlot) => {
        setSelectedTime({
            dateString: selectedDate, // Pass the selected date
            timeSlot: timeSlot, // Pass the selected time slot
        });
    };




    return (
        <>
            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ marginTop: 20, gap: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>When do you want your delivery?</Text>
                            <Text style={{ fontSize: 15, width: 280 }}>Pick a day that you want your order to be delivered</Text>
                        </View>
                        <Calendar
                            markedDates={markedDates}
                            onDayPress={handleDateSelect}
                            theme={{
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                selectedDayBackgroundColor: '#000000',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: '#000000',
                                monthTextColor: '#2d4150',
                            }}
                        />
                        <View style={{ marginTop: 30, flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 153, height: 48, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} onPress={closeModal}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#E0FDD4', width: 153, height: 48, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} onPress={handleDonePress}>
                                <Text>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={showTimeModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowTimeModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ marginTop: 20, gap: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>What time should it be delivered?</Text>
                            <Text style={{ fontSize: 15, width: 280 }}>Pick a delivery time for Sunday, 24, March</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <TouchableOpacity
                                style={[styles.timeButton, selectedTime?.timeSlot === '9AM-12PM' ? { backgroundColor: '#FEB23F' } : null]}
                                onPress={() => handleTimeSelection('9AM-12PM')}
                            >
                                <Image source={require('../../assets/ellipse-72.png')} />
                                <View style={{ flexDirection: 'row', gap: 5, marginLeft: 10, marginRight: 10 }}>
                                    <Image source={require('../../assets/tick-tock.png')} />
                                    <Text style={{ marginTop: 2, fontSize: 22.29 }}>9 AM - 12 PM</Text>
                                </View>
                                <Image source={require('../../assets/ellipse-72.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.timeButton, selectedTime === '12PM-3PM' ? { backgroundColor: '#FEB23F' } : null]}
                                onPress={() => handleTimeSelection('12PM-3PM')}
                            >
                                <Image source={require('../../assets/ellipse-72.png')} />
                                <View style={{ flexDirection: 'row', gap: 5, marginLeft: 10, marginRight: 10 }}>
                                    <Image source={require('../../assets/tick-tock.png')} />
                                    <Text style={{ marginTop: 2, fontSize: 22.29 }}>12 PM - 3 PM</Text>
                                </View>
                                <Image source={require('../../assets/ellipse-72.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.timeButton, selectedTime === '3PM-6PM' ? { backgroundColor: '#FEB23F' } : null]}
                                onPress={() => handleTimeSelection('3PM-6PM')}
                            >
                                <Image source={require('../../assets/ellipse-72.png')} />
                                <View style={{ flexDirection: 'row', gap: 5, marginLeft: 10, marginRight: 10 }}>
                                    <Image source={require('../../assets/tick-tock.png')} />
                                    <Text style={{ marginTop: 2, fontSize: 22.29 }}>3 PM - 6 PM</Text>
                                </View>
                                <Image source={require('../../assets/ellipse-72.png')} />
                            </TouchableOpacity>
                        </View>

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
        </>
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
        marginTop: 130, // Push content to the bottom
        backgroundColor: 'white',
        width: '100%',
        height: 600, // Maximum height for the content
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    calendar: {
        marginTop: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#dddddd',
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
    timeButton: {
        width: 296.71,
        height: 59,
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default CheckoutModal;
