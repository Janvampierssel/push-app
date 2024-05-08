import { signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

type ButtonProps = {
  className?: string;
  variant?:
    | "default"
    | "link"
    | "secondary"
    | "neutral"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  callback?: string | undefined;
  provider?: "google" | undefined;
  children?: React.ReactNode;
};

export function SignIn({
  className,
  variant = "default",
  size,
  callback,
  provider,
  children = "Sign In",
}: ButtonProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, { redirectTo: callback });
      }}
    >
      <Button type="submit" className={className} variant={variant} size={size}>
        {children}
      </Button>
    </form>
  );
}

export function SignOut({
  className,
  variant = "neutral",
  size,
  children = "Sign Out",
  callback,
}: ButtonProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: callback });
      }}
    >
      <Button type="submit" className={className} variant={variant} size={size}>
        {children}
      </Button>
    </form>
  );
}
