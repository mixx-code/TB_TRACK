/* eslint-disable prettier/prettier */
// import {Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
// import PushNotification from 'react-native-push-notification';
import configureStore from './store';
import {Provider} from 'react-redux';
import Reminder from './screens/Reminder';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import InfoTBC from './screens/InfoTBC';
import ArtikelTBC from './screens/ArtikelTBC';
import DetailArtikel from './screens/DetailArtikel';
import LembarPersetujuan from './screens/LemberPersetujuan';
import Skrining from './screens/Skrining';
import SkriningUmum from './screens/SkriningUmum';
import InfoPKM from './screens/InfoPKM';
import PolaMakan from './screens/PolaMakan';
import VideoEdukasi from './screens/VideoEdukasi';
import DetailJadwalPelayanan from './screens/DetailJadwalPelayanan';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification, {Importance} from 'react-native-push-notification';
import FormReminder from './screens/FormReminder';
import BackgroundTimer from 'react-native-background-timer';
const Stack = createNativeStackNavigator();
const store = configureStore();
const App = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  // PushNotification.configure({
  //   onRegister: function (token) {
  //     //console.log("TOKEN:", token);
  //   },

  //   onNotification: function (notification) {
  //     console.log('NOTIFICATION:', notification);
  //     notification.finish(PushNotificationIOS.FetchResult.NoData);
  //   },

  //   onAction: function (notification) {
  //     console.log('ACTION:', notification.action);
  //     console.log('NOTIFICATION:', notification);

  //     // process the action
  //   },

  //   onRegistrationError: function (err) {
  //     console.error(err.message, err);
  //   },

  //   permissions: {
  //     alert: true,
  //     badge: true,
  //     sound: true,
  //   },
  //   popInitialNotification: true,
  //   requestPermissions: Platform.OS === 'ios',
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await AsyncStorage.getItem('data_alarm');
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
          console.log(data.fire_date);
          console.log(data.title);
          console.log(data.id);
          console.log(data.message);
          const date = data.fire_date;
          const title = data.title;
          const id = data.id;
          const message = data.message;
          setDate(date);
          setId(id);
          setMessage(message);
          setTitle(title);
        } else {
          console.log('Tidak ada data JSON yang tersimpan.');
        }
      } catch (error) {
        console.error('Gagal mengambil data JSON:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const dataTglBerakhirAlarm = await AsyncStorage.getItem(
  //         'tanggal_alarm_berakhir',
  //       );
  //       if (dataTglBerakhirAlarm !== null) {
  //         const data = dataTglBerakhirAlarm;
  //         console.log('tanggal_alarm_berakhir : ', data);
  //         const tanggalAlarmBerakhir = data.slice(1, 25);
  //         const tanggalHariIni = new Date();
  //         console.log('tgl hari ini', tanggalHariIni);
  //         console.log('tgl akhir', tanggalAlarmBerakhir);

  //         if (tanggalHariIni > new Date(tanggalAlarmBerakhir)) {
  //           console.log(
  //             'Tanggal hari ini lebih besar dari tanggal alarm berakhir',
  //           );
  //           PushNotification.cancelLocalNotification(1);
  //           await AsyncStorage.removeItem('data_alarm');
  //           await AsyncStorage.removeItem('tanggal_alarm_berakhir');
  //         } else {
  //           console.log(
  //             'Tanggal hari ini tidak lebih besar dari tanggal alarm berakhir',
  //           );
  //         }
  //       } else {
  //         console.log('Tidak ada data JSON yang tersimpan.');
  //       }
  //     } catch (error) {
  //       console.error('Gagal mengambil data JSON:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const setAlarm = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'alarm-channel',
      title: title,
      id: id,
      message: message,
      date: date,
      soundName: 'alarm_tone',
      actions: ['Snooze', 'Stop Alarm'],
      importance: Importance.HIGH,
      playSound: true,
      allowWhileIdle: true,
      invokeApp: true,
      // repeatType: 'day',
      // repeatTime: 24 * 60 * 60,
      repeatType: 'minute',
      repeatTime: 5,
      // repeatTime: 1440,
    });
  };

  useEffect(() => {
    const intervalId = BackgroundTimer.setInterval(() => {
      // Kode yang dijalankan di latar belakang
      const fetchData = async () => {
        try {
          const dataTglBerakhirAlarm = await AsyncStorage.getItem(
            'tanggal_alarm_berakhir',
          );
          if (dataTglBerakhirAlarm !== null) {
            const data = dataTglBerakhirAlarm;
            console.log('tanggal_alarm_berakhir : ', data);
            const tanggalAlarmBerakhir = data.slice(1, 25);
            const tanggalHariIni = new Date();
            console.log('tgl hari ini', tanggalHariIni);
            console.log('tgl akhir', tanggalAlarmBerakhir);

            if (tanggalHariIni > new Date(tanggalAlarmBerakhir)) {
              console.log(
                'Tanggal hari ini lebih besar dari tanggal alarm berakhir',
              );
              PushNotification.cancelLocalNotification(1);
              await AsyncStorage.removeItem('data_alarm');
              await AsyncStorage.removeItem('tanggal_alarm_berakhir');
            } else {
              console.log(
                'Tanggal hari ini tidak lebih besar dari tanggal alarm berakhir',
              );
            }
          } else {
            console.log('Tidak ada data JSON yang tersimpan.');
          }
        } catch (error) {
          console.error('Gagal mengambil data JSON:', error);
        }
      };
      fetchData();
    }, 5000); // Interval dalam milidetik

    return () => {
      // Hapus interval saat komponen dibongkar
      BackgroundTimer.clearInterval(intervalId);
    };
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}>
          <Stack.Screen name="Reminder" component={Reminder} />
          <Stack.Screen name="FormReminder" component={FormReminder} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MenuInfo" component={InfoTBC} />
          <Stack.Screen name="MenuPKM" component={InfoPKM} />
          <Stack.Screen name="MenuMakanSehat" component={PolaMakan} />
          <Stack.Screen name="MenuVideoEdukasi" component={VideoEdukasi} />
          <Stack.Screen name="MenuArtikel" component={ArtikelTBC} />
          <Stack.Screen name="DetailArtikel" component={DetailArtikel} />
          <Stack.Screen
            name="LembarPersetujuan"
            component={LembarPersetujuan}
          />
          <Stack.Screen name="Skrining" component={Skrining} />
          <Stack.Screen name="SkriningUmum" component={SkriningUmum} />
          <Stack.Screen
            name="DetailJadwalPelayanan"
            component={DetailJadwalPelayanan}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
