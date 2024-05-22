/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {text} from '../text';
import {colors} from '../colors';
import BtnHamburger from '../components/BtnHamburger';

const HomeScreen = ({navigation}) => {
  const [dataUser, setDataUser] = useState([]);
  const [role, setRole] = useState(null);
  const [isSkrining, setIsSkrining] = useState(true);
  const dataMenu = [
    {
      icon: require('../sourcefile/imgs/menu_info.png'),
      title: 'Info TBC',
      route: 'MenuInfo',
    },
    {
      icon: require('../sourcefile/imgs/menu_artikel.png'),
      title: 'Artikel TBC',
      route: 'MenuArtikel',
    },
    {
      icon: require('../sourcefile/imgs/menu_reminder.png'),
      title: 'Reminder',
      route: 'Reminder',
    },
    {
      icon: require('../sourcefile/imgs/menu_pkm.png'),
      title: 'Info PKM',
      route: 'MenuPKM',
    },
    {
      icon: require('../sourcefile/imgs/menu_makanan.png'),
      title: 'Makan Sehat',
      route: 'MenuMakanSehat',
    },
    {
      icon: require('../sourcefile/imgs/menu_video.png'),
      title: 'Video Edukasi',
      route: 'MenuVideoEdukasi',
    },
  ];

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

  useEffect(() => {
    if (role === 'umum') {
      AsyncStorage.getItem('data_skrining')
        .then(dataSkrining => {
          if (dataSkrining !== null) {
            const data = dataSkrining;
            console.log('Data Skrining:', data);
            setIsSkrining(true);
          } else {
            console.log('Tidak ada data skrining UMUM yang tersimpan.');
            setIsSkrining(false);
          }
        })
        .catch(error => {
          console.error('Gagal mengambil data JSON:', error);
        });
    } else if (role === 'pasien') {
      AsyncStorage.getItem('data_skrining_pasien')
        .then(dataSkrining => {
          if (dataSkrining !== null) {
            const data = dataSkrining;
            setIsSkrining(true);
            console.log('Data Skrining pasien:', data);
          } else {
            console.log('Tidak ada data skrining PASIEN yang tersimpan.');
            navigation.navigate('LembarPersetujuan', {
              page: 'Lembar Persetujuan',
            });
          }
        })
        .catch(error => {
          console.error('Gagal mengambil data JSON:', error);
        });
    }
  }, [navigation, role]);

  const handleClickMenu = (screen, title) => {
    navigation.navigate(screen, {page: title});
  };

  const moveToLembarPersetujuan = () => {
    navigation.navigate('LembarPersetujuan', {page: 'Lembar Persetujuan'});
  };

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
        <BtnHamburger navigation={navigation} />
      </View>
      <View style={styles.contentContainerMid}>
        <Text style={styles.welcomeMsg}>Selamat Datang!</Text>
        <Text style={styles.nama}>
          {dataUser.nama_lengkap !== '' ? dataUser.nama_lengkap : 'Hallo, User'}
        </Text>
        {isSkrining ? (
          <Text style={styles.selamatMsg}>
            Terimakasih sudah melakukan skrining
          </Text>
        ) : (
          ''
        )}
        {!isSkrining ? (
          <View style={[{position: 'absolute', bottom: 0, right: '5%'}]}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 8,
              }}
              onPress={moveToLembarPersetujuan}>
              <Text
                style={{color: '#ffffff', fontFamily: text.bold, fontSize: 18}}>
                Lakukan Skrining Mandiri
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          ''
        )}
      </View>
      <View style={styles.contentContainerBottom}>
        <View style={styles.wrapIconMenu}>
          {dataMenu.map((data, index) => (
            <TouchableOpacity
              style={styles.wrapIconText}
              key={index}
              onPress={() => handleClickMenu(data.route, data.title)}>
              <Image source={data.icon} style={styles.iconMenu} />
              <Text style={styles.title}>{data.title}</Text>
            </TouchableOpacity>
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
    zIndex: -1,
  },
  welcomeMsg: {
    fontFamily: text.light,
    fontSize: 30,
    color: colors.fontColor,
  },
  selamatMsg: {
    fontFamily: text.lightItalic,
    fontSize: 18,
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
    zIndex: -22,
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
