import PropTypes from 'prop-types';
import {TransactionTable, HeadersRow, ValuesRow, ColumnHeader } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <HeadersRow>
        <ValuesRow>
          <ColumnHeader>Type</ColumnHeader>
          <ColumnHeader>Amount</ColumnHeader>
          <ColumnHeader>Currency</ColumnHeader>
        </ValuesRow>
      </HeadersRow>

      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <ValuesRow key={id} >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </ValuesRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};