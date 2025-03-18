import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text as RNText } from 'react-native';
import styles from '../styles/atomStyles';

type Props = {
  onToggle?: (bookmarked: boolean) => void;
};

const BookmarkButton: React.FC<Props> = ({ onToggle }) => {
  // Botón para marcar o desmarcar un artículo como favorito
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    const newState = !bookmarked;
    setBookmarked(newState);
    onToggle && onToggle(newState);
  };

  return (
    <TouchableOpacity onPress={toggleBookmark} style={styles.button}>
      <RNText style={styles.text}>{bookmarked ? '★' : '☆'}</RNText>
    </TouchableOpacity>
  );
};


export default BookmarkButton;
