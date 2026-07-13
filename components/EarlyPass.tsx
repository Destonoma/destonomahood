"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";

type EarlyPassProps = {
  data: {
    name: string;
    x: string;
    telegram: string;
    wallet: string;
  };
};

export default function EarlyPass({ data }: EarlyPassProps) {
  const passRef = useRef<HTMLDivElement>(null);

const downloadPass = async () => {
  if (!passRef.current) return;

  const canvas = await html2canvas(passRef.current, {
    scale: 3,
    backgroundColor: null,
    useCORS: true,
  });

  const link = document.createElement("a");
  link.download = "DestonomaHood-EarlyPass.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};
  const shareText = encodeURIComponent(`🚀 Early Supporter Pass claimed.

Building the future of Robinhood Chain.

🐦 @DestonomaHood
📢 https://t.me/destonomaHood`);

  const shareUrl = encodeURIComponent(
    "https://destonomahood.vercel.app"
  );

  return (
    <section className="max-w-7xl mx-auto px-8 pb-24">
      <div
  ref={passRef}
  className="rounded-3xl border border-lime-500/20 bg-gradient-to-br from-zinc-900 to-black p-10"
>

        <div className="flex items-center justify-between">
          <div>
            <span className="uppercase tracking-[4px] text-lime-400">
              Early Supporter Pass
            </span>

            <h2 className="text-6xl font-black mt-4 text-lime-400">
              #000001
            </h2>
          </div>

          <div className="border border-lime-400 px-5 py-2 rounded-full text-lime-400 font-bold">
            VERIFIED
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          <div className="space-y-6 text-lg">

            <div>
              <span className="text-gray-500">Name</span>
              <p>{data.name || "--------"}</p>
            </div>

            <div>
              <span className="text-gray-500">X Username</span>
              <p>{data.x || "@--------"}</p>
            </div>

            <div>
              <span className="text-gray-500">Telegram</span>
              <p>{data.telegram || "@--------"}</p>
            </div>

            <div>
              <span className="text-gray-500">Wallet</span>
              <p className="break-all">
                {data.wallet || "0x--------"}
              </p>
            </div>

            <div>
              <span className="text-gray-500">Status</span>
              <p className="text-lime-400 font-bold">
                VERIFIED
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center">
            <div className="w-56 h-56 rounded-3xl border border-lime-500 flex items-center justify-center text-3xl font-black text-lime-400">
              DTM
            </div>
          </div>

        </div>

        <div className="mt-10 flex gap-4 flex-wrap">

          <button
  onClick={downloadPass}
  className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
>
  Download Pass
</button>

          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            🐦 Share on X
          </a>

        </div>

      </div>
    </section>
  );
}