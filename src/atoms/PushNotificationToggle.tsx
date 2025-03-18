import React, { useState } from 'react';
import { View, Text as RNText, Switch, StyleSheet } from 'react-native';
import styles from '../styles/atomStyles';

type Props = {
  initialValue?: boolean;
  onToggle?: (enabled: boolean) => void;
};

const PushNotificationToggle: React.FC<Props> = ({ initialValue = false, onToggle }) => {
  // Toggle para activar/desactivar notificaciones push
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    setIsEnabled(prev => {
      const newValue = !prev;
      onToggle && onToggle(newValue);
      return newValue;
    });
  };

  return (
    <View style={styles.container}>
      <RNText style={styles.label}>Notificaciones Push</RNText>
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  );
};


export default PushNotificationToggle;
