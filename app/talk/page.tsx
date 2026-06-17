"use client";

import Link from "next/link";
import { useState } from "react";

type Note = {
  id: string;
  title: string;
  secret: string;
  password: string;
  createdAt: number;
};

const STORAGE_KEY = "beariel_notes";

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
          px-3
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

/* ================= PAGE ================= */
export default function TalkPage() {
  const [step, setStep] = useState<"write" | "vault">("write");

  const [secret, setSecret] = useState("");
  const [password, setPassword] = useState("");

  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const [vaultPassword, setVaultPassword] = useState("");
  const [openedSecret, setOpenedSecret] = useState("");

  const getNotes = (): Note[] => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  };

  const saveNotes = (notesData: Note[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
  };

  const handleSubmit = () => {
    if (!secret.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    const existingNotes = getNotes();

    const newNote: Note = {
      id: crypto.randomUUID(),
      title: `Diary #${existingNotes.length + 1}`,
      secret,
      password,
      createdAt: Date.now(),
    };

    saveNotes([newNote, ...existingNotes]);

    setSecret("");
    setPassword("");

    alert("🐻 Diary saved successfully!");
  };

  const openVault = () => {
    const storedNotes = getNotes();

    setNotes(storedNotes);
    setSelectedNote(null);
    setOpenedSecret("");
    setVaultPassword("");

    setStep("vault");
  };

  const unlockDiary = () => {
    if (!selectedNote) return;

    if (vaultPassword === selectedNote.password) {
      setOpenedSecret(selectedNote.secret);
    } else {
      alert("❌ Wrong password");
    }
  };

  return (
    <main className="min-h-screen bg-[#F7EFDF] flex flex-col">
      
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="flex items-center justify-center p-6 flex-1">
        <div className="w-full max-w-[650px]">

          {/* CARD */}
          <div className="rounded-[32px] border-[5px] border-[#96704D] bg-[#FCF8F3] px-8 py-10">

            <div className="flex flex-col items-center">
              <div className="text-7xl">🐻</div>

              <h1 className="mt-4 text-center text-4xl font-bold text-[#6D322F]">
                Secret Beariel&apos;s Note
              </h1>
            </div>

            {/* WRITE PAGE */}
            {step === "write" && (
              <div className="mt-10">
                <textarea
                  value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  placeholder="Write your secret..."
                  className="
                    h-[180px]
                    w-full
                    resize-none
                    rounded-[20px]
                    border-2
                    border-[#C8A27B]
                    p-4
                    text-xl
                    text-[#6D322F]
                    placeholder:text-[#8C8C8C]
                    outline-none
                  "
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Set password"
                  className="
                    mt-5
                    h-14
                    w-full
                    rounded-[18px]
                    border-2
                    border-[#C8A27B]
                    px-4
                    text-xl
                    text-[#6D322F]
                    placeholder:text-[#8C8C8C]
                    outline-none
                  "
                />

                <button
                  onClick={handleSubmit}
                  className="
                    mt-5
                    h-14
                    w-full
                    rounded-[18px]
                    bg-[#753732]
                    text-xl
                    text-white
                  "
                >
                  Save Diary
                </button>

                <button
                  onClick={openVault}
                  className="
                    mt-4
                    h-14
                    w-full
                    rounded-[18px]
                    bg-[#96704D]
                    text-xl
                    text-white
                  "
                >
                  📚 View Saved Diaries
                </button>
              </div>
            )}

            {/* VAULT PAGE */}
            {step === "vault" && (
              <div className="mt-10">
                <h2 className="mb-5 text-2xl font-bold text-[#6D322F]">
                  📚 Saved Diaries
                </h2>

                {notes.length === 0 ? (
                  <div className="text-[#6D322F]">
                    No diary found.
                  </div>
                ) : (
                  notes.map((note) => (
                    <div
                      key={note.id}
                      onClick={() => {
                        setSelectedNote(note);
                        setVaultPassword("");
                        setOpenedSecret("");
                      }}
                      className="
                        mb-3
                        cursor-pointer
                        rounded-[18px]
                        border-2
                        border-[#C8A27B]
                        p-4
                        hover:bg-[#F8F1E6]
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🔒</span>

                        <div>
                          <p className="font-semibold text-[#6D322F]">
                            {note.title}
                          </p>

                          <p className="text-sm text-gray-500">
                            {new Date(note.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {selectedNote && (
                  <div className="mt-6">
                    <input
                      type="password"
                      value={vaultPassword}
                      onChange={(e) =>
                        setVaultPassword(e.target.value)
                      }
                      placeholder="Enter password"
                      className="
                        h-14
                        w-full
                        rounded-[18px]
                        border-2
                        border-[#C8A27B]
                        px-4
                        text-xl
                        text-[#6D322F]
                        outline-none
                      "
                    />

                    <button
                      onClick={unlockDiary}
                      className="
                        mt-4
                        h-14
                        w-full
                        rounded-[18px]
                        bg-[#753732]
                        text-xl
                        text-white
                      "
                    >
                      Unlock Diary
                    </button>
                  </div>
                )}

                {openedSecret && (
                  <div
                    className="
                      mt-6
                      min-h-[180px]
                      rounded-[20px]
                      border-2
                      border-[#C8A27B]
                      p-6
                      text-xl
                      text-[#6D322F]
                      whitespace-pre-wrap
                      break-words
                    "
                  >
                    {openedSecret}
                  </div>
                )}

                <button
                  onClick={() => setStep("write")}
                  className="
                    mt-6
                    h-14
                    w-full
                    rounded-[18px]
                    bg-[#96704D]
                    text-xl
                    text-white
                  "
                >
                  ← Back
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}