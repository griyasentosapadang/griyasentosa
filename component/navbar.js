"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const router = useRouter();

  const handleCityClick = (city) => {
    if (city === "padang") {
      setSelectedCity("padang");
    } else {
      setShowModal(false);
      router.push(`/lokasi/${city}`);
    }
  };

  const handleAreaClick = (area) => {
    setShowModal(false);
    setSelectedCity(null);
    router.push(`/lokasi/padang/${area}`);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full -mt-1 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">

            {/* Logo */}
            <h1 className="text-2xl font-bold text-orange-600">
              <a href="/">Griya Sentosa</a>
            </h1>

            {/* Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="hover:text-orange-600 transition">
                Home
              </Link>

              <Link href="https://wa.me/08136555901" className="hover:text-orange-600 transition">
                Contact
              </Link>

              <button
                onClick={() => {
                  setShowModal(true);
                  setSelectedCity(null);
                }}
                className="hover:text-orange-600 transition"
              >
                Lokasi
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 shadow-xl text-center">

            {/* STEP 1 - PILIH KOTA */}
            {!selectedCity && (
              <>
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Pilih Kota
                </h3>

                <div className="space-y-4">
                  <button
                    onClick={() => handleCityClick("padang")}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Padang
                  </button>

                  {/* <button
                    onClick={() => handleCityClick("pekanbaru")}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Pekanbaru
                  </button>

                  <button
                    onClick={() => handleCityClick("lampung")}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Lampung
                  </button> */}
                </div>
              </>
            )}

            {/* STEP 2 - KHUSUS PADANG */}
            {selectedCity === "padang" && (
              <>
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Pilih Area di Padang
                </h3>

                <div className="space-y-4">
                  <button
                    onClick={() => handleAreaClick("tabing")}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Tabing
                  </button>

                  {/* <button
                    onClick={() => handleAreaClick("jati")}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Jati
                  </button> */}
                </div>

                <button
                  onClick={() => setSelectedCity(null)}
                  className="mt-4 text-sm text-gray-500 hover:text-gray-700"
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
              className="mt-5 text-sm text-gray-400 hover:text-gray-600 block mx-auto"
            >
              Batal
            </button>

          </div>
        </div>
      )}
    </>
  );
}