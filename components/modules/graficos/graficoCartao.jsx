import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import PropTypes from 'prop-types';
import useDeviceSelector from '../../../hooks/useDeviceSelector';

const getDados = (data) => {
  const transactionCounts = data?.reduce((counts, transaction) => {
    const { cardBrand } = transaction;
    counts[cardBrand] = (counts[cardBrand] || 0) + 1;
    return counts;
  }, {});
  
  const chartDataArray = [['Canal', 'Quantidade']];
  
  for (const [cardBrand, count] of Object.entries(transactionCounts)) {
    chartDataArray.push([cardBrand, count]);
  }

  return chartDataArray;
}

const GraficoCartao = ({ data }) => {
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
      <span className='title-grafico'>Gráfico de cartões</span>
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

GraficoCartao.propTypes = {
  data: PropTypes.array,
};
  
GraficoCartao.defaultProps = {
  data: [],
};

export default GraficoCartao;
