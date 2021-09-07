import PropTypes from 'prop-types';
import s from './Statistical.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      <div className={s.titleBox}>
        {title && <h2 className={s.title}>{title}</h2>}
      </div>

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span className={s.text}>{label}</span>
            <span className={s.text}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
