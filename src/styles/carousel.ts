import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const carouselStyles = StyleSheet.create({
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 10,
  },
  video: {
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 10,
  },
});

export default carouselStyles;
