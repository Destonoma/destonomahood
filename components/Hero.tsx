"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">


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

              <button className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
                Claim Your Spot
              </button>

              <button className="border border-lime-400 px-8 py-4 rounded-xl hover:bg-lime-400 hover:text-black transition">
                Learn More
              </button>

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