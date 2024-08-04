import React, { useState } from "react";
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const UserProfile = () => {
  const navigation = useNavigation();
  const goToEditProfile =() => {
    navigation.navigate('EditProfile')
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor='#C3FBAB' barStyle='dark-content' />
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, marginTop: 10, width: '100%' }}>
          <Text style={{ marginLeft: 10, fontSize: 18 }}>Profile</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ margin: 10, gap: 10 }}>

          <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 }}>
            <Image
              source={require('../../assets/profileImage.png')}
            />
            <Text>Tayo Adesola</Text>
          </View>

          <TouchableOpacity style={styles.sectionContainer} onPress={goToEditProfile}>
            <Image
              source={require('../../assets/profileDetailsIcon.png')}
            />
            <Text>Profile Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionContainer}>
            <Image
              source={require('../../assets/shoppingListIcon.png')}
            />
            <Text>Shopping list</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionContainer}>
            <Image
              source={require('../../assets/walletIcon.png')}
            />
            <Text>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionContainer}>
            <Image
              source={require('../../assets/addressesIcon.png')}
            />
            <Text>Addresses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionContainer}>
            <Image
              source={require('../../assets/helpSupportIcon.png')}
            />
            <Text>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionContainer}>
            <Image
              source={require('../../assets/settingsIcon.png')}
            />
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionContainer}>
            <Image
              source={require('../../assets/logoutIcon.png')}
            />
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 78,
    width: '100%',
    backgroundColor: '#C3FBAB',
  },
  headerText: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 28,
  },
  ShoppingListContainer: {
    height: 89,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  status: {
    width: 48,
    height: 13,
    backgroundColor: '#38B000',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'

  },
  mainProfileDetail: {
    margin: 10,
    gap: 10,
  },

  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    height: 60,
    borderColor: '#000',
  }
});

export default UserProfile






