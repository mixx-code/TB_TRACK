/* eslint-disable prettier/prettier */
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      moveTo();
    }, 1500);
  }, []);
  const moveTo = () => {
    navigation.replace('LandingScreen');
  };
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../sourcefile/imgs/logo.png')}
        style={styles.logoImg}
      />
      <ActivityIndicator color="red" size="large" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoImg: {
    width: 353,
    height: 353,
  },
});
