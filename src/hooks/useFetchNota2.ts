// useFetchNota.ts
import { useState, useEffect } from 'react';

// URL base de la API y token de autorización
const API_URL_BASE = 'https://api.eluniversal.arcpublishing.com/content/v4/stories?website=eluniversal';
const API_TOKEN = '2J0768H5RFQFL17V24QHM3P74PBR8JNFxvsabJ324Mn6bXtOP7Wao647x1u9lzyppLgmm/R9';

export const useFetchNota = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        // Se construye la URL agregando el id específico y la condición published
        const url = `${API_URL_BASE}&_id=${id}&published=true`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (!response.ok) {
          throw new Error('Error al consumir la API');
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStory();
    }
  }, [id]);

  return { data, loading, error };
};
