"use client";

import PushAppLogo from "@/icons/PushAppLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-card">
      <nav className="flex justify-between items-center py-4 w-full container">
        <Link href="/">
          <PushAppLogo className="h-8 w-auto" />
        </Link>
        <div className="flex gap-6">
          <Button variant="neutral">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </header>
  );
}
