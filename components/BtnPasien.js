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
import DropDownPicker from 'react-native-dropdown-picker';
import {text} from '../text';
import {colors} from '../colors';

const BtnPasien = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [valueNamaLekap, setValueNamaLengkap] = useState('');
  const [valueUmur, setValueUmur] = useState('');
  const [valueRt, setValueRt] = useState('');
  const [valueRw, setValueRw] = useState('');
  const [valueAlamat, setValueAlamat] = useState('');
  const [valueNoHp, setValueNoHp] = useState('');

  const [valuePuskesmas, setValuePuskesmas] = useState('');
  const [validasiNamaLengkap, setValidasiNamaLengkap] = useState();
  const [validasiUmur, setValidasiUmur] = useState();
  const [validasiRt, setValidasiRt] = useState();
  const [validasiRw, setValidasiRw] = useState();
  const [validasiAlamat, setValidasiAlamat] = useState();
  const [validasiNoHp, setValidasiNoHp] = useState();
  const [validasiJenisKelamin, setValidasiJenisKelamin] = useState();
  const [validasiPuskesmas, setValidasiPuskesmas] = useState();
  const [valueDataUser, setValueDataUser] = useState([]);
  const [isCekSudahDaftar, setIsCekSudahDaftar] = useState(false);

  //dropdown set
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(null);
  const [valueJenisKelamin, setValueJenisKelamin] = useState(null);
  const [items, setItems] = useState([
    {label: 'Laki-Laki', value: 'laki-laki'},
    {label: 'Perempuan', value: 'perempuan'},
  ]);

  useEffect(() => {
    const cekSudahDaftar = () => {
      AsyncStorage.getItem('data_user')
        .then(jsonData => {
          if (jsonData !== null) {
            const data = JSON.parse(jsonData);
            setRole(data.role);
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
      role: 'pasien',
      nama_lengkap: valueNamaLekap,
      umur: valueUmur,
      rt: valueRt,
      rw: valueRw,
      alamat: valueAlamat,
      no_hp: valueNoHp,
      jenis_kelamin: valueJenisKelamin,
      puskesmas: valuePuskesmas,
    };

    setValueDataUser(dataUser);
  }, [
    valueNamaLekap,
    valueUmur,
    valueRt,
    valueAlamat,
    valueRw,
    valueNoHp,
    valueJenisKelamin,
    valuePuskesmas,
  ]);

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
  const validasi_rt = () => {
    if (valueRt === '') {
      setValidasiRt(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiRt(true);
      return true;
    }
  };
  const validasi_rw = () => {
    if (valueRw === '') {
      setValidasiRw(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiRw(true);
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
  const validasi_jenis_kelamin = () => {
    if (valueJenisKelamin === null) {
      setValidasiJenisKelamin(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiJenisKelamin(true);
      return true;
    }
  };
  const validasi_no_hp = () => {
    if (valueNoHp === '') {
      setValidasiNoHp(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiNoHp(true);
      return true;
    }
  };
  const validasi_puskesmas = () => {
    if (valuePuskesmas === '') {
      setValidasiPuskesmas(false);
      setIsLoading(false);
      return false;
    } else {
      setValidasiPuskesmas(true);
      return true;
    }
  };

  const handlePress = () => {
    console.log('klik');
    if (isCekSudahDaftar && role === 'pasien') {
      console.log('sudah daftar');
      navigation.replace('HomeScreen');
    } else {
      console.log('belum daftar');
      setModalVisible(!modalVisible);
    }

    setValidasiNamaLengkap(true);
    setValidasiUmur(true);
    setValidasiRt(true);
    setValidasiRw(true);
    setValidasiAlamat(true);
    setValidasiJenisKelamin(true);
    setValidasiNoHp(true);
    setValidasiPuskesmas(true);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    validasi_nama_lengkap();
    validasi_umur();
    validasi_alamat();
    validasi_rt();
    validasi_rw();
    validasi_no_hp();
    validasi_puskesmas();
    validasi_jenis_kelamin();
    kirimDataKeStorge();
  };

  const kirimDataKeStorge = () => {
    if (
      validasi_nama_lengkap() &&
      validasi_umur() &&
      validasi_alamat() &&
      validasi_rt() &&
      validasi_rw() &&
      validasi_no_hp() &&
      validasi_puskesmas() &&
      validasi_jenis_kelamin()
    ) {
      const dataUserJson = JSON.stringify(valueDataUser);
      console.log('ini data', dataUserJson);
      AsyncStorage.setItem('data_user', dataUserJson)
        .then(() => {
          console.log('Data JSON tersimpan.');
          setIsLoading(false);
          setValueNamaLengkap('');
          setValueUmur('');
          setValueRt('');
          setValueRw('');
          setValueAlamat('');
          navigation.replace('HomeScreen');
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
        <View style={{backgroundColor: '#FCFCFC', borderRadius: 10}}>
          <View style={styles.title}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Isi Data Diri
            </Text>
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Nama Lengkap </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiNamaLengkap ? {borderColor: colors.primary} : '',
              ]}
              placeholder="Nama Lengkap"
              onChangeText={e => setValueNamaLengkap(e)}
              value={valueNamaLekap}
            />
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Umur </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiUmur ? {borderColor: colors.primary} : '',
              ]}
              placeholder="Umur"
              onChangeText={e => setValueUmur(e)}
              value={valueUmur}
              keyboardType="number-pad"
            />
          </View>
          <View style={[styles.wrapTextField, {zIndex: 10}]}>
            <Text style={styles.label}>Jenis Kelamin</Text>
            <DropDownPicker
              open={open}
              value={valueJenisKelamin}
              items={items}
              setOpen={setOpen}
              setValue={setValueJenisKelamin}
              setItems={setItems}
              placeholder={'Pilih Jenis Kelamin'}
              textStyle={{
                fontFamily: text.regular,
              }}
              style={[
                styles.textField,
                !validasiJenisKelamin ? {borderColor: colors.primary} : '',
              ]}
              dropDownContainerStyle={{
                borderColor: '#D9D9D9',
                backgroundColor: '#F9F9F9',
              }}
              placeholderStyle={{
                color: 'grey',
                fontWeight: 'bold',
              }}
            />
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>No Hp </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiNoHp ? {borderColor: colors.primary} : '',
              ]}
              placeholder="No Hp"
              onChangeText={e => setValueNoHp(e)}
              value={valueNoHp}
              keyboardType="number-pad"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.wrapRwRw}>
              <Text style={styles.label}>RT</Text>
              <TextInput
                style={[
                  styles.textField,
                  !validasiRt ? {borderColor: colors.primary} : '',
                ]}
                placeholder="RT"
                onChangeText={e => setValueRt(e)}
                value={valueRt}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.wrapRwRw}>
              <Text style={styles.label}>RW</Text>
              <TextInput
                style={[
                  styles.textField,
                  !validasiRw ? {borderColor: colors.primary} : '',
                ]}
                placeholder="RW"
                onChangeText={e => setValueRw(e)}
                value={valueRw}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Alamat Lengkap </Text>
            <TextInput
              style={[
                styles.textField,
                !validasiAlamat ? {borderColor: colors.primary} : '',
              ]}
              placeholder="Alamat Lengkap Anda"
              onChangeText={e => setValueAlamat(e)}
              value={valueAlamat}
            />
          </View>
          <View style={styles.wrapTextField}>
            <Text style={styles.label}>Puskesmas</Text>
            <TextInput
              style={[
                styles.textField,
                !validasiPuskesmas ? {borderColor: colors.primary} : '',
              ]}
              placeholder="Puskesmas Lengkap Anda"
              onChangeText={e => setValuePuskesmas(e)}
              value={valuePuskesmas}
            />
          </View>
          <View style={styles.wrapBtnModal}>
            <TouchableOpacity
              style={[
                styles.btnModal,
                {borderColor: colors.primary, borderWidth: 1},
              ]}
              onPress={handlePress}>
              <Text style={{color: colors.primary}}>Cancel</Text>
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
  wrapRwRw: {
    width: '50%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textField: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
