//3312
import React, { useEffect, useState } from 'react';
import { Text, Button, FlatList, ActivityIndicator, View } from 'react-native';

//import { NativeModulesProxy } from 'expo-modules-core';
//const { ArcXpModule } = NativeModulesProxy;
import { NativeModules } from 'react-native';
const { ArcXpModule } = NativeModules;

export default function ArcXpContentView() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ejemplo: cargar la portada ("top stories") al montar el componente
  useEffect(() => {
    fetchCollection("mobile-topstories");
  }, []);

  const initializeArcXp = async () => {
    try {
      const result = await ArcXpModule.initializeSdk();
      console.log(result);
    } catch (e) {
      console.error("Error inicializando ArcXP:", e);
    }
  };

  const fetchArticle = async (articleId) => {
    setLoading(true);
    try {
      const jsonString = await ArcXpModule.fetchArticle(articleId);
      const articleData = JSON.parse(jsonString);
      // manejar el JSON del artículo (por ejemplo, guardarlo o actualizar estado)
      console.log("Artículo:", articleData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchCollection = async (alias) => {
    setLoading(true);
    try {
      const jsonString = await ArcXpModule.fetchCollection(alias);
      const collectionData = JSON.parse(jsonString);
      // Suponiendo que collectionData contiene una lista de artículos en, por ejemplo, collectionData.content_elements
      setArticles(collectionData.content_elements || []);
      setError(null);
    } catch (e) {
      setError(e);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) {
    return <Text style={{color: 'red'}}>Error: {String(error)}</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Inicializar ArcXP" onPress={initializeArcXp} />
      <FlatList
        data={articles}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={{ marginVertical: 8 }}>{item.headlines.basic}</Text>
        )}
      />
    </View>
  );
}
