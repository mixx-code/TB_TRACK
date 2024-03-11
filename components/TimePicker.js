/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Pressable, Alert, Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import {addAlarm} from '../actions/alarms';
import PushNotification, {Importance} from 'react-native-push-notification';

const TimePicker = props => {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [timeValue, setTimeValue] = useState('');
  const [dateValue, setDateValue] = useState('');

  const [id, setId] = useState(0);

  const cancelNotificationOnDate = (notificationId, cancelDate) => {
    // Konversi tanggal menjadi detik UNIX
    const cancelTime = cancelDate.getTime() / 1000;
    console.log('id', notificationId);
    console.log('cancel date', cancelDate);
    // Batalkan notifikasi dengan id yang ditentukan pada waktu tertentu
    PushNotification.cancelLocalNotifications({
      id: `${notificationId}`,
      date: new Date(cancelTime),
    });
  };

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
    setDateValue(tgl);
    console.log('ini date : ', tgl);
    hideDatePicker();
  };

  const handleDateTimePicker = dateTime => {
    var currentTime = Date.now();
    if (dateTime.getTime() < currentTime) {
      Alert.alert('Please choose future time');
      hideDateTimePicker();
      return;
    }
    const fireDate = dateTime;
    console.log('ini dateTime : ', dateTime);
    console.log('ini fireDate : ', fireDate);
    const alarmNotifData = {
      channelId: 'alarm-channel',
      ticker: 'My Notification Message',
      id: generateId(),
      title: 'Alarm Ringing',
      message: 'Message Here',
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
    props.add(alarmNotifData);
    console.log('ID: ' + alarmNotifData.id);

    PushNotification.localNotificationSchedule({
      channelId: 'alarm-channel',
      title: alarmNotifData.title,
      id: alarmNotifData.id,
      message: alarmNotifData.message,
      date: alarmNotifData.fire_date,
      soundName: 'default',
      actions: ['Snooze', 'Stop Alarm'],
      importance: Importance.HIGH,
      playSound: true,
      allowWhileIdle: true,
      invokeApp: true,
      repeatType: 'day',
      repeatTime: 24 * 60 * 60,
    });
    cancelNotificationOnDate(alarmNotifData.id, dateValue);
    hideDateTimePicker();
  };

  return (
    <>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          showDatePicker(),
            //handleNotification(),
            console.log('ShowDateTime');
        }}>
        <Text style={styles.buttonText}>tgl berakhir</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          showDateTimePicker(),
            //handleNotification(),
            console.log('ShowDateTime');
        }}>
        <Text style={styles.buttonText}>+ Add Alarm</Text>
      </Pressable>
      <DateTimePicker
        mode="time"
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
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 15,
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
