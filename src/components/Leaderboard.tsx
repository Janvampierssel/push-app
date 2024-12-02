'use client';

import { db } from '@/firebase-config';
import ProfilePicture from '@/icons/ProfilePicture';
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function PlayerCard({
  name = 'No name',
  pushups = 0,
  imageUrl,
}: {
  name: string;
  pushups: number;
  imageUrl?: string;
}) {
  return (
    <div className="h-14 flex justify-between w-full rounded-md border border-slate-200 items-center px-3">
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
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'users'),
        orderBy('pushUpsCurrentRound', 'desc')
      );
      const response = await getDocs(q);
      const users: DocumentData = [];
      response.forEach((doc) => {
        users.push(doc.data());
      });
      setLoading(false);
      return users;
    } catch (error) {
      console.error(error);
      setLoading(false);
      return [];
    }
  }

  useEffect(() => {
    async function fetchAndSetUsers() {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    }
    fetchAndSetUsers();
  }, []);

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        users?.map((user: any) => (
          <PlayerCard name={user.name} pushups={user.pushUpsCurrentRound} />
        ))
      )}
    </>
  );
}
