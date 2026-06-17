"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ================= NAVBAR ================= */
function Navbar() {
  return (
    <nav className="w-full flex justify-center py-2 bg-[#F7EFDF]">
      <div
        className="
          flex
          items-center
          justify-between
          w-full
          max-w-[650px]
          px-6
          py-3
          bg-[#D2A273]
          rounded-full
          shadow-md
        "
      >
        {/* Logo */}
        <div className="text-[#6D322F] font-bold text-lg">
          🐻 Beariel
        </div>

        {/* Menu */}
        <div className="flex gap-3">
          <Link
            href="/"
            className="
              bg-[#753732]
              text-white
              px-5
              py-2
              rounded-full
              text-sm
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

/* ================= TYPES ================= */
type WeekNotes = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
};

/* ================= PAGE ================= */
export default function DiaryPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [currentText, setCurrentText] = useState("");

  const [weekNotes, setWeekNotes] = useState<WeekNotes>({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("beariel-week");
    if (saved) setWeekNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("beariel-week", JSON.stringify(weekNotes));
  }, [weekNotes]);

  const openDay = (day: number) => {
    setSelectedDay(day);
    setCurrentText(weekNotes[day as keyof WeekNotes]);
  };

  const saveDay = () => {
    if (!selectedDay) return;

    setWeekNotes((prev) => ({
      ...prev,
      [selectedDay]: currentText,
    }));

    alert(`✨ Day ${selectedDay} saved`);
  };

  const allDaysFilled = Object.values(weekNotes).every(
    (note) => note.trim() !== ""
  );

  const handleShareWeek = async () => {
    if (!allDaysFilled) {
      alert("🤎 Isi semua Day 1 - Day 7 terlebih dahulu yaa");
      return;
    }

    const text = `🐻 One Week In Beariel

Day 1
"${weekNotes[1]}"

Day 2
"${weekNotes[2]}"

Day 3
"${weekNotes[3]}"

Day 4
"${weekNotes[4]}"

Day 5
"${weekNotes[5]}"

Day 6
"${weekNotes[6]}"

Day 7
"${weekNotes[7]}"

✨ Semangat yaa, Beariel selalu mendengarkan 🤎`;

    await navigator.clipboard.writeText(text);

    alert("📋 One Week In Beariel berhasil dicopy!");
  };

  return (
    <main className="min-h-screen bg-[#F7EFDF] flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="flex flex-1 items-center justify-center p-6">

        <div className="w-full max-w-[600px] rounded-[32px] bg-[#FCF8F3] p-8 md:p-10">

          {/* HEADER */}
          <div className="flex flex-col items-center">
            <div className="text-7xl">🐻</div>

            <h1 className="mt-6 text-center text-3xl md:text-5xl font-bold text-[#7A563D]">
              How&apos;s Your Day
            </h1>

            <p className="mt-6 text-center text-xl text-[#B57B4A]">
              tell your week story ✨
            </p>
          </div>

          {/* LIST DAY */}
          {!selectedDay && (
            <>
              <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <button
                    key={day}
                    onClick={() => openDay(day)}
                    className="
                      h-16
                      rounded-[24px]
                      bg-[#A2734F]
                      text-xl
                      text-white
                      transition
                      hover:opacity-90
                    "
                  >
                    Day {day}
                    {weekNotes[day as keyof WeekNotes] && " ✓"}
                  </button>
                ))}
              </div>

              <button
                onClick={handleShareWeek}
                className="
                  mt-8
                  h-20
                  w-full
                  rounded-[24px]
                  bg-[#A2734F]
                  text-2xl
                  font-semibold
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                Share Your Week
              </button>
            </>
          )}

          {/* EDIT DAY */}
          {selectedDay && (
            <>
              <h2 className="mt-12 text-center text-5xl font-bold text-[#7A563D]">
                Day {selectedDay}
              </h2>

              <textarea
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
                placeholder="what happened today?"
                className="
                  mt-10
                  h-[220px]
                  w-full
                  resize-none
                  rounded-[24px]
                  border-[4px]
                  border-black
                  p-5
                  text-2xl
                  text-[#6D322F]
                  placeholder:text-gray-500
                  outline-none
                "
              />

              <button
                onClick={saveDay}
                className="
                  mt-8
                  h-16
                  w-full
                  rounded-[18px]
                  bg-[#8D6545]
                  text-2xl
                  text-white
                "
              >
                Submit
              </button>

              <button
                onClick={() => setSelectedDay(null)}
                className="
                  mt-5
                  w-full
                  text-center
                  text-2xl
                  text-[#8D6545]
                "
              >
                ← back
              </button>

              <button
                onClick={handleShareWeek}
                className="
                  mt-6
                  h-16
                  w-full
                  rounded-[18px]
                  bg-[#B59674]
                  text-2xl
                  text-white
                "
              >
                Share Your Week
              </button>
            </>
          )}

        </div>
      </div>
    </main>
  );
}