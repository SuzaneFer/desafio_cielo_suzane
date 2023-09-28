import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState({});
  const dataCard = data.summary;
  const dataTable = data.items;
  
  useEffect(() => {
    axios.get('http://localhost:3000/buscar-dados')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, dataCard, dataTable }}>
      {children}
    </DataContext.Provider>
  );
}
