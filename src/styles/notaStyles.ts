// notaStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
  notaContainer: {
    marginTop: 20,
  },
  notaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notaSubtitulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  notaFecha: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  notaImagen: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  notaTexto: {
    fontSize: 16,
    marginBottom: 10,
  },
  imagenBloque: {
    marginBottom: 10,
    alignItems: 'center',
  },
  imagenIntercalada: {
    width: '100%',
    height: 200,
  },
  caption: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});


export default styles;
