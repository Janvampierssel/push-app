import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PushAppLogo from "@/icons/PushAppLogo";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { auth, signIn, signOut } from "@/auth";
import { SignIn, SignOut } from "@/components/Authentication";
import { Heading1 } from "lucide-react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../../networking/auth-options";

export default async function Home() {
  function Pillar({
    title,
    description,
    bgGradient = "bg-gradient-to-b from-[#F17827] to-[#914C0D]",
  }: {
    title: string;
    description: string;
    bgGradient?: string;
  }) {
    return (
      <div
        className={`h-[400px] w-52 rounded-lg flex flex-col justify-end text-primary-foreground px-3 py-8 text-center gap-2 ${bgGradient}`}
      >
        <h4 className="text-lg">{title}</h4>
        <p className="small text-gray-200 tracking-tight">{description}</p>
        <div className=" bg-gradient-to-b from-[#F52714] to-[#881C07]"></div>
      </div>
    );
  }

  const session = await auth();

  return (
    <>
      <Nav>
        {session ? (
          <div className="flex items-center gap-2">
            <Link
              href="https://w13b85hec2g.typeform.com/to/VWVPAhFx"
              target="_blank"
            >
              <Button variant="ghost">Leave Feedback</Button>
            </Link>
            <SignOut variant="ghost" />
            <Link href="/challenges">
              <Image
                src={session?.user?.image as string}
                alt="User profile image"
                width={36}
                height={36}
                className="rounded-full border-2 border-orange-500"
              />
            </Link>
          </div>
        ) : (
          <SignIn provider="google" callback="/challenges" />
        )}
      </Nav>
      <main className="flex items-center flex-col h-full min-h-screen">
        <section className="h-[75vh] flex items-center flex-col justify-center gap-6">
          <h1 className="text-center text-7xl">
            1000 Push-ups?
            <br />
            <span className="text-primary">Give me 3 days.</span>
          </h1>
          <p className="large w-96 text-center">
            Get your friends to bully you skinny by joining push up challenges
            together
          </p>
          <Link href="/challenges">
            <Button variant="neutral">Start Pushing</Button>
          </Link>
        </section>
        <Image
          src={"/pushups.png"}
          alt="people doing pushups"
          width={1100}
          height={300}
        />
        <section className="my-40 flex flex-col gap-16">
          <div className="flex flex-col items-center">
            <PushAppLogo />
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center border-none mt-2">
              Pillars of Trust
            </h2>
          </div>
          <div className="flex items-center gap-16 justify-center">
            <Pillar
              title="Honesty"
              description="Banking honestly is about being true to yourself"
            />
            <Pillar
              title="Community"
              description="We’re here not to push just yourself, but also each other"
            />
            <Pillar
              title="Friendly Competition"
              description="At the end of the day, we are all just trying to have fun"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
