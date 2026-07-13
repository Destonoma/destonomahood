"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Tasks from "@/components/Tasks";
import ClaimForm from "@/components/ClaimForm";
import EarlyPass from "@/components/EarlyPass";
import Footer from "@/components/Footer";

export default function Home() {
  const [passData, setPassData] = useState({
    name: "",
    x: "",
    telegram: "",
    wallet: "",
  });
const [generated, setGenerated] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Countdown />
      <Tasks />

      {!generated && (
  <ClaimForm
    setPassData={(data) => {
      setPassData(data);
      setGenerated(true);
    }}
  />
)}

{generated && <EarlyPass data={passData} />}

      <Footer />
    </main>
  );
}