'use client';

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { doSignIn, doSignOut } from '@/lib/firebase-auth';

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
  disabled?: boolean;
  children?: React.ReactNode;
};

export function SignIn({
  className,
  variant = 'default',
  size,
  callback,
  disabled,
  children = 'Sign In',
}: ButtonProps) {
  const router = useRouter();
  function defaultCallback() {
    router.push('/challenges');
  }

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => doSignIn(callback ?? defaultCallback)}
      disabled={disabled}
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
  disabled,
}: ButtonProps) {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => doSignOut(callback)}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
