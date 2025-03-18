import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import atomsStyles from '../styles/atomStyles';
import RNTextComponent from '../atoms/RNText';

const NewsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={atomsStyles.container}>
      <RNTextComponent style={atomsStyles.text}>Página de Noticias</RNTextComponent>
      <Button title="Volver a Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default NewsScreen;
