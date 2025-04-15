// useFetchNota.ts
import { useState, useEffect } from 'react';

// URL base de la API y token de autorización
const API_TOKEN = '2J0768H5RFQFL17V24QHM3P74PBR8JNFxvsabJ324Mn6bXtOP7Wao647x1u9lzyppLgmm/R9';
const API_URL_BASE = 'https://api.eluniversal.arcpublishing.com/content/v4';
const API_COLLECTION='/collections?website=eluniversal'
const API_URL_URL='urls?website=eluniversal&published=true&included_fields=content_elements%2C%20content_restrictions%2C%20created_date%2C%20credits%2C%20promo_items%2C%20taxonomy&website_urls='
const API_STORIES_END = '&published=true&included_fields=_id%2Cheadlines.basic%2C%20subheadlines.basic%2Ccontent_elements%2C%20content_restrictions%2C%20created_date%2C%20credits%2C%20promo_items%2Ctaxonomy';
export const useFetchNota = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const url = `${API_URL_BASE}/stories?website=eluniversal&_id=${id}&published=true`;
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
export const useFetchCollection = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const url = `${API_URL_BASE}${API_COLLECTION}&_id=${id}&published=true&from=0&include_unpublished=true&size=20`;
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
export const useFetchNotaUrl = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const url = `${API_URL_BASE}${API_URL_URL}`; //falta
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

    if (url) {
      fetchStory();
    }
  }, [url]);

  return { data, loading, error };
};


