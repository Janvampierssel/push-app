'use client';

import Link from 'next/link';
import { SignIn, SignOut } from './Authentication';
import Nav from './Nav';
import { Button } from './ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/firebase-auth';

export default function NavBar() {
  const router = useRouter();
  const user = useUser();

  return (
    <Nav>
      {user ? (
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
              src={user.photoURL as string}
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
