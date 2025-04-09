// notaStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 8,
    color: '#555555',
  },
  author: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#444444',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
});

export default styles;
