import React, { useRef } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import RNImage from '../atoms/RNImage';
import carouselStyles from '../styles/carousel';
import Card from './card';



const { width } = Dimensions.get('window');

type CarouselItem = {
  id: string;
  type: 'image' | 'video' | 'youtube' | 'card';
  source?: any;
  title?: string;
  subtitle?: string;
  youtubeId?: string; // ID del video de YouTube
};

type CarouselProps = {
  data: CarouselItem[];
};

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={carouselStyles.slide}>
        {/* Imagen */}
        {item.type === 'image' && <RNImage source={item.source} style={carouselStyles.image} />}

        {/* Video Local */}
        {item.type === 'video' && (
          <Video
            source={item.source}
            style={carouselStyles.video}
            controls
            resizeMode="cover"
          />
        )}

        {/* Video de YouTube */}
        {item.type === 'youtube' && item.youtubeId && (
          <WebView
            style={carouselStyles.video}
            source={{ uri: `https://www.youtube.com/embed/${item.youtubeId}` }}
            javaScriptEnabled
            domStorageEnabled
          />
        )}

        {/* Card */}
        {item.type === 'card' && (
          <Card title={item.title || ''} subtitle={item.subtitle} imageSource={item.source} variant="large" />
        )}
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      snapToAlignment="center"
      snapToInterval={width}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Carousel;
