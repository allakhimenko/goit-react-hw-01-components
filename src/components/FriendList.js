import PropTypes from 'prop-types';

export default function FriendList({ children }) {
  return <ul class="friend-list">{children}</ul>;
}

FriendList.PropType = {
  children: PropTypes.node,
};
