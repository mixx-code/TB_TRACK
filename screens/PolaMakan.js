/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import FlatListJamPelayanan from '../components/FlatListJamPelayanan';

const dataPolaMakan = [
  {
    hari: 'Senin',
    pagi: {
      menu: [
        'Nasi Goreng Sosis',
        'Acar Ketimun',
        'Telur Dadar',
        'Buah Apel',
        'Susu',
      ],
      aktivitasOlahraga: 'Senam Pagi di Dalam Rumah',
    },
    siang: {
      menu: ['Ayam Goreng', 'Sayur Asem', 'Sambel', 'Buah Jeruk', 'Jus Tomat'],
    },
    malam: {
      menu: ['Nasi Putih', 'Sate Ayam', 'Capcay', 'Buah Pisang', 'Susu'],
    },
  },
  {
    hari: 'Selasa',
    pagi: {
      menu: [
        'Roti Panggang',
        'Omelet',
        'Sup Kacang Merah dan Wortel',
        'Buah Pisang',
        'Susu',
      ],
      aktivitasOlahraga: 'Yoga Pagi di Dalam Rumah',
    },
    siang: {
      menu: [
        'Nasi Putih',
        'Opor Ayam',
        'Pakcoy Saus Tiram',
        'Kerupuk Udang',
        'Buah Papaya',
        'Jus Jambu',
      ],
    },
    malam: {
      menu: [
        'Nasi Putih',
        'Rendang Daging',
        'Sayur Bening Oyong',
        'Buah Apel',
        'Susu',
      ],
    },
  },
  {
    hari: 'Rabu',
    pagi: {
      menu: [
        'Nasi Putih',
        'Sayur Sop',
        'Tempe Goreng',
        'Buah Melon',
        'Susu Kedelai',
      ],
      aktivitasOlahraga: 'Bersepeda Santai di Sekitar Rumah',
    },
    siang: {
      menu: [
        'Nasi Putih',
        'Pecel Sayur',
        'Telur Dadar',
        'Buah Melon',
        'Jus Melon',
      ],
    },
    malam: {
      menu: [
        'Nasi Putih',
        'Oreg Tempe',
        'Ayam Kremes',
        'Tumis Kacang Panjang',
        'Buah Melon',
        'Susu',
      ],
    },
  },
  {
    hari: 'Kamis',
    pagi: {
      menu: [
        'Nasi Putih',
        'Sayur Bayam',
        'Ayam Goreng',
        'Buah Semangka',
        'Susu',
      ],
      aktivitasOlahraga: 'Berjalan Santai di Taman Sekitar',
    },
    siang: {
      menu: [
        'Nasi Putih',
        'Cumi Goreng Tepung',
        'Tumis Kangkung',
        'Sambel',
        'Buah Semangka',
        'Jus Nanas',
      ],
    },
    malam: {
      menu: [
        'Nasi Putih',
        'Soto Tempe',
        'Emping Goreng',
        'Telur Rebus',
        'Buah Semangka',
        'Susu',
      ],
    },
  },
  {
    hari: 'Jumat',
    pagi: {
      menu: ['Lontong Sayur', 'Bakwan', 'Susu Kedelai'],
      aktivitasOlahraga: 'Melakukan Latihan Kebugaran di Rumah',
    },
    siang: {
      menu: [
        'Nasi Putih',
        'Sayur Bening',
        'Tempe Bacem',
        'Omelet Jamur',
        'Kerupuk Bawang',
        'Sambel Terasi',
        'Buah Apel',
        'Air Putih',
      ],
    },
    malam: {
      menu: ['Nasi Putih', 'Tumis Kangkung', 'Ayam Bakar', 'Buah Apel', 'Susu'],
    },
  },
  {
    hari: 'Sabtu',
    pagi: {
      menu: ['Nasi Putih', 'Telur Dadar', 'Salad Sayur', 'Susu'],
      aktivitasOlahraga: 'Berkebun di Halaman Belakang',
    },
    siang: {
      menu: [
        'Nasi Putih',
        'Ikan Bakar',
        'Sayur Sop',
        'Sambel Kecap',
        'Buah Jeruk',
        'Jus Melon',
      ],
    },
    malam: {
      menu: [
        'Nasi Putih',
        'Ayam Bakar',
        'Tahu Isi',
        'Sayur Asem',
        'Buah Melon',
        'Susu',
      ],
    },
  },
  {
    hari: 'Minggu',
    pagi: {
      menu: [
        'Nasi Goreng Sosis',
        'Acar Ketimun',
        'Telur Dadar',
        'Buah Apel',
        'Susu',
      ],
      aktivitasOlahraga: 'Senam Pagi di Dalam Rumah',
    },
    siang: {
      menu: ['Ayam Goreng', 'Sayur Asem', 'Sambel', 'Buah Jeruk', 'Jus Tomat'],
    },
    malam: {
      menu: ['Nasi Putih', 'Sate Ayam', 'Capcay', 'Buah Pisang', 'Susu'],
    },
  },
];

