"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getClaimCount } from "@/lib/stats";

export default function Hero() {

  const [claimCount, setClaimCount] = useState(0);

  useEffect(() => {
    getClaimCount().then(setClaimCount);
  }, []);

  return (
     <section
  id="home"
  className="..."
>


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#050505]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block border border-lime-400 text-lime-400 rounded-full px-4 py-2 text-sm uppercase tracking-[4px]">
              Built on Robinhood Chain
            </span>

            <h1 className="text-6xl lg:text-7xl font-black mt-8 leading-tight">
              JOIN THE
              <br />
              <span className="text-lime-400">
                HOOD.
              </span>
              <br />
              BUILD THE
              <br />
              FUTURE.
            </h1>

            <p className="text-gray-300 mt-8 text-xl max-w-xl">
              Become one of the earliest supporters of Destonoma Hood.
              Complete simple tasks and secure your Early Supporter Pass.
            </p>

            <div className="flex gap-5 mt-10">

              <a
  href="#claim"
  className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition inline-flex items-center justify-center"
>
  Claim Your Spot
</a>

              <a
  href="#about"
  className="border border-lime-400 px-8 py-4 rounded-xl hover:bg-lime-400 hover:text-black transition inline-flex items-center justify-center"
>
  Learn More
</a>

            </div>
            <div className="grid grid-cols-3 gap-6 mt-14">

  <div className="rounded-2xl border border-lime-500/20 bg-zinc-900/60 p-6">
    <h3 className="text-5xl font-black text-lime-400">
      {claimCount}
    </h3>

    <p className="mt-3 text-gray-400">
      Genesis Pass
    </p>

    <p className="text-gray-500 text-sm">
      Claimed
    </p>
  </div>

  <div className="rounded-2xl border border-lime-500/20 bg-zinc-900/60 p-6">
    <h3 className="text-3xl font-black text-lime-400">
      Soon
    </h3>

    <p className="mt-3 text-gray-400">
      Gaming Hub
    </p>
  </div>

  <div className="rounded-2xl border border-lime-500/20 bg-zinc-900/60 p-6">
    <h3 className="text-2xl font-black text-lime-400">
      Robinhood
    </h3>

    <p className="mt-3 text-gray-400">
      Ecosystem
    </p>
  </div>

</div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <Image
  src="/images/coin.jpg"
  alt="DTM Coin"
  width={520}
  height={520}
  className="drop-shadow-[0_0_60px_rgba(163,230,53,.5)]"
  priority
/>

          </motion.div>

        </div>

      </div>

    </section>
  );
}