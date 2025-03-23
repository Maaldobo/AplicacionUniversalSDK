import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import atomsStyles from '../styles/atomStyles';
import RNTextComponent from '../atoms/RNText';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../molecules/card';

const NewsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={atomsStyles.container}>
      {/* <RNTextComponent style={atomsStyles.text}>Página de Noticias</RNTextComponent>
      <Button title="Volver a Home" onPress={() => navigation.navigate('Home')} /> */}

      <ScrollView style={atomsStyles.container}>
      {/* Card Horizontal */}
      <Card
        title="Noticia Destacada"
        subtitle="Subtítulo de la noticia"
        imageSource={require('../../assets/gris_placeholder.png')}
        variant="horizontal"
        onPress={() => console.log('Card Horizontal Clicked')}
      />

      {/* Card Vertical */}
      <Card
        title="Últimas Noticias"
        subtitle="Detalles de la noticia"
        imageSource={require('../../assets/gris_placeholder.png')}
        variant="vertical"
        onPress={() => console.log('Card Vertical Clicked')}
      />

      {/* Card Grande 
      <Card
        title="Noticias Importantes"
        subtitle="Detalles extendidos"
        imageSource={require('../../assets/gris_placeholder.png')}
        variant="large"
        onPress={() => console.log('Card Grande Clicked')}
      />
      */}
      {/* Card Horizontal */}
      <Card
        title="Noticia Destacada"
        subtitle="Subtítulo de la noticia"
        imageSource={require('../../assets/gris_placeholder.png')}
        variant="horizontal"
        onPress={() => console.log('Card Horizontal Clicked')}
      />

      {/* Card Vertical */}
      <Card
        title="Últimas Noticias"
        subtitle="Detalles de la noticia"
        imageSource={require('../../assets/gris_placeholder.png')}
        variant="vertical"
        onPress={() => console.log('Card Vertical Clicked')}
      />

      {/* Card Horizontal */}
      <Card
        title="Noticia Destacada"
        subtitle="Subtítulo de la noticia"
        imageSource={require('../../assets/gris_placeholder.png')}
        variant="horizontal"
        onPress={() => console.log('Card Horizontal Clicked')}
      />

      {/* Card Vertical */}
      <Card
        title="Últimas Noticias"
        subtitle="Detalles de la noticia"
        imageSource={require('../../assets/gris_placeholder.png')}
        variant="vertical"
        onPress={() => console.log('Card Vertical Clicked')}
      />

  

    </ScrollView>
 
    </View>
  );
};

export default NewsScreen;
