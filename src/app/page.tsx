export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-xl font-bold">Enterprise Solutions</h1>
        <button className="px-4 py-2 border rounded">
          Contact Us
        </button>
      </nav>

      <section className="text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Transforming Businesses Through Technology
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-8">
          We help organizations modernize infrastructure,
          accelerate digital transformation, and build
          scalable enterprise solutions.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded">
          Schedule Consultation
        </button>
      </section>
    </main>
  );
}