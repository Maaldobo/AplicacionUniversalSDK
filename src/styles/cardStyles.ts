import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');
const largeCardHeight = height * 0.9;
const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
    padding: 3,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  
  // 🔹 Estilos para la variante Horizontal
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageHorizontal: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 5,
    padding: 5,
  },

  // 🔹 Estilos para la variante Vertical
  vertical: {
    flexDirection: 'column',
  },
  imageVertical: {
    width: '100%',
    height: 150,
  },

  // 🔹 Estilos para la variante Grande
  large: {
    flexDirection: 'column',
  },
  imageLarge: {
    width: '100%',
    height: largeCardHeight*.75 ,
  },
});

export default cardStyles;
