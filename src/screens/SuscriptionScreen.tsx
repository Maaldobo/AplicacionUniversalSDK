import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PianoIntegration from '../components/pianoIntegration';
import { useNavigation } from '@react-navigation/native';

const SubscriptionScreen: React.FC = () => {
  useEffect(() => {
    PianoIntegration.init('dOm1nMaZpu'); // Inicia el SDK en esta pantalla
  }, []);

  const navigation = useNavigation();
    return (
    <View>
      <Text>Gestión de Suscripciones con Piano</Text>
    </View>
  );
};

export default SubscriptionScreen;
