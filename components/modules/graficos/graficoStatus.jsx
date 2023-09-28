import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import dados from '../../../dados-desafio.json';

const GraficoStatus = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const transactionCounts = dados.items.reduce((counts, transaction) => {
      const { status } = transaction;
      counts[status] = (counts[status] || 0) + 1;
      return counts;
    }, {});

    const chartData = [['Canal', 'Quantidade']];
    for (const [status, count] of Object.entries(transactionCounts)) {
      chartData.push([status, count]);
    }

    setChartData(chartData);
  }, [dados]);

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
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <span style={{textAlign: 'center'}}>Gráfico de status</span>
      <Chart
        chartType="PieChart"
        width={'100%'}
        height={'400px'}
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default GraficoStatus;
