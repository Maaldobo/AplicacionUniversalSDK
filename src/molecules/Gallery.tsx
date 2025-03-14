import React from 'react';
import { FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Image from '../atoms/Image';
import { spacing } from '../../styles/spacing';

const { width } = Dimensions.get('window');

type GalleryItem = {
  id: string;
  imageUrl: string;
};

type Props = {
  images: GalleryItem[];
  onImagePress?: (imageUrl: string) => void;
};

const Gallery: React.FC<Props> = ({ images, onImagePress }) => {
  // Galería de imágenes en formato grid
  const numColumns = 3;
  const imageSize = (width - spacing.large * 2 - spacing.small * (numColumns - 1)) / numColumns;

  const renderItem = ({ item }: { item: GalleryItem }) => (
    <TouchableOpacity onPress={() => onImagePress && onImagePress(item.imageUrl)}>
      <Image source={item.imageUrl} style={[styles.image, { width: imageSize, height: imageSize }]} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
  },
  image: {
    margin: spacing.small,
    borderRadius: 8,
  },
});

export default Gallery;
