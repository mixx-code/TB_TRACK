/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../colors';

const FlatListHariMenuMakan = ({handleSort, btnAktif, labelJam}) => {
  return (
    <TouchableOpacity
      onPress={handleSort}
      style={[
        {
          width: 100,
          height: 50,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
          marginHorizontal: 10,
        },
        btnAktif
          ? {
              borderWidth: 1,
              borderColor: colors.secondary,
              backgroundColor: colors.secondary,
            }
          : {borderWidth: 1, borderColor: colors.secondary},
      ]}>
      <Text style={[btnAktif ? {color: '#ffffff'} : {color: colors.secondary}]}>
        {labelJam}
      </Text>
    </TouchableOpacity>
  );
};

export default FlatListHariMenuMakan;
