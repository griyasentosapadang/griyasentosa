import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/src/bg1.png')] bg-cover bg-center flex items-center text-white px-6">
        <div className="max-w-6xl mx-auto w-full">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-xl leading-tight text-center md:text-left">
            Wujudkan Rumah Impian Anda di Griya Sentosa Padang
          </h2>

          <p className="text-base sm:text-lg mb-3 max-w-md text-center md:text-left">
            📍Bungo Pasang, Kecamatan Koto Tangah
          </p>

          <p className="text-base sm:text-lg mb-8 max-w-md text-center md:text-left">
            Hunian Eksklusif dengan Desain Modern, Lokasi Strategis, dan
            Lingkungan Asri Mulai dari Rp 450 juta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white/30 backdrop-blur-sm ring-1 ring-white text-white font-sans px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:text-black transition">
              Lihat Unit Tersedia
            </button>

            <a
              href="/src/brosur.pdf"
              download
              className="bg-orange-500 ring-1 ring-white text-white font-sans px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:text-orange-500 transition text-center"
            >
              Download Brosur Digital
            </a>
          </div>

        </div>
      </section>

      {/* Section Keunggulan */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">
            Kenapa Memilih Griya Sentosa Padang?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl hover:bg-slate-200 transition">
              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Lokasi Strategis
              </h4>
              <p className="text-gray-600">
                Dekat dengan Stasiun Tabing, Pasar Tabing, Universitas Negeri
                Padang, dan Bandara Internasional Minangkabau.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl hover:bg-slate-200 transition">
              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Desain Modern
              </h4>
              <p className="text-gray-600">
                Rumah minimalis dengan tata ruang optimal dan pencahayaan
                alami.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl hover:bg-slate-200 transition">
              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Lingkungan Asri
              </h4>
              <p className="text-gray-600">
                Suasana tenang, nyaman, dan cocok untuk keluarga muda maupun
                investasi.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-800 text-white text-center px-6">
        
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Miliki Hunian Impian Anda Sekarang
        </h3>

        <a
          href="https://wa.me/08136555901"
          className="inline-block bg-white text-slate-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Hubungi Kami
        </a>

      </section>

    </main>
  );
}