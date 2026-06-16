"use client";

import { useState } from "react";

const quotes = [
  "Bernapaslah, kamu sedang dalam perjalanan menuju sembuh.",
  "Bintang hanya bisa terlihat saat langit sedang paling gelap. Mungkin ini caramu untuk bersinar.",
  "Terima kasih sudah tidak menyerah pada dirimu yang kemarin. Esok akan lebih lembut padamu.",
  "Kamu sudah melewati banyak hal sulit. Kamu juga akan melewati ini.",
  "Istirahat bukan tanda menyerah. Itu bagian dari perjalanan.",
  "Terkadang, 'selamat' yang paling tulus adalah saat kamu memeluk dirimu sendiri di akhir hari.",
  "Kadang bertahan satu hari lagi sudah merupakan kemenangan.",
  "Jadilah seperti air; tidak melawan batu, tapi mengalir melewatinya sampai tenang.",
  "Kamu tidak perlu menjadi 'selalu ada' untuk semua orang, sampai lupa untuk ada bagi dirimu sendiri.",
  "Pelan-pelan saja. Tidak ada perlombaan dalam proses pulih.",
  "Terima kasih sudah bertahan sampai hari ini.",
  "Hal baik sedang menuju kepadamu, meski belum terlihat sekarang.",
];

export default function ReflectionPage() {
  const [quote, setQuote] = useState(quotes[0]);
  const [animate, setAnimate] = useState(false);
  const getAnotherHug = () => {
  setAnimate(true);

  setTimeout(() => {
    let newQuote = quote;

    while (newQuote === quote) {
      newQuote =
        quotes[Math.floor(Math.random() * quotes.length)];
    }

    setQuote(newQuote);
    setAnimate(false);
  }, 300);
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7EFDF] p-4 sm:p-6">
      <div className="w-full max-w-[700px] rounded-[28px] bg-[#FCF8F3] p-6 sm:p-8 md:p-10 shadow-sm">
        
        {/* Header */}
        <div className="text-center">
          <div className="text-4xl sm:text-5xl">
            ★ ˚｡ 🧸 ｡˚ ★
          </div>

          <h1 className="mt-6 text-3xl font-bold text-[#6D4B3E] sm:text-4xl md:text-5xl">
            Daily Reflections
          </h1>

          <div className="mt-4 text-base text-[#B57B4A] sm:text-lg md:text-xl">
            ── ୨୧ ──
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 min-h-[120px] sm:min-h-[140px]">
          <p className={`
    text-center
    text-lg sm:text-xl md:text-2xl
    italic
    leading-relaxed
    text-[#7A5A4A]
    transition-all
    duration-300
    ${
      animate
        ? "opacity-0 scale-95"
        : "opacity-100 scale-100"
    }
  `}
>
  "{quote}"
          </p>
        </div>

        {/* Button */}
        <button
          onClick={getAnotherHug}
          className="
            mx-auto mt-8 flex h-16
            w-full max-w-[320px]
            items-center justify-center
            rounded-[20px]
            bg-[#7B5548]
            text-xl text-white
            transition
            hover:bg-[#6A473B]
          "
        >
          Get Another Hug ✨
        </button>
      </div>
    </main>
  );
}