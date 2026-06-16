import Image from "next/image";
import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-[#AB4639] p-3 md:p-6">
  <div
    className="
      relative
      mx-auto
      min-h-[90dvh]
      max-w-[1400px]
      rounded-[20px]
      bg-[#F6F4EF]
      px-5
      pt-8
      pb-2
      md:px-10
      md:pt-10
      md:pb-2
      overflow-hidden

    "
  >
    {/* TITLE */}
    <h1
      className={`
        ${lobster.className}
        text-center
        text-[34px]
        md:text-[58px]
        text-[#B54C40]
        drop-shadow-[3px_3px_0px_rgba(124,60,50,0.45)]
      `}
    >
      Need help?
    </h1>

    {/* BUTTON */}
    <div className="mt-6 flex justify-center">
      <Link
        href="https://instagram.com/bearielpages"
        target="_blank"
        className="
          rounded-full
          bg-[#EFE5D8]
          px-5
          py-3
          text-center
          text-[18px]
          md:px-8
          md:text-[24px]
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
        mt-8
        max-w-[900px]
        text-center
        text-[16px]
        leading-relaxed
        text-[#242424]
        md:text-[24px]
        font-poppins
      "
    >
      If you experience any issues or have questions
      about this website, feel free to reach out to
      the developer. Your comfort and safety are
      important here 💗
    </p>

    {/* INSTAGRAM */}
    <div className="mt-8 text-center">
  <p
    className="
      font-poppins
      text-[18px]
      md:text-[26px]
      text-black
    "
  >
    DM us on Instagram:
  </p>

  <p
    className="
      font-poppins
      font-bold
      text-[20px]
      md:text-[30px]
      text-[#2B1B18]
    "
  >
    @bearielpages
  </p>

  <p
    className="
      mt-4
      font-poppins
      text-[18px]
      md:text-[28px]
      text-[#2B1B18]
    "
  >
    "Beariel is always here to keep your
    secrets safe..."
  </p>

  <div className="mt-3 text-2xl md:text-4xl">
    💗
  </div>
</div>

    {/* IMAGE */}
    <div
      className="
        mt-8
        flex
        justify-center
        md:absolute
        md:bottom-30
        md:right-20
      "
    >
      <Image
        src="/bearil5.png"
        alt="Beariel"
        width={220}
        height={220}
        className="
          w-[140px]
          md:w-[240px]
          object-contain
        "
      />
    </div>
  </div>
</main>
  );
}