import React, { useState } from "react";
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('Pending'); // State to manage active tab

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor='#C3FBAB' barStyle='dark-content' />
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 98, marginTop: 10, width: '100%' }}>
          <Text style={{ marginLeft: 10, fontSize: 20 }}>Orders</Text>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Pending' ? styles.activeTab : styles.inactiveTab]}
          onPress={() => handleTabPress('Pending')}
        >
          <Text style={[styles.tabText, activeTab === 'Pending' ? styles.activeTabText : styles.inactiveTabText]}>Pending</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Completed' ? styles.activeTab : styles.inactiveTab]}
          onPress={() => handleTabPress('Completed')}
        >
          <Text style={[styles.tabText, activeTab === 'Completed' ? styles.activeTabText : styles.inactiveTabText]}>Completed</Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 10 }}>
        {activeTab === 'Pending' && (
          <View style={styles.pendingContainer}>
            <View style={styles.pendingUnitContainer}>
              <View style={{ gap: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.pendingText}>Order 2216JKH</Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/download.png')}
                      style={{ width: 24, height: 24 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>20/03/2023,</Text>
                  <Text>12:00AM</Text>
                </View>
                <View style={{ backgroundColor: 'rgba(251, 208, 168, 0.42)', width: 140, height: 41, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                  <Text style={{ padding: 3, color: '#F38B2B' }}>Order out for delivery</Text>
                </View>
              </View>
            </View>

            <View style={styles.pendingUnitContainer}>
              <View style={{ gap: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.pendingText}>Order 3543GHJ</Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/download.png')}
                      style={{ width: 24, height: 24 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>20/03/2023,</Text>
                  <Text>12:00AM</Text>
                </View>
                <View style={{ backgroundColor: 'rgba(90, 203, 90, 0.08)', width: 140, height: 41, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                  <Text style={{ padding: 3, color: '#38B000' }}>Payment Successful</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={{ margin: 10 }}>
        {activeTab === 'Completed' && (
          <ScrollView style={{ flexGrow: 1 }}>
            <View style={styles.completedContainer}>
              <View style={styles.completedUnitContainer}>
                <View style={{ gap: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.completedText}>Order 2216JKH</Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/download.png')}
                        style={{ width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>20/03/2023,</Text>
                    <Text>12:00AM</Text>
                  </View>
                  <View style={{ backgroundColor: 'rgba(90, 203, 90, 0.08)', width: 104, height: 41, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                    <Text style={{ padding: 3, color: '#38B000' }}>Order delivered</Text>
                  </View>
                </View>
              </View>

              <View style={styles.completedUnitContainer}>
                <View style={{ gap: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.completedText}>Order 3543GHJ</Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/download.png')}
                        style={{ width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>20/03/2023,</Text>
                    <Text>12:00AM</Text>
                  </View>
                  <View style={{ backgroundColor: 'rgba(90, 203, 90, 0.08)', width: 104, height: 41, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                    <Text style={{ padding: 3, color: '#38B000' }}>Order delivered</Text>
                  </View>
                </View>
              </View>

              <View style={styles.completedUnitContainer}>
                <View style={{ gap: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.completedText}>Order 3543GHJ</Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/download.png')}
                        style={{ width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>20/03/2023,</Text>
                    <Text>12:00AM</Text>
                  </View>
                  <View style={{ backgroundColor: 'rgba(90, 203, 90, 0.08)', width: 104, height: 41, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                    <Text style={{ padding: 3, color: '#38B000' }}>Order delivered</Text>
                  </View>
                </View>
              </View>

              <View style={styles.completedUnitContainer}>
                <View style={{ gap: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.completedText}>Order 3543GHJ</Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/download.png')}
                        style={{ width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>20/03/2023,</Text>
                    <Text>12:00AM</Text>
                  </View>
                  <View style={{ backgroundColor: 'rgba(90, 203, 90, 0.08)', width: 104, height: 41, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                    <Text style={{ padding: 3, color: '#38B000' }}>Order delivered</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 98,
    width: '100%',
    backgroundColor: "#C3FBAB",
    justifyContent: 'center',
  },
  headerText: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 28,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 5,
    marginTop: 30,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeTab: {
    backgroundColor: '#fff',
    width: 106,
    height: 43,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: '#38B000',
    flexDirection: 'row', // Added flexDirection to align items horizontally
  },
  inactiveTab: {
    backgroundColor: '#fff',
    width: 131,
    height: 43,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: '#D9D9D9',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: 'green',
  },
  inactiveTabText: {
    color: '#D9D9D9',
  },
  pendingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
    gap: 20,
    marginTop: 20,
    width: '100%'
  },

  pendingUnitContainer: {
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 30,
    // width: 328,
    width: '100%',
    height: 145,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  completedContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
    gap: 20,
    marginTop: 20,
  },

  completedUnitContainer: {
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 30,
    // width: 328,
    width: '100%',
    height: 145,
    paddingHorizontal: 20,
    paddingVertical: 20,

  },
  completedText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default Orders;
