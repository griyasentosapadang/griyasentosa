"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <nav className="bg-white shadow-md fixed w-full z-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-orange-600">
              Griya Sentosa
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">

              <Link
                href="/"
                className="hover:text-orange-600 transition text-gray-700"
              >
                Home
              </Link>

              <Link
                href="https://wa.me/08136555901"
                className="hover:text-orange-600 transition text-gray-700"
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setShowModal(true);
                  setSelectedCity(null);
                }}
                className="hover:text-orange-600 transition text-gray-700"
              >
                Lokasi
              </button>

            </div>

            {/* Hamburger */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md border-t">

            <div className="flex flex-col px-6 py-4 space-y-4">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-600 transition"
              >
                Home
              </Link>

              <Link
                href="https://wa.me/08136555901"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-600 transition"
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  setShowModal(true);
                  setSelectedCity(null);
                }}
                className="text-left hover:text-orange-600 transition"
              >
                Lokasi
              </button>

            </div>

          </div>
        )}

      </nav>


      {/* MODAL LOKASI */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">

          <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-sm shadow-xl text-center">

            {!selectedCity && (
              <>
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Pilih Kota
                </h3>

                <div className="space-y-3">

                  <button
                    onClick={() => handleCityClick("padang")}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Padang
                  </button>

                </div>
              </>
            )}

            {selectedCity === "padang" && (
              <>
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Pilih Area di Padang
                </h3>

                <div className="space-y-3">

                  <button
                    onClick={() => handleAreaClick("tabing")}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Tabing
                  </button>

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