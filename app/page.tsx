"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Countdown from "@/components/Countdown";
import Tasks from "@/components/Tasks";
import ClaimForm from "@/components/ClaimForm";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const [passData, setPassData] = useState({
    name: "",
    x: "",
    telegram: "",
    wallet: "",
  });

  const [passImage, setPassImage] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const [xp, setXp] = useState(() => {
    if (typeof window === "undefined") return 0;

    const saved = localStorage.getItem("dtm-xp");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("dtm-xp", xp.toString());
  }, [xp]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar xp={xp} />

      <Hero />

      <About />

      <Countdown />

      <Tasks
  xp={xp}
  setXp={setXp}
/>

      <ClaimForm
  setPassData={setPassData}
  setPassImage={(img) => {
    setPassImage(img);
    setDownloaded(false);
  }}
/>

      {passImage && (
        <section
  id="generated-pass"
  className="max-w-6xl mx-auto pt-40 px-8 pb-24"
        >

          <h2 className="text-5xl font-black text-center mb-10">
            🎉 Your Early Supporter Pass
          </h2>

          <img
  id="pass-image"
  src={passImage}
  alt="Pass"
  className="mx-auto rounded-3xl border border-lime-500 max-w-md"
/>

          <div className="flex justify-center gap-4 mt-10">

  {!downloaded ? (
    <a
      href={passImage}
      download="DestonomaHood-EarlySupporterPass.png"
      onClick={() => {
  setTimeout(() => {
    setDownloaded(true);
  }, 1000);
}}
      className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
    >
      ⬇ Download PNG
    </a>
  ) : (
    <a
      href={`https://x.com/intent/post?text=${encodeURIComponent(
        `🚀 Just claimed my Destonoma Genesis Pass.

Destonoma is building the next gaming ecosystem on Robinhood Chain.

Join early and become part of the community.

👇
https://destonomahood.vercel.app/

#RobinhoodChain #Destonomahood`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black border border-lime-400 text-lime-400 px-8 py-4 rounded-xl font-bold hover:bg-lime-400 hover:text-black transition"
    >
      🐦 Post on X
    </a>
  )}

</div>

        </section>
      )}

      <Roadmap />

      <FAQ />

      <Footer />

    </main>
  );
}