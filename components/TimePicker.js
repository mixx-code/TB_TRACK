/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Pressable, Alert, Text, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import {addAlarm} from '../actions/alarms';
import PushNotification, {Importance} from 'react-native-push-notification';
import {colors} from '../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimePicker = ({sandDataTime, sandTglAkhir}) => {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [berhasilBuatAlarm, setBerhasilBuatAlarm] = useState(false);
  const [berhasilBuatTglAkhir, setBerhasilBuatTglAkhir] = useState(false);
  // const [timeValue, setTimeValue] = useState('');
  // const [dateValue, setDateValue] = useState('');

  const [id, setId] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('data_alarm')
      .then(jsonData => {
        if (jsonData !== null) {
          setBerhasilBuatAlarm(true);
        } else {
          console.log('Tidak ada data JSON yang tersimpan.');
        }
      })
      .catch(error => {
        console.error('Gagal mengambil data JSON:', error);
      });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataTglBerakhirAlarm = await AsyncStorage.getItem(
          'tanggal_alarm_berakhir',
        );
        if (dataTglBerakhirAlarm !== null) {
          setBerhasilBuatTglAkhir(true);
        } else {
          setBerhasilBuatTglAkhir(false);
          console.log('Tidak ada data JSON yang tersimpan.');
        }
      } catch (error) {
        console.error('Gagal mengambil data JSON:', error);
      }
    };
    fetchData();
  }, []);

  // const cancelNotificationOnDate = (notificationId, cancelDate) => {
  //   // Konversi tanggal menjadi detik UNIX
  //   const cancelTime = cancelDate.getTime() / 1000;
  //   console.log('id', notificationId);
  //   console.log('cancel date', cancelDate);
  //   // Batalkan notifikasi dengan id yang ditentukan pada waktu tertentu
  //   PushNotification.cancelLocalNotifications({
  //     id: `${notificationId}`,
  //     date: new Date(cancelTime),
  //   });
  // };

  useEffect(() => {
    createChannels();
  }, []);

  const generateId = () => {
    const newId = id + 1;
    setId(newId);
    return newId;
  };

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'alarm-channel',
      channelName: 'Alarm Channel',
    });
  };

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };
  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };
  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const handleDatePicker = date => {
    const dateString = date.toISOString();
    const tgl = dateString.substring(0, dateString.indexOf('T'));
    sandTglAkhir(tgl);
    setBerhasilBuatTglAkhir(true);
    AsyncStorage.setItem('tanggal_alarm_berakhir', JSON.stringify(dateString))
      .then(() => {
        console.log('Data tanggal_alarm_berakhir JSON tersimpan.');
      })
      .catch(error => {
        console.error(
          'Gagal menyimpan tanggal_alarm_berakhir alarm JSON:',
          error,
        );
      });
    // setDateValue(tgl);
    console.log('ini date : ', tgl);

    hideDatePicker();
  };

  const handleDateTimePicker = dateTime => {
    console.log(dateTime);
    var currentTime = Date.now();
    if (dateTime.getTime() < currentTime) {
      Alert.alert('Please choose future time');
      hideDateTimePicker();
      return;
    }
    sandDataTime(dateTime);
    setBerhasilBuatAlarm(true);
    const fireDate = dateTime;
    console.log('ini dateTime : ', dateTime);
    console.log('ini fireDate : ', fireDate);
    sandDataTime(dateTime);
    const alarmNotifData = {
      channelId: 'alarm-channel',
      ticker: 'My Notification Message',
      id: generateId(),
      title: 'Alarm Minum Obat',
      message: 'Jangan lupa selalu minum abat yang diberikan dokter',
      autoCancel: true,
      vibrate: true,
      vibration: 100,
      smallIcon: 'ic_launcher',
      largeIcon: 'ic_launcher',
      playSound: true,
      soundName: 'alarm_tone',
      color: 'red',
      tag: 'some_tag',
      fire_date: fireDate,
      date: {value: dateTime},
    };
    // props.add(alarmNotifData);
    console.log('data alarm : ', alarmNotifData);
    AsyncStorage.setItem('data_alarm', JSON.stringify(alarmNotifData))
      .then(() => {
        console.log('Data alarm JSON tersimpan.');
      })
      .catch(error => {
        console.error('Gagal menyimpan data alarm JSON:', error);
      });
    console.log('ID: ' + alarmNotifData.id);

    PushNotification.localNotificationSchedule({
      channelId: 'alarm-channel',
      title: alarmNotifData.title,
      id: alarmNotifData.id,
      message: alarmNotifData.message,
      date: alarmNotifData.fire_date,
      soundName: 'alarm_tone',
      // actions: ['Snooze', 'Stop Alarm'],
      importance: Importance.HIGH,
      playSound: true,
      allowWhileIdle: true,
      invokeApp: true,
      // repeatType: 'day',
      // repeatTime: 24 * 60 * 60,
      repeatType: 'minute',
      repeatTime: 1440,
      // repeatTime: 1440,
    });
    Alert.alert(
      'Berhasil Pasang Alarm',
      [
        {
          text: 'Ya',
          onPress: () => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'HomeScreen'}],
            // });
          },
        },
      ],
      {cancelable: false},
    );
    // cancelNotificationOnDate(alarmNotifData.id, dateValue);
    hideDateTimePicker();
  };

  return (
    <View style={{flexDirection: 'row', gap: 30}}>
      <Pressable
        style={[
          styles.buttonStyle,
          berhasilBuatAlarm
            ? {backgroundColor: 'gray'}
            : {backgroundColor: colors.secondary},
        ]}
        disabled={berhasilBuatAlarm}
        onPress={() => {
          showDateTimePicker(),
            //handleNotification(),
            console.log('ShowDateTime');
        }}>
        <Text style={styles.buttonText}>Pasang Alarm</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonStyle, {backgroundColor: colors.primary}]}
        onPress={() => {
          showDatePicker(),
            //handleNotification(),
            console.log('ShowDateTime');
        }}>
        <Text style={styles.buttonText}>
          {berhasilBuatTglAkhir ? 'Edit Tgl Berakhir' : 'Tanggal Berakhir'}
        </Text>
      </Pressable>
      <DateTimePicker
        mode="datetime"
        isVisible={isDateTimePickerVisible}
        onConfirm={handleDateTimePicker}
        onCancel={hideDateTimePicker}
      />
      <DateTimePicker
        mode="date"
        isVisible={isDatePickerVisible}
        onConfirm={handleDatePicker}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 8,
    width: '40%',
    height: 40,
  },
  buttonText: {
    fontSize: 19,
    //fontWeight:'bold',
    color: 'white',
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    add: alarmNotifData => {
      dispatch(addAlarm(alarmNotifData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
