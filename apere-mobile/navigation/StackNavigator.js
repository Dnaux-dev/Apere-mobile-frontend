import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding from '../screens/Onboarding';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import VerifyScreen from '../screens/VerifyScreen';
import CreateAccount from '../screens/CreateAccount';
import DeliveryAddress from '../screens/DeliveryAddressDetails';
import TabNavigator from './TabNavigator';
import CategoryDetail from '../components/Screens/ProductCategroies/CategoryDetail';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import ShoppingList from '../components/Screens/ShoppingList';
import EditProfile from '../components/Screens/EditProfile';
import Payment from '../components/Payment';
import GroupBuy from '../components/Screens/GroupBuy';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeliveryAddress"
          component={DeliveryAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroupBuy"
          component={GroupBuy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryDetail"
          component={CategoryDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
