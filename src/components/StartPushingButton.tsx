'use client';

import { useUser } from '@/lib/firebase-auth';
import { doSignIn } from './Authentication';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function StartPushingButton() {
  const router = useRouter();
  const user = useUser();

  async function handleOnClick() {
    if (user) {
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
