import React from 'react';
import PropTypes from 'prop-types';
import CardInfoStyle from './cardInfo.style';

const CardInfo = ({totalQuantity, totalAmount, totalNetAmount, totalAverageAmount}) => (
  <CardInfoStyle>
    <span>Informações cliente</span>
    <span>Quantidade total: {totalQuantity}</span>
    <span>Valor total: {totalAmount}</span>
    <span>Valor líquido total: {totalNetAmount}</span>
    <span>Valor médio total:: {totalAverageAmount}</span>
  </CardInfoStyle>
);

CardInfo.propTypes = {
  totalQuantity: PropTypes.number,
  totalAmount: PropTypes.number,
  totalNetAmount: PropTypes.number,
  totalAverageAmount: PropTypes.number,
};

CardInfo.defaultProps = {
  totalQuantity: 0,
  totalAmount: 0,
  totalNetAmount: 0,
  totalAverageAmount: 0,
};

export default CardInfo;

// "totalQuantity":1546,
// "totalAmount":313388,
// "totalNetAmount":301847.02,
// "totalAverageAmount":202.71,
// "initialDate":"2021-05-26",
// "finalDate":"2021-05-26"