import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNText from '../atoms/RNText';
import RNImage from '../atoms/RNImage';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const PaperNewsCard: React.FC<Props> = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.card}>
      <RNImage source={imageUrl} style={styles.image} />
      <RNText variant="title">{title}</RNText>
      <RNText variant="body">{description}</RNText>
    </View>
  );
};



export default PaperNewsCard;

