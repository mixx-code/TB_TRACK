/* eslint-disable prettier/prettier */
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../colors';
import {text} from '../text';
import Modal from 'react-native-modal';

const BtnHamburger = ({navigation}) => {
  const [modalVisibleTetang, setModalVisibleTetang] = useState(false);
  const [modalVisibleBantuan, setModalVisibleBantuan] = useState(false);
  const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

  const handlePressBtnHamburger = () => {
    setIsOpenedDropdown(!isOpenedDropdown);
  };

  const exit = () => {
    navigation.replace('Splash');
    BackHandler.exitApp();
  };

  const handleOpenModalTentang = () => {
    setModalVisibleTetang(!modalVisibleTetang);
  };
  const handleOpenModalBantuan = () => {
    setModalVisibleBantuan(!modalVisibleBantuan);
  };

  const handleExit = () => {
    Alert.alert(
      'Keluar',
      'Apakah Anda yakin ingin menutup aplikasi?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Ya', onPress: () => exit()},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={{paddingHorizontal: 20, position: 'relative'}}>
      <Modal isVisible={modalVisibleTetang} backdropOpacity={0.5}>
        <View
          style={{
            backgroundColor: '#FCFCFC',
            borderRadius: 10,
            padding: 15,
            width: '100%',
            minHeight: 250,
          }}>
          <Text
            style={{
              fontFamily: text.black,
              color: colors.fontColor,
              fontSize: 20,
              marginBottom: 10,
            }}>
            Aplikasi Kesehatan TBC & Pendamping Minum Obat
          </Text>
          <Text
            style={{
              fontFamily: text.light,
              color: colors.fontColor,
              fontSize: 18,
              textAlign: 'justify',
              marginBottom: 20,
            }}>
            TB Track merupakan aplikasi berbasis kesehatan yang di mana
            berisikan mengenai informasi-informasi seputar TBC dalam rangka
            mencegah dan menanggulangi penyebaran penyakit TBC. Selain itu TB
            Track juga dilengkapi dengan reminder minum obat yang berguna agar
            pasien TBC tidak lupa dalam meminum obat nya. Aplikasi dapat
            digunakan oleh tenaga kesehatan dan masyarakat umum. Didalam
            aplikasi ini terdapat informasi mengenai TBC, artikel seputar TBC,
            pengingat minum obat (reminder), informasi pusat kesehatan
            masyarakat, menu makanan sehat dan seimbang dan video edukasi untuk
            memberitahu mengenai bahaya TBC.
          </Text>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center'}}
            onPress={handleOpenModalTentang}>
            <Text
              style={{
                fontFamily: text.light,
                fontSize: 25,
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 8,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={modalVisibleBantuan} backdropOpacity={0.5}>
        <View
          style={{
            backgroundColor: '#FCFCFC',
            borderRadius: 10,
            padding: 15,
            width: '100%',
            minHeight: 250,
          }}>
          <Text
            style={{
              fontFamily: text.black,
              color: colors.fontColor,
              fontSize: 20,
              marginBottom: 10,
            }}>
            Menu Info TBC
          </Text>
          <Text
            style={{
              fontFamily: text.light,
              color: colors.fontColor,
              fontSize: 18,
              textAlign: 'justify',
              marginBottom: 10,
            }}>
            Menu ini berisi penjelasan terkait penyakit TBC beserta gejala dan
            penanganan yang harus dilakukan. Dengan Menu ini pengguna diharapkan
            dapat memahami dan mengenal penyakit TBC sehingga penanganan TBC
            dapat dilakukan dengan maksimal.
          </Text>
          <Text
            style={{
              fontFamily: text.black,
              color: colors.fontColor,
              fontSize: 20,
              marginBottom: 10,
            }}>
            Menu Artikel TBC
          </Text>
          <Text
            style={{
              fontFamily: text.light,
              color: colors.fontColor,
              fontSize: 18,
              textAlign: 'justify',
              marginBottom: 10,
            }}>
            Menu ini berisi kumpulan artikel-artikel dan berita seputar penyakit
            TBC. Berisi artikel-artikel yang didapatkan dari sumber terpercaya
            dan relevan yang digunakan pada Menu ini. Diharapkan pengguna dapat
            memperluas wawasannya terhadap penyakit TBC dengan membaca artikel
            di Menu ini.
          </Text>
          <Text
            style={{
              fontFamily: text.black,
              color: colors.fontColor,
              fontSize: 20,
              marginBottom: 10,
            }}>
            Menu Reminder Obat
          </Text>
          <Text
            style={{
              fontFamily: text.light,
              color: colors.fontColor,
              fontSize: 18,
              textAlign: 'justify',
              marginBottom: 20,
            }}>
            Menu ini berfungsi sebagai reminder (pengingat) bagi pengguna untuk
            meminum obat secara teratur dan tepat waktu. Pengguna dapat mengatur
            waktu minum obatnya sesuai dengan ketentuan dosis dokter. .
          </Text>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center'}}
            onPress={handleOpenModalBantuan}>
            <Text
              style={{
                fontFamily: text.light,
                fontSize: 25,
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 8,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View
        style={[
          styles.cardDropdown,
          isOpenedDropdown ? {display: 'flex'} : {display: 'none'},
        ]}>
        <TouchableOpacity
          style={{width: '100%', alignItems: 'center'}}
          onPress={handleOpenModalTentang}>
          <Text style={styles.text}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '100%', alignItems: 'center'}}
          onPress={handleOpenModalBantuan}>
          <Text style={styles.text}>Bantuan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btmKeluar} onPress={handleExit}>
          <Text style={styles.textKeluar}>Keluar</Text>
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
