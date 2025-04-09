
const API_TOKEN = '2J0768H5RFQFL17V24QHM3P74PBR8JNFxvsabJ324Mn6bXtOP7Wao647x1u9lzyppLgmm/R9';

const URL_BASE = 'https://api.eluniversal.arcpublishing.com';


export const fetchStoryData = async (id:string) => {
  const url= `${URL_BASE}/content/v4/stories?website=eluniversal&_id=${id}&published=true`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error al consumir la API: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};