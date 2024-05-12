import Dashboard from "./pages/dashboard";

export default async function Home() {
  return (
    <main className="bg-jetBlack flex min-h-screen  flex-col items-center justify-center text-white">
      <div>
        <Dashboard />
      </div>
    </main>
  );
}
