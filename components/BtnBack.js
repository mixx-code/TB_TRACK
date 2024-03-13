/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../colors';
import {text} from '../text';

const BtnBack = ({navigation, title}) => {
  const handlePressBtnBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <TouchableOpacity onPress={handlePressBtnBack}>
        <FontAwesomeIcon icon={faArrowLeft} size={30} />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: text.medium,
          color: colors.fontColor,
          fontSize: 22,
        }}>
        {title}
      </Text>
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
export default BtnBack;
