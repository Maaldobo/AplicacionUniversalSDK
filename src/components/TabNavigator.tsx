import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import RNButton from '../atoms/RNButton';
import { useNavigation } from '@react-navigation/native';

const TabNavigator: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <RNButton title="Home" onPress={() => navigation.navigate('Home')} />
        <RNButton title="Noticias" onPress={() => navigation.navigate('News')} />
        <RNButton title="Carrusel" onPress={() => navigation.navigate('Carrousel')} />
        <RNButton title="Articulo" onPress={() => navigation.navigate('Articulo')} />
        <RNButton title="Nota" onPress={() => navigation.navigate('Nota')} />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default TabNavigator;
