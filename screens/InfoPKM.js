/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';

const InfoPKM = ({navigation, route}) => {
  const {page} = route.params;
  const [lebihBanyak, setLebihBanyak] = useState(false);
  console.log(page);

  const profilPuskesmas = `\nPuskesmas Kampung Sawah berada di Kecamatan Ciputat, Kota Tangerang Selatan, Provinsi Banten. \nPuskesmas Kampung Sawah mempunyai 1 Kelurahan wilayah kerja yaitu Kelurahan Sawah dengan luas wilayah  261 Ha dengan jumlah penduduk 32.822 jiwa dan jumlah kepala keluarganya sebanyak 9123 KK. \nDalam wilayah kerja Puskesmas Kampung Sawah terdapat 54 Rt dan 12 Rw. Selain itu Puskesmas Kampung Sawah memiliki 26 Posyandu dan 8 posbindu dan mempunyai jumlah kader sebanyak 199 kader kesehatan. \n\n|Batas Wilayah Kerja Puskesmas Kampung Sawah:\n\n|Sebelah utara :|\nPondok Jaya / Sawah Baru\n\n|Sebelah selatan :|\nSerua Indah / Kedaung\n\n|Sebelah barat :|\nSawah Baru\n\n|Sebelah Timur :|\nPondok Ranji / Cempaka Putih`;

  const handleBtnLebihBanyak = () => {
    setLebihBanyak(!lebihBanyak);
  };
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
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#E2E0E0',
            borderStyle: 'dashed',
          }}>
          <Image
            source={require('../sourcefile/imgs/foto_pkm.jpg')}
            // style={styles.vectorAtas}
            style={{
              width: '90%',
              resizeMode: 'cover',
              height: 200,
              marginVertical: 20,
              borderRadius: 8,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            minHeight: 500,
          }}>
          <Text
            style={{
              fontFamily: text.medium,
              fontSize: 24,
              color: colors.fontColor,
              marginVertical: 10,
            }}>
            PKM Kampung Sawah
          </Text>
          <View style={styles.wrapIconMenu}>
            <TouchableOpacity
              style={styles.wrapIconText}
              // onPress={() => handleClickMenu(data.route, data.title)}
            >
              <Image
                source={require('../sourcefile/imgs/menu_pelayanan.png')}
                style={styles.iconMenu}
              />
              <Text style={styles.title}>Jadwal Pelayanan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIconText}
              // onPress={() => handleClickMenu(data.route, data.title)}
            >
              <Image
                source={require('../sourcefile/imgs/menu_ukm.png')}
                style={styles.iconMenu}
              />
              <Text style={styles.title}>Jadwal UKM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardInfo}>
            <Text
              style={{
                fontFamily: text.medium,
                color: colors.fontColor,
                fontSize: 20,
              }}>
              Profil Puskesmas
            </Text>
            {lebihBanyak ? (
              <Text
                style={{
                  fontFamily: text.light,
                  color: colors.fontColor,
                  fontSize: 18,
                  textAlign: 'justify',
                }}>
                {profilPuskesmas.split('|').map((item, key) => {
                  if (
                    item.includes(
                      'Batas Wilayah Kerja Puskesmas Kampung Sawah:',
                    ) ||
                    item.includes('Sebelah utara :') ||
                    item.includes('Sebelah selatan :') ||
                    item.includes('Sebelah barat :') ||
                    item.includes('Sebelah Timur :')
                  ) {
                    return (
                      <Text key={key} style={{fontWeight: 'bold'}}>
                        {item}
                      </Text>
                    );
                  } else {
                    return <Text key={key}>{item}</Text>;
                  }
                })}
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: text.light,
                  color: colors.fontColor,
                  fontSize: 18,
                  textAlign: 'justify',
                }}
                numberOfLines={8}>
                {profilPuskesmas.split('\n').map((item, key) => {
                  if (
                    item.includes(
                      'Batas Wilayah Kerja Puskesmas Kampung Sawah:',
                    ) ||
                    item.includes('Sebelah utara :') ||
                    item.includes('Sebelah selatan :') ||
                    item.includes('Sebelah barat :') ||
                    item.includes('Sebelah Timur :')
                  ) {
                    return (
                      <Text key={key} style={{fontWeight: 'bold'}}>
                        {item}
                      </Text>
                    );
                  } else {
                    return <Text key={key}>{item}</Text>;
                  }
                })}
              </Text>
            )}

            <TouchableOpacity onPress={handleBtnLebihBanyak}>
              <Text
                style={{
                  fontFamily: text.lightItalic,
                  color: 'blue',
                  fontSize: 18,
                  textAlign: 'justify',
                }}>
                {lebihBanyak ? 'Lebih Sedikit' : 'Lebih banyak...'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoPKM;

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
    backgroundColor: '#ffffff',
    width: '85%',
    minHeight: 200,
    marginVertical: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary,
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
  wrapIconMenu: {
    width: '70%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    gap: 30,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  iconMenu: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  wrapIconText: {
    width: 80,
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    color: colors.fontColor,
    width: '100%',
    textAlign: 'center',
  },
});
