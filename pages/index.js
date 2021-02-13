import Head from "next/head";
import Nav from "../components/nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex items-center justify-center min-h-screen">
        <p className="p-12 text-4xl font-bold bg-white rounded-lg shadow-lg">
          Next.js + TailwindCSS Demo
        </p>
      </main>
    </>
  );
}
