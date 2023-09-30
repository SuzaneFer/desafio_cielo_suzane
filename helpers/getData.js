import axios from 'axios';

async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/buscar-dados');
    return response.data;
  } catch {
   return 'Erro ao buscar os dados';
  }
}

export default getData;

