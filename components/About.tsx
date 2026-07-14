"use client";

import {
  Gamepad2,
  Users,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Gaming Ecosystem",
    desc: "Discover games and projects building on Robinhood Chain.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Connecting players, builders, and creators in one place.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    desc: "Supporting the next generation of Web3 gaming experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Vision",
    desc: "Building a trusted gaming hub for the Robinhood ecosystem.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-lime-400">
            ABOUT DESTONOMA
          </p>

          <h2 className="text-6xl font-black mt-5">
            Building the Future of
            <span className="block text-lime-400">
              Robinhood Chain Gaming
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-8">
            Destonoma Hood is a community-driven initiative focused on
            supporting the Robinhood Chain gaming ecosystem by connecting
            players, developers, and innovative projects through one unified
            platform.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div>

  <h3 className="text-4xl font-black leading-tight">
    More Than a Token.
    <br />
    <span className="text-lime-400">
      Building an Ecosystem.
    </span>
  </h3>

  <p className="text-gray-400 leading-8 mt-8">
    Our vision goes beyond launching a token. Destonoma Hood aims
    to become the gateway for Robinhood Chain gaming by helping
    communities discover projects, connect with developers, and
    stay updated with the latest ecosystem developments.
  </p>

  <div className="flex gap-5 mt-10">

    <a
  href="#roadmap"
  className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition inline-flex items-center justify-center"
>
  Explore Vision
</a>

    <a
  href="https://t.me/destonomahood"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-lime-400 px-8 py-4 rounded-xl hover:bg-lime-400 hover:text-black transition inline-flex items-center justify-center"
>
  Join Community
</a>

  </div>

</div>

<div className="grid sm:grid-cols-2 gap-6">

  {features.map((feature) => {

    const Icon = feature.icon;

    return (

      <div
        key={feature.title}
        className="group rounded-3xl border border-lime-500/20 bg-zinc-900/80 backdrop-blur-xl p-8 hover:border-lime-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(163,230,53,.20)]"
      >

        <div className="w-14 h-14 rounded-2xl bg-lime-400/10 border border-lime-500/20 flex items-center justify-center">

          <Icon className="w-7 h-7 text-lime-400 group-hover:rotate-12 transition" />

        </div>

        <h4 className="text-2xl font-bold mt-8">
          {feature.title}
        </h4>

        <p className="text-gray-400 mt-5 leading-7">
          {feature.desc}
        </p>

      </div>

    );

  })}

</div>
        </div>

      </div>

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10">

        <div className="w-[900px] h-[900px] rounded-full bg-lime-500/10 blur-[180px]" />

      </div>

    </section>
  );
}