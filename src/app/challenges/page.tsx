import Nav from "@/components/Nav";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <Nav></Nav>
      <main className="flex-1 flex justify-center items-center">
        <h1>Hello Challenges</h1>
      </main>
    </div>
  );
}
