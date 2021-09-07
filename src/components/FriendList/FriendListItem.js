import PropTypes from 'prop-types';
import s from './friendList.module.css';

export default function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className={s.item} key={id}>
      <span className={s[`${isOnline}`]}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  ));
}

FriendListItem.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired,
};
