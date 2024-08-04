import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

const SearchProduct = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (typeof onSearch === 'function') {
      onSearch(query);
    } else {
      // Optionally, handle the case where onSearch is not a function
      console.error("onSearch is not a function.");
    }
  };

  return (

    <View style={{width: '100%', paddingHorizontal: 20}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#EAEAEA', padding: 10, marginBottom: 10, borderRadius: 10, }}>
        {/* Search icon */}
        <Feather name="search" size={20} color="black" style={{ marginRight: 10 }} />
        {/* TextInput with placeholder */}
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search"
          onChangeText={handleSearch}
        />
      </View>

    </View>

  )
}

export default SearchProduct

const styles = StyleSheet.create({})