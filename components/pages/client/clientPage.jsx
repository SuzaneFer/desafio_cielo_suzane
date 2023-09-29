import React, { useState } from 'react';
import ClientPageStyle from "./clientPage.style";
import DataTable from '../../modules/table/table';
import CardInfo from '../../elements/cardInfo/cardInfo'
import { useData } from '../../../infrastructure/service/dadosService';
import TabsMenu from '../../modules/tabsMenu/tabsMenu';
import GraficosPage from '../graficosPage/graficosPage';

const tabs = [
  { key: 0, label: 'Início' },
  { key: 1, label: 'Gráficos' },
];

const ClientPage = () => {
  const { dataCard, dataTable } = useData();
  const [currentTab, setCurrentTab] = useState(tabs[0].key);

  console.log('tab dentro', currentTab);

  const renderComponent = () => {
    if(currentTab == 0){
      return(
        <div className='card-info'>
          <CardInfo
            data={dataCard}
          />
          <DataTable data={dataTable}/>
        </div>
      )
    }
    else{
      return(
        <GraficosPage />
      )
    }
  }

  return (  
    <ClientPageStyle>
      <div className='header-client'>
        <img src="src/assets/logo_desafio.png"/>
      </div>
      <div className='card-client'>
        <section className="content">
          <TabsMenu
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </section>
        <section>

        {renderComponent()}
        </section>
      </div>
    </ClientPageStyle>
  );
};

export default ClientPage;