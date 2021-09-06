import User from './components/Profile/User';
import user from './components/Profile/user.json';

import Statistics from './components/Statistical/Statistical';
import statistical from './components/Statistical/statistical.json';

import FriendList from './components/FriendList/FriendList';
import FriendListItem from './components/FriendList/FriendListItem';
import friends from './components/FriendList/friends.json';

import Transactions from './components/Transactions/Transactions';
import transactions from './components/Transactions/transactions.json';

export default function App() {
  return (
    <div>
      <User
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title={'Upload stats'} stats={statistical} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <Transactions items={transactions} />
    </div>
  );
}
