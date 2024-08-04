import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Image, StatusBar, TouchableOpacity, Dimensions, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
 
const COLORS = { Primary: '#282534', white: '#fff', lightYellow: '#FFF5BE', lightGreen: '#BEFFC1'};

const MARGIN ={marginLeft: 10}

const slides = [
  {
    id: '1',
    image: require('../assets/welcom-img-1.png'),
    title: 'Your One-Stop Destination For Fresh Food Shopping',
    subtitle: 'Buy Now: Instantly purchase your favourite items with a click of a button. Convenience at your fingertips! ',
    imgObj1: require('../assets/ellipse-com-img-1.png'),
    imgObj2: require('../assets/ellipse-com-img-2.png'),
    backgroundColor: `${COLORS.lightYellow}`,
    text1: 'Instant, convenient, love the quality!',
    text2: 'Quick, easy, fresh - my favorite!'
  },
  {
    id: '2',
    image: require('../assets/welcom-img-2.png'),
    title: 'Discover the Freshest Selection',
    subtitle: 'Group Buy: Join forces with friends, family, and neighbours to enjoy bulk discounts on quality produce. The more, the merrier! ',
    imgObj1: require('../assets/ellipse-em-img-1.png'),
    imgObj2: require('../assets/ellipse-em-img-2.png'),
    backgroundColor: `${COLORS.lightGreen}`,
    text1: 'Save big, shop together, win-win',
    text2: 'Community savings, fresh food, great bonding!',
  },
  {
    id: '3',
    image: require('../assets/welcom-img-3.png'),
    title: 'Shop Your Way',
    subtitle: 'Shopping List: Plan ahead and organize your shopping with ease. Create lists, share with loved ones, and never forget an item again. ',
    imgObj1: require('../assets/ellipse-mm-img-3.png'),
    imgObj2: require('../assets/ellipse-mm-img-4.png'),
    backgroundColor: `${COLORS.white}`,
    text1: 'Save big, shop together, win-win',
    text2: 'Community savings, fresh food, great bonding!'
  }
];

const Slide = ({ item, index, currentSlideIndex }) => {
  return (
    <View style={[styles.slideContainer, { backgroundColor: item.backgroundColor }]}>
      <View>
        <View  style={[styles.welcome]}>
          <Image
            source={require('../assets/logo-new.png')}
            style={{ height: 45, width: 36, resizeMode: 'contain', marginTop: 10 }}
          />
          <TouchableOpacity>
              <Text style={{ fontWeight: 600,  fontSize: 20, color: '#000', margin: 15 }}>
                Welcome to Apere
              </Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={item?.image}
          style={{ height: 239, width: 239, resizeMode: 'contain', position: 'relative',  borderWidth: 2,
          borderColor: 'black', borderRadius: 15}}
        />
          <View style={{ position: 'absolute', top: 30, left: 0, backgroundColor: '#000', width: 122, height: 21, alignItems: 'center', justifyContent: 'center', borderTopEndRadius: 10, borderBottomStartRadius: 10, borderTopStartRadius: 10 }}><Text style={{ color: slides[currentSlideIndex].backgroundColor, fontSize: 7}}>{item?.text1}</Text></View>
          <View style={{ position: 'absolute', top:130 , right: 10, backgroundColor: '#000', width: 122, height: 21, alignItems: 'center', justifyContent: 'center', borderTopStartRadius: 10, borderTopEndRadius: 10, borderBottomEndRadius: 10 }}><Text style={{ color: slides[currentSlideIndex].backgroundColor, fontSize: 6}}>{item?.text2}</Text></View>
        <View style={{ position: 'absolute', bottom: 150, right: 0 }}>
          <Image 
            source={item?.imgObj1}       
          />
          <Image 
            source={item?.imgObj2}
            style={{right: 40, top: -18}}          
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
          {/* Render indicator */}
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                currentSlideIndex === i && { backgroundColor: '#000', width: 54 },
              ]}
            />
          ))}
        </View>
        <View style={styles.titletexts}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const Onboarding = () => {
  const navigation = useNavigation();
  const goToRegisterScreen = () => {
    navigation.navigate('Register'); // Replace 'RegisterScreen' with the actual name of your screen
  };

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSlideIndex + 1) % slides.length;
      setCurrentSlideIndex(nextIndex);
      ref.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 4000); // Change this value to adjust the interval duration

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const updateCurrentSlideIndex = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

 
  const Footer = ( item) => {
    return (
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        {currentSlideIndex === slides.length - 1 ? (
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.btn,
              {
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 30,
                marginRight: 15,
              },
            ]}
            onPress={goToLoginScreen}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: '#000',
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToRegisterScreen}
            style={[styles.btn, { backgroundColor:'#000', borderRadius: 30}]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: slides[currentSlideIndex].backgroundColor
              }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        ) : (
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.btn,
                {
                  borderColor: '#000',
                  borderWidth: 1,
                  borderRadius: 30,
                  marginRight: 15,
                },
              ]}
              onPress={skip}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000',
                }}>
                SKIP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={goToNextSlide}
              style={[styles.btn, { backgroundColor:'#000', borderRadius: 30}]}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: slides[currentSlideIndex].backgroundColor
                }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: slides[currentSlideIndex].backgroundColor }}>
      <StatusBar backgroundColor={slides[currentSlideIndex].backgroundColor} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item, index }) => (
          <Slide item={item} index={index} currentSlideIndex={currentSlideIndex} />
        )}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    width,
    height: `100%`,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontWeight: 700,
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    margin: 10,
  },
  subtitle: {
    color: '#000',
    fontSize: 16,
    marginTop: 3,
    maxWidth: 345,
   alignItems: 'flex-start',
    lineHeight: 23,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    width: 300,
    alignItems: 'flex-start',
    
  },
  indicator: {
    height: 2.5,
    width: 2.5,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    marginBottom: 80,
    height: 44,
    width: 150,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletexts: {
    marginTop: 20,
    height: 142,
    width: 319
  }
});

export default Onboarding;
