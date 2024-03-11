/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const BtnUmum = () => {
  const handlePress = () => {
    console.log('klik');
  };

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={{color: '#F3B95F'}}>Umum</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnUmum;

const styles = StyleSheet.create({
  btn: {
    width: '60%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#F3B95F',
    borderWidth: 1,
    borderRadius: 8,
  },
});
