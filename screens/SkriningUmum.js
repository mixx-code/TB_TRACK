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
const SkriningUmum = ({navigation, route}) => {
  const {page} = route.params;
  const [dataUser, setDataUser] = useState([]);
  const [disableBtn, setDisableBtn] = useState(true);
  const [selectedId1, setSelectedId1] = useState();
  const [selectedIdSoal1Tambahan1, setSelectedIdSoal1Tambahan1] =
    useState(null);
  const [validasiSoal1Tambahan1, setValidasiSoal1Tambahan1] = useState();
  const [selectedIdSoal1Tambahan2, setSelectedIdSoal1Tambahan2] =
    useState(null);
  const [validasiSoal1Tambahan2, setValidasiSoal1Tambahan2] = useState();
  const [selectedId2, setSelectedId2] = useState(null);
  const [selectedId3, setSelectedId3] = useState(null);
  const [selectedId4, setSelectedId4] = useState(null);
  const [selectedId5, setSelectedId5] = useState(null);
  const [valueSoal5Tambahan1, setValueSoal5Tambahan1] = useState('');
  const [validasiSoal5Tambahan1, setValidasiSoal5Tambahan1] = useState();
  const [valueSoal5Tambahan2, setValueSoal5Tambahan2] = useState('');
  const [validasiSoal5Tambahan2, setValidasiSoal5Tambahan2] = useState();
  // console.log(selectedId1);
  // console.log(validasiSoal5Tambahan2);
  const [selectedId6, setSelectedId6] = useState();
  const [dataJawaban, setDataJawaban] = useState([
    {
      no: 1,
      soal: 'Apakah anda sedang batuk dalam 1 bulan ?',
      jawaban: '',
      soalTambahan1: 'Sudah berapa lama anda batuk ?',
      jawabanSoalTambahan1: '',
      soalTambahan2: 'Bila sedang batuk, apakah anda batuk berdahak ?',
      jawabanSoalTambahan2: '',
    },
    {
      no: 2,
      soal: 'Apakah anda sering mengalami demam/meriang dalam 1 bulan terakhir ? ',
      jawaban: '',
    },
    {
      no: 3,
      soal: 'Apakah anda mengalami sesak napas dalam 1 bulan terakhir ?',
      jawaban: '',
    },
    {
      no: 4,
      soal: 'Apakah anda sering berkeringat pada malam hari tanpa sebab yang jelas ? (walaupun suhu ruangan normal atau sejuk, justru anda berkeringat)',
      jawaban: '',
    },
    {
      no: 5,
      soal: 'Apakah anda merokok ? ',
      jawaban: '',
      soalTambahan1: 'Sudah berapa lama anda merokok ?',
      jawabanSoalTambahan1: '',
      soalTambahan2: 'Berapa banyak batang rokok yang dihisap/hari ? ',
      jawabanSoalTambahan2: '',
    },
    {
      no: 6,
      soal: 'Apakah anda pernah tinggal serumah dengan penderita TBC/flek paru? ',
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
  // console.log(dataJawaban);
  const radioButtonNo6 = useMemo(
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
      {
        id: '3',
        label: 'Tidak Tahu',
        value: 'Tidak Tahu',
      },
    ],
    [],
  );
  const radioButtonNo1 = useMemo(
    () => [
      {
        id: '1',
        label: 'Kurang dari 1 minggu',
        value: 'Kurang dari 1 minggu',
      },
      {
        id: '2',
        label: '1 – 2 minggu',
        value: '1 – 2 minggu',
      },
      {
        id: '3',
        label: '2 minggu atau lebih',
        value: '2 minggu atau lebih',
      },
    ],
    [],
  );
  const radioButtonNo5 = useMemo(
    () => [
      {
        id: '1',
        label: 'Ya',
        value: 'Ya',
      },
      {
        id: '2',
        label: 'Pernah, sekarang sudah berhenti',
        value: 'Pernah, sekarang sudah berhenti',
      },
      {
        id: '3',
        label: 'Tidak pernah sama sekali',
        value: 'Tidak pernah sama sekali',
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
        console.error('Gagal mengambil data JSON:', error);
      });
    AsyncStorage.getItem('data_skrining')
      .then(jsonData => {
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
          console.log('Data user JSON:', data);
          navigation.navigate('HomeScreen');
        } else {
          console.log('Tidak ada data skrining JSON yang tersimpan.');
        }
      })
      .catch(error => {
        console.error('Gagal mengambil data JSON:', error);
      });
  }, []);
  useEffect(() => {
    setDataJawaban(prevData => {
      // Membuat salinan data jawaban yang akan diubah
      const newData = [...prevData];
      // Mencari indeks data jawaban yang akan diubah berdasarkan nomor pertanyaan (no)
      const index = newData.findIndex(item => item.no === 5);
      // Jika indeks ditemukan, mengganti jawaban sesuai nomor pertanyaan
      if (index !== -1) {
        newData[index] = {
          ...newData[index],
          jawabanSoalTambahan1: valueSoal5Tambahan1,
        };
      }
      return newData;
    });
  }, [valueSoal5Tambahan1]);

  useEffect(() => {
    setDataJawaban(prevData => {
      // Membuat salinan data jawaban yang akan diubah
      const newData = [...prevData];
      // Mencari indeks data jawaban yang akan diubah berdasarkan nomor pertanyaan (no)
      const index = newData.findIndex(item => item.no === 5);
      // Jika indeks ditemukan, mengganti jawaban sesuai nomor pertanyaan
      if (index !== -1) {
        newData[index] = {
          ...newData[index],
          jawabanSoalTambahan2: valueSoal5Tambahan2,
        };
      }
      return newData;
    });
  }, [valueSoal5Tambahan2]);

  // useEffect(() => {
  //   const rangkumanJawaban = dataJawaban
  //     .map(item => {
  //       let rangkuman = `Pertanyaan ${item.no}: ${item.soal}\n`;
  //       rangkuman += `Jawaban: ${item.jawaban}\n`;

  //       if (item.soalTambahan1 && item.jawabanSoalTambahan1) {
  //         rangkuman += `${item.soalTambahan1}: ${item.jawabanSoalTambahan1}\n`;
  //       }

  //       if (item.soalTambahan2 && item.jawabanSoalTambahan2) {
  //         rangkuman += `${item.soalTambahan2}: ${item.jawabanSoalTambahan2}\n`;
  //       }

  //       rangkuman += '\n';
  //       return rangkuman;
  //     })
  //     .join('');
  //   setRangkumanSkrining(rangkumanJawaban);
  //   console.log(rangkumanJawaban);

  //   // Gunakan rangkumanJawaban sesuai kebutuhan, misalnya untuk ditampilkan di UI atau diproses lebih lanjut
  // }, [dataJawaban]);
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

  useEffect(() => {
    if (selectedId1 === '2') {
      setSelectedIdSoal1Tambahan1(null); // Mereset nilai selectedIdSoal1Tambahan1 menjadi null
      setSelectedIdSoal1Tambahan2(null); // Mereset nilai selectedIdSoal1Tambahan2 menjadi null
      handleEditJawabanTambahan1(1, '');
      handleEditJawabanTambahan2(1, '');
    }

    if (selectedId5 === '3') {
      setValueSoal5Tambahan1('');
      setValueSoal5Tambahan2('');
    }
  }, [selectedId1, selectedId5]);

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
  const handleEditJawabanTambahan1 = (no, newValue) => {
    console.log('ini id : ');
    setDataJawaban(prevData => {
      // Membuat salinan data jawaban yang akan diubah
      const newData = [...prevData];
      // Mencari indeks data jawaban yang akan diubah berdasarkan nomor pertanyaan (no)
      const index = newData.findIndex(item => item.no === no);
      // Jika indeks ditemukan, mengganti jawaban sesuai nomor pertanyaan
      if (index !== -1) {
        newData[index] = {...newData[index], jawabanSoalTambahan1: newValue};
      }
      return newData;
    });
  };
  const handleEditJawabanTambahan2 = (no, newValue) => {
    setDataJawaban(prevData => {
      // Membuat salinan data jawaban yang akan diubah
      const newData = [...prevData];
      // Mencari indeks data jawaban yang akan diubah berdasarkan nomor pertanyaan (no)
      const index = newData.findIndex(item => item.no === no);
      // Jika indeks ditemukan, mengganti jawaban sesuai nomor pertanyaan
      if (index !== -1) {
        newData[index] = {...newData[index], jawabanSoalTambahan2: newValue};
      }
      return newData;
    });
  };

  const handleSelect1 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;

    setSelectedId1(id);
    handleEditJawaban(1, selectedValue);
  };
  const handleSelectSoal1_Tambahan1 = id => {
    const selectedRadioButton = radioButtonNo1.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    setSelectedIdSoal1Tambahan1(id);
    handleEditJawabanTambahan1(1, selectedValue);
  };

  const handleSelectSoal1_Tambahan2 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    setSelectedIdSoal1Tambahan2(id);
    handleEditJawabanTambahan2(1, selectedValue);
  };
  const handleSelect2 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    setSelectedId2(id);
    handleEditJawaban(2, selectedValue);
  };
  const handleSelect3 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    setSelectedId3(id);
    handleEditJawaban(3, selectedValue);
  };
  const handleSelect4 = id => {
    const selectedRadioButton = radioButtons.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    setSelectedId4(id);
    handleEditJawaban(4, selectedValue);
  };
  const handleSelect5 = id => {
    const selectedRadioButton = radioButtonNo5.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    setSelectedId5(id);
    handleEditJawaban(5, selectedValue);
  };
  const handleSelect6 = id => {
    const selectedRadioButton = radioButtonNo6.find(button => button.id === id);
    const selectedValue = selectedRadioButton
      ? selectedRadioButton.value
      : null;
    setSelectedId6(id);
    handleEditJawaban(6, selectedValue);
  };

  const validasi_soal5_tambahan1 = () => {
    if (selectedId5 === '1' && valueSoal5Tambahan1 === '') {
      setValidasiSoal5Tambahan1(false);
      return false;
    } else if (selectedId5 === '2' && valueSoal5Tambahan1 === '') {
      setValidasiSoal5Tambahan1(false);
      return false;
    } else {
      setValidasiSoal5Tambahan1(true);
      return true;
    }
  };
  const validasi_soal5_tambahan2 = () => {
    if (selectedId5 === '1' && valueSoal5Tambahan2 === '') {
      setValidasiSoal5Tambahan2(false);
      return false;
    } else if (selectedId5 === '2' && valueSoal5Tambahan2 === '') {
      setValidasiSoal5Tambahan2(false);
      return false;
    } else {
      setValidasiSoal5Tambahan2(true);
      return true;
    }
  };
  const validasi_soal1_tambahan1 = () => {
    if (selectedIdSoal1Tambahan1 === null && selectedId1 === '1') {
      setValidasiSoal1Tambahan1(false);
      return false;
    } else {
      setValidasiSoal1Tambahan1(true);
      return true;
    }
  };
  const validasi_soal1_tambahan2 = () => {
    if (selectedIdSoal1Tambahan2 === null && selectedId1 === '1') {
      setValidasiSoal1Tambahan2(false);
      return false;
    } else {
      setValidasiSoal1Tambahan2(true);
      return true;
    }
  };

  const handleSubmit = () => {
    validasi_soal5_tambahan1();
    validasi_soal5_tambahan2();
    validasi_soal1_tambahan2();
    validasi_soal1_tambahan2();
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
      validasi_soal5_tambahan1() &&
      validasi_soal5_tambahan2() &&
      validasi_soal1_tambahan1() &&
      validasi_soal1_tambahan2()
    ) {
      console.log('berhasil submit');

      console.log('rangkuman : ', rangkumanSkrining);
      const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    <h1>Berikut kami informasikan data skrining [${dataUser.role}], [${dataUser.nama_lengkap}] sebagai berikut:</h1>
      <h1>Nama : ${dataUser.nama_lengkap}</h1>
      <h1>Umur : ${dataUser.umur}</h1>
      <h1>Jenis Kelamin : ${dataUser.jenis_kelamin}</h1>
      <h1>Alamat : ${dataUser.alamat}</h1>
      <h1>Rt/Rw : ${dataUser.rt} / ${dataUser.rw}</h1>
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
          subject: `[${dataUser.role}], ${dataUser.nama_lengkap}`,
          recipients: ['kikiy0000001@gmail.com'],
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
      AsyncStorage.setItem('data_skrining', rangkumanSkrining)
        .then(() => {
          console.log('Data Skrining tersimpan.');
          navigation.replace('HomeScreen');
        })
        .catch(error => {
          console.error('Gagal menyimpan data skrining:', error);
        });
    } else {
      console.log('gagal submit');
    }
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
                Lember Persetujuan
              </Text>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>1. </Text>
                  <Text style={[styles.textPoin]}>
                    Apakah anda sedang batuk dalam 1 bulan ?
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
                  />
                  <View
                    style={[
                      {paddingLeft: 20},
                      selectedId1 === '1'
                        ? {display: 'flex'}
                        : {transform: [{scale: 0}], display: 'none'},
                    ]}>
                    <Text
                      style={[
                        styles.textPoin,
                        {paddingHorizontal: 15, fontFamily: text.bold},
                      ]}>
                      Sudah berapa lama anda batuk ?
                    </Text>
                    <RadioGroup
                      radioButtons={radioButtonNo1}
                      onPress={handleSelectSoal1_Tambahan1}
                      selectedId={selectedIdSoal1Tambahan1}
                      layout="column"
                      containerStyle={{alignItems: 'flex-start'}}
                    />
                    <Text
                      style={[
                        styles.textPoin,
                        {paddingHorizontal: 15, fontFamily: text.bold},
                      ]}>
                      Bila sedang batuk, apakah anda batuk berdahak ?
                    </Text>
                    <RadioGroup
                      radioButtons={radioButtons}
                      onPress={handleSelectSoal1_Tambahan2}
                      selectedId={selectedIdSoal1Tambahan2}
                      layout="column"
                      containerStyle={{alignItems: 'flex-start'}}
                    />
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>2. </Text>
                  <Text style={[styles.textPoin]}>
                    Apakah anda sering mengalami demam/meriang dalam 1 bulan
                    terakhir ?
                  </Text>
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
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>3. </Text>
                  <Text style={[styles.textPoin]}>
                    Apakah anda mengalami sesak napas dalam 1 bulan terakhir ?
                  </Text>
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
                  />
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>4. </Text>
                  <Text style={[styles.textPoin]}>
                    Apakah anda sering berkeringat pada malam hari tanpa sebab
                    yang jelas ? (walaupun suhu ruangan normal atau sejuk,
                    justru anda berkeringat)
                  </Text>
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
                    radioButtons={radioButtonNo5}
                    onPress={handleSelect5}
                    selectedId={selectedId5}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
                  />
                  <View
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
                          !validasiSoal5Tambahan1
                            ? {borderColor: colors.primary}
                            : '',
                        ]}
                        placeholder="isi disini"
                        onChangeText={e => setValueSoal5Tambahan1(e)}
                        value={valueSoal5Tambahan1}
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
                          !validasiSoal5Tambahan2
                            ? {borderColor: colors.primary}
                            : '',
                        ]}
                        placeholder="isi disini"
                        onChangeText={e => setValueSoal5Tambahan2(e)}
                        value={valueSoal5Tambahan2}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.wrapTextPoin}>
                  <Text style={styles.textPoin}>6. </Text>
                  <Text style={[styles.textPoin]}>
                    Apakah anda pernah tinggal serumah dengan penderita TBC/flek
                    paru?
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtonNo6}
                    onPress={handleSelect6}
                    selectedId={selectedId6}
                    layout="column"
                    containerStyle={{alignItems: 'flex-start'}}
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

export default SkriningUmum;

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
  },
});
