import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import ArticleCard from '../molecules/ArticleCard';
import { articles } from '../../mockups/defaultData';
import { spacing } from '../../styles/spacing';
import Text from '../atoms/Text';

const ArticleList: React.FC = () => {
  // Lista de artículos utilizando FlatList
  if (!articles) {
    return <ActivityIndicator style={styles.loading} size="large" color="#1A73E8" />;
  }

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ArticleCard {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: spacing.large,
  },
});

export default ArticleList;
