import React from 'react';
import ClientPageStyle from "./clientPage.style";
import DataTable from '../../modules/table/table';
import CardInfo from '../../elements/cardInfo/cardInfo'
import PropTypes from 'prop-types';
import { useData } from '../../../infrastructure/service/dadosService';

const ClientPage = () => {
  const { dataCard, dataTable } = useData();

  return (  
    <ClientPageStyle>
      <div className='header-client'>
        <img src="src/assets/logo_desafio.png"/>
      </div>
      <div className='card-client'>
        <CardInfo
          data={dataCard}
        />
        <DataTable data={dataTable}/>
      </div>
    </ClientPageStyle>
  );
};

export default ClientPage;