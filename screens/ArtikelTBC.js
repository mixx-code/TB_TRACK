/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {text} from '../text';
import {colors} from '../colors';
import BtnBack from '../components/BtnBack';
import CardArtikel from '../components/CardArtikel';

const ArtikelTBC = ({navigation, route}) => {
  const {title} = route.params;
  const dataListArtikel = [
    {
      penerbit: 'Penerbit 1',
      title:
        'Artikel 1 consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo.',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-13',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 2',
      title:
        'Artikel 2 consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper.',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-12',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 3',
      title: 'Artikel 3 consectetur adipiscing elit. Sed vitae purus diam.',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-11',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 4 consectetur adipiscing elit.',
      title: 'Artikel 4',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-10',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 5',
      title: 'Artikel 5',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-09',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 6',
      title: 'Artikel 6',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-08',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 7',
      title: 'Artikel 7',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-07',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 8',
      title: 'Artikel 8',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-06',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 9',
      title: 'Artikel 9',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-05',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
    {
      penerbit: 'Penerbit 10',
      title: 'Artikel 10',
      uri_img: require('../sourcefile/imgs/img_artikel.jpg'),
      tgl_terbit: '2024-03-04',
      isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae purus diam. Nullam ac justo nec tortor mollis semper. Mauris eget convallis leo. Vivamus dignissim massa sit amet lectus tincidunt, vitae luctus mauris feugiat. Donec vel sagittis sem. Nam ac lacus a elit tincidunt auctor. Ut ac mi auctor, aliquet odio id, efficitur justo. Aliquam dapibus felis quis elit iaculis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies enim sed tellus vestibulum, sed fermentum ligula lobortis. Curabitur faucibus dui in justo ultricies, sit amet congue elit dapibus. Aliquam convallis tincidunt lectus, id sodales est aliquet non. Fusce commodo eros eu vehicula fermentum. Morbi vitae lacinia elit, a malesuada felis. Nunc in justo vel enim pulvinar finibus. Nullam nec eros ut leo vulputate volutpat at sed elit.',
    },
  ];

  console.log(title);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainerTop}>
        <BtnBack navigation={navigation} title={title} />
        <Image
          source={require('../sourcefile/imgs/Vector_atas.jpg')}
          style={styles.vectorAtas}
        />
      </View>
      <View style={styles.contentContainerBottom}>
        <View style={{width: '90%', height: '60%', marginTop: 50}}>
          <ScrollView
            style={{width: '100%', height: '100%'}}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
              {dataListArtikel.map((data, index) => (
                <CardArtikel
                  key={index}
                  img={data.uri_img}
                  navigation={navigation}
                  penerbit={data.penerbit}
                  title={data.title}
                  isi={data.isi}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <Image
          source={require('../sourcefile/imgs/Vector_bawah.jpg')}
          style={styles.vectorBawah}
        />
      </View>
    </View>
  );
};

export default ArtikelTBC;

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
    height: '90%',
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
