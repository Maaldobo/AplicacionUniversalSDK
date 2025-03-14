import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../organisms/Header';
import CategoryTabs from '../molecules/CategoryTabs';
import ArticleList from '../organisms/ArticleList';

const HomeScreen: React.FC = () => {
  // Pantalla principal que integra encabezado, pestañas de categoría y lista de artículos
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <CategoryTabs />
        <ArticleList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
