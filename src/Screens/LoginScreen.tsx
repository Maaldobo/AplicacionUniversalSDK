import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { spacing } from '../../styles/spacing';

const LoginScreen: React.FC = () => {
  // Pantalla de login con formulario de autenticación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación (ej. API, validaciones, etc.)
    console.log('Login:', email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text variant="title" style={styles.title}>Iniciar Sesión</Text>
        <Input
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Ingresar" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.large,
    backgroundColor: '#F5F5F5',
  },
  form: {
    backgroundColor: '#FFF',
    padding: spacing.large,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    marginBottom: spacing.large,
    textAlign: 'center',
  },
});

export default LoginScreen;
