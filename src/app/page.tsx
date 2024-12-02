import Footer from '@/components/Footer';
import PushAppLogo from '@/icons/PushAppLogo';
import Image from 'next/image';
import StartPushingButton from '@/components/StartPushingButton';

export default async function Home() {
  function Pillar({
    title,
    description,
    bgGradient = 'bg-gradient-to-b from-[#F17827] to-[#914C0D]',
  }: {
    title: string;
    description: string;
    bgGradient?: string;
  }) {
    return (
      <div
        className={`h-[360px] md:h-[400px] w-28 md:w-52 rounded-lg flex flex-col justify-end text-primary-foreground px-2 md:px-3 py-8 text-center gap-2 ${bgGradient}`}
      >
        <h4 className="text-base md:text-lg font-bold">{title}</h4>
        <p className="small text-gray-200 md:tracking-tight font-light">
          {description}
        </p>
        <div className=" bg-gradient-to-b from-[#F52714] to-[#881C07]"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center flex-col min-h-screen">
        <section className="h-[60vh] md:h-[75vh] flex items-center flex-col justify-center gap-6">
          <h1 className="text-center text-[40px] md:text-7xl -mt-16 md:mt-0">
            1000 Push-ups?
            <br />
            <span className="text-primary">Give me 3 days.</span>
          </h1>
          <p className="text-base font-semibold md:text-large w-96 text-center">
            Get your friends to bully you skinny by joining push up challenges
            together
          </p>
          <StartPushingButton />
        </section>
        <Image
          src={'/pushups.png'}
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
          <div className="flex items-center gap-2 md:gap-16 justify-center overflow-hidden">
            <Pillar
              title="Honesty"
              description="Banking honestly is about being true to yourself"
            />
            <Pillar
              title="Community"
              description="We're here not to push just yourself, but also each other"
            />
            <Pillar
              title="Friendly Competition"
              description="At the end of the day, we are all just trying to have fun"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