const PolaMakan = ({navigation, route}) => {
  const {page} = route.params;
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;
  console.log(page);
  const [dataMenuHarian, setDataMenuHarian] = useState([]);
  const [senin, setSenin] = useState(true);
  const [selasa, setSelasa] = useState(false);
  const [rabu, setRabu] = useState(false);
  const [kamis, setKamis] = useState(false);
  const [jumat, setJumat] = useState(false);
  const [sabtu, setSabtu] = useState(false);
  const [minggu, setMinggu] = useState(false);

  useEffect(() => {
    scrollToActiveButton();
  }, [senin, selasa, rabu, kamis, jumat, sabtu, minggu]);

  const scrollToActiveButton = () => {
    const activeButtonIndex = getActiveButtonIndex();
    const buttonWidth = screenWidth / 5.1; // Anggap setiap tombol menggunakan 1/3 lebar layar
    const offsetX = activeButtonIndex * buttonWidth;
    scrollViewRef.current.scrollTo({x: offsetX, animated: true});
  };

  const getActiveButtonIndex = () => {
    if (senin) return 0;
    if (selasa) return 1;
    if (rabu) return 2;
    if (kamis) return 3;
    if (jumat) return 4;
    if (sabtu) return 5;
    if (minggu) return 6;
    return 0; // Default, jika tidak ada tombol yang aktif
  };

  const sortDataByHari = hari => {
    console.log('ini hari: ', hari);
    if (hari === 'senin') {
      setSenin(true);
      setSelasa(false);
      setRabu(false);
      setKamis(false);
      setJumat(false);
      setSabtu(false);
      setMinggu(false);
      const dataFilter = dataPolaMakan.filter(
        item => item.hari.toLowerCase() === hari.toLowerCase(),
      );
      setDataMenuHarian(dataFilter);
    } else if (hari === 'selasa') {
      setSenin(false);
      setSelasa(true);
      setRabu(false);
      setKamis(false);
      setJumat(false);
      setSabtu(false);
      setMinggu(false);
      const dataFilter = dataPolaMakan.filter(
        item => item.hari.toLowerCase() === hari.toLowerCase(),
      );
      setDataMenuHarian(dataFilter);
    } else if (hari === 'rabu') {
      setSenin(false);
      setSelasa(false);
      setRabu(true);
      setKamis(false);
      setJumat(false);
      setSabtu(false);
      setMinggu(false);
      const dataFilter = dataPolaMakan.filter(
        item => item.hari.toLowerCase() === hari.toLowerCase(),
      );
      setDataMenuHarian(dataFilter);
    } else if (hari === 'kamis') {
      setSenin(false);
      setSelasa(false);
      setRabu(false);
      setKamis(true);
      setJumat(false);
      setSabtu(false);
      setMinggu(false);
      const dataFilter = dataPolaMakan.filter(
        item => item.hari.toLowerCase() === hari.toLowerCase(),
      );
      setDataMenuHarian(dataFilter);
    } else if (hari === 'jumat') {
      setSenin(false);
      setSelasa(false);
      setRabu(false);
      setKamis(false);
      setJumat(true);
      setSabtu(false);
      setMinggu(false);
      const dataFilter = dataPolaMakan.filter(
        item => item.hari.toLowerCase() === hari.toLowerCase(),
      );
      setDataMenuHarian(dataFilter);
    } else if (hari === 'sabtu') {
      setSenin(false);
      setSelasa(false);
      setRabu(false);
      setKamis(false);
      setJumat(false);
      setSabtu(true);
      setMinggu(false);
      const dataFilter = dataPolaMakan.filter(
        item => item.hari.toLowerCase() === hari.toLowerCase(),
      );
    } else if (hari === 'minggu') {
      setSenin(false);
      setSelasa(false);
      setRabu(false);
      setKamis(false);
      setJumat(false);
      setSabtu(false);
      setMinggu(true);
      const dataFilter = dataPolaMakan.filter(
        item => item.hari.toLowerCase() === hari.toLowerCase(),
      );
      setDataMenuHarian(dataFilter);
    } else {
      // Mengembalikan null jika hari yang dimasukkan tidak valid
      const dataFilter = null;
      setDataMenuHarian(dataFilter);
    }
  };

  useEffect(() => {
    const date = new Date().getDay(); // Mendapatkan hari dalam bentuk angka (0 untuk Minggu, 1 untuk Senin, dst.)

    // Cek hari dan panggil sortDataByHari() sesuai dengan hari tersebut
    switch (date) {
      case 0:
        sortDataByHari('minggu');
        break;
      case 1:
        sortDataByHari('senin');
        break;
      case 2:
        sortDataByHari('selasa');
        break;
      case 3:
        sortDataByHari('rabu');
        break;
      case 4:
        sortDataByHari('kamis');
        break;
      case 5:
        sortDataByHari('jumat');
        break;
      case 6:
        sortDataByHari('sabtu');
        break;
      case 7:
        sortDataByHari('minggu');
        break;
      default:
        break;
    }
  }, []);
  console.log(dataMenuHarian);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <BtnBack navigation={navigation} title={page} />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}>
        <FlatListJamPelayanan
          btnAktif={senin}
          handleSort={() => sortDataByHari('senin')}
          labelJam={'Senin'}
        />
        <FlatListJamPelayanan
          btnAktif={selasa}
          handleSort={() => sortDataByHari('selasa')}
          labelJam={'Selasa'}
        />
        <FlatListJamPelayanan
          btnAktif={rabu}
          handleSort={() => sortDataByHari('rabu')}
          labelJam={'Rabu'}
        />
        <FlatListJamPelayanan
          btnAktif={kamis}
          handleSort={() => sortDataByHari('kamis')}
          labelJam={'Kamis'}
        />
        <FlatListJamPelayanan
          btnAktif={jumat}
          handleSort={() => sortDataByHari('jumat')}
          labelJam={'Jumat'}
        />
        <FlatListJamPelayanan
          btnAktif={sabtu}
          handleSort={() => sortDataByHari('sabtu')}
          labelJam={'Sabtu'}
        />
        <FlatListJamPelayanan
          btnAktif={minggu}
          handleSort={() => sortDataByHari('minggu')}
          labelJam={'Minggu'}
        />
      </ScrollView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: '90%'}}>
        {dataMenuHarian.map((item, index) => (
          <View
            key={index}
            style={{width: '100%', alignItems: 'center', marginVertical: 20}}>
            <View style={styles.cardMenu}>
              <Text style={{fontFamily: text.bold, fontSize: 25}}>Pagi</Text>
              <Text style={{fontFamily: text.bold, fontSize: 19}}>
                Menu Sarapan
              </Text>
              {item.pagi.menu.map((dataMenu, index) => (
                <Text
                  key={index}
                  style={{
                    fontFamily: text.light,
                    fontSize: 19,
                    paddingLeft: 10,
                  }}>{`\u2022  ${dataMenu}`}</Text>
              ))}
              <Text style={{fontFamily: text.bold, fontSize: 19}}>
                Aktivitas Olahraga
              </Text>
              <Text
                key={index}
                style={{
                  fontFamily: text.light,
                  fontSize: 19,
                  paddingLeft: 10,
                }}>
                {`\u2022  ${item.pagi.aktivitasOlahraga}`}
              </Text>
            </View>
            <View style={styles.cardMenu}>
              <Text style={{fontFamily: text.bold, fontSize: 25}}>Siang</Text>
              <Text style={{fontFamily: text.bold, fontSize: 19}}>
                Menu Makan Siang
              </Text>
              {item.siang.menu.map((dataMenu, index) => (
                <Text
                  key={index}
                  style={{
                    fontFamily: text.light,
                    fontSize: 19,
                    paddingLeft: 10,
                  }}>{`\u2022  ${dataMenu}`}</Text>
              ))}
            </View>
            <View style={styles.cardMenu}>
              <Text style={{fontFamily: text.bold, fontSize: 25}}>Malam</Text>
              <Text style={{fontFamily: text.bold, fontSize: 19}}>
                Menu Makan Malam
              </Text>
              {item.malam.menu.map((dataMenu, index) => (
                <Text
                  key={index}
                  style={{
                    fontFamily: text.light,
                    fontSize: 19,
                    paddingLeft: 10,
                  }}>{`\u2022  ${dataMenu}`}</Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PolaMakan;

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
  vectorAtas: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    zIndex: -1,
  },
  cardMenu: {
    width: '85%',
    minHeight: 200,
    marginBottom: 10,
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.13,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
