/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {deleteAlarm} from '../actions/alarms';
import PushNotification from 'react-native-push-notification';
import {text} from '../text';
import {colors} from '../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListAlarms = ({
  alarms,
  deleteAlarmState,
  navigation,
  dataDateTime,
  dataTglAkhir,
}) => {
  const keyExtractor = (item, index) => index.toString();
  const [jam, setJam] = useState('');
  const [menit, setMenit] = useState('');
  const [jamState, setJamState] = useState('');
  const [menitState, setMenitState] = useState('');
  const [dataAlarm, setDataAlarm] = useState([]);
  const [alarmOn, setAlarmOn] = useState(false);
  const [tglberakhir, setTglberakhir] = useState('');
  console.log('ayam : ', dataAlarm.id);
  // console.log('data alarmmm : ', alarms[0].alarmNotifData.date.value);
  // console.log('data alarmmm : ', alarms[0].alarmNotifData.id);
  if (dataDateTime !== '') {
    console.log(
      'data dataDateTime : ',
      new Date(dataDateTime.getTime() + 7 * 60 * 60 * 1000),
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataTglBerakhirAlarm = await AsyncStorage.getItem(
          'tanggal_alarm_berakhir',
        );
        if (dataTglBerakhirAlarm !== null) {
          const data = dataTglBerakhirAlarm;
          const tanggal = data.slice(1, 11);
          setTglberakhir(tanggal);
          console.log('tanggal_alarm_berakhir : ', data);
          const tanggalAlarmBerakhir = data;
          const tanggalHariIni = new Date();

          if (tanggalHariIni > new Date(tanggalAlarmBerakhir)) {
            console.log(
              'Tanggal hari ini lebih besar dari tanggal alarm berakhir',
            );
            PushNotification.cancelLocalNotification(1);
            await AsyncStorage.removeItem('data_alarm');
          } else {
            console.log(
              'Tanggal hari ini tidak lebih besar dari tanggal alarm berakhir',
            );
          }
        } else {
          setTglberakhir('');
          console.log('Tidak ada data JSON yang tersimpan.');
        }
      } catch (error) {
        console.error('Gagal mengambil data JSON:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // if (alarms.length > 0) {
    //   console.log('data alarmmm : ', alarms[0].alarmNotifData.id);
    //   const waktuAlarm = alarms[0].alarmNotifData.date.value;
    //   const waktuIndo = new Date(waktuAlarm.getTime() + 7 * 60 * 60 * 1000);
    //   const timeString = waktuIndo.toISOString().substring(11, 19); // Ambil waktu
    //   const [jam, menit, detik] = timeString.split(':');
    //   console.log('jammmm', jam);
    //   console.log('menittt', menit);
    //   setJamState(jam);
    //   setMenitState(menit);
    //   setAlarmOn(true);
    // }
    if (dataDateTime !== '') {
      console.log('data alarmmmaa : ', dataDateTime);
      const waktuAlarm = dataDateTime;
      const waktuIndo = new Date(waktuAlarm.getTime() + 7 * 60 * 60 * 1000);
      const timeString = waktuIndo.toISOString().substring(11, 19); // Ambil waktu
      const [jam, menit, detik] = timeString.split(':');
      console.log('jammmm', jam);
      console.log('menittt', menit);
      setJamState(jam);
      setMenitState(menit);
      setAlarmOn(true);
    }
  }, [dataDateTime]);

  useEffect(() => {
    AsyncStorage.getItem('data_alarm')
      .then(jsonData => {
        if (jsonData !== null) {
          setAlarmOn(true);
          const data = JSON.parse(jsonData);
          setDataAlarm(data);
          const utcDate = new Date(data.date.value);
          const indonesiaDate = new Date(
            utcDate.getTime() + 7 * 60 * 60 * 1000,
          );
          const date = indonesiaDate.toISOString().substring(0, 10); // Ambil tanggal
          const timeString = indonesiaDate.toISOString().substring(11, 19); // Ambil waktu
          const [jam, menit, datik] = timeString.split(':');
          setJam(jam);
          setMenit(menit);
        } else {
          setAlarmOn(false);
          console.log('Tidak ada data JSON yang tersimpan.');
        }
      })
      .catch(error => {
        console.error('Gagal mengambil data JSON:', error);
      });
  }, []);

  const deleteAlarmSekarang = async () => {
    try {
      setJam('');
      setMenit('');
      if (dataAlarm !== null) {
        PushNotification.cancelLocalNotification(1);
      } else if (dataDateTime !== '') {
        PushNotification.cancelLocalNotification(1);
      }
      await AsyncStorage.removeItem('data_alarm');
      await AsyncStorage.removeItem('tanggal_alarm_berakhir');
      console.log('Data alarm berhasil dihapus');
      setJamState('');
      setMenitState('');

      // Atur state dataAlarm ke null atau apa pun yang diperlukan setelah penghapusan
      setAlarmOn(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
    } catch (error) {
      console.error('Gagal menghapus data alarm:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: text.light,
          fontSize: 22,
          color: colors.fontColor,
          marginBottom: 10,
        }}></Text>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        {alarmOn ? (
          <>
            <View
              style={{
                backgroundColor: colors.secondary,
                width: 90,
                height: 90,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: text.bold,
                  fontSize: 52,
                  color: colors.fontColor,
                }}>
                {jam !== '' ? jam : jamState}
              </Text>
            </View>
            <View
              style={{
                width: 20,
                height: 90,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: text.bold,
                  fontSize: 52,
                  color: colors.fontColor,
                }}>
                :
              </Text>
            </View>
            <View
              style={{
                width: 90,
                height: 90,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: text.bold,
                  fontSize: 52,
                  color: colors.fontColor,
                }}>
                {menit !== '' ? menit : menitState}
              </Text>
            </View>
          </>
        ) : (
          <Image
            source={require('../sourcefile/imgs/alarm-off.png')}
            style={{width: 120, height: 120}}
          />
        )}
      </View>
      {alarmOn ? (
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            Alert.alert(
              'Hapus Alarm',
              'Apakah Anda mau menghapus alarm?',
              [
                {
                  text: 'Batal',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Ya',
                  onPress: () => {
                    deleteAlarmSekarang();
                    setAlarmOn(false);
                  },
                },
              ],
              {cancelable: false},
            );
          }}>
          <Text style={styles.buttonText}>HAPUS</Text>
        </Pressable>
      ) : (
        ''
      )}
      {alarmOn ? (
        <Text>
          Tgl Berakhir :{' '}
          {tglberakhir !== ''
            ? tglberakhir
            : dataTglAkhir !== ''
            ? dataTglAkhir
            : 'belum ada tgl berakhir'}
        </Text>
      ) : (
        ''
      )}
    </View>
  );
  // const renderItem = ({item}) => {
  // };

  // return (
  //   <FlatList
  //     keyExtractor={keyExtractor}
  //     data={alarms}
  //     renderItem={renderItem}
  //   />
  // );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  container: {
    paddingVertical: 20,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
});

const mapStateToProps = state => {
  return {
    alarms: state.alarms.alarms,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAlarmState: value => {
      dispatch(deleteAlarm(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAlarms);
