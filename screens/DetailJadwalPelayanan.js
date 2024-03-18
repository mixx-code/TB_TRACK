/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import {TouchableOpacity} from 'react-native';

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

  // Fungsi untuk melakukan sorting berdasarkan waktu "08.00 – 12.00"
  // Fungsi untuk melakukan sorting berdasarkan waktu "08.00 – 12.00"
  // Fungsi untuk melakukan sorting berdasarkan waktu "08.00 – 12.00" dan petugas
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
  const sortByHari = hari => {
    const filteredData = sortedData.filter(item => {
      return item.hari === hari;
    });

    // Lakukan sorting dengan menggunakan fungsi Array.prototype.sort()
    const sortedDataPetugas = filteredData.sort((a, b) => {
      // Bandingkan nama petugas dan kembalikan nilai perbandingannya
      return a.petugas.localeCompare(b.petugas);
    });
    console.log(sortedDataPetugas);
    return sortedDataPetugas;
  };

  useEffect(() => {
    const sortedDataPetugas = sortByTime0730to1200AndPetugas();
    setSortedData(sortedDataPetugas);
  }, []);
  const handleSortBy0730 = () => {
    const sortedDataPetugas = sortByTime0730to1200AndPetugas();
    setSortedData(sortedDataPetugas);
  };
  const handleSortBy0800 = () => {
    const sortedDataPetugas = sortByTime0800to1200AndPetugas();
    setSortedData(sortedDataPetugas);
  };
  const handleSortBy24Jam = () => {
    const sortedDataPetugas = sortByTime24JamAndPetugas();
    setSortedData(sortedDataPetugas);
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
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={handleSortBy0730}>
            <Text style={{padding: 10, backgroundColor: 'green'}}>
              07.30 – 12.00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSortBy0800}>
            <Text style={{padding: 10, backgroundColor: 'blue'}}>
              08.00 – 12.00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSortBy24Jam}>
            <Text style={{padding: 10, backgroundColor: 'red'}}>24 Jam</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity onPress={() => sortByHari('Senin – Sabtu')}>
            <Text style={{padding: 10, backgroundColor: 'red'}}>
              Senin – Sabtu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByHari('Sabtu')}>
            <Text style={{padding: 10, backgroundColor: 'blue'}}>Sabtu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByHari('Rabu & Jumat')}>
            <Text style={{padding: 10, backgroundColor: 'green'}}>
              Rabu & Jumat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByHari('Rabu')}>
            <Text style={{padding: 10, backgroundColor: 'gray'}}>Rabu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByHari('Selasa')}>
            <Text style={{padding: 10, backgroundColor: 'gray'}}>Selasa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByHari('Selasa & Kamis')}>
            <Text style={{padding: 10, backgroundColor: 'gray'}}>
              Selasa & Kamis
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => sortByHari('Senin, Kamis, dan Sabtu')}>
            <Text style={{padding: 10, backgroundColor: 'gray'}}>
              Senin, Kamis, dan Sabtu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByHari('Setiap Hari')}>
            <Text style={{padding: 10, backgroundColor: 'gray'}}>
              Setiap Hari
            </Text>
          </TouchableOpacity>
        </View>
        {sortedData.length === 0 ? (
          <Text style={styles.textIsiCard}>Data kosong</Text>
        ) : (
          sortedData.map((item, index) => (
            <View key={index} style={styles.cardInfo}>
              <Text style={styles.textIsiCard}>
                Pelayanan: {item.pelayanan}
              </Text>
              <Text style={styles.textIsiCard}>Hari: {item.hari}</Text>
              <Text style={styles.textIsiCard}>Waktu: {item.waktu}</Text>
              <Text style={styles.textIsiCard}>Petugas: {item.petugas}</Text>
            </View>
          ))
        )}
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
