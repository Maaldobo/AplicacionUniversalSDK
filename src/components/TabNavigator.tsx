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
        <RNButton title="Suscripciones" onPress={() => navigation.navigate('Suscripcion')} />
        <RNButton title="Elecciones" onPress={() => navigation.navigate('Elections')} />

        <RNButton title="Home" onPress={() => navigation.navigate('Home')} />
        <RNButton title="Noticias" onPress={() => navigation.navigate('News')} />
        <RNButton title="Deportes" onPress={() => navigation.navigate('Sports')} />
        <RNButton title="De Última" onPress={() => navigation.navigate('BreakingNews')} />
        <RNButton title="Elecciones" onPress={() => navigation.navigate('Elections')} />
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
