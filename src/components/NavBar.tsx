'use client';

import Link from 'next/link';
import { SignIn, SignOut } from './Authentication';
import Nav from './Nav';
import { Button } from './ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import { collection } from 'firebase/firestore';
import { auth } from '@/firebase-config';
// import { db } from '@/firebase-config';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const router = useRouter();

  useEffect(() => {
    // Subscribe to onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser); // Update the state
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <Nav>
      {currentUser ? (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            href="https://w13b85hec2g.typeform.com/to/VWVPAhFx"
            target="_blank"
          >
            Leave Feedback
          </Button>
          <SignOut variant="ghost" callback={() => router.push('/')} />
          <Link href="/challenges">
            <Image
              src={currentUser.photoURL as string}
              alt="User profile image"
              width={36}
              height={36}
              className="rounded-full border-2 border-orange-500"
            />
          </Link>
        </div>
      ) : (
        <SignIn provider="google" callback={() => router.push('/challenges')} />
      )}
    </Nav>
  );
}
