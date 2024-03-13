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
import React, {useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import CheckBox from '@react-native-community/checkbox';
const LembarPersetujuan = ({navigation, route}) => {
  const {page} = route.params;
  const [isChecked, setIsChecked] = useState(false);

  // const handleCheckBoxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  console.log(page);
  console.log(isChecked);
  const poinPersetujuan = [
    {
      no: 1,
      text: `Saya menyetujui kebijakan privasi dan persyaratan aplikasi`,
    },
    {
      no: 2,
      text: `Saya bertanggung jawab atas informasi yang saya berikan`,
    },
    {
      no: 3,
      text: `Saya akan menjaga kerahasiaan akun saya`,
    },
    {
      no: 4,
      text: `Saya setuju untuk menerima pembaruan dan pemberitahuan dari aplikasi`,
    },
    {
      no: 5,
      text: `Saya memahami dan setuju dengan konsekuensi yang timbul dari pelanggaran aturan aplikasi`,
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
        {/* <CheckBox value={isChecked} onValueChange={handleCheckBoxChange} /> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: '20%',
          }}>
          <CheckBox
            disabled={false}
            value={isChecked}
            onValueChange={newValue => setIsChecked(newValue)}
          />
          <Text style={{color: colors.fontColor}}>Ya, saya setuju</Text>
        </View>
        <TouchableOpacity
          style={[styles.btn, !isChecked ? {backgroundColor: '#ffffff'} : '']}
          disabled={!isChecked}>
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
