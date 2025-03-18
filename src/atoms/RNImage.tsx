import React from 'react';
import { Image as NativeImage, ImageStyle, StyleProp, ImageSourcePropType } from 'react-native';
import atomsStyles from '../styles/atomStyles';


type Props = {
  source: ImageSourcePropType; // Acepta tanto { uri } como require()
  style?: StyleProp<ImageStyle>; // Permite arrays y condicionales
};

const RNImage: React.FC<Props> = ({ source, style }) => {
  return (
    <NativeImage
      source={source}
      style={[atomsStyles.image, style]} // Usa estilos predefinidos + custom styles
      resizeMode="cover" // Ajuste de imagen
    />
  );
};

export default RNImage;