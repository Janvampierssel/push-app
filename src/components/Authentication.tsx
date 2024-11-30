'use client';

// import { signIn, signOut } from "@/auth";
// import { Button } from "./ui/button";

import { auth, googleProvider } from '@/firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type ButtonProps = {
  className?: string;
  variant?:
    | 'default'
    | 'link'
    | 'secondary'
    | 'neutral'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | null
    | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  callback?: () => void;
  provider?: 'google' | undefined;
  children?: React.ReactNode;
};

const doSignIn = (callback?: () => void) => {
  console.log('Dosignin!');
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      callback?.();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      console.error(errorCode, errorMessage, email);
    });
};

const doSignOut = (callback?: () => void) => {
  signOut(auth)
    .then(() => {
      callback?.();
    })
    .catch((error) => {
      alert('sign out error: ' + error);
    });
};

export function SignIn({
  className,
  variant = 'default',
  size,
  callback,
  provider,
  children = 'Sign In',
}: ButtonProps) {
  const router = useRouter();
  function defaultCallback() {
    router.push('/challenges');
  }

  return (
    // <form
    //   action={async () => {
    //     "use server";
    //     await signIn(provider, { redirectTo: callback });
    //   }}
    // >
    //   <Button type="submit" className={className} variant={variant} size={size}>
    //     {children}
    //   </Button>
    // </form>
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => doSignIn(callback ?? defaultCallback)}
    >
      {children}
    </Button>
  );
}

export function SignOut({
  className,
  variant = 'neutral',
  size,
  children = 'Sign Out',
  callback,
}: ButtonProps) {
  return (
    // <form
    //   action={async () => {
    //     'use server';
    //     await signOut({ redirectTo: callback });
    //   }}
    // >
    //   <Button type="submit" className={className} variant={variant} size={size}>
    //     {children}
    //   </Button>
    // </form>
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => doSignOut(callback)}
    >
      {children}
    </Button>
  );
}
