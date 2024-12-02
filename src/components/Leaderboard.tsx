'use client';

import useUsers from '@/hooks/useUsers';
import PlayerCard from './PlayerCard';

export default function Leaderboard() {
  const [users, loading] = useUsers();

  if (loading) return <>Loading...</>;
  else if (users) {
    return users?.map((user, index) => (
      <PlayerCard
        name={user.name}
        pushups={user.pushUpsCurrentRound}
        index={index}
      />
    ));
  } else return <>No users</>;
}
