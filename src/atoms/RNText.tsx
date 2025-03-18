import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import colors from '../styles/colors';
import typography from '../styles/typography';

type TextProps = {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  style?: TextStyle;
};

const RNTextComponent: React.FC<TextProps> = ({ children, variant = 'body', style }) => {
  return (
    <RNText style={[typography[variant], { color: colors.textPrimary }, style]}>
      {children}
    </RNText>
  );
};

export default RNTextComponent;
