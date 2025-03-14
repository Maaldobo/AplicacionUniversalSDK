import React from 'react';
import { View, Image as RNImage, StyleSheet } from 'react-native';
import Text from '../atoms/Text';

type Props = {
  name: string;
  photoUrl: string;
  date: string;
  description: string;
};

const AuthorSignature: React.FC<Props> = ({ name, photoUrl, date, description }) => {
  // Muestra la firma del autor con foto, nombre, fecha y descripción
  return (
    <View style={styles.container}>
      <RNImage source={{ uri: photoUrl }} style={styles.photo} />
      <View style={styles.info}>
        <Text variant="title" style={styles.name}>{name}</Text>
        <Text variant="caption" style={styles.date}>{date}</Text>
        <Text variant="body" style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default AuthorSignature;
