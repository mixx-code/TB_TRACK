/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../colors';
import {text} from '../text';

const BtnHamburger = () => {
  const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

  const handlePressBtnHamburger = () => {
    setIsOpenedDropdown(!isOpenedDropdown);
  };
  return (
    <View style={{paddingHorizontal: 20, position: 'relative'}}>
      <View
        style={[
          styles.cardDropdown,
          isOpenedDropdown ? {display: 'flex'} : {display: 'none'},
        ]}>
        <TouchableOpacity
          style={{width: '100%', alignItems: 'center'}}
          onPress={() => console.log('pressed')}>
          <Text style={styles.text}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '100%', alignItems: 'center'}}
          onPress={() => console.log('pressed')}>
          <Text style={styles.text}>Bantuan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btmKeluar}
          onPress={() => console.log('pressedaa')}>
          <Text style={styles.textKeluar}>Bantuan</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handlePressBtnHamburger}>
        <FontAwesomeIcon icon={faBars} size={40} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cardDropdown: {
    position: 'absolute',
    width: 130,
    // height: 150,
    backgroundColor: colors.secondary,
    bottom: -150,
    right: 20,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingVertical: 10,
    zIndex: 99, // Tambahkan zIndex di sini
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2, // Meningkatkan tinggi offset
    },
    shadowOpacity: 1, // Meningkatkan opacity
    shadowRadius: 19, // Mengurangi radius shadow

    elevation: 11, // Hapus atau atur ulang properti elevation
  },
  text: {
    width: '80%',
    color: '#ffffff',
    fontSize: 22,
    borderBottomWidth: 1,
    textAlign: 'right',
    paddingVertical: 5,
    borderColor: '#ffffff',
    fontFamily: text.regular,
  },
  btmKeluar: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 7,
    marginVertical: 10,
    borderRadius: 6,
  },
  textKeluar: {
    fontFamily: text.bold,
    color: '#ffffff',
  },
});
export default BtnHamburger;
