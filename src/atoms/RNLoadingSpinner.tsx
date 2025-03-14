import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const RNLoadingSpinner: React.FC = () => {
  return <ActivityIndicator style={styles.spinner} size="large" color={colors.primary} />;
};

const styles = StyleSheet.create({
  spinner: {
    marginVertical: 16,
  },
});

export default RNLoadingSpinner;
