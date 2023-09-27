import React from 'react';
import ClientPageStyle from "./clientPage.style";
import dados from '../../../dados-desafio.json';
import DataTable from '../../modules/table/table';
import CardInfo from '../../elements/cardInfo/cardInfo'

const ClientPage = () => (
  <ClientPageStyle>
    <div className='header-client'>
      <img src="src/assets/logo_desafio.png"/>
    </div>

    <div className='card-client'>
      <CardInfo
        totalQuantity={dados.summary.totalQuantity} 
        totalAmount={dados.summary.totalAmount} 
        totalNetAmount={dados.summary.totalNetAmount} 
        totalAverageAmount={dados.summary.totalAverageAmount}
      />
      <DataTable />
    </div>
  </ClientPageStyle>
);

export default ClientPage;