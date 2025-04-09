import React, { useRef } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics'; 
import atomsStyles from '../styles/atomStyles';
import { useNavigation } from '@react-navigation/native';
import RNTextComponent from '../atoms/RNText';
import RNButton from '../atoms/RNButton';
import Card from '../molecules/card';
import CardList from '../molecules/cardList';




const { height } = Dimensions.get('window');


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);

  const handleScrollEnd = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / height);
    if (index !== currentIndex.current) {
      currentIndex.current = index;
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); // Vibración leve
    }
  };

  const data = [
    { id: '1', title: 'Noticia 1', subtitle: 'Subtítulo 1', image: require('../../assets/gris_placeholder.png') },
    { id: '2', title: 'Noticia 2', subtitle: 'Subtítulo 2', image: require('../../assets/gris_placeholder.png') },
    { id: '3', title: 'Noticia 3', subtitle: 'Subtítulo 3', image: require('../../assets/gris_placeholder.png') },
    { id: '4', title: 'Noticia 4', subtitle: 'Subtítulo 4', image: require('../../assets/gris_placeholder.png') },
    { id: '5', title: 'Noticia 5', subtitle: 'Subtítulo 5', image: require('../../assets/gris_placeholder.png') },
    { id: '6', title: 'Noticia 6', subtitle: 'Subtítulo 6', image: require('../../assets/gris_placeholder.png') },
    { id: '7', title: 'Noticia 7', subtitle: 'Subtítulo 7', image: require('../../assets/gris_placeholder.png') },
  ];




  return ( 
    <>  
    <View style={atomsStyles.container}>
     {/* <RNTextComponent style={atomsStyles.text}>Bienvenido a la página principal</RNTextComponent>
      <RNButton title="Ir a Noticias" onPress={() => navigation.navigate('News')} />  */}
 
       <CardList data={data} />
    </View>
    </>
  );
};

export default HomeScreen;
