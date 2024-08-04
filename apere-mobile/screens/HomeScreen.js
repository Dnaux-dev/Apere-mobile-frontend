import React, {useState,useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StatusBarProvider, useStatusBar } from '../components/StatusBarContext';
import { Ionicons, MaterialIcons, AntDesign, Feather, Octicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SearchProduct from '../components/SearchProduct';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

import AllProducts from '../components/AllProducts';
import { Image } from 'react-native';
import UserProfile from '../components/Screens/UserProfile';
import BannerSlider from '../components/BannerSlider';
import Category from '../components/Screens/ProductCategroies/Category';
import Orders from '../components/Screens/Orders';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// Define the tab screens
const HomeTabScreen = ({ navigation }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const statusBar = useStatusBar();
  const basket = useSelector(state => state.basket);

  const handleState = () => {
    navigation.navigate('DeliveryAddress')
  }

  const goToCart = () => {
    navigation.navigate('Cart', { selectedProducts: basket, setSelectedProducts });
  }
  


  const goToShoppingList = () => {
    navigation.navigate('ShoppingList')
  }

  const goToGroupBuyScreen = () =>{
    navigation.navigate('GroupBuy')
  }

  const removeCategoryItem = (id) => {
    // Implement the logic to remove the category item
    console.log(`Removing category item with id ${id}`);
  };
  return (
    <StatusBarProvider statusBar={statusBar} style={{ backgroundColor: "#fff" }}>
      <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 40 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 5, padding: 20 }}>
              <TouchableOpacity onPress={handleState} style={{ flexDirection: 'row', gap: 6 }}>
                <Ionicons name="location" size={19} color="#38b000" />
                <Text style={{ fontWeight: '500', fontSize: 14 }}>Fadeyi, Lagos</Text>
              </TouchableOpacity>
              <View>
                <Ionicons name="notifications-outline" size={18} color="black" />
              </View>
            </View>
            <SearchProduct />
            <View style={{ paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
              <BannerSlider />
            </View>
            <View style={{ marginTop: 10 }}>
              <CategoryList removeCategoryItem={removeCategoryItem} navigation={navigation} />
            </View>
            <View style={{ margin: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Trending Sales</Text>
            </View>
            <ProductList />
            <View style={{ flexDirection: 'row', gap: 10, padding: 20, justifyContent: 'center' }}>
              <TouchableOpacity onPress={goToGroupBuyScreen} style={{ width: 89.4, height: 37, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF5BE', borderWidth: 0.5, borderColor: '#FFE353' }}>
                <Text style={{ textAlign: 'center', width: 90, fontSize: 15 }}>Group Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 205.4, height: 37, gap: 5, flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D4DDFD', borderWidth: 0.5, borderColor: '#637BD0' }}>
                <Text style={{ textAlign: 'center', fontSize: 15 }} onPress={goToShoppingList}>Create Shopping List</Text>
                <AntDesign name="plus" size={15} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ margin: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Hand pick for you</Text>
            </View>
            <ProductList />
            <TouchableOpacity style={styles.cartIconContainer} onPress={goToCart}>
              <View style={{alignItems:'center', marginTop: 10}}>
                <Image
                  source={require('../assets/cart.png')}
                />
              </View>
              <View style={{ backgroundColor: 'red', height: 20, zIndex: 1000, width: 20, alignItems: 'center', borderRadius: 20, top: -50, left: 20}}>
                <Text style={{color: '#fff'}}>{basket.length}</Text>
              </View>


            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </StatusBarProvider>
  );
}

const CategoriesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Category />
    </View>
  );
}

const OrdersScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Orders />
    </View>
  );
}

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <UserProfile />
    </View>
  );
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
        tabBarActiveTintColor: '#38B000',
      }}
    >
      <Tab.Screen
        name="ome"
        style={{ margin: 30 }}
        component={HomeTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            // <Octicons name={focused ? 'home' : 'home-outline'} size={20} color={focused ? '#38B000' : '#888'} />
            <Image source={focused ? require('../assets/home-f.png') : require('../assets/home-nf.png')} style={{ width: 24, height: 24 }} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#38B000' : '#888', fontSize: 10, marginBottom: 10 }}>Home</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('../assets/category-f.png') : require('../assets/category-nf.png')} style={{ width: 24, height: 24 }} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#38B000' : '#888', fontSize: 10, marginBottom: 10 }}>Categories</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            // <Feather name={focused ? 'shopping-bag' : 'shopping-bag'} size={24} color={focused ? '#38B000' : '#888'} />
            <Image source={focused ? require('../assets/order-f.png') : require('../assets/order-nf.png')} style={{ width: 24, height: 24 }} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#38B000' : '#888', fontSize: 10, marginBottom: 10 }}>Orders</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('../assets/profile-f.png') : require('../assets/profile-nf.png')} style={{ width: 24, height: 24 }} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#38B000' : '#888', fontSize: 10, marginBottom: 10 }}>Profile</Text>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

const styles = StyleSheet.create({
  cartIconContainer: {
    position: 'absolute',
    width: 59,
    height: 59,
    bottom: 20,
    right: 20,
    backgroundColor: '#38B000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderRadius: 30,
    padding: 10,
    elevation: 3, // Shadow for Android
    shadowColor: 'black', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

