/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';

const InfoTBC = ({navigation, route}) => {
  const {page} = route.params;
  console.log(page);
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
          <View style={styles.cardInfo}>
            <Text style={styles.textIsiCard}>
              {<Text style={{fontFamily: text.boldItalic}}>Tuberkulosis</Text>},
              sering disingkat TB atau TBC, adalah penyakit menular yang
              disebabkan oleh bakteri Mycobacterium tuberculosis. Penyakit ini
              dapat menyerang siapa saja dan organ tubuh yang diserang biasanya
              adalah paru-paru, tulang belakang, kulit, otak, kelenjar getah
              bening, dan jantung.
            </Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.textIsiCard}>
              {
                <Text style={{fontFamily: text.boldItalic}}>
                  Gejala TBC (Tuberkulosis)
                </Text>
              }{' '}
              Pada TBC laten, penderita umumnya tidak mengalami gejala. Umumnya,
              penderita baru menyadari dirinya menderita tuberkulosis setelah
              menjalani pemeriksaan untuk penyakit lain. Sementara bagi
              penderita TBC aktif, gejala yang muncul dapat berupa :
            </Text>
            <Text style={styles.textIsiCard}>
              1. Batuk yang berlangsung lama (3 minggu atau lebih).
            </Text>
            <Text style={styles.textIsiCard}>
              2. Batuk biasanya disertai dengan dahak atau batuk darah.
            </Text>
            <Text style={styles.textIsiCard}>
              3. Nyeri dada saat bernapas atau batuk.
            </Text>
            <Text style={styles.textIsiCard}>
              4. Berkeringat di malam hari.
            </Text>
            <Text style={styles.textIsiCard}>Hilang nafsu makan.</Text>
            <Text style={styles.textIsiCard}>6. Penurunan berat badan.</Text>
            <Text style={styles.textIsiCard}>7. Demam dan menggigil.</Text>
            <Text style={styles.textIsiCard}>8. Kelelahan</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoTBC;

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
    marginBottom: 50,
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
    textAlign: 'left',
  },
});
