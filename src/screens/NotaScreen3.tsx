// NotaScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useFetchNota } from '../hooks/useFetchNota2';
import { parseNota } from '../utils/parseNota3';
import { BloqueNota, NotaFormateada } from '../InterfaceNews/types';
import { useNavigation } from '@react-navigation/native';
//import { useFetchNota } from './useFetchNota';
//import { parseNota } from './parseNota';
//import { NotaFormateada, BloqueNota } from './types';

// Componente auxiliar para renderizar HTML
const HTMLText = ({ html }: { html: string }) => {
  const { width } = useWindowDimensions();
  return <RenderHTML contentWidth={width} source={{ html }} />;
};

// Componente para la sección "Leer También"
const CardLeerTambien = ({ html }: { html: string }) => {
  // Aquí puedes extraer la URL o procesar el HTML según lo requieras.
  return (
    <TouchableOpacity onPress={() => { console.log("Navegar a la nota con contenido HTML:", html); /* Implementa la navegación según tu stack */ }}>
      <HTMLText html={html} />
    </TouchableOpacity>
  );
};

const NotaScreen3 = () => {
  const navigation = useNavigation();
  // Estado para almacenar el ID ingresado (simulación)
  const [notaId, setNotaId] = useState<string>('');
  const { data, loading, error } = useFetchNota(notaId);

  // Si ya se obtuvo la data, se parsea a un objeto formateado
  const notaFormateada: NotaFormateada | null = data ? parseNota(data) : null;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <TextInput
        placeholder="Ingresa el ID de la nota"
        value={notaId}
        onChangeText={setNotaId}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 12,
          padding: 8,
        }}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>Error: {error.message}</Text>}
      {notaFormateada && (
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
            {notaFormateada.titulo}
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 4 }}>
            {notaFormateada.subtitulo}
          </Text>
          {notaFormateada.imagenPrincipal ? (
            <View style={{ marginBottom: 12 }}>
              <Image
                source={{ uri: notaFormateada.imagenPrincipal }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
            </View>
          ) : null}
          <Text style={{ color: 'gray', marginBottom: 12 }}>
            {notaFormateada.fecha}
          </Text>
          {notaFormateada.contenido.map((bloque: BloqueNota, index: number) => {
            if (bloque.tipo === 'texto') {
              return (
                <View key={index} style={{ marginBottom: 8 }}>
                  <HTMLText html={bloque.contenido} />
                </View>
              );
            } else if (bloque.tipo === 'imagen') {
              return (
                <View key={index} style={{ marginBottom: 8 }}>
                  <Image
                    source={{ uri: bloque.url }}
                    style={{ width: '100%', height: 200 }}
                    resizeMode="cover"
                  />
                  {bloque.caption ? <Text style={{ fontStyle: 'italic' }}>{bloque.caption}</Text> : null}
                </View>
              );
            } else if (bloque.tipo === 'leetambien') {
              return (
                <View key={index} style={{ marginBottom: 8 }}>
                  <CardLeerTambien html={bloque.contenido} />
                </View>
              );
            } else {
              return null;
            }
          })}
        </View>
      )}
    </ScrollView>
  );
};
export default NotaScreen3;