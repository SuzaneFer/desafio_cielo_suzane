import PublicPage from '../components/templates/PublicPage/PublicPage';
import ClientPage from '../components/pages/client/clientPage';
import dados from '../dados-desafio.json';
import CardInfo from '../components/elements/cardInfo/cardInfo';
import DataTable from '../components/modules/table/table';

function findFourMostRecentDatesFromItems(itemList) {
  const mostRecentDates = [];

  for (const item of itemList) {
    const dateStr = item.date;
    const date = new Date(dateStr);

    if (!isNaN(date) && (mostRecentDates.length < 4 || date > mostRecentDates[3])) {
      mostRecentDates.push(date);
      mostRecentDates.sort((a, b) => b - a);
      if (mostRecentDates.length > 4) {
        mostRecentDates.pop();
      }
    }
  }

  return mostRecentDates;
}

function App() {
  
  const fourMostRecentDates = findFourMostRecentDatesFromItems(dados.items);

  const itemsWithMostRecentDates = dados.items.filter((item) => {
    const dateStr = item.date;
    const date = new Date(dateStr);
    return fourMostRecentDates.includes(date);
  });

  // Imprima os itens com as datas mais recentes
  itemsWithMostRecentDates.map((item) => {
    console.log("Data:", item.date);
    console.log("Outra Propriedade:", item.paymentType);
    console.log(item.status);
  });
  return (
    <>
      <PublicPage>
        <ClientPage />
        <div style={{display: 'flex', gap:'20px'}}>
          <CardInfo 
            totalQuantity={dados.summary.totalQuantity} 
            totalAmount={dados.summary.totalAmount} 
            totalNetAmount={dados.summary.totalNetAmount} 
            totalAverageAmount={dados.summary.totalAverageAmount}
          />
          <DataTable />
        </div>
      </PublicPage>
    </>
  )
}

export default App
