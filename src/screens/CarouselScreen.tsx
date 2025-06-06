import React from 'react';
import { SafeAreaView } from 'react-native';
import Carousel from '../molecules/Carousel';
import { useNavigation } from '@react-navigation/native';


const CarouselScreen: React.FC = () => {
    const navigation = useNavigation();
  const data = [
    { id: '1', type: 'image', source: require('../../assets/gris_placeholder.png') },
    { id: '2', type: 'youtube', youtubeId: 'dQw4w9WgXcQ' }, // Video de YouTube
    { id: '3', type: 'card', title: 'Noticia Importante', subtitle: 'Detalles de la noticia', source: require('../../assets/gris_placeholder.png') },
    { id: '4', type: 'youtube', youtubeId: '3JZ_D3ELwOQ' }, // Otro video de YouTube
    { id: '5', type: 'image', source: require('../../assets/gris_placeholder.png') },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Carousel data={data} />
    </SafeAreaView>
  );
};

export default CarouselScreen;
