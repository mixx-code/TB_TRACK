/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
const dataPelayanan = [
  {
    petugas: 'Sumiyati dan M.Dali',
    hari: 'Senin – Sabtu',
    waktu: '07.30 – 12.00',
    pelayanan: 'Pendaftaran',
  },
  {
    petugas: 'Dr. Andriansyah',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Umum',
  },
  {
    petugas: 'Dr. Tri Windyani',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Lansia',
  },
  {
    petugas: 'Bd. Kartini Bobyka',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Remaja',
  },
  {
    petugas: 'Drg. Raden Magiestra',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Gigi',
  },
  {
    petugas: 'Bd. Lita',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Anak / MTBS',
  },
  {
    petugas: 'Bd. Elvira Fithriani',
    hari: 'Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Imunisasi',
  },
  {
    petugas: 'Bd. Ela Jamilah',
    hari: 'Rabu & Jumat',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan KIA',
  },
  {
    petugas: 'Bd. Dessy Ria S',
    hari: 'Rabu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan KB',
  },
  {
    petugas: 'Agung Prasetyo',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Laboratorium',
  },
  {
    petugas: 'Dr. Suli Rahayu',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan ISPA',
  },
  {
    petugas: 'Bd. Titik Melasari',
    hari: 'Rabu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan IVA TEST',
  },
  {
    petugas: 'Bd. Evi Nurwhidya',
    hari: 'Selasa',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Paru',
  },
  {
    petugas: 'Ade Kamila',
    hari: 'Senin – Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Konseling Gizi / Calon Pengantin',
  },
  {
    petugas: 'Ahmad Rihena',
    hari: 'Selasa & Kamis',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Konseling Promkes / Kesling',
  },
  {
    petugas: 'Anggita Restu',
    hari: 'Senin, Kamis, dan Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Fisioterapi',
  },
  {
    petugas: 'Dr. Nina Anggraini',
    hari: 'Setiap Hari',
    waktu: '24 Jam',
    pelayanan: 'Pelayanan Rawat Inap',
  },
  {
    petugas: 'Dr. Yoshua Martin',
    hari: 'Setiap Hari',
    waktu: '24 Jam',
    pelayanan: 'Pelayanan UGD & Persalinan',
  },
  {
    petugas: 'Dr. Nicen Kuswidiyanthi',
    hari: 'Sabtu',
    waktu: '08.00 – 12.00',
    pelayanan: 'Pelayanan Kesehatan Jiwa',
  },
];

