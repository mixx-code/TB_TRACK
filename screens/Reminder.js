/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListAlarms from '../components/ListAlarms';
import TimePicker from '../components/TimePicker';
import BtnBack from '../components/BtnBack';
import {colors} from '../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {text} from '../text';

const Reminder = ({navigation, route}) => {
  const {page} = route.params;

  const [dataTime, setDataTime] = useState('');
  const [tglAkhir, setTglAkhir] = useState('');
  console.log('parsing data : ', dataTime);

  // useEffect(() => {
  //   createChannels();
  // }, []);

  // const createChannels = () => {
  //   PushNotification.createChannel({
  //     channelId: 'test-channel',
  //     channelName: 'Test Channel',
  //     channelDescription: 'A channel to categorise your notifications',
  //   });
  // };

  // const handleNotification = () => {
  //   PushNotification.cancelAllLocalNotifications();

  //   PushNotification.localNotificationSchedule({
  //     channelId: 'test-channel',
  //     title: 'Alarm Ringing',

  //     message: 'Message Here',
  //     actions: ['Accept', 'Reject'],
  //     date: new Date(Date.now() + 100),
  //     allowWhileIdle: true,
  //     invokeApp: false,
  //     repeatType: 'day',
  //   });

  //   PushNotification.configure({
  //     onAction: function (notification) {
  //       if (notification.action === 'Accept') {
  //         console.log('Alarm Snoozed');
  //       } else if (notification.action === 'Reject') {
  //         console.log('Alarm Stoped');
  //         //PushNotification.cancelAllLocalNotifications();
  //       } else {
  //         console.log('Notification opened');
  //       }
  //     },
  //     actions: ['Accept', 'Reject'],
  //   });
  // };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <BtnBack navigation={navigation} title={page} />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
      </View>
      <View style={styles.contentContainerMid}>
        <SafeAreaView style={styles.listAlarms}>
          <ListAlarms
            navigation={navigation}
            dataDateTime={dataTime}
            dataTglAkhir={tglAkhir}
          />
        </SafeAreaView>
      </View>
      <View style={styles.contentContainerBottom}>
        <View style={styles.timePicker}>
          <TimePicker
            sandDataTime={data => setDataTime(data)}
            sandTglAkhir={tglAkhir => setTglAkhir(tglAkhir)}
          />
          <View style={styles.cardCatatan}>
            <Text
              style={{
                fontFamily: text.bold,
                fontSize: 18,
                color: colors.fontColor,
              }}>
              Catatan :{' '}
            </Text>
            <Text
              style={{
                fontFamily: text.light,
                fontSize: 16,
                color: colors.fontColor,
                textAlign: 'justify',
              }}>
              1. Jenis obat yang harus diminum ditentukan oleh Dokter.
            </Text>
            <Text
              style={{
                fontFamily: text.light,
                fontSize: 16,
                color: colors.fontColor,
                textAlign: 'justify',
              }}>
              2. Obat biasanya diminum setiap hari sesuai anjuran dari Dokter.
            </Text>
            <Text
              style={{
                fontFamily: text.light,
                fontSize: 16,
                color: colors.fontColor,
                textAlign: 'justify',
              }}>
              3. Untuk sebagian besar pasien, lebih baik obat diminum saat
              kondisi perut kosong.
            </Text>
            <Text
              style={{
                fontFamily: text.boldItalic,
                fontSize: 16,
                color: colors.fontColor,
                textAlign: 'justify',
              }}>
              4. Setelah HP mati/restart, buka aplikasi ini kembali agar alarm
              dapat aktif kembali.
            </Text>
            <Text
              style={{
                fontFamily: text.light,
                fontSize: 16,
                color: colors.fontColor,
                textAlign: 'justify',
              }}>
              5. Semoga Anda cepat pulih dan sembuh.
            </Text>
          </View>
        </View>
        <Image
          source={require('../sourcefile/imgs/Vector_bawah.jpg')}
          style={styles.vectorBawah}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // mainContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
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
  contentContainerMid: {
    width: '100%',
    height: '30%',
    paddingHorizontal: 20,
    zIndex: -1,
  },
  contentContainerBottom: {
    width: '100%',
    height: '60%',
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
  heading: {
    fontSize: 25,
    padding: 20,
    color: 'black',
  },
  timePicker: {
    paddingTop: '10%',
    width: '100%',
    alignItems: 'center',
    bottom: 20,
  },
  listAlarms: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 25,
  },
  cardCatatan: {
    width: '90%',
    minHeight: '65%',
    backgroundColor: '#FCFCFC',
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: '10%',
    padding: 10,
    gap: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});

export default Reminder;
