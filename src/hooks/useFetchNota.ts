// useFetchNota.ts
import { useEffect, useState } from 'react';

const API_TOKEN = '2J0768H5RFQFL17V24QHM3P74PBR8JNFxvsabJ324Mn6bXtOP7Wao647x1u9lzyppLgmm/R9';
const BASE_URL = 'https://api.eluniversal.arcpublishing.com/content/v4/stories';

/**
 * Hook para obtener una nota desde la API de El Universal.
 * @param id El identificador de la nota.
 * @returns { data, loading, error } - La data obtenida, estado de carga y error.
 */
const useFetchNota = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return; // No se busca si el id está vacío

    const fetchStory = async () => {
      try {
        const url = `${BASE_URL}?website=eluniversal&_id=${id}&published=true`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error al consumir la API');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  return { data, loading, error };
};

export default useFetchNota;
