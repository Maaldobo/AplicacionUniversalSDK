import { StyleSheet, Platform, StatusBar } from 'react-native';
import colors from './colors';

//const STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0;
//const HEADER_HEIGHT = 56; // Tamaño estándar para headers en Material Design

const headerStyles = StyleSheet.create({
  header: {
    height: 'auto', // Ajuste dinámico
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12, // Reducir el padding para mejor distribución
    paddingTop: 5, // Ajuste extra en Android
    elevation: 4, // Sombra en Android
    shadowColor: colors.black, // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8, // Espaciado más preciso para iconos
  },
  logo: {
    width: 140, // Tamaño ajustado del logo
    height: 36, // Proporción más estándar
    resizeMode: 'contain',
  },
});

export default headerStyles;
