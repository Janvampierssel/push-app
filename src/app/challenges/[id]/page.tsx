import AddSlider from '@/components/AddSlider';
import Leaderboard from '@/components/Leaderboard';
import { Card } from '@/components/ui/card';

export default async function Page() {
  return (
    <main className="flex-1 h-full max-h-[calc(100vh-72px)] flex flex-col items-center justify-center">
      <Card className="max-h-full h-full w-full md:w-[800px] border-0 md:border md:h-[500px] md:shadow-lg flex gap-8 flex-col">
        <h2 className="text-center md:text-left">The Batty Boy Challenge</h2>
        <section className="w-full flex gap-8 ites-center md:flex-row flex-col md:overflow-hidden overflow-scroll">
          <div className="w-fit bg-white border border-[#EB670F] border-opacity-50 px-4 py-8 rounded-md shadow-md mx-auto md:mx-0">
            <AddSlider />
          </div>
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full flex flex-col gap-2 md:overflow-scroll">
              <h3 className="mt-0">Leaderboard</h3>
              <Leaderboard />
            </div>
            <p className="small my-4 md:mb-0 text-slate-400">
              Until December 14th
            </p>
          </div>
        </section>
      </Card>
    </main>
  );
}
