"use client";

import PushAppLogo from "@/icons/PushAppLogo";
import Link from "next/link";

type NavProps = {
  children?: JSX.Element[];
};

const session = false;

export function Nav({ children }: NavProps) {
  return (
    <header className="bg-card">
      <nav
        className={`flex items-center py-4 w-full container ${
          children ? "justify-between" : "justify-center"
        }`}
      >
        <Link href="/">
          <PushAppLogo className="h-8 w-auto" />
        </Link>
        {children}
      </nav>
    </header>
  );
}

export function LoggedOutRightChildren({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      {!session && children ? ( // TODO: do session check
        <div className="flex gap-6">{children}</div>
      ) : undefined}
    </>
  );
}

export function LoggedInRightChildren({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      {session && children ? ( // TODO: do session check
        <div className="flex gap-6">{children}</div>
      ) : undefined}
    </>
  );
}
