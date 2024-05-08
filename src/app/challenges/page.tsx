import { auth } from "@/auth";
import { SignOut } from "@/components/Authentication";
import Challenge from "@/components/Challenge";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  return (
    <div className="h-screen flex flex-col">
      <Nav>
        <div className="flex items-center gap-2">
          <SignOut variant="ghost" callback="/" />
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
      </Nav>
      <main className="flex-1 flex justify-center items-center">
        <Card className="w-[800px] h-[500px] p-6 shadow-lg flex gap-8">
          <div className="w-48 h-full bg-gradient-to-b from-[#F17827] from-20% to-[#914C0D] rounded-lg flex flex-col justify-end px-3 py-6 gap-2">
            <h1>
              <p className="large text-primary-foreground">
                Join your first challenge
              </p>
            </h1>
            <p className="subtle text-gray-200">
              Challenges are a great way to bully your friends
            </p>
          </div>
          <section className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Challenge />
              <Challenge />
            </div>
            <div>
              <Separator />
              <div className="flex justify-between items-center">
                <p className="small">New Challenge</p>
                <Button className="mt-2" size="sm">
                  Create
                </Button>
              </div>
            </div>
          </section>
        </Card>
      </main>
    </div>
  );
}
