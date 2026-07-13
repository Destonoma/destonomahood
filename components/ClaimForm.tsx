"use client";

import { useState } from "react";
import { generatePass } from "@/lib/generatePass";
import { createClaim } from "@/lib/claim";

type ClaimFormProps = {
  setPassData: (data: {
    name: string;
    x: string;
    telegram: string;
    wallet: string;
  }) => void;

  setPassImage: (img: string) => void;
};

export default function ClaimForm({
  setPassData,
  setPassImage,
}: ClaimFormProps) {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [x, setX] = useState("");
  const [telegram, setTelegram] = useState("");
  const [wallet, setWallet] = useState("");

  const progress = (step / 4) * 100;

  return (
    <section className="max-w-4xl mx-auto px-8 pb-24">

      <div className="rounded-3xl border border-lime-500/20 bg-zinc-900 p-10">

        <p className="uppercase tracking-[4px] text-lime-400">
          Claim Genesis Pass
        </p>

        <h2 className="text-5xl font-black mt-4">
          Become an Early Supporter
        </h2>

        <p className="text-gray-400 mt-4">
          Complete every step below.
        </p>

        <div className="mt-10">

          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="w-full h-3 rounded-full bg-black overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-lime-400 transition-all"
            />
          </div>

        </div>
                {step === 1 && (
          <div className="mt-12">

            <div className="rounded-2xl border border-lime-500/20 bg-black/30 p-8">

              <p className="uppercase tracking-[3px] text-lime-400">
                STEP 01
              </p>

              <h3 className="text-3xl font-bold mt-3">
                What's your name?
              </h3>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full mt-8 rounded-xl bg-black border border-lime-500/20 p-5 outline-none"
              />

              <button
                disabled={!name}
                onClick={() => setStep(2)}
                className={`mt-8 px-8 py-4 rounded-xl font-bold ${
                  name
                    ? "bg-lime-400 text-black"
                    : "bg-zinc-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue →
              </button>

            </div>

          </div>
        )}

        {step === 2 && (
          <div className="mt-12">

            <div className="rounded-2xl border border-lime-500/20 bg-black/30 p-8">

              <p className="uppercase tracking-[3px] text-lime-400">
                STEP 02
              </p>

              <h3 className="text-3xl font-bold mt-3">
                Your X Username
              </h3>

              <input
                type="text"
                value={x}
                onChange={(e) => setX(e.target.value)}
                placeholder="@username"
                className="w-full mt-8 rounded-xl bg-black border border-lime-500/20 p-5 outline-none"
              />

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => setStep(1)}
                  className="border border-lime-400 px-8 py-4 rounded-xl"
                >
                  Back
                </button>

                <button
                  disabled={!x}
                  onClick={() => setStep(3)}
                  className={`px-8 py-4 rounded-xl font-bold ${
                    x
                      ? "bg-lime-400 text-black"
                      : "bg-zinc-700 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue →
                </button>

              </div>

            </div>

          </div>
        )}
        {step === 3 && (
  <div className="mt-12">

    <div className="rounded-2xl border border-lime-500/20 bg-black/30 p-8">

      <p className="uppercase tracking-[3px] text-lime-400">
        STEP 03
      </p>

      <h3 className="text-3xl font-bold mt-3">
        Telegram Username
      </h3>

      <input
        type="text"
        value={telegram}
        onChange={(e) => setTelegram(e.target.value)}
        placeholder="@telegram"
        className="w-full mt-8 rounded-xl bg-black border border-lime-500/20 p-5 outline-none"
      />

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => setStep(2)}
          className="border border-lime-400 px-8 py-4 rounded-xl"
        >
          Back
        </button>

        <button
          disabled={!telegram}
          onClick={() => setStep(4)}
          className={`px-8 py-4 rounded-xl font-bold ${
            telegram
              ? "bg-lime-400 text-black"
              : "bg-zinc-700 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue →
        </button>

      </div>

    </div>

  </div>
)}

{step === 4 && (
  <div className="mt-12">

    <div className="rounded-2xl border border-lime-500/20 bg-black/30 p-8">

      <p className="uppercase tracking-[3px] text-lime-400">
        FINAL STEP
      </p>

      <h3 className="text-3xl font-bold mt-3">
        Wallet Address
      </h3>

      <input
        type="text"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        placeholder="0x..."
        className="w-full mt-8 rounded-xl bg-black border border-lime-500/20 p-5 outline-none"
      />

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => setStep(3)}
          className="border border-lime-400 px-8 py-4 rounded-xl"
        >
          Back
        </button>

        <button
  disabled={!wallet}
  onClick={async () => {
    try {
      const claim = await createClaim({
        name,
        twitter_username: x,
        telegram,
        wallet,
      });

      setPassData({
        name,
        x,
        telegram,
        wallet,
      });

      const passNumber = `DTM-${String(claim.pass_number).padStart(6, "0")}`;

      const image = await generatePass({
        name,
        x,
        wallet,
        passNumber,
      });

      setPassImage(image);
    } catch (err: any) {
      alert(err.message || "Claim gagal");
    }
  }}
  className={`px-8 py-4 rounded-xl font-bold ${
    wallet
      ? "bg-lime-400 text-black"
      : "bg-zinc-700 text-gray-500 cursor-not-allowed"
  }`}
>
  🚀 Generate Genesis Pass
</button>

      </div>

    </div>

  </div>
)}
      </div>

    </section>
  );
}