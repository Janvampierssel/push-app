import PushAppLogo from "@/icons/PushAppLogo";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center h-96 justify-center bg-primary gap-20">
      <p className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-card">
        Let&apos;s fucking do it
      </p>
      <PushAppLogo variant="white" />
    </footer>
  );
}
