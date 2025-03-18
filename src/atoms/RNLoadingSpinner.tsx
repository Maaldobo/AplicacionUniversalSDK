import React from 'react';
import { ActivityIndicator } from 'react-native';
import atomsStyles from '../styles/atomStyles';
import colors from '../styles/colors';


const RNLoadingSpinner: React.FC = () => {
  return <ActivityIndicator style={atomsStyles.spinner} size="large" color={colors.primary} />;
};

export default RNLoadingSpinner;
