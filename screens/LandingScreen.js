/* eslint-disable prettier/prettier */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import BtnPasien from '../components/BtnPasien';
import BtnUmum from '../components/BtnUmum';
const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <Image
          source={require('../sourcefile/imgs/logo.png')}
          style={styles.logoImg}
        />
      </View>
      <View style={styles.contentContainerBottom}>
        <View style={styles.wrapBtn}>
          <BtnPasien navigation={navigation} />
          <BtnUmum />
        </View>
        <Image
          source={require('../sourcefile/imgs/Vector_bawah.jpg')}
          style={styles.vectorBawah}
        />
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contentContainerTop: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerBottom: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    position: 'relative',
  },
  logoImg: {
    width: 353 / 1.5,
    height: 353 / 1.5,
  },
  vectorBawah: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 330,
    zIndex: -10,
  },
  wrapBtn: {
    width: '100%',
    gap: 30,
    paddingTop: '30%',
    alignItems: 'center',
  },
});
