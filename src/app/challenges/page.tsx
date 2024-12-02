import Challenge from '@/components/Challenge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default async function Page() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center h-full">
      <Card className="w-[800px] h-[500px] shadow-lg flex gap-8">
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
