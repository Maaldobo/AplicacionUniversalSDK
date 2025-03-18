import React from 'react';
import { TouchableOpacity, Text as RNText } from 'react-native';
import styles from '../styles/atomStyles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

const RNButton: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary' }) => {
  return (
    <TouchableOpacity style={[styles.button, styles[variant]]} onPress={onPress}>
      <RNText style={styles.text}>{title}</RNText>
    </TouchableOpacity>
  );
};

export default RNButton;
