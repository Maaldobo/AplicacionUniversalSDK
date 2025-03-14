import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import { spacing } from '../../styles/spacing';

const categories = ['Política', 'Deportes', 'Tecnología', 'Salud'];

const CategoryTabs: React.FC = () => {
  // Pestañas de categorías para navegar entre secciones de noticias
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map(category => (
        <TouchableOpacity key={category} style={styles.tab}>
          <Text variant="subtitle">{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.medium,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#EEE',
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export default CategoryTabs;
