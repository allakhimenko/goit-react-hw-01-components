import PropTypes from 'prop-types';
import s from './friendList.module.css';

export default function FriendList({ children }) {
  return <ul className={s.list}>{children}</ul>;
}

FriendList.PropType = {
  children: PropTypes.node,
};
