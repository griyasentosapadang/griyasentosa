'use client'
import Navbar from "@/component/navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const router = useRouter();

  const pilihLokasi = (lokasi) => {
    if (lokasi === "padang") {
      setSelectedCity("padang");
    } else {
      setShowModal(false);
      router.push(`/lokasi/${lokasi}`);
    }
  };

  const pilihAreaPadang = (area) => {
    setShowModal(false);
    setSelectedCity(null);
    router.push(`/lokasi/padang/${area}`);
  };

  return (
    <main>

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen bg-[url('/src/bg4.png')] bg-cover bg-center flex items-center justify-center px-6">

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white max-w-3xl">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Selamat Datang di Griya Sentosa
          </h2>

          <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200">
            Hunian modern, nyaman, dan strategis untuk keluarga Anda.
            Dekat pusat kota, fasilitas lengkap, dan lingkungan asri.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-8 bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Lihat Unit
          </button>

        </div>
      </section>


      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-50">

          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl text-center animate-fadeIn">

            {!selectedCity && (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
                  Pilih Lokasi
                </h3>

                <div className="space-y-3">

                  <button
                    onClick={() => pilihLokasi("padang")}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
                  >
                    Padang
                  </button>

                  <button
                    onClick={() => pilihLokasi("pekanbaru")}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
                  >
                    Pekanbaru
                  </button>

                  <button
                    onClick={() => pilihLokasi("lampung")}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
                  >
                    Lampung
                  </button>

                </div>
              </>
            )}

            {selectedCity === "padang" && (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
                  Pilih Area di Padang
                </h3>

                <div className="space-y-3">

                  <button
                    onClick={() => pilihAreaPadang("tabing")}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
                  >
                    Tabing
                  </button>

                  <button
                    onClick={() => pilihAreaPadang("jati")}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
                  >
                    Jati
                  </button>

                </div>

                <button
                  onClick={() => setSelectedCity(null)}
                  className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
                >
                  ← Kembali
                </button>
              </>
            )}

            <button
              onClick={() => {
                setShowModal(false);
                setSelectedCity(null);
              }}
              className="mt-6 text-gray-400 hover:text-gray-600 text-sm block mx-auto"
            >
              Batal
            </button>

          </div>
        </div>
      )}


      {/* KEUNGGULAN */}
      <section className="py-16 md:py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">
            Kenapa Memilih Griya Sentosa?
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition">

              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Lokasi Strategis
              </h4>

              <p className="text-gray-600">
                Dekat sekolah, universitas, rumah sakit,
                pusat perbelanjaan, dan akses jalan utama.
              </p>

            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition">

              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Desain Modern
              </h4>

              <p className="text-gray-600">
                Rumah minimalis dengan tata ruang optimal
                dan pencahayaan alami.
              </p>

            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition">

              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Lingkungan Asri
              </h4>

              <p className="text-gray-600">
                Suasana tenang dan nyaman, cocok untuk keluarga
                maupun investasi jangka panjang.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-800 text-white text-center px-6">

        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Miliki Hunian Impian Anda Sekarang
        </h3>

        <a
          href="https://wa.me/08136555901"
          className="inline-block bg-orange-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition"
        >
          Hubungi Kami
        </a>

      </section>

    </main>
  );
}