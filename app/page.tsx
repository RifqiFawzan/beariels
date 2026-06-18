import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#7D392D] flex items-center py-6 lg:py-8">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-center gap-8 xl:grid-cols-2">

          {/* LEFT */}
          <div>
            <div className="mb-4 flex items-center justify-center gap-2 xl:ml-10 xl:justify-start">
              <img
                src="/bintang.png"
                alt="star"
                className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-white">
                Beariel's Diary
              </h2>
            </div>

            <div className="relative mx-auto h-[260px] sm:h-[360px] lg:h-[460px] xl:h-[580px] w-full max-w-[650px]">
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
                  right-2
                  top-8
                  sm:right-4
                  sm:top-14
                  lg:right-6
                  lg:top-16
                  xl:-right-8
                  xl:top-20
                  flex
                  h-16
                  w-20
                  sm:h-20
                  sm:w-28
                  lg:h-24
                  lg:w-32
                  xl:h-32
                  xl:w-40
                  items-center
                  justify-center
                  rounded-xl
                  border-[3px]
                  border-slate-800
                  bg-white
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                "
              >
                🤎
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center w-full max-w-[800px] mx-auto">

            <h1
              className="
                text-center
                font-light
                leading-tight
                text-white
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              I'll Always Keep
              <br />
              Your Secret
            </h1>

            <div className="mt-8 flex flex-col xl:flex-row gap-6 xl:gap-8 w-full items-center justify-center">

              {/* LEFT BUTTONS */}
              <div className="space-y-5 lg:space-y-6 w-full flex flex-col items-center">

                <Link
                  href="/talk"
                  className="flex h-16 lg:h-18 xl:h-20 w-full max-w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg lg:text-xl text-[#1D2A3A] transition hover:scale-105"
                >
                  TALK TO BEARIEL
                </Link>

                <Link
                  href="/diary"
                  className="flex h-16 lg:h-18 xl:h-20 w-full max-w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg lg:text-xl text-[#1D2A3A] transition hover:scale-105"
                >
                  HOW'S YOUR DAY
                </Link>

                <Link
                  href="/reflection"
                  className="flex h-16 lg:h-18 xl:h-20 w-full max-w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg lg:text-xl text-[#1D2A3A] transition hover:scale-105"
                >
                  DAILY REFLECTION
                </Link>
              </div>

              {/* CENTER DIVIDER */}
              <div className="hidden xl:flex flex-col items-center">
                <div className="h-[300px] w-[3px] bg-white" />
              </div>

              {/* RIGHT BUTTONS */}
              <div className="space-y-5 lg:space-y-6 w-full flex flex-col items-center">

                <Link
                  href="/about"
                  className="flex h-16 lg:h-18 xl:h-20 w-full max-w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg lg:text-xl text-[#1D2A3A] transition hover:scale-105"
                >
                  ABOUT BEARIEL
                </Link>

                <Link
                  href="/how"
                  className="flex h-16 lg:h-18 xl:h-20 w-full max-w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg lg:text-xl text-[#1D2A3A] transition hover:scale-105"
                >
                  HOW TO USE
                </Link>

                <Link
                  href="/contact"
                  className="flex h-16 lg:h-18 xl:h-20 w-full max-w-[320px] items-center justify-center rounded-full bg-[#F3F3F3] text-lg lg:text-xl text-[#1D2A3A] transition hover:scale-105"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bearielpages/"
              className="mt-8"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={80}
                height={80}
                className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
              />
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}