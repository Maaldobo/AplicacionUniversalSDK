
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const API_URL = 'https://api.eluniversal.arcpublishing.com/content/v4/stories?website=eluniversal&_id=APX44GXM75EKLGQD4ZQCWTW3IA&published=true';
const API_TOKEN = '2J0768H5RFQFL17V24QHM3P74PBR8JNFxvsabJ324Mn6bXtOP7Wao647x1u9lzyppLgmm/R9';

const ArticleScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [storyData, setStoryData] = useState(null);

  const fetchStory = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error al consumir la API');
      }

      const data = await response.json();
      setStoryData(data);
    } catch (err) {
      setError(err);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.title}>Datos de la API</Text>
      <Text>{JSON.stringify(storyData, null, 2)}</Text>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
export default ArticleScreen;





