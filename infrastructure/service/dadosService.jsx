import { createContext, useContext, useEffect, useState } from 'react';
import getData from '../../helpers/getData';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState({});
  const dataCard = data.summary;
  const dataTable = data.items;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getData();
        console.log(newData);
        setData(newData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, dataCard, dataTable }}>
      {children}
    </DataContext.Provider>
  );
}
