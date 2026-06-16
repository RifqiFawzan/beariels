import Image from "next/image";
import Link from "next/link";

const talkSteps = [
  {
    number: 1,
    title: 'Klik menu "TALK TO BEARIEL"',
    desc: "untuk mulai bercerita.",
    image: "/tutor1.png",
  },
  {
    number: 2,
    title: "Tulis semua rahasiamu",
    desc: "di sini. Beariel akan mendengarkan.",
    image: "/tutor2.png",
  },
  {
    number: 3,
    title: "Set password",
    desc: "untuk mengunci rahasiamu agar tetap aman.",
    image: "/tutor3.png",
  },
  {
    number: 4,
    title: "Masukkan Password",
    desc: "kamu bisa membuka note dengan memasukkan password.",
    image: "/tutors4.png",
  },
  {
    number: 5,
    title: "Notemu bisa dibagikan",
    desc: "untuk membagikan notemu pencet share lalu notenya akan tersimpan di clipbordmu",
    image: "/tutor5.png",
  },
];

const daySteps = [
  {
    number: 1,
    title: 'Klik menu "HOW\'S YOUR DAY"',
    desc: "untuk cerita keseharian.",
    image: "/tutor55.png",
  },
  {
    number: 2,
    title: "Pilih hari",
    desc: "yang ingin kamu ceritakan.",
    image: "/tutor11.png",
  },
  {
    number: 3,
    title: "Tulis cerita harimu",
    desc: "bebas cerita apa saja.",
    image: "/tutor22.png",
  },
  {
    number: 4,
    title: "Lakukan setiap hari",
    desc: "selama seminggu.",
    image: "/tutor33.png",
  },
  {
    number: 5,
    title: "Cerita 7 harimu",
    desc: "Jiika sudah tercentang semua maka cerita bisa di share",
    image: "/tutor44.png",
  },
];

function StepCard({
  number,
  title,
  desc,
  image,
}: {
  number: number;
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div
      className="
        relative
        rounded-[18px]
        border
        border-[#D7CCBF]
        bg-white
        p-4
        shadow-sm
      "
    >
      {/* Number */}
      <div
        className="
          absolute
          -left-3
          -top-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[#6D2F1B]
          text-lg
          font-bold
          text-white
        "
      >
        {number}
      </div>

      {/* Text */}
      <div className="min-h-[70px]">
        <p
          className="
            text-center
            text-sm
            leading-relaxed
            text-[#4B241A]
            font-poppins
          "
        >
          <span className="font-semibold">{title}</span>
          <br />
          {desc}
        </p>
      </div>

      {/* Screenshot Area */}
      <div
        className="
          mt-4
          overflow-hidden
          rounded-xl
          border
          bg-[#FAFAFA]
        "
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="
            h-[180px]
            w-full
            object-contain
            bg-white
          "
        />
      </div>
    </div>
  );
}

export default function HowPage() {
  return (
    <main className="min-h-screen bg-[#F7F3E7] px-4 py-10">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center">
          
          <h1
            className="
              font-poppins
              text-2xl
              font-bold
              text-[#4B241A]
              md:text-5xl
            "
          >
            🧸 Tatacara Pemakaian Web Talk to Beariel 🧸
          </h1>

          <p
            className="
              mt-4
              text-sm
              italic
              text-[#C95F54]
              md:text-lg
              font-poppins
            "
          >
            Ruang aman untuk ceritamu.
            Beariel selalu ada untuk mendengarkanmu!
          </p>

        </div>

        {/* TALK TO BEARIEL */}
        <section className="mt-16">
          <Link href="/">
            <div
            className="
              mx-auto
              mb-10
              w-fit
              rounded-full
              bg-[#6D2F1B]
              px-8
              py-3
              text-white
              shadow-lg
            "
          >
            <p className="font-poppins font-semibold">
              1. TALK TO BEARIEL (Untuk Rahasiamu) ❤️
            </p>
          </div>
          </Link>
          

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

            {talkSteps.map((step) => (
              <StepCard
                key={step.number}
                {...step}
              />
            ))}

          </div>

        </section>

        {/* HOW'S YOUR DAY */}
        <section className="mt-20">
          <Link href="/">
          <div
            className="
              mx-auto
              mb-10
              w-fit
              rounded-full
              bg-[#6D2F1B]
              px-8
              py-3
              text-white
              shadow-lg
            "
          >
            <p className="font-poppins font-semibold">
              2. HOW&apos;S YOUR DAY (Ceritakan Harimu) ✨
            </p>
          </div>
          </Link>
          

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

            {daySteps.map((step) => (
              <StepCard
                key={step.number}
                {...step}
              />
            ))}

          </div>

        </section>

        {/* REMINDER */}
        <section className="mt-20 flex justify-center">

          <div
            className="
              rounded-full
              border
              border-dashed
              border-[#C95F54]
              bg-[#FFF4F4]
              px-8
              py-4
              text-center
              font-poppins
              font-semibold
              text-[#6D2F1B]
            "
          >
            Ingat, Beariel selalu ada untuk mendengarkanmu.
            Kamu tidak sendirian! 🎀
          </div>

        </section>

      </div>

    </main>
  );
}