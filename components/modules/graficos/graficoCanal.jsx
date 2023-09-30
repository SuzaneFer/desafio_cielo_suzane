import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import PropTypes from 'prop-types';
import useDeviceSelector from '../../../hooks/useDeviceSelector';


const getDados = (data) => {
  const transactionCounts = data?.reduce((counts, transaction) => {
    const { channel } = transaction;
    counts[channel] = (counts[channel] || 0) + 1;
    return counts;
  }, {});
  
  const chartDataArray = [['Canal', 'Quantidade']];
  
  for (const [channel, count] of Object.entries(transactionCounts)) {
    chartDataArray.push([channel, count]);
  }

  return chartDataArray;
}

const GraficoCanal = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const isMobile = useDeviceSelector(true, false);

  useEffect(() => {
    if (data) {
      const dados = getDados(data);
      setChartData(dados);
    }
  }, [data]);

  const options = {
    chartArea: {
      width: '80%',
      height: '80%',
    },
    pieHole: 0.4,
    legend: {
      position: 'labeled',
    },
    colors: ['#38B6FF', '#2A446B', '#545454', '#336aff', "#36a3e6", "#3390ce", "#317db5", "#2f6a9c", "#2c5784", "#2a446b"],
  };

  return (
    <div className='content-grafico'>
      <span className='title-grafico'>Gráfico de canais</span>
      <div className="tab-button-line" />
      <Chart
        chartType="PieChart"
        width={'100%'}
        height={isMobile ? '200px': '400px'}
        data={chartData}
        options={options}
      />
    </div>
  );
};

GraficoCanal.propTypes = {
  data: PropTypes.array,
};
  
GraficoCanal.defaultProps = {
  data: [],
};

export default GraficoCanal;
