/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';

const DetailArtikel = ({navigation, route}) => {
  const {title, page, img, penerbit, isi} = route.params;
  console.log(title);
  console.log(page);
  console.log(img);
  console.log(penerbit);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <BtnBack navigation={navigation} title={page} />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
      </View>
      <ScrollView style={{width: '100%', height: '90%'}}>
        <View style={styles.contentContainerBottom}>
          <Image source={img} style={{marginTop: 50}} />
          <View style={{width: '100%', paddingHorizontal: 35}}>
            <Text
              style={{
                fontFamily: text.bold,
                fontSize: 20,
                textAlign: 'justify',
                color: colors.fontColor,
              }}>
              {title}
            </Text>
            <Text style={{fontFamily: text.mediumItalic, marginBottom: 10}}>
              {penerbit}
            </Text>
            <Text
              style={{
                fontFamily: text.light,
                fontSize: 16,
                color: colors.fontColor,
                textAlign: 'justify',
              }}>
              {isi.match(/.{1,250}/g).map((chunk, index) => (
                <React.Fragment key={index}>
                  {chunk}
                  {'\n\n'}
                </React.Fragment>
              ))}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailArtikel;

const styles = StyleSheet.create({
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
  contentContainerBottom: {
    width: '100%',
    height: '100%',
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
  cardInfo: {
    marginTop: 50,
    backgroundColor: '#ffffff',
    width: '80%',
    minHeight: 200,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  textIsiCard: {
    fontSize: 20,
    fontFamily: text.light,
    color: colors.fontColor,
  },
});
