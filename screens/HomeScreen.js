/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {text} from '../text';
import {colors} from '../colors';

const HomeScreen = () => {
  const dataMenu = [
    {
      icon: require('../sourcefile/imgs/menu_info.png'),
      title: 'Info TBC',
    },
    {
      icon: require('../sourcefile/imgs/menu_artikel.png'),
      title: 'Artikel TBC',
    },
    {
      icon: require('../sourcefile/imgs/menu_remainder.png'),
      title: 'Remainder',
    },
    {
      icon: require('../sourcefile/imgs/menu_pkm.png'),
      title: 'Info PKM',
    },
    {
      icon: require('../sourcefile/imgs/menu_makanan.png'),
      title: 'Makan Sehat',
    },
    {
      icon: require('../sourcefile/imgs/menu_video.png'),
      title: 'Video Edukasi',
    },
  ];

  useEffect(() => {
    AsyncStorage.getItem('data_user')
      .then(jsonData => {
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
          console.log('Data user JSON:', data);
        } else {
          console.log('Tidak ada data JSON yang tersimpan.');
        }
      })
      .catch(error => {
        console.error('Gagal mengambil data JSON:', error);
      });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <Image
          source={require('../sourcefile/imgs/logo.png')}
          style={styles.logoImg}
        />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
        <Image
          source={require('../sourcefile/imgs/logo.png')}
          style={styles.logoImg}
        />
      </View>
      <View style={styles.contentContainerMid}>
        <Text style={styles.welcomeMsg}>Selamat Datang!</Text>
        <Text style={styles.nama}>MIA ATSAMU</Text>
      </View>
      <View style={styles.contentContainerBottom}>
        <View style={styles.wrapIconMenu}>
          {dataMenu.map((data, index) => (
            <View style={styles.wrapIconText} key={index}>
              <Image source={data.icon} style={styles.iconMenu} />
              <Text style={styles.title}>{data.title}</Text>
            </View>
          ))}
        </View>
        <Image
          source={require('../sourcefile/imgs/Vector_bawah.jpg')}
          style={styles.vectorBawah}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contentContainerTop: {
    position: 'relative',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainerMid: {
    width: '100%',
    height: '15%',
    paddingHorizontal: 20,
  },
  welcomeMsg: {
    fontFamily: text.light,
    fontSize: 30,
    color: colors.fontColor,
  },
  nama: {
    fontFamily: text.medium,
    fontSize: 40,
    color: colors.secondary,
  },
  contentContainerBottom: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    position: 'relative',
  },
  logoImg: {
    width: 353 / 1.5 / 2 / 1.2,
    height: 353 / 1.5 / 2 / 1.2,
  },
  vectorBawah: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 330,
    zIndex: -10,
  },
  vectorAtas: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    zIndex: -1,
  },
  wrapIconMenu: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    paddingTop: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconMenu: {
    width: 55,
    height: 55,
  },
  wrapIconText: {
    width: 80,
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    color: colors.fontColor,
    width: '100%',
    textAlign: 'center',
  },
});
