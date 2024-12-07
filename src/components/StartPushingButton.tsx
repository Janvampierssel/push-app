'use client';

import { doSignIn, getCurrentUser } from '@/lib/firebase-auth';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function StartPushingButton() {
  const router = useRouter();
  const [currentUser] = getCurrentUser();

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
