/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {text} from '../text';
import {colors} from '../colors';

const DropdownPelayanan = ({
  onPress,
  openDropdown,
  dataPelayanan,
  hariPelayanan,
}) => {
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: '90%',
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>{hariPelayanan}</Text>
          {openDropdown ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={[
          openDropdown
            ? {
                width: '90%',
                minHeight: 50,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }
            : {display: 'none'},
        ]}>
        {dataPelayanan.length === 0 ? (
          <Text style={{fontFamily: text.lightItalic}}>
            Tidak Ada Pelayanan
          </Text>
        ) : (
          dataPelayanan.map((item, index) => (
            <View style={{paddingVertical: 5}} key={index}>
              <Text
                style={{
                  fontFamily: text.medium,
                  color: colors.fontColor,
                  fontSize: 16,
                }}>
                {item.pelayanan}
              </Text>
              <Text
                style={{
                  fontFamily: text.light,
                  color: colors.fontColor,
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Petugas : {item.petugas}
              </Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default DropdownPelayanan;
