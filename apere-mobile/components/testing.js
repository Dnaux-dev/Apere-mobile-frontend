import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  Image,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

// Placeholder for CategoryList component
const CategoryList = () => {
  return (
    <View>
      {/* Your CategoryList component implementation */}
      <Text>CategoryList</Text>
    </View>
  );
};

// Placeholder for ProductList component
const ProductList = () => {
  return (
    <View>
      {/* Your ProductList component implementation */}
      <Text>ProductList</Text>
    </View>
  );
};

// Placeholder for AllProducts component
const AllProducts = () => {
  return (
    <View>
      {/* Your AllProducts component implementation */}
      <Text>AllProducts</Text>
    </View>
  );
};

const HomeScreen = () => {
  // Dummy data for FlatList
  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    // Add more items as needed
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            {/* Your content for each item */}
            <Text>{item.text}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            {/* Header */}
            {/* ... (Remaining code unchanged) */}

            {/* Refer and Earn */}
            <View style={{ height: 161, margin: 20, padding: 20, borderRadius: 24, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(144, 211, 112, 0.08)' }}>
              {/* ... (Remaining code unchanged) */}
            </View>

            {/* Categories */}
            <View style={{ height: 130, padding: 20, borderColor: '1px solid rgba(18, 18, 18, 0.10)', backgroundColor: '#fff', borderWidth: 8, borderRightWidth: 0, borderLeftWidth: 0 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data} // Replace with your actual data
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  // Replace this with your actual CategoryList component
                  <CategoryList />
                )}
              />
            </View>

            {/* Trending Sales */}
            <View style={{ margin: 15 }}>
              {/* ... (Remaining code unchanged) */}
            </View>

            {/* Images with Text */}
            <View style={{ flexDirection: 'row', gap: 10, height: 217, padding: 20, borderColor: '1px solid rgba(18, 18, 18, 0.10)', backgroundColor: '#fff', borderWidth: 8, borderRightWidth: 0, borderLeftWidth: 0 }}>
              {/* ... (Remaining code unchanged) */}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <>
            {/* All Products */}
            {/* Replace this with your actual AllProducts component */}
            <AllProducts />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
