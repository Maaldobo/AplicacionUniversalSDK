import React, { useRef } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';
import Card from './card';


const { height } = Dimensions.get('window');

type CardListProps = {
  data: { id: string; title: string; subtitle?: string; image?: any; isHeader?: boolean }[];
};

const CardList: React.FC<CardListProps> = ({ data }) => {
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);

  const handleScrollEnd = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / height);

    if (index !== currentIndex.current) {
      currentIndex.current = index;
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); // Vibración leve
    }

    // Regresar a la última tarjeta si el usuario sigue desplazándose hacia abajo
    if (index >= data.length - 1) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({ index: data.length - 1, animated: true });
      }, 200);
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={{ height }}>
      <Card title={item.title} subtitle={item.subtitle} imageSource={item.image} variant="large" />
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      pagingEnabled
      snapToAlignment="start"
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={handleScrollEnd}
    />
  );
};

export default CardList;
