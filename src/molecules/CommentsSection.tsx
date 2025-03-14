import React, { useState } from 'react';
import { View, Text as RNText, TextInput, Button as RNButton, FlatList, StyleSheet } from 'react-native';

type Comment = {
  id: string;
  author: string;
  content: string;
};

const CommentsSection: React.FC = () => {
  // Sección para mostrar y agregar comentarios
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now().toString(), author: 'Usuario', content: newComment }]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <RNText style={styles.title}>Comentarios y Reacciones</RNText>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <RNText style={styles.commentAuthor}>{item.author}:</RNText>
            <RNText style={styles.commentContent}>{item.content}</RNText>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Escribe tu comentario..."
      />
      <RNButton title="Enviar" onPress={addComment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  commentAuthor: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  commentContent: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginVertical: 8,
  },
});

export default CommentsSection;
