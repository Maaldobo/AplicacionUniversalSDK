import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { spacing } from '../../styles/spacing';

type Props = {
  videoUrl: string;
};

const VideoEmbed: React.FC<Props> = ({ videoUrl }) => {
  // Componente para embeber videos mediante WebView (aspecto 16:9)
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: videoUrl }} 
        style={styles.webview} 
        javaScriptEnabled 
        domStorageEnabled 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').width * 0.56,
    marginVertical: spacing.medium,
  },
  webview: {
    flex: 1,
  },
});

export default VideoEmbed;
