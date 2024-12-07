'use client';

import { doSignIn, useCurrentUser } from '@/lib/firebase-auth';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function StartPushingButton() {
  const router = useRouter();
  const [currentUser] = useCurrentUser();

  async function handleOnClick() {
    if (currentUser) {
      router.push('/challenges');
    } else {
      doSignIn(() => router.push('/challenges'));
    }
  }

  return (
    <Button onClick={handleOnClick} variant="neutral">
      Start Pushing
    </Button>
  );
}
