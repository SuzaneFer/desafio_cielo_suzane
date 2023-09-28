import React from 'react';
import PropTypes from 'prop-types';
import CardInfoStyle from './cardInfo.style';

const CardInfo = (data) => (
  <CardInfoStyle>
    <span>Informações cliente</span>
    <span>Quantidade total: {data.data.totalQuantity}</span>
    <span>Valor total: {data.data.totalAmount}</span>
    <span>Valor líquido total: {data.data.totalNetAmount}</span>
    <span>Valor médio total:: {data.data.totalAverageAmount}</span>
  </CardInfoStyle>
);

CardInfo.propTypes = {
data: PropTypes.array,
};

CardInfo.defaultProps = {
data: [],
};

export default CardInfo;