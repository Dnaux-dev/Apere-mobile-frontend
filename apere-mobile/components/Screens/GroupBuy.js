import { StyleSheet, Text, Image, View, KeyboardAvoidingView, StatusBar, Platform, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import React, {useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CreateNewGroup from '../Modals/CreateNewGroup';


const GroupBuy = () => {
    const [isCreateGroupModalVisible, setIsCreateGroupModalVisible] = useState(false);
    const navigation = useNavigation();
    const openCreateGroupModal = () => {
        setIsCreateGroupModalVisible(true);
    }

    const closeCreateGroupModal = () => {
        setIsCreateGroupModalVisible(false);
    }

    const goBack =() => {
        navigation.navigate('Home')
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="#C3FBAB" barStyle="dark-content" />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 20, height: 98, marginTop: 10, width: '100%', }}>
                    <TouchableOpacity onPress={goBack} style={{ flexDirection: 'row' }}>
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>Group Buy</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style= {{flex: 1}}>
                <View style={{margin: 10, gap: 10}}>
                    <View style= {styles.GroupContainer}>
                        <View style={{marginTop: 10}}>
                            <Text style={{fontSize: 16}}>Tade's Group</Text>
                            <Text style={{fontSize: 11, color: '#727272'}}>15 Products</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{top: 10, fontSize: 8, left: 5, fontWeight: 'bold'}}>3</Text>
                            <Image 
                                source={require('../../assets/group-icon.png')}
                            />
                            <Text style={{fontSize: 16}}>N152000</Text>
                        </View>
                    </View>
                    <View style= {styles.GroupContainer}>
                        <View style={{marginTop: 10}}>
                            <Text style={{fontSize: 16}}>Tade's Group</Text>
                            <Text style={{fontSize: 11, color: '#727272'}}>15 Products</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                        <Text style={{top: 10, fontSize: 8, left: 5, fontWeight: 'bold'}}>3</Text>
                            <Image 
                                source={require('../../assets/group-icon.png')}
                            />
                            <Text style={{fontSize: 16}}>N152000</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress ={openCreateGroupModal}>
                <View style={{alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: '#000', height: 48, marginHorizontal: 15, borderRadius: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 16}}>Create New Group</Text>
                </View>
            </TouchableOpacity>

            <CreateNewGroup isVisible={isCreateGroupModalVisible} closeModal={closeCreateGroupModal}/>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default GroupBuy

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    header :{
        paddingHorizontal: 10,
        flexDirection: 'row',
        height: 88,
        width: '100%',
        backgroundColor: '#C3FBAB',
    }, 
    GroupContainer: {
        height: 89,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15,
    }
})