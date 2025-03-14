import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import { colors } from '../../styles/colors';

const Header: React.FC = () => {
  // Encabezado de la aplicación con título o logo
  return (
    <View style={styles.container}>
      <Text variant="title">📰 Mi Periódico</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});

export default Header;
