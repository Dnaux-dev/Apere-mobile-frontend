import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: 1,
            title: 'Frozen Food',
            image: require('../../../assets/frozen_food.png'),
            color: '#E0FDD4'
        },
        {
            id: 2,
            title: 'Oil & Spices',
            image: require('../../../assets/noto_hot-pepper.png'),
            color: '#F5FDD4'
        },
        {
            id: 3,
            title: 'Grains',
            image: require('../../../assets/soup_ingredient.png'),
            color: "#D4DDFD"
        },
        {
            id: 4,
            title: 'Grains',
            image: require('../../../assets/grains.png'),
            color: '#FDD4D4'
        },
        {
            id: 5,
            title: 'Fresh Vegetable & Pepper',
            image: require('../../../assets/vegetables_pepper.png'),
            color: '#FDF4D4'
        },
        {
            id: 6,
            title: 'Flour',
            image: require('../../../assets/flour.png'),
            color: '#D4FDDF'
        },
        {
            id: 7,
            title: 'Food Bundles',
            image: require('../../../assets/basket.png'),
            color: '#FDFBD4'
        },
        {
            id: 8,
            title: 'Tuber',
            image: require('../../../assets/sweet_potato.png'),
            color: '#F5FDD4'
        }
    ];

    const handleCategoryPress = (item) => {
        navigation.navigate('CategoryDetail', { title: item.title });
    };

    const renderCategoryItem = (item) => {
        return (
            <TouchableOpacity key={item.id} style={[styles.categoryItem, { backgroundColor: item.color }]} onPress={() => handleCategoryPress(item)}>
                <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
                <Text style={styles.categoryTitle}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor='#C3FBAB' barStyle='dark-content' />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, marginTop: 10, width: '100%' }}>
                    <Text style={{ marginLeft: 5, fontSize: 24 }}>Category</Text>
                </View>
            </View>

            <View style={styles.subHeader}>
                <Text style={{ fontSize: 20 }}>Select Category</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.categoryContainer}>
                    {[...Array(Math.ceil(data.length / 2)).keys()].map((rowIndex) => (
                        <View key={rowIndex} style={styles.categoryRow}>
                            {data.slice(rowIndex * 2, rowIndex * 2 + 2).map(renderCategoryItem)}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    header: {
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
    subHeader: {
        marginLeft: 15,
        marginTop: 20,

    },
    categoryContainer: {
        margin: 10,
    },

    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginRight: 10,
        marginBottom: 20,
    },
    categoryItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5, // Added equal horizontal margin
        height: 137.61,
        width: 161.34
    },
    categoryImage: {
        width: 50,
        height: 50,
    },
    categoryTitle: {
        marginTop: 5,
        textAlign: 'center',
    },
});

export default Category;


