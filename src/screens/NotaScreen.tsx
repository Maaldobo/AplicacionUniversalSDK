// NotaScreen.tsx
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ArticuloFormateado } from '../InterfaceNews.ts/ArcticleInterface';
import styles from '../styles/notaStyles';

interface ArticleScreenProps {
  article: ArticuloFormateado;
}

const NotaScreen: React.FC<ArticleScreenProps> = ({ article }) => {
  // Función para renderizar cada item del contenido (párrafos e imágenes)
  const renderContentItem = (item: any) => {
    if (item.type === 'parrafo') {
      return (
        <Text key={item.order} style={styles.paragraph}>
          {item.content}
        </Text>
      );
    }
    if (item.type === 'imagen' && item.url) {
      return (
        <Image
          key={item.order}
          source={{ uri: item.url }}
          style={styles.image}
          resizeMode="cover"
        />
      );
    }
    return null;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{article.titulo}</Text>
      {article.subtitulo ? <Text style={styles.subtitle}>{article.subtitulo}</Text> : null}
      {article.autor ? <Text style={styles.author}>Por: {article.autor}</Text> : null}
      {article.contenido.map((item) => renderContentItem(item))}
    </ScrollView>
  );
};

export default NotaScreen;
