import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import stats from '../statistical-data.json';
import FriendList from './FriendList/Friendlist';
import friends from '../friends.json';
import user from '../user.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from '../transactions.json';

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
