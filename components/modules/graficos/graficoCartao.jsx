import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import dados from '../../../dados-desafio.json';

const GraficoCartao = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const transactionCounts = dados.items.reduce((counts, transaction) => {
      const { cardBrand } = transaction;
      counts[cardBrand] = (counts[cardBrand] || 0) + 1;
      return counts;
    }, {});

    const chartData = [['Canal', 'Quantidade']];
    for (const [cardBrand, count] of Object.entries(transactionCounts)) {
      chartData.push([cardBrand, count]);
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
    colors: ['#38B6FF', '#2A446B', '#545454', '#336aff', "#36a3e6", "#3390ce", "#317db5", "#2f6a9c", "#2c5784", "#2a446b"],
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <span style={{textAlign: 'center'}}>Gráfico de cartões</span>
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

export default GraficoCartao;
