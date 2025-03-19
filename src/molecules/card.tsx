import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import RNImage from '../atoms/RNImage';
import RNText from '../atoms/RNText';
import cardStyles from '../styles/cardStyles';


type CardProps = {
  title: string;
  subtitle?: string;
  imageSource: any;
  variant?: 'horizontal' | 'vertical' | 'large';
  onPress?: () => void;
};

const Card: React.FC<CardProps> = ({ title, subtitle, imageSource, variant = 'vertical', onPress }) => {
  return (
    <TouchableOpacity style={[cardStyles.card, cardStyles[variant]]} onPress={onPress}>
      {/* Variante Horizontal */}
      {variant === 'horizontal' && (
        <>
          <View style={cardStyles.textContainer}>
            <RNText variant="title" style={cardStyles.title}>{title}</RNText>
            {subtitle && <RNText variant="subtitle" style={cardStyles.subtitle}>{subtitle}</RNText>}
          </View>
          <RNImage source={imageSource} style={cardStyles.imageHorizontal} />
        </>
      )}

      {/* Variante Vertical */}
      {variant === 'vertical' && (
        <>
          <RNImage source={imageSource} style={cardStyles.imageVertical} />
          <View style={cardStyles.textContainer}>
            <RNText variant="title" style={cardStyles.title}>{title}</RNText>
            {subtitle && <RNText variant="subtitle" style={cardStyles.subtitle}>{subtitle}</RNText>}
          </View>
        </>
      )}

      {/* Variante Grande */}
      {variant === 'large' && (
        <>
          <RNImage source={imageSource} style={cardStyles.imageLarge} />
          <View style={cardStyles.textContainer}>
            <RNText variant="title" style={cardStyles.title}>{title}</RNText>
            {subtitle && <RNText variant="subtitle" style={cardStyles.subtitle}>{subtitle}</RNText>}
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Card;
