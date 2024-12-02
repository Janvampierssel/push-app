import Challenge from '@/components/Challenge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default async function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-full max-h-[calc(100vh-72px)]">
      <Card className="w-full md:w-[800px] h-full md:h-[500px] border-0 md:border md:shadow-lg flex gap-8 flex-col md:flex-row">
        <div className="w-full h-48 md:w-48 md:h-full bg-gradient-to-b from-[#F17827] from-20% to-[#914C0D] rounded-lg flex flex-col justify-end px-3 py-6 gap-2">
          <h1>
            <p className="large text-primary-foreground tracking-normal">
              Join your first challenge
            </p>
          </h1>
          <p className="subtle text-gray-200 w-3/5 md:w-auto">
            Challenges are a great way to bully your friends
          </p>
        </div>
        <section className="w-full h-full flex flex-col justify-between overflow-scroll">
          <div className="flex flex-col gap-2 overflow-scroll">
            <Challenge />
          </div>
          <div>
            <Separator />
            <div className="flex justify-between items-center">
              <p className="small">New Challenge</p>
              <Button
                disabled
                className="mt-2"
                size="sm"
                // TODO href="/challenges/create" figure out how to do easy routing
              >
                Create (coming soon)
              </Button>
            </div>
          </div>
        </section>
      </Card>
    </main>
  );
}
