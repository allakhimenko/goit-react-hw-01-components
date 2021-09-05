import User from './components/User';
import user from './components/user.json';

import Statistics from './components/Statistical';
import statistical from './components/statistical.json';

import FriendList from './components/FriendList';
import FriendListItem from './components/FriendListItem';
import friends from './components/friends.json';

export default function App() {
  return (
    <div>
      <User
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        vievs={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title={'Upload stats'} stats={statistical} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
    </div>
  );
}
