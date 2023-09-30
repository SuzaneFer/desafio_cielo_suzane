import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import PropTypes from 'prop-types';
import useDeviceSelector from '../../../hooks/useDeviceSelector';

const getDados = (data) => {
  const transactionCounts = data?.reduce((counts, transaction) => {
    const { status } = transaction;
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});
  
  const chartDataArray = [['Canal', 'Quantidade']];
  
  for (const [status, count] of Object.entries(transactionCounts)) {
    chartDataArray.push([status, count]);
  }

  return chartDataArray;
}

const GraficoStatus = ({ data }) => {
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
    colors: ['#2f6a9c', "#36a3e6", "#5eace0", "#317db5", "#2f6a9c", "#2c5784"],
  };

  return (
    <div className='content-grafico'>
      <span className='title-grafico'>Gráfico de status</span>
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

GraficoStatus.propTypes = {
  data: PropTypes.array,
};
  
GraficoStatus.defaultProps = {
  data: [],
};

export default GraficoStatus;
