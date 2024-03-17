/* eslint-disable prettier/prettier */
import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BtnPasien from '../components/BtnPasien';
import BtnUmum from '../components/BtnUmum';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LandingScreen = ({navigation}) => {
  const [dataUser, setDataUser] = useState([]);
  const [role, setRole] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('data_user')
      .then(jsonData => {
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
          setDataUser(data);
          setRole(data.role);
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
      </View>
      <View style={styles.contentContainerBottom}>
        <View style={styles.wrapBtn}>
          {role === 'pasien' ? (
            <BtnPasien navigation={navigation} />
          ) : (
            <>
              <BtnPasien navigation={navigation} />
              <BtnUmum navigation={navigation} />
            </>
          )}
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
