import React, { useState, useEffect, useCallback } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { debounce } from 'lodash';
import { spacing } from '../../styles/spacing';
import { colors } from '../../styles/colors';

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  // Barra de búsqueda con debounce para evitar llamadas excesivas a la API
  const [value, setValue] = useState('');

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    [onSearch]
  );

  useEffect(() => {
    debouncedSearch(value);
    return debouncedSearch.cancel;
  }, [value, debouncedSearch]);

  return (
    <TextInput
      style={styles.input}
      placeholder="Buscar noticias..."
      value={value}
      onChangeText={setValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: spacing.medium,
    marginVertical: spacing.small,
  },
});

export default SearchBar;
