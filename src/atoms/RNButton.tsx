import React from 'react';
import { TouchableOpacity, StyleSheet, Text as RNText } from 'react-native';
import { colors } from '../../styles/colors';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

const RNButton: React.FC<Props> = ({ title, onPress, variant = 'primary' }) => {
  // Botón reutilizable con variantes de estilo (primario y secundario)
  return (
    <TouchableOpacity style={[styles.button, styles[variant]]} onPress={onPress}>
      <RNText style={styles.text}>{title}</RNText>
    </TouchableOpacity>
  );
};



export default RNButton;
