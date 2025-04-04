import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

import styles from '../styles/atomStyles';

const RNInput: React.FC<TextInputProps> = (props) => {
  // Input de texto reutilizable con estilos base
  return <TextInput style={[styles.input, props.style]} {...props} />;
};



export default RNInput;
