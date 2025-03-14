import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import { spacing } from '../../styles/spacing';
import { colors } from '../../styles/colors';
import * as Linking from 'expo-linking';

type Props = {
  imageUrl: string;
  link?: string;
  title?: string;
};

const AdBanner: React.FC<Props> = ({ imageUrl, link, title }) => {
  // Banner publicitario que muestra una imagen y, opcionalmente, un título; redirige al enlace cuando se toca
  const handlePress = () => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={imageUrl} style={styles.image} />
      {title && <Text variant="caption" style={styles.caption}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.medium,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  caption: {
    textAlign: 'center',
    marginTop: spacing.small,
  },
});

export default AdBanner;
