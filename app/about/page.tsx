import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* SECTION 1 */}
      <section className="bg-[#D45049] pb-40 pt-20">
         <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 lg:grid-cols-2">

      <h1 className=" font-poppins leading-[1] text-6xl text-[60px] sm:text-[80] font-black text-[#FCFCEF] md:text-[130px]">
        HI, I'M
        <br />
        BEARIEL.
      </h1>

      <div>
        <p className=" ont-poppins
        max-w-[520px]
        text-[#FCFCEF]
        text-[18px]
        sm:text-[22px]
        md:text-[34px]
        leading-[1.45]">
          Seekor beruang kecil yang sering merasa sendirian,
          meskipun ia berada di sekitar banyak beruang lainnya.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block text-xl font-bold underline text-[#FCFCEF]"
        >
          Explore Beariel
        </Link>
      </div>

    </div>

    <div className="mt-20 overflow-hidden">
      <Image
        src="/bearil1.jpg"
        alt="Beariel"
        width={1200}
        height={350}
        className="
          h-[220px] md:h-[368px]
          w-full
          object-cover
          object-[center_35%]"
      />
    </div>

  </div>
  
      </section>

      {/* SECTION 2 */}
      <section id="journey"className="bg-[#F7F7EE] px-8 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">

    <div className="grid gap-7 lg:grid-cols-2">

      <h2 className="font-bebas text-5xl text-[50px] sm:text-[70px] font-black text-[#C95F54] md:text-[90px]">
        BEARIEL'S
        <br />
        JOURNEY
      </h2>
      <div className="h-[120px] md:h-[180px] overflow-hidden">
      <Image
       src="/bearil1.jpg"
        alt="Beariel"
        width={1500}
        height={600}
        className="
          h-[220px]
          w-full
          object-cover
          object-[center_30%]
          object-[left_37%]
          scale-300
          "
      />
      </div>
      

    </div>

    <div className="mt-12 space-y-8 md:space-y-12 text-[18px] sm:text-[22px] md:text-[28px] leading-[1.5] text-[#422B25] font-poppins">

      <p>
        Beariel adalah seekor beruang kecil yang sering merasa sendirian, meskipun ia
berada di sekitar banyak beruang lainnya. Di dalam hatinya, Beariel menyimpan
banyak cerita, perasaan, dan pikiran yang tidak pernah benar-benar ia sampaikan
kepada siapa pun. Bukan karena tidak ingin bercerita, tapi karena beariel merasa
takut, takut tidak didengar, takut dianggap berlebihan, dan takut ceritanya justru
dihakimi, bahkan oleh beruang-beruang terdekatnya sendiri.
      </p>

      <p>
        Setiap kali ingin bercerita, selalu ada keraguan yang menahannya. Ia sering bertanya
dalam hati, “Apakah ceritaku penting?” “Apakah mereka akan mengerti?”
Pertanyaan-pertanyaan itu terus datang, membuat Beariel lebih memilih untuk
diam.
      </p>

      <p>
        Sampai akhirnya, Beariel menemukan caranya sendiri untuk tetap bertahan. Ia mulai
menuliskan semua yang ia rasakan ke dalam diary miliknya. Di sanalah ia bisa jujur
sepenuhnya, tanpa harus takut dinilai. Ia menulis tentang harinya, tentang hal-hal
kecil yang membuatnya bahagia, tentang kesedihan yang ia pendam, tentang rasa
takut yang sulit dijelaskan, dan tentang harapan-harapan kecil yang ia simpan
diam-diam.
      </p>

      <p>
        Perlahan, diary itu menjadi tempat paling aman bagi Beariel. Tempat di mana semua
emosinya diterima apa adanya. Tempat di mana ia tidak perlu berpura-pura kuat.
      </p>

      <p>
        Seiring berjalannya waktu, Beariel menyadari bahwa ia mungkin tidak sendirian. Di
luar sana, ada banyak beruang lain yang juga ingin bercerita, tapi tidak tahu harus ke
mana. Ingin dipahami, tapi takut disalahpahami.
      </p>
      <p>
      Dari situlah Beariel menciptakan Beariel’s Diary sebuah ruang aman untuk siapa saja
yang ingin berbagi cerita, menuangkan perasaan, dan mengekspresikan diri tanpa
rasa takut.
      </p>

      <p>
       Karena bagi Beariel, setiap cerita itu berharga. Dan setiap perasaan sekecil apa pun
pantas untuk didengar
      </p>

    </div>

  </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-[#C95F54] px-8 py-28 md:px-20">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 md:gap-20 lg:grid-cols-[1fr_1.2fr]">

      {/* LEFT */}
      <div>
        <h2
          className="
            font-bebas
            leading-none
            text-[#F9F7EA]
            text-[50px]
            sm:text-[80px]
            md:text-[140px]
            font-bold
          "
        >
          WHAT
          <br />
          BEARIEL
          <br />
          CAN DO
          <br />
          FOR YOU
        </h2>

        <Link
          href="#why"
          className="
            mt-10
            inline-block
            font-poppins
            text-2xl
            font-semibold
            underline
            text-[#F9F7EA]
          "
        >
          Explore Beariel
        </Link>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">

        {/* CARD 1 */}
        <div
          className="
            flex flex-col md:flex-row
            items-center
            gap-4 md:gap-8
            bg-[#F9F7EA]
            px-8
            py-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <Image
            src="/bearil2.png"
            alt="Talk to Beariel"
            width={180}
            height={180}
            className="h-[90px] w-[90px] md:h-[150px]md:w-[150px] object-contain"
          />

          <div>
            <h3
              className="
                font-poppins
                text-4xl
                font-bold
                text-[#3F2925]
              "
            >
              Talk to Beariel
            </h3>

            <p
              className="
                mt-3
                font-poppins
                text-2xl
                text-[#3F2925]
              "
            >
              Memories you want to hide.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="
            flex flex-col md:flex-row
            items-center
            gap-4 md:gap-8
            bg-[#F9F7EA]
            px-8
            py-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <Image
            src="/bearil3.png"
            alt="How's Your Day"
            width={180}
            height={180}
            className="h-[90px] w-[90px] md:h-[150px]md:w-[150px]  object-contain"
          />

          <div>
            <h3
              className="
                font-poppins
                text-4xl
                font-bold
                text-[#3F2925]
              "
            >
              How&apos;s Your Day
            </h3>

            <p
              className="
                mt-3
                font-poppins
                text-2xl
                text-[#3F2925]
              "
            >
              Memories you want to share.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="
            flex flex-col md:flex-row
            items-center
            gap-4 md:gap-8
            bg-[#F9F7EA]
            px-8
            py-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <Image
            src="/bearil4.png"
            alt="Daily Reflection"
            width={180}
            height={180}
            className="h-[90px] w-[90px] md:h-[150px]md:w-[150px] object-contain"
          />

          <div>
            <h3
              className="
                font-poppins
                text-4xl
                font-bold
                text-[#3F2925]
              "
            >
              Daily Reflection
            </h3>

            <p
              className="
                mt-3
                font-poppins
                text-2xl
                text-[#3F2925]
              "
            >
              Sentences you must hear.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* SECTION 4 */}
      <section
  id="why"
  className="bg-[#F7F7EE] py-32"
>
  <div className="mx-auto max-w-7xl px-8 md:px-16">

    {/* TITLE */}
    <h2
      className="
        font-bebas
        leading-none
        text-[#C95F54]
        text-[60px]
        md:text-[100px]
        font-bold
      "
    >
      WHY
      <br />
      BEARIEL?
    </h2>

    {/* MAIN TEXT */}
    <div className="mt-24 max-w-6xl">

      <h3
        className="
          font-poppins
          uppercase
          leading-[0.95]
          text-[#C95F54]
          text-[24px]
          md:text-[54px]
          font-bold
        "
      >
        Because writing diary can help you
        <br />
        to strengthen psychological
        <br />
        well-being
      </h3>

      {/* LINKS */}
      <div className="mt-24 space-y-8">

        <a
          href="https://www.cambridge.org/core/journals/behaviour-change/article/writing-yourself-well-dispositional-selfreflection-moderates-the-effect-of-a-smartphone-appbased-journaling-intervention-on-psychological-wellbeing-across-time/651C4C3AB0BB362B121823E095D3DF6F"
          target="_blank"
          rel="noopener noreferrer"
          className="
            block
            w-fit
            font-poppins
            text-2xl
            font-semibold
            underline
            underline-offset-4
            text-[#C95F54]
            transition
            hover:opacity-80
          "
        >
          Article about Writing Diary Function
        </a>

        <a
          href="https://link.springer.com/article/10.1186/s13034-025-00998-y"
          target="_blank"
          rel="noopener noreferrer"
          className="
            block
            w-fit
            font-poppins
            text-2xl
            font-semibold
            underline
            underline-offset-4
            text-[#C95F54]
            transition
            hover:opacity-80
          "
        >
          Article about Psychological Well-being
        </a>

      </div>
    </div>

  </div>
</section>
    </main>
  );
}