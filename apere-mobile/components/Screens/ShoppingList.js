import { ScrollView, View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import NewListModal from '../Modals/NewListModal';

const ShoppingList = () => {
    const [isNewListModalVisible, setIsNewListModalVisible] = useState(false);
    const openNewListModal = () => {
        setIsNewListModalVisible(true);
    }
    const closeNewListModal = () => {
        setIsNewListModalVisible(false);
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor='#C3FBAB' barStyle='dark-content' />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, marginTop: 10, width: '100%' }}>
                    <Text style={{ marginLeft: 10, fontSize: 18 }}>Shopping List</Text>
                </View>
            </View>
            <ScrollView style={{flex: 1}}>
                <View style={{ margin: 10, gap: 10 }}>
                    <View style={styles.ShoppingListContainer}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>Tade's Shopping List</Text>
                            <Text style={{ fontSize: 11, color: '#727272' }}>15 Products</Text>
                            <Text style={{ fontSize: 8, fontWeight: 500 }}>Weekly</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View style={styles.status}><Text style={{ fontSize: 6, fontWeight: 700 }}>Active</Text></View>
                            <Text style={{ fontSize: 16 }}>N13,300</Text>
                        </View>
                    </View>
                    <View style={styles.ShoppingListContainer}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>Kitchen's Stockup</Text>
                            <Text style={{ fontSize: 11, color: '#727272' }}>43 Products</Text>
                            <Text style={{ fontSize: 8, fontWeight: 500 }}>Monthly</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View style={styles.status}><Text style={{ fontSize: 6, fontWeight: 700 }}>Active</Text></View>
                            <Text style={{ fontSize: 16 }}>N152,000</Text>
                        </View>
                    </View>
                    <View style={styles.ShoppingListContainer}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>Birthday Shopping</Text>
                            <Text style={{ fontSize: 11, color: '#727272' }}>10 Products</Text>
                            <Text style={{ fontSize: 8, fontWeight: 500 }}>One time</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View style={styles.inactiveStatus}><Text style={{ fontSize: 6, fontWeight: 700 }}>Inactive</Text></View>
                            <Text style={{ fontSize: 16 }}>N40,000</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.createListButton} onPress={openNewListModal}>
                <Text style={{fontSize: 16}}>Create New List</Text>
            </TouchableOpacity>

            <NewListModal  isVisible={isNewListModalVisible} closeModal={closeNewListModal}/>
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
    inactiveStatus: {
        width: 48,
        height: 13,
        backgroundColor: '#D1D1D1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    createListButton: {
        position: 'absolute',
        bottom: 20,
        left: '53%',
        transform: [{ translateX: -176 }],
        backgroundColor: 'transparent',
        width:333,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#D7D7D7'
    }
})
export default ShoppingList
