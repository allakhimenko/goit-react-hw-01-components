import PropTypes from 'prop-types';

export default function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li class="item" key={id}>
      <span class="status">{isOnline ? 'online' : 'offline'}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  ));
}

FriendListItem.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired,
};
