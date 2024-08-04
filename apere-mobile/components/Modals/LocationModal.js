import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const LocationModal = ({ isVisible, closeModal, handlePlaceSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Function to handle search input change
  const handleSearch = (text) => {
    setSearchQuery(text);
    // Filter places based on search query
    const filteredPlaces = mockPlaces.filter(place =>
      place.name.toLowerCase().includes(text.toLowerCase())
    );
    setPlaces(filteredPlaces);
  };

  // Mocked places data
  const mockPlaces = [
    { id: '1', name: 'Unilag' },
    { id: '2', name: 'Berger' },
    { id: '3', name: 'Ikeja' },
    { id: '4', name: 'Ojota' },
    { id: '5', name: 'Ogudu' },
    { id: '6', name: 'Maryland' },
    { id: '7', name: 'Anthony' },
    { id: '8', name: 'Onipanu' },
    { id: '9', name: 'Bariga' },
    { id: '10', name: 'Yaba' },
    { id: '11', name: 'Surulere' },
    { id: '12', name: 'Ogba' },
    { id: '13', name: 'Magodo' },
    { id: '14', name: 'CMD Road' },
    { id: '15', name: 'Obawole' },
    { id: '16', name: 'Agege' },
    { id: '17', name: 'Iju Ishaga' },
    { id: '18', name: 'Fagba' },
    { id: '19', name: 'Festac' },
    { id: '20', name: 'Oshodi' },
    { id: '21', name: 'Iyana Ipaja' },
    { id: '22', name: 'Ilepo' },
    { id: '23', name: 'Abule Egba' },
    { id: '24', name: 'Meiran' },
    { id: '25', name: 'Alagbado' },
    { id: '26', name: 'Mushin' },
    { id: '27', name: 'Ikotun' },
    { id: '28', name: 'Igando' },
    { id: '29', name: 'Egbeda' },
    { id: '30', name: 'Idimu' },
    { id: '31', name: 'Akowonjo' },
    { id: '32', name: 'Isolo' },
    { id: '33', name: 'Lasu' },
    { id: '34', name: 'Ojo' },
    // Add more places as needed
  ];

  // Initialize places with the initial list of places
  useState(() => {
    setPlaces(mockPlaces);
  }, []);

  // Function to render each place item
  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => selectPlace(item)}>
      <Text style={[styles.placeText, index === focusedIndex && styles.focusedPlaceText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  // Function to handle place selection
  const selectPlace = (selectedPlace) => {
    handlePlaceSelect(selectedPlace);
    // Close the modal
    closeModal();
  };

  // Function to handle focus
  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  // Function to handle blur
  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      swipeDirection="down"
      onSwipeComplete={closeModal}
      animationIn="bounceInUp"
      animationInTiming={500}
      animationOut="bounceOutDown"
      animationOutTiming={500}
      style={styles.bottomModal}
    >
      <View style={{ backgroundColor: 'white', padding: 20, paddingBottom: 50, borderRadius: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Where are you located?</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F6F6F6', padding: 10, marginBottom: 10, borderRadius: 10 }}>
          {/* Search icon */}
          <Feather name="search" size={24} color="black" style={{marginRight: 10}}/>
          {/* TextInput with placeholder */}
          <TextInput
            style={{ flex: 1 }}
            placeholder="Search"
            onChangeText={handleSearch}
          />
        </View>

        <FlatList
          data={places}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ maxHeight: 200 }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    width: width - 20,
    position: 'absolute',
    bottom: -370,
    left: -10,
    borderTopEndRadius: 30,
  },
  placeText: {
    fontSize: 16, // Default font size
    padding: 10, // Add padding to each place item
    marginBottom: 5, // Add margin bottom to create space between each place item
  },
  focusedPlaceText: {
    fontSize: 20, // Increase font size when focused
    backgroundColor: '#F6F6F6',
  },
});

export default LocationModal;
