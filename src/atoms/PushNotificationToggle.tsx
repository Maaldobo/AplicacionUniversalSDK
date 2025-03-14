import React, { useState } from 'react';
import { View, Text as RNText, Switch, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
  },
});

export default PushNotificationToggle;
