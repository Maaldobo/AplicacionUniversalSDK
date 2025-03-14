import React from 'react';
import { TouchableOpacity, StyleSheet, Share } from 'react-native';
import Text from './Text';

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
    <TouchableOpacity style={styles.button} onPress={onShare}>
      <Text variant="caption" style={styles.buttonText}>Compartir</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#1A73E8',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SocialSharing;
