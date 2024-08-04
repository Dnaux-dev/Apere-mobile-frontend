import React from 'react';
import { FlatList, StyleSheet, Pressable, Text, View, Image } from 'react-native';

const CategoryList = ({ navigation, selectedCategory, removeCategoryItem }) => {
    const data = [
        { name: 'Frozen Food', color: 'rgba(128, 0, 255, 0.08)', width: 100, image: require('../assets/frozen_food.png') },
        { name: 'Grains', color: 'rgba(56, 176, 0, 0.08)', width: 71, image: require('../assets/grains.png') },
        { name: 'Soup Ingredient', color: 'rgba(128, 0, 255, 0.08)', width: 100, image: require('../assets/soup_ingredient.png') },
        { name: 'Fresh Vegetables & Pepper', color: 'rgba(255, 214, 0, 0.08)', width: 100, image: require('../assets/vegetables_pepper.png') },
        { name: 'Food Bundles', color: 'rgba(0, 0, 0, 0.08)', width: 100, image: require('../assets/basket.png') },
        { name: 'Meal Kit', color: 'rgba(128, 0, 255, 0.08)', width: 100, image: require('../assets/meal__kit.png') },
        { name: 'Flour', color: 'rgba(128, 0, 255, 0.08)', width: 100, image: require('../assets/flour.png') },
        { name: 'Tuber', color: 'rgba(255, 214, 0, 0.08)', width: 100, image: require('../assets/sweet_potato.png') },
        { name: 'Oil & Spices', color: 'rgba(255, 214, 0, 0.08)', width: 100, image: require('../assets/noto_hot-pepper.png') },
    ];

    const renderItem = ({ item }) => (
        <Pressable
            style={{
                alignItems: 'center',
                backgroundColor: item.color,
                width: item.width,
                height: 69,
                padding: 6,
                margin: 5,
            }}
            onPress={() => {
                removeCategoryItem(item.name); // Call removeCategoryItem function when a category is pressed
                navigation.navigate('CategoryDetail', { title: item.name });
            }}
        >
            <Image source={item.image} style={{ width: 33.45, height: 33.45 }} resizeMode="contain" />
            <Text style={{ textAlign: 'center', fontSize: 8.5, fontWeight: '500' }}>{item.name}</Text>
        </Pressable>
    );

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={84}
            decelerationRate="fast"
            snapToAlignment="start"
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    }
});

export default CategoryList;
