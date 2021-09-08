import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function Transactions({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.main_th}>Type</th>
          <th className={s.main_th}>Amount</th>
          <th className={s.main_th}>Currency</th>
        </tr>
      </thead>

      <tbody className="">
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tr} key={id}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
