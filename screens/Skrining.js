/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import CheckBox from '@react-native-community/checkbox';
import {RadioGroup} from 'react-native-radio-buttons-group';
import Mailer from 'react-native-mail';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Skrining = ({navigation, route}) => {
  const {page} = route.params;
  const [dataUser, setDataUser] = useState([]);
  const [disableBtn, setDisableBtn] = useState(true);
  const [selectedId1, setSelectedId1] = useState();
  const [selectedId2, setSelectedId2] = useState(null);
  const [selectedId3, setSelectedId3] = useState(null);
  const [selectedId4, setSelectedId4] = useState(null);
  const [selectedId5, setSelectedId5] = useState(null);
  const [selectedId6, setSelectedId6] = useState(null);
  const [selectedId7, setSelectedId7] = useState(null);
  const [valueJawabanNo8, setValueJawabanNo8] = useState('');
  const [validasiSoalNo8, setvalidasiSoalNo8] = useState(true);
  const [valueSoalNo9, setValueSoalNo9] = useState('');
  const [validasiSoalNo9, setValidasiSoalNo9] = useState(true);
  const [dataJawaban, setDataJawaban] = useState([
    {
      no: 1,
      soal: 'Batuk Selama Lebih Dari Dua Minggu ?',
      jawaban: '',
    },
    {
      no: 2,
      soal: 'Batuk Berdarah ? ',
      jawaban: '',
    },
    {
      no: 3,
      soal: 'Penurunan Berat Badan ?',
      jawaban: '',
    },
    {
      no: 4,
      soal: 'Demam ?',
      jawaban: '',
    },
    {
      no: 5,
      soal: 'Keringat Malam Berlebih ? ',
      jawaban: '',
    },
    {
      no: 6,
      soal: 'Kehilangan Selera Makan ? ',
      jawaban: '',
    },
    {
      no: 7,
      soal: 'Nyeri Dada dan Sesak Nafas ? ',
      jawaban: '',
    },
    {
      no: 8,
      soal: 'Sudah menderita penyakit TB berapa hari/bulan ? ',
      jawaban: '',
    },
    {
      no: 9,
      soal: 'Sudah menjalani pengobatan berapa hari/bulan ? ',
      jawaban: '',
    },
  ]);
  const [rangkumanSkrining, setRangkumanSkrining] = useState('');

  // console.log(dataJawaban);
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Ya',
        value: 'Ya',
      },
      {
        id: '2',
        label: 'Tidak',
        value: 'Tidak',
      },
    ],
    [],
  );

  useEffect(() => {
    AsyncStorage.getItem('data_user')
      .then(jsonData => {
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
          setDataUser(data);
          console.log('Data user JSON:', data);
        } else {
          console.log('Tidak ada data JSON yang tersimpan.');
        }
      })
      .catch(error => {
        console.error('Gagal mengambil data JSON ssss:', error);
      });
    AsyncStorage.getItem('data_skrining_pasien')
      .then(jsonData => {
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
          console.log('Data user JSON:', data);
          navigation.replace('HomeScreen');
        } else {
          console.log('Tidak ada data skrining JSON yang tersimpan.');
        }
      })
      .catch(error => {
        console.error('Gagal mengambil data JSON wwww:', error);
      });
  }, []);
  useEffect(() => {
    setDataJawaban(prevData => {
      // Membuat salinan data jawaban yang akan diubah
      const newData = [...prevData];
      // Mencari indeks data jawaban yang akan diubah berdasarkan nomor pertanyaan (no)
      const index = newData.findIndex(item => item.no === 8);
      // Jika indeks ditemukan, mengganti jawaban sesuai nomor pertanyaan
      if (index !== -1) {
        newData[index] = {
          ...newData[index],
          jawaban: valueJawabanNo8,
        };
      }
      return newData;
    });
  }, [valueJawabanNo8]);

  useEffect(() => {
    setDataJawaban(prevData => {
      // Membuat salinan data jawaban yang akan diubah
      const newData = [...prevData];
      // Mencari indeks data jawaban yang akan diubah berdasarkan nomor pertanyaan (no)
      const index = newData.findIndex(item => item.no === 9);
      // Jika indeks ditemukan, mengganti jawaban sesuai nomor pertanyaan
      if (index !== -1) {
        newData[index] = {
          ...newData[index],
          jawaban: valueSoalNo9,
        };
      }
      return newData;
    });
  }, [valueSoalNo9]);

  useEffect(() => {
    const rangkumanJawaban = dataJawaban
      .map(item => {
        let rangkuman = `Pertanyaan ${item.no}: ${item.soal}<br>`;
        rangkuman += `Jawaban: ${item.jawaban}<br><br>`;

        if (item.soalTambahan1 && item.jawabanSoalTambahan1) {
          rangkuman += `${item.soalTambahan1}<br> Jawaban: ${item.jawabanSoalTambahan1}<br><br>`;
        }

        if (item.soalTambahan2 && item.jawabanSoalTambahan2) {
          rangkuman += `${item.soalTambahan2}<br> Jawaban: ${item.jawabanSoalTambahan2}<br><br>`;
        }

        rangkuman += '<br>';
        return rangkuman;
      })
      .join('');
    setRangkumanSkrining(rangkumanJawaban);
    console.log(rangkumanJawaban);

    // Gunakan rangkumanJawaban sesuai kebutuhan, misalnya untuk ditampilkan di UI atau diproses lebih lanjut
  }, [dataJawaban]);

  // console.log(rangkumanSkrining);

  const handleEditJawaban = (no, newValue) => {
    setDataJawaban(prevData => {
      // Membuat salinan data jawaban yang akan diubah
      const newData = [...prevData];
      // Mencari indeks data jawaban yang akan diubah berdasarkan nomor pertanyaan (no)
      const index = newData.findIndex(item => item.no === no);
      // Jika indeks ditemukan, mengganti jawaban sesuai nomor pertanyaan
      if (index !== -1) {
        newData[index] = {...newData[index], jawaban: newValue};
      }
      return newData;
    });
  };

  const handleSelect1 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    // console.log('Nilai yang dipilih:', selectedValue);

    setSelectedId1(id);
    handleEditJawaban(1, selectedValue);
  };
  const handleSelect2 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    // console.log('Nilai yang dipilih:', selectedValue);
    setSelectedId2(id);
    handleEditJawaban(2, selectedValue);
  };
  const handleSelect3 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    // console.log('Nilai yang dipilih:', selectedValue);
    setSelectedId3(id);
    handleEditJawaban(3, selectedValue);
  };
  const handleSelect4 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    // console.log('Nilai yang dipilih:', selectedValue);
    setSelectedId4(id);
    handleEditJawaban(4, selectedValue);
  };
  const handleSelect5 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    // console.log('Nilai yang dipilih:', selectedValue);
    setSelectedId5(id);
    handleEditJawaban(5, selectedValue);
  };
  const handleSelect6 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    // console.log('Nilai yang dipilih:', selectedValue);
    setSelectedId6(id);
    handleEditJawaban(6, selectedValue);
  };
  const handleSelect7 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    // console.log('Nilai yang dipilih:', selectedValue);
    setSelectedId7(id);
    handleEditJawaban(7, selectedValue);
  };

  const validasi_soal_no8 = () => {
    if (valueJawabanNo8 === '') {
      setvalidasiSoalNo8(false);
      return false;
    } else {
      setvalidasiSoalNo8(true);
      return true;
    }
  };
  const validasi_soal_no9 = () => {
    if (valueSoalNo9 === '') {
      setValidasiSoalNo9(false);
      return false;
    } else {
      setValidasiSoalNo9(true);
      return true;
    }
  };

  const handleSubmit = () => {
    validasi_soal_no8();
    validasi_soal_no9();
    sendEmail();
  };

  const sendEmail = () => {
    if (
      selectedId1 !== null &&
      selectedId2 !== null &&
      selectedId3 !== null &&
      selectedId4 !== null &&
      selectedId5 !== null &&
      selectedId6 !== null &&
      validasi_soal_no8() &&
      validasi_soal_no9()
    ) {
      console.log('berhasil submit');

      console.log('rangkuman : ', rangkumanSkrining);
      const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    <h1>Berikut kami informasikan data skrining [${dataUser.role}] [${dataUser.nama_lengkap}] sebagai berikut:</h1>
      <h1>Nama : ${dataUser.nama_lengkap}</h1>
      <h1>Umur : ${dataUser.umur}</h1>
      <h1>Jenis Kelamin : ${dataUser.jenis_kelamin}</h1>
      <h1>Alamat : ${dataUser.alamat}</h1>
      <h1>Rt/Rw : ${dataUser.rt} / ${dataUser.rw}</h1>
      <h1>Puskesmas : ${dataUser.puskesmas}</h1>
      <h1>No. Hp : ${dataUser.no_hp}</h1>
      <br><br>
      <h1>Hasil Skrining : </h1>
      ${rangkumanSkrining}
    </body>
    </html>
  `;

      // Kirim email
      Mailer.mail(
        {
          subject: `[${dataUser.role}] ${dataUser.nama_lengkap}`,
          recipients: ['tbtrack24@gmail.com'],
          // recipients: ['kikiy0000001@gmail.com'],
          body: emailContent,
          isHTML: true,
        },
        (error, event) => {
          Alert.alert(
            error,
            event,
            [
              {
                text: 'Ok',
                onPress: () => console.log('OK: Email Error Response'),
              },
              {
                text: 'Cancel',
                onPress: () => console.log('CANCEL: Email Error Response'),
              },
            ],
            {cancelable: true},
          );
          // Jika email berhasil terkirim, simpan data ke AsyncStorage
        },
      );
      AsyncStorage.setItem('data_skrining_pasien', rangkumanSkrining)
        .then(() => {
          console.log('Data Skrining pasien tersimpan.');
          navigation.replace('HomeScreen');
        })
        .catch(error => {
          console.error('Gagal menyimpan data skrining:', error);
        });
    } else {
      console.log('gagal submit');
    }
    // Mailer.mail(
    //   {
    //     subject: 'Pasien',
    //     recipients: ['kikiy0000001@gmail.com'],
    //     // ccRecipients: ['cc@example.com'],
    //     // bccRecipients: ['bcc@example.com'],
    //     body: rangkumanSkrining,
    //     isHTML: true,
    //   },
    //   (error, event) => {
    //     if (error) {
    //       console.error(
    //         'Error',
    //         'Failed to send email. Please try again later.',
    //       );
    //     }
    //   },
    // );
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
        <View style={styles.contentContainerBottom}>
          <View style={{width: '100%', paddingHorizontal: 35}}>
            <View
              style={{width: '100%', alignItems: 'flex-start', marginTop: 20}}>
              <Text
                style={{
                  fontFamily: text.bold,
                  color: colors.fontColor,
                  fontSize: 21,
                }}>
                Lembar skrining
              </Text>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>1. </Text>
                  <Text style={[styles.textPoin]}>
                    Batuk Selama Lebih Dari Dua Minggu ?
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={handleSelect1}
                    selectedId={selectedId1}
                    llayout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                    labelStyle={{color: colors.fontColor}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>2. </Text>
                  <Text style={[styles.textPoin]}>Batuk Berdarah ?</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={handleSelect2}
                    selectedId={selectedId2}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                    labelStyle={{color: colors.fontColor}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>3. </Text>
                  <Text style={[styles.textPoin]}>Penurunan Berat Badan ?</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={handleSelect3}
                    selectedId={selectedId3}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                    labelStyle={{color: colors.fontColor}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>4. </Text>
                  <Text style={[styles.textPoin]}>Demam ?</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={handleSelect4}
                    selectedId={selectedId4}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                    labelStyle={{color: colors.fontColor}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>5. </Text>
                  <Text style={[styles.textPoin]}>Apakah anda merokok ?</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={handleSelect5}
                    selectedId={selectedId5}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                    labelStyle={{color: colors.fontColor}}
                  />
                  {/* <View
                    style={[
                      selectedId5 === '1'
                        ? {display: 'flex'}
                        : selectedId5 === '2'
                        ? {display: 'flex'}
                        : {transform: [{scale: 0}], display: 'none'},
                    ]}>
                    <View style={styles.wrapTextField}>
                      <Text
                        style={{
                          fontFamily: text.bold,
                          color: colors.fontColor,
                        }}>
                        Sudah berapa lama anda merokok?
                      </Text>
                      <TextInput
                        style={[
                          styles.textField,
                          !validasiSoalNo8
                            ? {borderColor: colors.primary}
                            : '',
                        ]}
                        placeholder="isi disini"
                        onChangeText={e => setValueJawabanNo8(e)}
                        value={valueJawabanNo8}
                      />
                    </View>
                    <View style={styles.wrapTextField}>
                      <Text
                        style={{
                          fontFamily: text.bold,
                          color: colors.fontColor,
                        }}>
                        Berapa banyak batang rokok yang dihisap/hari?
                      </Text>
                      <TextInput
                        style={[
                          styles.textField,
                          !validasiSoalNo9
                            ? {borderColor: colors.primary}
                            : '',
                        ]}
                        placeholder="isi disini"
                        onChangeText={e => setValueSoalNo9(e)}
                        value={valueSoalNo9}
                      />
                    </View>
                  </View> */}
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>6. </Text>
                  <Text style={[styles.textPoin]}>
                    Kehilangan Selera Makan ?
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={handleSelect6}
                    selectedId={selectedId6}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                    labelStyle={{color: colors.fontColor}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>7. </Text>
                  <Text style={[styles.textPoin]}>
                    Nyeri Dada dan Sesak Nafas ?
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={handleSelect7}
                    selectedId={selectedId7}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                    labelStyle={{color: colors.fontColor}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>8. </Text>
                  <Text style={[styles.textPoin]}>
                    Sudah menderita penyakit TB berapa hari/bulan ?
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingLeft: 15,
                  }}>
                  <TextInput
                    style={[
                      styles.textField,
                      !validasiSoalNo8 ? {borderColor: colors.primary} : '',
                    ]}
                    placeholder="isi disini"
                    onChangeText={e => setValueJawabanNo8(e)}
                    value={valueJawabanNo8}
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>8. </Text>
                  <Text style={[styles.textPoin]}>
                    Sudah menjalani pengobatan berapa hari/bulan ?
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingLeft: 15,
                  }}>
                  <TextInput
                    style={[
                      styles.textField,
                      !validasiSoalNo9 ? {borderColor: colors.primary} : '',
                    ]}
                    placeholder="isi disini"
                    onChangeText={e => setValueSoalNo9(e)}
                    value={valueSoalNo9}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          width: '100%',
          alignItems: 'flex-end',
          paddingHorizontal: 10,
          marginBottom: 50,
        }}>
        <TouchableOpacity onPress={handleSubmit} style={[styles.btn]}>
          <Text style={{color: '#ffffff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Skrining;

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
  wrapTextPoin: {width: '100%', flexDirection: 'row', marginVertical: 5},
  textPoin: {
    fontSize: 18,
    fontFamily: text.light,
    color: colors.fontColor,
  },
  btn: {
    width: '50%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderColor: '#F3B95F',
    borderWidth: 1,
    borderRadius: 8,
  },
  wrapTextField: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textField: {
    width: 250,
    backgroundColor: '#F9F9F9',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    fontFamily: text.bold,
    paddingLeft: 10,
  },
});
