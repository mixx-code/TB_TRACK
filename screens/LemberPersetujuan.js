/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LembarPersetujuan = ({navigation, route}) => {
  const {page} = route.params;
  const [isChecked, setIsChecked] = useState(false);
  const [role, setRole] = useState(null);

  // const handleCheckBoxChange = () => {
  //   setIsChecked(!isChecked);
  // };
  useEffect(() => {
    AsyncStorage.getItem('data_user')
      .then(jsonData => {
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
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

  const moveTo = () => {
    const persetujuan = isChecked ? 'Setuju' : 'Tidak Setuju';
    console.log(persetujuan);
    AsyncStorage.setItem('data_persetujuan', persetujuan)
      .then(() => {
        console.log('Data PERSETUJUAN tersimpan.');
        if (role === 'pasien') {
          navigation.navigate('Skrining', {page: 'Skrining'});
        } else {
          navigation.navigate('SkriningUmum', {page: 'Skrining Umum'});
        }
      })
      .catch(error => {
        console.error('Gagal menyimpan data JSON:', error);
      });
  };

  console.log(page);
  console.log(isChecked);
  const poinPersetujuan = [
    {
      no: 1,
      text: `Skrining atau tes pemeriksaan untuk mengetahui kondisi kesehatan lebih detail ini dilakukan untuk deteksi dini penyakit Tuberkulosis (TB/TBC)`,
    },
    {
      no: 2,
      text: `Hasil dan tindak lanjut:\nSkrining umum terhubung dengan Puskesmas Kampung Sawah dengan pengisian data dasar skrining`,
    },
    {
      no: 3,
      text: `Seluruh data dalam formulir ini dijamin kerahasiaannya dari pihak – pihak yang tidak bertanggung jawab`,
    },
    {
      no: 4,
      text: `Saya sudah mengerti tujuan pengisian formular skrining ini `,
    },
    {
      no: 5,
      text: `Saya setuju untuk menerima pembaruan dan pemberitahuan dari aplikasi`,
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <BtnBack navigation={navigation} title={page} />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
      </View>
      <ScrollView style={{width: '100%', height: '90%'}}>
        <View style={styles.contentContainerBottom}>
          <View style={{width: '100%', paddingHorizontal: 35}}>
            <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
              <Text
                style={{
                  fontFamily: text.bold,
                  color: colors.fontColor,
                  fontSize: 21,
                }}>
                Lember Persetujuan
              </Text>
            </View>
            {poinPersetujuan.map((data, index) => (
              <View style={styles.wrapTextPoin} key={index}>
                <Text style={styles.textPoin}>{data.no}. </Text>
                <Text style={[styles.textPoin]}>{data.text}</Text>
              </View>
            ))}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={newValue => setIsChecked(newValue)}
                style={{width: 50, height: 50, marginRight: 10}}
                boxType="square"
              />
              <Text style={{color: colors.fontColor}}>Ya, saya setuju</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          width: '100%',
          alignItems: 'flex-end',
          paddingHorizontal: 10,
          marginBottom: 50,
        }}>
        <TouchableOpacity
          style={[styles.btn, !isChecked ? {backgroundColor: '#ffffff'} : '']}
          disabled={!isChecked}
          onPress={moveTo}>
          <Text
            style={[
              !isChecked ? {color: colors.secondary} : {color: '#ffffff'},
            ]}>
            Lanjutkan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LembarPersetujuan;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contentContainerTop: {
    position: 'relative',
    width: '100%',
    height: '10%',
    alignItems: 'flex-end',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.secondary,
  },
  contentContainerBottom: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
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
  wrapTextPoin: {width: '100%', flexDirection: 'row', marginVertical: 5},
  textPoin: {
    fontSize: 20,
    fontFamily: text.light,
    color: colors.fontColor,
  },
  btn: {
    width: '50%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderColor: '#F3B95F',
    borderWidth: 1,
    borderRadius: 8,
  },
});
