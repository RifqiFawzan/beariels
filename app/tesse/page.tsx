export default function TessePage() {
  return (
    <main className="min-h-screen bg-[#F7F7EE] p-10">
      <div className="mx-auto max-w-6xl space-y-16">

        {/* BEBAS */}
        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Font Bebas
          </h2>

          <h1 className="font-bebas text-[120px] leading-none text-[#C95F54]">
            HI, I'M
            <br />
            BEARIEL.
          </h1>

          <p className="mt-4 text-xl">
            Jika font bekerja, tulisan di atas akan terlihat
            tinggi, sempit, dan khas poster.
          </p>
        </section>

        <hr />

        {/* POPPINS */}
        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Font Poppins
          </h2>

          <p className="font-poppins text-[28px] leading-[1.5] text-[#422B25]">
            Beariel adalah seekor beruang kecil yang sering
            merasa sendirian, meskipun ia berada di sekitar
            banyak beruang lainnya. Di dalam hatinya,
            Beariel menyimpan banyak cerita, perasaan,
            dan pikiran yang tidak pernah benar-benar ia
            sampaikan kepada siapa pun.
          </p>
        </section>

        <hr />

        {/* DEFAULT */}
        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Font Default
          </h2>

          <p className="text-[28px] leading-[1.5] text-[#422B25]">
            Beariel adalah seekor beruang kecil yang sering
            merasa sendirian, meskipun ia berada di sekitar
            banyak beruang lainnya. Di dalam hatinya,
            Beariel menyimpan banyak cerita, perasaan,
            dan pikiran yang tidak pernah benar-benar ia
            sampaikan kepada siapa pun.
          </p>
        </section>

        <hr />

        {/* COMPARISON */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">
            Perbandingan Langsung
          </h2>

          <p className="font-bebas text-7xl">
            BEBAS NEUE
          </p>

          <p className="font-poppins text-5xl">
            POPPINS
          </p>

          <p className="text-5xl">
            DEFAULT FONT
          </p>
        </section>

      </div>
    </main>
  );
}