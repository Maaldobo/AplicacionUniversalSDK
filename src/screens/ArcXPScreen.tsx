// screens/ArcXPScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { getCollection, getStory, initialize } from '../components/ArcXpContentView';
import { useNavigation } from '@react-navigation/native';

export default function ArcXPScreen() {
    const naigation = useNavigation();
  const [story, setStory] = useState(null);
  const [collection, setCollection] = useState(null);

  const initArcxp = async () => {
    try {
      await initialize();
      console.log("ArcXP inicializado");
    } catch (e) {
      console.error(e);
    }
  };

  const loadStory = async () => {
    const data = await getStory("SOME_STORY_ID");
    setStory(data);
  };

  const loadCollection = async () => {
    const data = await getCollection("homepage");
    setCollection(data);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Button title="Inicializar ArcXP" onPress={initArcxp} />
      <Button title="Cargar Artículo" onPress={loadStory} />
      <Button title="Cargar Colección" onPress={loadCollection} />

      {story && <Text>Artículo: {JSON.stringify(story, null, 2)}</Text>}
      {collection && <Text>Colección: {JSON.stringify(collection, null, 2)}</Text>}
    </ScrollView>
  );
}
