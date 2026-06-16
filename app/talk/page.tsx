"use client";
import Link from "next/link";
import { useState } from "react";

export default function TalkPage() {
  const [step, setStep] = useState<"write" | "open" | "view">("write");

  const [secret, setSecret] = useState("");
  const [password, setPassword] = useState("");

  const [savedSecret, setSavedSecret] = useState("");
  const [savedPassword, setSavedPassword] = useState("");

  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = () => {
    if (!secret.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    setSavedSecret(secret);
    setSavedPassword(password);

    setSecret("");
    setPassword("");

    setStep("open");
  };
  const handleShare = async () => {
   const textToCopy = `🐻 Note dari Beariel

"${savedSecret}"

Semangat yaa 🤎`;

  await navigator.clipboard.writeText(textToCopy);

  alert("🐻 Note berhasil dicopy ke clipboard!");
};
  const handleOpenNote = () => {
    if (inputPassword === savedPassword) {
      setStep("view");
    } else {
      alert("Wrong password");
    }
  };

  const handleNewNote = () => {
    setSecret("");
    setPassword("");
    setSavedSecret("");
    setSavedPassword("");
    setInputPassword("");

    setStep("write");
  };

  return (
    <main className="min-h-screen bg-[#F7EFDF] flex items-center justify-center p-6">
      <div className="w-full max-w-[650px]">
         {/* Back Button */}
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="
              rounded-full
              bg-[#753732]
              px-6
              py-3
              text-lg
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            ← Back to Home
          </Link>
        </div>
        <div className="rounded-[32px] border-[5px] border-[#96704D] bg-[#FCF8F3] px-8 py-10">
          <div className="flex flex-col items-center">
            <div className="text-7xl">🐻</div>

            <h1 className="mt-4 text-center text-4xl font-bold text-[#6D322F]">
              Secret Beariel&apos;s Note
            </h1>
          </div>

          {/* STEP 1 */}
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
                className="mt-5 h-14 w-full rounded-[18px] bg-[#753732] text-xl text-white"
              >
                Submit
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === "open" && (
            <div className="mt-10">
              <input
  type="password"
  value={inputPassword}
  onChange={(e) => setInputPassword(e.target.value)}
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
    placeholder:text-[#8C8C8C]
    outline-none
  "
/>
              <button
                onClick={handleOpenNote}
                className="mt-5 h-14 w-full rounded-[18px] bg-[#753732] text-xl text-white"
              >
                Open Note
              </button>

              <button
             
                className="mt-4 h-14 w-full rounded-[18px] bg-[#753732] text-xl text-white"
              >
                Share
              </button>
            </div>
          )}

          {/* STEP 3 */}
          {step === "view" && (
            <div className="mt-10">
              <div className="min-h-[150px]
    rounded-[20px]
    border-2
    border-[#C8A27B]
    p-6
    text-xl
    text-[#6D322F]
    whitespace-pre-wrap
    break-words">
                {savedSecret}
              </div>

              <button
                onClick={handleNewNote}
                className="mt-5 h-14 w-full rounded-[18px] bg-[#753732] text-xl text-white"
              >
                Write New Note
              </button>

              <button
                onClick={handleShare}
                className="mt-4 h-14 w-full rounded-[18px] bg-[#753732] text-xl text-white"
              >
                Share
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}