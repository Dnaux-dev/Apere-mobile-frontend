import React, { useRef, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image: require('../assets/app-banner.png')
    },
    {
      id: 2,
      image: require('../assets/app-banner-2.png')
    },
  ];

  const flatListRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next slide
      currentIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
    }, 3000); // Change slide every 3 seconds

    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const renderItem = ({ item, index }) => (
  <View style={[styles.slide, index === 0 && styles.firstSlide]}>
    <Image source={item.image} style={[styles.image, index === 0 && styles.firstImage]} resizeMode="contain" />
  </View>
);


  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={375}
      decelerationRate='fast'
      snapToAlignment='start'
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 11,
    width: 353,
    height: 75
  },
  image: {
    width: 343,
    height: 75,
    marginRight: 30
  }
});

export default BannerSlider;
