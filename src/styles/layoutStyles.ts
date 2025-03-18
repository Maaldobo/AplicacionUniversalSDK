import { StyleSheet, Platform, StatusBar } from 'react-native';

const layoutStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ajuste dinámico solo en Android
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default layoutStyles;