const DetailJadwalPelayanan = ({navigation, route}) => {
  const {page} = route.params;
  const [sortedData, setSortedData] = useState([]);
  const [sortedDataPerhari, setSortedDataPerhari] = useState([]);
  const [btn0730Aktif, setBtn0730Aktif] = useState(true);
  const [btn0800Aktif, setBtn0800Aktif] = useState(false);
  const [btn24JamAktif, setBtn24JamAktif] = useState(false);
  const [openSeninSabtu, setOpenSeninSabtu] = useState(false);
  const [openSeninKamisSabtu, setOpenSeninKamisSabtu] = useState(false);
  const [openSelasa, setOpenSelasa] = useState(false);
  const [openSelasaKamis, setOpenSelasaKamis] = useState(false);
  const [openRabu, setOpenRabu] = useState(false);
  const [openRabuJumat, setOpenRabuJumat] = useState(false);
  const [openSabtu, setOpenSabtu] = useState(false);
  const [openSetiapHari, setOpenSetiapHari] = useState(false);

  const sortByTime0800to1200AndPetugas = () => {
    const filteredData = dataPelayanan.filter(item => {
      return item.waktu === '08.00 – 12.00';
    });

    // Lakukan sorting dengan menggunakan fungsi Array.prototype.sort()
    const sortedDataPetugas = filteredData.sort((a, b) => {
      // Bandingkan nama petugas dan kembalikan nilai perbandingannya
      return a.petugas.localeCompare(b.petugas);
    });

    return sortedDataPetugas;
  };
  const sortByTime0730to1200AndPetugas = () => {
    const filteredData = dataPelayanan.filter(item => {
      return item.waktu === '07.30 – 12.00';
    });

    // Lakukan sorting dengan menggunakan fungsi Array.prototype.sort()
    const sortedDataPetugas = filteredData.sort((a, b) => {
      // Bandingkan nama petugas dan kembalikan nilai perbandingannya
      return a.petugas.localeCompare(b.petugas);
    });

    return sortedDataPetugas;
  };
  const sortByTime24JamAndPetugas = () => {
    const filteredData = dataPelayanan.filter(item => {
      return item.waktu === '24 Jam';
    });

    // Lakukan sorting dengan menggunakan fungsi Array.prototype.sort()
    const sortedDataPetugas = filteredData.sort((a, b) => {
      // Bandingkan nama petugas dan kembalikan nilai perbandingannya
      return a.petugas.localeCompare(b.petugas);
    });

    return sortedDataPetugas;
  };

  const handleOpenSeninSabtu = () => {
    setOpenSeninSabtu(!openSeninSabtu);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSetiapHari(false);
    sortByHari('Senin – Sabtu');
  };
  const handleOpenSeninKamisSabtu = () => {
    setOpenSeninKamisSabtu(!openSeninKamisSabtu);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    sortByHari('Senin, Kamis, dan Sabtu');
  };
  const handleOpenSelasa = () => {
    setOpenSelasa(!openSelasa);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    sortByHari('Selasa');
  };
  const handleOpenSelasaKamis = () => {
    setOpenSelasaKamis(!openSelasaKamis);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    sortByHari('Selasa & Kamis');
  };
  const handleOpenRabu = () => {
    setOpenRabu(!openRabu);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    sortByHari('Rabu');
  };
  const handleOpenRabuJumat = () => {
    setOpenRabuJumat(!openRabuJumat);
    setOpenRabu(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    sortByHari('Rabu & Jumat');
  };
  const handleOpenSabut = () => {
    setOpenSabtu(!openSabtu);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    sortByHari('Sabtu');
  };
  const handleOpenSetiapHari = () => {
    setOpenSetiapHari(!openSetiapHari);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    sortByHari('Setiap Hari');
  };

  const sortByHari = hari => {
    // Atur variabel state berdasarkan nilai hari
    // setOpenSeninSabtu(hari === 'Senin – Sabtu');
    // setOpenSeninKamisSabtu(hari === 'Senin, Kamis, dan Sabtu');
    // setOpenSelasa(hari === 'Selasa');
    // setOpenSelasaKamis(hari === 'Selasa & Kamis');
    // setOpenRabuKamis(hari === 'Rabu & Jumat' || hari === 'Rabu & Kamis');
    // setOpenRabu(hari === 'Rabu');
    // setOpenRabuJumat(hari === 'Rabu & Jumat');
    // setOpenSabtu(hari === 'Sabtu');

    // Filter data berdasarkan hari yang diberikan
    let filteredData = [];
    filteredData = sortedData.filter(item => {
      return item.hari === hari;
    });
    // Lakukan sorting dengan menggunakan fungsi Array.prototype.sort()
    const sortedDataPetugas = filteredData.sort((a, b) => {
      // Bandingkan nama petugas dan kembalikan nilai perbandingannya
      return a.petugas.localeCompare(b.petugas);
    });

    console.log(sortedDataPetugas);
    setSortedDataPerhari(sortedDataPetugas);
    return sortedDataPetugas;
  };

  const handleSortBy0730 = () => {
    const sortedDataPetugas = sortByTime0730to1200AndPetugas();
    setBtn0730Aktif(true);
    setBtn0800Aktif(false);
    setBtn24JamAktif(false);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    setSortedData(sortedDataPetugas);
  };
  const handleSortBy0800 = () => {
    const sortedDataPetugas = sortByTime0800to1200AndPetugas();
    setBtn0730Aktif(false);
    setBtn0800Aktif(true);
    setBtn24JamAktif(false);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    setSortedData(sortedDataPetugas);
  };
  const handleSortBy24Jam = () => {
    const sortedDataPetugas = sortByTime24JamAndPetugas();
    setBtn0730Aktif(false);
    setBtn0800Aktif(false);
    setBtn24JamAktif(true);
    setOpenRabu(false);
    setOpenRabuJumat(false);
    setOpenSabtu(false);
    setOpenSelasa(false);
    setOpenSelasaKamis(false);
    setOpenSeninKamisSabtu(false);
    setOpenSeninSabtu(false);
    setOpenSetiapHari(false);
    console.log('24Jam : ', sortedDataPetugas);
    setSortedData(sortedDataPetugas);
  };
  useEffect(() => {
    handleSortBy0730();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <BtnBack navigation={navigation} title={page} />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
      </View>
      <View
        style={{
          width: '90%',
          borderBottomWidth: 1,
          borderStyle: 'dashed',
          borderColor: '#E2E0E0',
        }}>
        <Text
          style={{
            fontFamily: text.medium,
            color: colors.fontColor,
            fontSize: 20,
            marginBottom: 10,
          }}>
          Jam Yang Tersedia
        </Text>
        <View style={{flexDirection: 'row', gap: 10, marginBottom: 10}}>
          <TouchableOpacity
            onPress={handleSortBy0730}
            style={[
              {
                width: 100,
                height: 50,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              },
              btn0730Aktif
                ? {
                    borderWidth: 1,
                    borderColor: colors.secondary,
                    backgroundColor: colors.secondary,
                  }
                : {borderWidth: 1, borderColor: colors.secondary},
            ]}>
            <Text
              style={[
                btn0730Aktif ? {color: '#ffffff'} : {color: colors.secondary},
              ]}>
              07.30 – 12.00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSortBy0800}
            style={[
              {
                width: 100,
                height: 50,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              },
              btn0800Aktif
                ? {
                    borderWidth: 1,
                    borderColor: colors.secondary,
                    backgroundColor: colors.secondary,
                  }
                : {borderWidth: 1, borderColor: colors.secondary},
            ]}>
            <Text
              style={[
                btn0800Aktif ? {color: '#ffffff'} : {color: colors.secondary},
              ]}>
              08.00 – 12.00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSortBy24Jam}
            style={[
              {
                width: 100,
                height: 50,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              },
              btn24JamAktif
                ? {
                    borderWidth: 1,
                    borderColor: colors.secondary,
                    backgroundColor: colors.secondary,
                  }
                : {borderWidth: 1, borderColor: colors.secondary},
            ]}>
            <Text
              style={[
                btn24JamAktif ? {color: '#ffffff'} : {color: colors.secondary},
              ]}>
              24 Jam
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{width: '100%', height: '90%'}}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenSeninSabtu()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Senin - Sabtu</Text>
              {openSeninSabtu ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openSeninSabtu
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenSeninKamisSabtu()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Senin, Kamis, dan Sabtu</Text>
              {openSeninKamisSabtu ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openSeninKamisSabtu
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenSelasa()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Selasa</Text>
              {openSelasa ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openSelasa
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenRabu()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Rabu</Text>
              {openRabu ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openRabu
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenRabuJumat()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Rabu & Jumat</Text>
              {openRabuJumat ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openRabuJumat
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenSelasaKamis()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Selasa & Kamis</Text>
              {openSelasaKamis ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openSelasaKamis
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenSabut()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Sabtu</Text>
              {openSabtu ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openSabtu
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => handleOpenSetiapHari()}
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Setiap Hari</Text>
              {openSetiapHari ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              openSetiapHari
                ? {
                    width: '90%',
                    minHeight: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }
                : {display: 'none'},
            ]}>
            {sortedDataPerhari.length === 0 ? (
              <Text style={{fontFamily: text.lightItalic}}>
                Tidak Ada Pelayanan
              </Text>
            ) : (
              sortedDataPerhari.map((item, index) => (
                <View style={{paddingVertical: 5}} key={index}>
                  <Text
                    style={{
                      fontFamily: text.medium,
                      color: colors.fontColor,
                      fontSize: 16,
                    }}>
                    {item.pelayanan}
                  </Text>
                  <Text
                    style={{
                      fontFamily: text.light,
                      color: colors.fontColor,
                      fontSize: 16,
                      paddingLeft: 10,
                    }}>
                    Petugas : {item.petugas}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailJadwalPelayanan;

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
