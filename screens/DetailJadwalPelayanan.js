/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import DropdownPelayanan from '../components/DropdownPelayanan';
import FlatListJamPelayanan from '../components/FlatListJamPelayanan';
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
      <View style={styles.wrapTitleJamLayanan}>
        <Text style={styles.titleJamYGTersedia}>Jam Yang Tersedia</Text>
        <View style={styles.flatList}>
          <FlatListJamPelayanan
            btnAktif={btn0730Aktif}
            handleSort={handleSortBy0730}
            labelJam={'07.30 – 12.00'}
          />
          <FlatListJamPelayanan
            btnAktif={btn0800Aktif}
            handleSort={handleSortBy0800}
            labelJam={'08.00 – 12.00'}
          />
          <FlatListJamPelayanan
            btnAktif={btn24JamAktif}
            handleSort={handleSortBy24Jam}
            labelJam={'24 Jam'}
          />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <DropdownPelayanan
          onPress={handleOpenSeninSabtu}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openSeninSabtu}
          hariPelayanan={'Senin - Sabtu'}
        />
        <DropdownPelayanan
          onPress={handleOpenSeninKamisSabtu}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openSeninKamisSabtu}
          hariPelayanan={'Senin, Kamis dan Sabtu'}
        />
        <DropdownPelayanan
          onPress={handleOpenSelasa}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openSelasa}
          hariPelayanan={'Selasa'}
        />
        <DropdownPelayanan
          onPress={handleOpenRabu}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openRabu}
          hariPelayanan={'Rabu'}
        />
        <DropdownPelayanan
          onPress={handleOpenRabuJumat}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openRabuJumat}
          hariPelayanan={'Rabu & Jumat'}
        />
        <DropdownPelayanan
          onPress={handleOpenSelasaKamis}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openSelasaKamis}
          hariPelayanan={'Selasa & Kamis'}
        />
        <DropdownPelayanan
          onPress={handleOpenSabut}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openSabtu}
          hariPelayanan={'Sabtu'}
        />
        <DropdownPelayanan
          onPress={handleOpenSetiapHari}
          dataPelayanan={sortedDataPerhari}
          openDropdown={openSetiapHari}
          hariPelayanan={'Setiap hari'}
        />
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
  vectorAtas: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    zIndex: -1,
  },
  scroll: {width: '100%', height: '90%'},
  wrapTitleJamLayanan: {
    width: '90%',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#E2E0E0',
  },
  titleJamYGTersedia: {
    fontFamily: text.medium,
    color: colors.fontColor,
    fontSize: 20,
    marginBottom: 10,
  },
  flatList: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
