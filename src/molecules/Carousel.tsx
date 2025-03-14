import React, { useState } from 'react';
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native';
import Image from '../atoms/Image';
import { spacing } from '../../styles/spacing';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');

type CarouselItem = {
  id: string;
  imageUrl: string;
};

type Props = {
  items: CarouselItem[];
};

const Carousel: React.FC<Props> = ({ items }) => {
  // Carrusel de imágenes con paginación horizontal
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {items.map(item => (
          <Image key={item.id} source={item.imageUrl} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {items.map((_, index) => (
          <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.medium,
  },
  image: {
    width: width,
    height: 200,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.small,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.text,
  },
});

export default Carousel;
