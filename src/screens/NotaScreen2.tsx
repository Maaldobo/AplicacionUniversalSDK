// NotaScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, ActivityIndicator, StyleSheet } from 'react-native';
import useFetchNota from '../hooks/useFetchNota';
import parseNota from '../utils/parseNota2';
import { NotaFormateada, BloqueNota } from '../InterfaceNews/ArcticleInterface';
import styles from '../styles/notaStyles';
import { useNavigation } from '@react-navigation/native';

const NotaScreen2 = () => {
  // Estado para el id de la nota a buscar y para disparar la consulta
  const [notaId, setNotaId] = useState<string>('');
  const [fetchId, setFetchId] = useState<string>('');

  // Se dispara la consulta cuando fetchId tiene contenido
  const { data, loading, error } = useFetchNota(fetchId);
 const navigation = useNavigation();
  // Una vez obtenida la data, se parsea para obtener la nota formateada
  let notaFormateada: NotaFormateada | null = null;
  if (data) {
    notaFormateada = parseNota(data);
  }

  const handleFetchNota = () => {
    setFetchId(notaId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Buscar Nota por ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce el ID de la nota..."
        value={notaId}
        onChangeText={(text) => setNotaId(text)}
      />
      <Button title="Buscar" onPress={handleFetchNota} />
      
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>Error: {error.message}</Text>}
      
      {notaFormateada && (
        <View style={styles.notaContainer}>
          <Text style={styles.notaTitulo}>{notaFormateada.titulo}</Text>
          <Text style={styles.notaSubtitulo}>{notaFormateada.subtitulo}</Text>
          <Text style={styles.notaFecha}>{notaFormateada.fecha}</Text>
          {notaFormateada.imagenPrincipal !== '' && (
            <Image 
              source={{ uri: `${notaFormateada.imagenPrincipal}?auth=8d2fa18255287f5b2e46b87638e3ea4bd8962d4c769c5474b252e36c5a30f2ae&smart=true&width=1100&height=666` }}
              style={styles.notaImagen}
              resizeMode="cover"
            />
          )}
          {notaFormateada.contenido.map((bloque: BloqueNota, index: number) => {
            if (bloque.tipo === 'texto') {
              return <Text key={index} style={styles.notaTexto}>{bloque.contenido}</Text>;
            } else if (bloque.tipo === 'imagen') {
              return (
                <View key={index} style={styles.imagenBloque}>
                  <Image 
                    source={{ uri: bloque.url }}
                    style={styles.imagenIntercalada}
                    resizeMode="cover"
                  />
                  {bloque.caption && <Text style={styles.caption}>{bloque.caption}</Text>}
                </View>
              );
            }
            return null;
          })}
        </View>
      )}
    </ScrollView>
  );
};
export default NotaScreen2;