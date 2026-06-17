import Image from "next/image";
import Link from "next/link";
import { Lobster } from "next/font/google";

/* ================= NAVBAR ================= */
function Navbar() {
  return (
    <nav className="w-full flex justify-center py-2 bg-[#AB4639]">
      <div
        className="
          flex
          items-center
          justify-between
          w-full
          max-w-[650px]
          px-5
          py-2
          bg-[#D2A273]
          rounded-full
          shadow-md
        "
      >
        {/* Logo */}
        <div className="text-[#6D322F] font-bold text-base">
          🐻 Beariel
        </div>

        {/* Menu */}
        <div className="flex gap-2">
          <Link
            href="/"
            className="
              bg-[#753732]
              text-white
              px-4
              py-1.5
              rounded-full
              text-xs
              hover:opacity-90
              transition
            "
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-[#AB4639] p-3 md:p-5 flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT WRAPPER */}
      <div className="relative mx-auto flex-1 w-full max-w-[1100px] rounded-[20px] bg-[#F6F4EF] px-5 pt-6 pb-6 md:px-8 md:pt-8 overflow-hidden">

        {/* TITLE */}
        <h1
          className={`
            ${lobster.className}
            text-center
            text-[28px]
            md:text-[46px]
            text-[#B54C40]
            drop-shadow-[2px_2px_0px_rgba(124,60,50,0.35)]
          `}
        >
          Need help?
        </h1>

        {/* BUTTON */}
        <div className="mt-4 flex justify-center">
          <Link
            href="https://instagram.com/bearielpages"
            target="_blank"
            className="
              rounded-full
              bg-[#EFE5D8]
              px-5
              py-2
              text-center
              text-[16px]
              md:text-[20px]
              text-[#B54C40]
              font-bebas
            "
          >
            🍒 Contact Developer 🍒
          </Link>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-5
            max-w-[850px]
            text-center
            text-[14px]
            md:text-[18px]
            leading-relaxed
            text-[#242424]
            font-poppins
          "
        >
          If you experience any issues or have questions about this website,
          feel free to reach out. Your comfort and safety are important here 💗
        </p>

        {/* INSTAGRAM */}
        <div className="mt-5 text-center">
          <p className="font-poppins text-[15px] md:text-[20px] text-black">
            DM us on Instagram:
          </p>

          <p className="font-poppins font-bold text-[16px] md:text-[22px] text-[#2B1B18]">
            @bearielpages
          </p>

          <p className="mt-3 font-poppins text-[14px] md:text-[20px] text-[#2B1B18]">
            "Beariel is always here to keep your secrets safe..."
          </p>

          <div className="mt-2 text-xl md:text-3xl">💗</div>
        </div>

        {/* IMAGE (SUDAH DIPERBAIKI: di bawah text + lebih besar) */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/bearil5.png"
            alt="Beariel"
            width={200}
            height={200}
            className="w-[150px] md:w-[200px] object-contain"
          />
        </div>

      </div>
    </main>
  );
}