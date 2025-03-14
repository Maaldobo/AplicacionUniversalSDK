import React from 'react';
import { Image as NativeImage, ImageStyle, StyleProp, ImageSourcePropType } from 'react-native';

type Props = {
  source: ImageSourcePropType; // Acepta tanto { uri } como require()
  style?: StyleProp<ImageStyle>; // Permite arrays y condicionales
};

const RNImage: React.FC<Props> = ({ source, style }) => {
  return (
    <NativeImage
      source={source}
      style={[{ width: '100%', height: 200 }, style]} // Estilo por defecto + custom
      resizeMode="cover" // Ajuste de imagen
    />
  );
};

export default RNImage;
