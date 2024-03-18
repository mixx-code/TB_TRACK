/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {text} from '../text';
import {colors} from '../colors';

const CardArtikel = ({
  navigation,
  img,
  title,
  penerbit,
  isi,
  tgl,
  url_link,
}) => {
  const moveToDetail = () => {
    navigation.navigate('DetailArtikel', {
      page: 'Detail Artikel',
      title: title,
      img: img,
      penerbit: penerbit,
      isi: isi,
      tgl: tgl,
      url_link: url_link,
    });
  };

  return (
    <TouchableOpacity style={styles.cardList} onPress={moveToDetail}>
      <View style={styles.wrapImagtitle}>
        <View style={styles.wrapImg}>
          <Image source={img} style={styles.img} />
        </View>
        <View style={styles.wrapTitle}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text>{penerbit}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardArtikel;

const styles = StyleSheet.create({
  cardList: {
    width: '90%',
    height: 68,
    backgroundColor: '#FCFCFC',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13.84,
    elevation: 17,
    borderRadius: 8,
    marginVertical: 10,
  },
  wrapImg: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  wrapTitle: {
    width: '80%',
    height: '100%',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  title: {
    fontFamily: text.light,
    fontSize: 18,
    color: colors.fontColor,
  },
  wrapImagtitle: {
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
});
