import React from 'react';
import GraficosPageStyle from "./graficosPage.style";
import GraficoCanal from '../../modules/graficos/graficoCanal';
import GraficoStatus from '../../modules/graficos/graficoStatus';
import GraficoCartao from '../../modules/graficos/graficoCartao';
import { useData } from '../../../infrastructure/service/dadosService';

const GraficosPage = () => {
  const { dataTable } = useData();
  console.log('antes', dataTable)

  return (  
    <GraficosPageStyle data-cy='graficos-page'>
      <GraficoCanal data={dataTable} />
      <GraficoStatus data={dataTable} />
      <GraficoCartao data={dataTable} />
    </GraficosPageStyle>
  );
};

export default GraficosPage;