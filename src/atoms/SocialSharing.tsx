import React from 'react';
import { TouchableOpacity, StyleSheet, Share } from 'react-native';
import RNTextComponent from './RNText';
import atomsStyles from '../styles/atomStyles';

type Props = {
  url: string;
  title?: string;
};

const SocialSharing: React.FC<Props> = ({ url, title }) => {

  const onShare = async () => {
    try {
      await Share.share({
        message: title ? `${title} - ${url}` : url,
      });
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  return (
    <TouchableOpacity style={atomsStyles.button} onPress={onShare}>
      <RNTextComponent variant="caption" style={atomsStyles.buttonText}>Compartir</RNTextComponent>
    </TouchableOpacity>
  );
};



export default SocialSharing;
