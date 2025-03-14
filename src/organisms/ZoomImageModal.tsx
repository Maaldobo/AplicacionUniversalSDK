import React from 'react';
import { Modal, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import RNImage from '../atoms/RNImage';

const ZoomImageModal = ({ visible, imageUrl, onClose }) => (
  <Modal transparent visible={visible} animationType="fade">
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.overlay}>
        <RNImage source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default ZoomImageModal;