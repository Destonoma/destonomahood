"use client";

type EarlyPassProps = {
  data: {
    name: string;
    x: string;
    telegram: string;
    wallet: string;
  };
};

export default function EarlyPass({ data }: EarlyPassProps) {
  const shareOnX = () => {
    const text = encodeURIComponent(
`🚀 Just claimed my Destonoma Hood Early Supporter Pass!

Join the Early Supporter Campaign.

🐦 @DestonomaHood
📢 https://t.me/destonomaHood`
    );

    const url = encodeURIComponent(
      "https://destonomahood.vercel.app"
    );

    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-8 pb-24">
      <div className="rounded-3xl border border-lime-500/20 bg-gradient-to-br from-zinc-900 to-black p-10">

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

          <button className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Download Pass
          </button>

          <button
            onClick={shareOnX}
            className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            🐦 Share on X
          </button>

        </div>

      </div>
    </section>
  );
}