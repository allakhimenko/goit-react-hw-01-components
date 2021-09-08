import User from './components/Profile/User';
import user from './components/Profile/user.json';

import Statistics from './components/Statistical/Statistical';
import statistical from './components/Statistical/statistical.json';

import FriendList from './components/FriendList/FriendList';
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
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={statistical} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}
