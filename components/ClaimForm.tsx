"use client";

import { useState } from "react";

type ClaimFormProps = {
  setPassData: (data: {
    name: string;
    x: string;
    telegram: string;
    wallet: string;
  }) => void;
};

export default function ClaimForm({ setPassData }: ClaimFormProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [x, setX] = useState("");
  const [telegram, setTelegram] = useState("");
  const [wallet, setWallet] = useState("");
const [generated, setGenerated] = useState(false);
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
          Complete every step to generate your Early Supporter Pass.
        </p>

        {/* Progress */}

        <div className="mt-10">

          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="w-full h-3 rounded-full bg-black overflow-hidden">

            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-lime-400 transition-all duration-700"
            />

          </div>

        </div>

        {/* STEP 1 */}

        {step === 1 && (

          <div className="mt-12">

            <div className="rounded-2xl border border-lime-500/20 p-8 bg-black/30">

              <p className="text-lime-400 uppercase tracking-[3px]">
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
                className={`mt-8 px-8 py-4 rounded-xl font-bold transition ${
                  name
                    ? "bg-lime-400 text-black hover:scale-105"
                    : "bg-zinc-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue →
              </button>

            </div>

          </div>

        )}

        {/* STEP 2 */}

        {step === 2 && (

          <div className="mt-12">

            <div className="rounded-2xl border border-lime-500/20 p-8 bg-black/30">

              <p className="text-lime-400 uppercase tracking-[3px]">
                STEP 02
              </p>

              <h3 className="text-3xl font-bold mt-3">
                Your X Username
              </h3>

              <input
                type="text"
                value={x}
                onChange={(e) => setX(e.target.value)}
                placeholder="@DestonomaHood"
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
                  className={`px-8 py-4 rounded-xl font-bold transition ${
                    x
                      ? "bg-lime-400 text-black hover:scale-105"
                      : "bg-zinc-700 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue →
                </button>

              </div>

            </div>

          </div>

        )}
                {/* STEP 3 */}

        {step === 3 && (

          <div className="mt-12">

            <div className="rounded-2xl border border-lime-500/20 p-8 bg-black/30">

              <p className="text-lime-400 uppercase tracking-[3px]">
                STEP 03
              </p>

              <h3 className="text-3xl font-bold mt-3">
                Telegram Username
              </h3>

              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="@destonomahood"
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
                  className={`px-8 py-4 rounded-xl font-bold transition ${
                    telegram
                      ? "bg-lime-400 text-black hover:scale-105"
                      : "bg-zinc-700 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue →
                </button>

              </div>

            </div>

          </div>

        )}

        {/* STEP 4 */}

        {step === 4 && (

          <div className="mt-12">

            <div className="rounded-2xl border border-lime-500/20 p-8 bg-black/30">

              <p className="text-lime-400 uppercase tracking-[3px]">
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

                {!generated && (
  <button
    disabled={!wallet}
    onClick={() => {
      setPassData({
        name,
        x,
        telegram,
        wallet,
      });

      setGenerated(true);
    }}
    className={`px-8 py-4 rounded-xl font-bold transition ${
      wallet
        ? "bg-lime-400 text-black hover:scale-105"
        : "bg-zinc-700 text-gray-500 cursor-not-allowed"
    }`}
  >
    🚀 Generate Genesis Pass
  </button>
)}

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}