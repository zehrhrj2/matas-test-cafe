export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-stone-900">
      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-3">Kavárna U Matase</h1>
        <p className="text-lg text-stone-600">Ústí nad Labem</p>
      </section>

      {/* Hours */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Otevírací doba</h2>
        <ul className="space-y-1 text-stone-700">
          <li>Po–Pá: 7:00 – 19:00</li>
          <li>So: 8:00 – 20:00</li>
          <li>Ne: 9:00 – 17:00</li>
        </ul>
      </section>

      {/* Menu */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-3 text-stone-700">
          <li className="flex justify-between border-b pb-2">
            <span>Espresso</span>
            <span>55 Kč</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Cappuccino</span>
            <span>75 Kč</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Domácí koláč</span>
            <span>65 Kč</span>
          </li>
        </ul>
      </section>

      {/* Contact */}
      {/* Contact */}
<section className="max-w-3xl mx-auto px-6 py-8">
  <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
  <p className="text-stone-700 mb-6">Telefon: +420 777 123 456</p>

  <form
    action="https://formspree.io/f/mojgkqaa"
    method="POST"
    className="space-y-4"
  >
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-1">
        Jméno
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-3 py-2 border border-stone-300 rounded"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-3 py-2 border border-stone-300 rounded"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-1">
        Zpráva
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        className="w-full px-3 py-2 border border-stone-300 rounded"
      />
    </div>

    <button
      type="submit"
      className="bg-stone-900 text-amber-50 px-6 py-2 rounded hover:bg-stone-700"
    >
      Odeslat
    </button>
  </form>
</section>
    </main>
  );
}