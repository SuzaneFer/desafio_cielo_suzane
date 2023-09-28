import PublicPage from '../components/templates/PublicPage/PublicPage';
import ClientPage from '../components/pages/client/clientPage';
import GraficoCanal from '../components/modules/graficos/graficoCanal';
import GraficoStatus from '../components/modules/graficos/graficoStatus';
import GraficoCartao from '../components/modules/graficos/graficoCartao';
import { useData } from '../infrastructure/service/dadosService';

function App() {
  const { dataCard, dataTable } = useData();
  return (
    <PublicPage>
      <ClientPage/>
      <GraficoCanal />
      <GraficoStatus />
      <GraficoCartao />
    </PublicPage>
  )
}

export default App
