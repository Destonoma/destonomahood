"use client";

import { useState } from "react";

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

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      
    <Navbar />

<Hero />

<About />

<Countdown />

<Tasks />

<ClaimForm
  setPassData={setPassData}
  setPassImage={setPassImage}
/>

<Roadmap />

<FAQ />

      {passImage && (
        <section className="max-w-6xl mx-auto px-8 pb-24">

          <h2 className="text-5xl font-black text-center mb-10">
            🎉 Your Early Supporter Pass
          </h2>

          <img
            src={passImage}
            alt="Pass"
            className="mx-auto rounded-3xl border border-lime-500 max-w-md"
          />

          <div className="flex justify-center gap-4 mt-10">

            <a
              href={passImage}
              download="DestonomaHood-EarlySupporterPass.png"
              className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold"
            >
              Download PNG
            </a>

          </div>

        </section>
      )}

      <Footer />

    </main>
  );
}