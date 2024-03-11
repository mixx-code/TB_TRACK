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
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BtnPasien = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [valueNamaLekap, setValueNamaLengkap] = useState('');
  const [valueUmur, setValueUmur] = useState('');
  const [valueRtRw, setValueRtRw] = useState('');
  const [valueAlamat, setValueAlamat] = useState('');
  const [validasiNamaLengkap, setValidasiNamaLengkap] = useState();
  const [validasiUmur, setValidasiUmur] = useState();
  const [validasiRtRw, setValidasiRtRw] = useState();
  const [validasiAlamat, setValidasiAlamat] = useState();
  const [valueDataUser, setValueDataUser] = useState([]);
  const [isCekSudahDaftar, setIsCekSudahDaftar] = useState(false);

  useEffect(() => {
    const cekSudahDaftar = () => {
      AsyncStorage.getItem('data_user')
        .then(jsonData => {
          if (jsonData !== null) {
            const data = JSON.parse(jsonData);
            console.log('Data user JSON:', data);
            setIsCekSudahDaftar(true);
          } else {
            console.log('Tidak ada data JSON yang tersimpan.');
            setIsCekSudahDaftar(false);
          }
        })
        .catch(error => {
          console.error('Gagal mengambil data JSON:', error);
        });
    };
    cekSudahDaftar();
    const dataUser = {
      nama_lengkap: valueNamaLekap,
      umur: valueUmur,
      rt_rw: valueRtRw,
      alamat: valueAlamat,
    };

    setValueDataUser(dataUser);
  }, [valueNamaLekap, valueUmur, valueRtRw, valueAlamat]);

  const validasi_nama_lengkap = () => {
    if (valueNamaLekap === '') {
      setValidasiNamaLengkap(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiNamaLengkap(true);
      return true;
    }
  };
  const validasi_umur = () => {
    if (valueUmur === '') {
      setValidasiUmur(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiUmur(true);
      return true;
    }
  };
  const validasi_rt_rw = () => {
    if (valueRtRw === '') {
      setValidasiRtRw(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiRtRw(true);
      return true;
    }
  };
  const validasi_alamat = () => {
    if (valueAlamat === '') {
      setValidasiAlamat(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiAlamat(true);
      return true;
    }
  };

  const handlePress = () => {
    console.log('klik');
    if (isCekSudahDaftar) {
      console.log('sudah daftar');
      navigation.navigate('HomeScreen');
    } else {
      console.log('belum daftar');
      setModalVisible(!modalVisible);
    }

    setValidasiNamaLengkap(true);
    setValidasiUmur(true);
    setValidasiRtRw(true);
    setValidasiAlamat(true);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    validasi_nama_lengkap();
    validasi_umur();
    validasi_rt_rw();
    validasi_alamat();
    console.log(validasiAlamat);
    console.log(validasiNamaLengkap);
    console.log(validasiRtRw);
    console.log(validasiUmur);
    kirimDataKeStorge();
  };

  const kirimDataKeStorge = () => {
    if (
      validasi_nama_lengkap() &&
      validasi_umur() &&
      validasi_rt_rw() &&
      validasi_alamat()
    ) {
      const dataUserJson = JSON.stringify(valueDataUser);
      console.log('ini data', dataUserJson);
      AsyncStorage.setItem('data_user', dataUserJson)
        .then(() => {
          console.log('Data JSON tersimpan.');
          setIsLoading(false);
          setValueNamaLengkap('');
          setValueUmur('');
          setValueRtRw('');
          setValueAlamat('');
          navigation.navigate('HomeScreen');
        })
        .catch(error => {
          console.error('Gagal menyimpan data JSON:', error);
          setIsLoading(false);
        });
      // Kosongkan nilai input setelah submit
    } else {
      console.log('gagal kirim data');
    }
  };

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <Modal isVisible={modalVisible} backdropOpacity={0.5}>
        <View style={{backgroundColor: '#ffffff', borderRadius: 10}}>
          <View style={styles.title}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Isi Data Diri
            </Text>
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Masukan Nama Lengkap </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiNamaLengkap
                  ? {borderWidth: 1, borderColor: '#D04848'}
                  : '',
              ]}
              placeholder="Masukan Nama Lengkap"
              onChangeText={e => setValueNamaLengkap(e)}
              value={valueNamaLekap}
            />
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Masukan Umur </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiUmur ? {borderWidth: 1, borderColor: '#D04848'} : '',
              ]}
              placeholder="Masukan Umur"
              onChangeText={e => setValueUmur(e)}
              value={valueUmur}
            />
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Masukan Rt/Rw </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiRtRw ? {borderWidth: 1, borderColor: '#D04848'} : '',
              ]}
              placeholder="Masukan Rt/Rw"
              onChangeText={e => setValueRtRw(e)}
              value={valueRtRw}
            />
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Masukan Alamat Lengkap </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiAlamat ? {borderWidth: 1, borderColor: '#D04848'} : '',
              ]}
              placeholder="Masukan Alamat Lengkap"
              onChangeText={e => setValueAlamat(e)}
              value={valueAlamat}
            />
          </View>
          <View style={styles.wrapBtnModal}>
            <TouchableOpacity
              style={[
                styles.btnModal,
                {borderColor: '#D04848', borderWidth: 1},
              ]}
              onPress={handlePress}>
              <Text style={{color: '#D04848'}}>Cancel</Text>
            </TouchableOpacity>
            {isLoading ? (
              <TouchableOpacity
                style={[styles.btnModal, {backgroundColor: '#F3B95F'}]}>
                <ActivityIndicator size="large" color="#ffffff" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.btnModal, {backgroundColor: '#F3B95F'}]}
                onPress={() => handleSubmit()}>
                <Text style={{color: '#ffffff'}}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={{color: '#ffffff'}}>Pasien</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnPasien;

const styles = StyleSheet.create({
  btn: {
    width: '60%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3B95F',
    borderRadius: 8,
  },
  btnModal: {
    width: '45%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F3B95F',
    borderRadius: 8,
  },
  wrapBtnModal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    // backgroundColor: 'red',
  },
  wrapTextField: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textField: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
