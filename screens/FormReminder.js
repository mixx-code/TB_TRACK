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
import React, {useEffect} from 'react';
import ListAlarms from '../components/ListAlarms';
import TimePicker from '../components/TimePicker';
import BtnBack from '../components/BtnBack';
import {colors} from '../colors';

const FormReminder = ({navigation, route}) => {
  const {page} = route.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <BtnBack navigation={navigation} title={page} />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
      </View>
      <View style={styles.contentContainerMid}></View>
      <View style={styles.contentContainerBottom}>
        <View style={styles.timePicker}>
          <TimePicker />
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
});

export default FormReminder;
