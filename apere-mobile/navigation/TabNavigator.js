import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Category from '../components/Screens/ProductCategroies/Category';
import Orders from '../components/Screens/Orders';
import UserProfile from '../components/Screens/UserProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconComponent;

              if (route.name === 'Home') {
                iconComponent = <AntDesign name="home" size={size} color={color} />;
              } else if (route.name === 'Categories') {
                iconComponent = <Feather name="grid" size={size} color={color} />;
              } else if (route.name === 'Orders') {
                iconComponent = <MaterialIcons name="shopping-cart" size={size} color={color} />;
              } else if (route.name === 'Profile') {
                iconComponent = <Feather name="user" size={size} color={color} />;
              }

              return iconComponent;
            },
            tabBarLabel: ({ focused, color }) => {
              let labelComponent;

              if (route.name === 'Home') {
                labelComponent = focused ? 'Home' : '';
              } else if (route.name === 'Categories') {
                labelComponent = focused ? 'Categories' : '';
              } else if (route.name === 'Orders') {
                labelComponent = focused ? 'Orders' : '';
              } else if (route.name === 'Profile') {
                labelComponent = focused ? 'Profile' : '';
              }

              return <View style={{ marginBottom: 5, alignItems: 'center' }}><Text style={{ color }}>{labelComponent}</Text></View>;
            },
            tabBarActiveTintColor: '#000', // Active tab color
            tabBarInactiveTintColor: '#C2C2C2', // Inactive tab color
            tabBarShowLabel: false, // Hide labels
            tabBarStyle: { backgroundColor: '#FFF', paddingVertical: 8, height: 60 }, // Bottom tab bar style
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Categories" component={Category} />
          <Tab.Screen name="Orders" component={Orders} />
          <Tab.Screen name="Profile" component={UserProfile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Make the container fill the entire screen
    zIndex: 1, // Set a higher z-index value to ensure it's always on top
  },
});

export default TabNavigator;
