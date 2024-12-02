'use client';

import useUsers from '@/hooks/useUsers';
import ProfilePicture from '@/icons/ProfilePicture';
import Image from 'next/image';

function PlayerCard({
  name = 'No name',
  pushups = 0,
  imageUrl,
  id,
}: {
  name: string;
  pushups: number;
  imageUrl?: string;
  id?: string;
}) {
  return (
    <div
      className="min-h-14 flex justify-between w-full rounded-md border border-slate-200 items-center px-3"
      id={id}
    >
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 flex justify-center items-center rounded-full">
          {imageUrl ? (
            <Image src={imageUrl} alt="profile picture" />
          ) : (
            <ProfilePicture />
          )}
        </div>
        {name}
      </div>
      {pushups}
    </div>
  );
}

export default function Leaderboard() {
  const [users, loading] = useUsers();

  if (loading) return <>Loading...</>;
  else if (users) {
    return users?.map((user, index) => (
      <PlayerCard
        name={user.name}
        pushups={user.pushUpsCurrentRound}
        id={user.name + index}
      />
    ));
  } else return <>No users</>;
}
