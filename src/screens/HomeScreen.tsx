import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import atomsStyles from '../styles/atomStyles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={atomsStyles.container}>
      <Text style={atomsStyles.text}>Bienvenido a la página principal</Text>
      <Button title="Ir a Noticias" onPress={() => navigation.navigate('News')} />
    </View>
  );
};

export default HomeScreen;
