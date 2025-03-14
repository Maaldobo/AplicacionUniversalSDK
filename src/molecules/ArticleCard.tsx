import React from 'react';
import { View } from 'react-native';
import RNText from '../atoms/RNText';
import RNImage from '../atoms/RNImage';
import { styles } from './ArticleCard.styles';

const ArticleCard = ({ title, description, imageUrl }) => (
  <View style={styles.card}>
    <RNImage source={{ uri: imageUrl }} style={styles.image} />
    <RNText style={styles.title}>{title}</RNText>
    <RNText style={styles.description}>{description}</RNText>
  </View>
);

export default ArticleCard;