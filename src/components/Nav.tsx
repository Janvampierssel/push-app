import PushAppLogo from "@/icons/PushAppLogo";
import Link from "next/link";

export default function Nav({ children }: { children?: React.ReactNode }) {
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
