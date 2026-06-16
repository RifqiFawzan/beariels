import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#7D392D] flex items-center py-8">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-4 flex items-center justify-center gap-1 lg:ml-10 lg:justify-start">
              <span className="text-[28px] sm:text-[32px] lg:text-[40px] leading-none text-[#F56B42]">
                <img
                src="/bintang.png"
                alt = "heart"
                className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
              </span>

              <h2 className="text-[32px] sm:text-[42px] lg:text-[60px] font-bold leading-none text-white">
                Beariel's Diary
              </h2>
            </div>

            <div className="relative mx-auto h-[320px] sm:h-[450px] lg:h-[620px] w-full max-w-[720px]">
              <Image
                src="/bearils.png"
                alt="Beariel"
                fill
                priority
                className="object-contain"
              />

              {/* Love Bubble */}
              <div
                className="
                  absolute
                  right-0
                  top-12
                  sm:right-2
                  sm:top-20
                  lg:-right-8
                  lg:top-24
                  flex
                  h-20
                  w-24
                  sm:h-24
                  sm:w-32
                  lg:h-32
                  lg:w-40
                  items-center
                  justify-center
                  rounded-xl
                  border-[3px]
                  border-slate-800
                  bg-white
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                🤎
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center">
            <h1
              className="
                text-center
                font-light
                leading-none
                text-white
                text-[48px]
                sm:text-[60px]
                lg:text-[80px]
              "
            >
              I'll Always Keep
              <br />
              Your Secret
            </h1>

            <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* LEFT BUTTONS */}
              <div className="space-y-5 lg:space-y-8">
                <Link
                  href="/talk"
                  className="flex h-16 sm:h-18 lg:h-20 w-[280px] sm:w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg sm:text-xl lg:text-2xl text-[#1D2A3A] transition hover:scale-105"
                >
                  TALK TO BEARIEL
                </Link>

                <Link
                  href="/diary"
                  className="flex h-16 sm:h-18 lg:h-20 w-[280px] sm:w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg sm:text-xl lg:text-2xl text-[#1D2A3A] transition hover:scale-105"
                >
                  HOW'S YOUR DAY
                </Link>

                <Link
                  href="/reflection"
                  className="flex h-16 sm:h-18 lg:h-20 w-[280px] sm:w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg sm:text-xl lg:text-2xl text-[#1D2A3A] transition hover:scale-105"
                >
                  DAILY REFLECTION
                </Link>
              </div>

              {/* CENTER DIVIDER */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="h-[340px] w-[3px] bg-white" />
              </div>

              {/* RIGHT BUTTONS */}
              <div className="space-y-5 lg:space-y-8">
                <Link
                  href="/about"
                  className="flex h-16 sm:h-18 lg:h-20 w-[280px] sm:w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg sm:text-xl lg:text-2xl text-[#1D2A3A] transition hover:scale-105"
                >
                  ABOUT BEARIEL
                </Link>

                <Link
                  href="/how"
                  className="flex h-16 sm:h-18 lg:h-20 w-[280px] sm:w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg sm:text-xl lg:text-2xl text-[#1D2A3A] transition hover:scale-105"
                >
                  HOW TO USE
                </Link>

                <Link
                  href="/contact"
                  className="flex h-16 sm:h-18 lg:h-20 w-[280px] sm:w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg sm:text-xl lg:text-2xl text-[#1D2A3A] transition hover:scale-105"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            <a
              href="https://www.instagram.com/bearielpages/"
              className="mt-8 lg:mt-4"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-24 lg:h-24"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}