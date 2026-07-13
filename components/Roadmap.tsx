"use client";

import {
  Rocket,
  Flag,
  Users,
  Gamepad2,
  Globe,
  CheckCircle2,
} from "lucide-react";

const roadmap = [
  {
    phase: "PHASE 1",
    title: "FOUNDATION",
    progress: 100,
    icon: Flag,
    items: [
      "Official Website",
      "Genesis Pass",
      "Community Building",
      "Robinhood Chain",
      "Brand Identity",
    ],
  },
  {
    phase: "PHASE 2",
    title: "LAUNCH",
    progress: 0,
    icon: Rocket,
    items: [
      "Launch $DTM",
      "Initial Liquidity",
      "Coin Tracking",
      "Community Campaign",
      "First Partnership",
    ],
  },
  {
    phase: "PHASE 3",
    title: "GROWTH",
    progress: 0,
    icon: Users,
    items: [
      "Global Community",
      "Ambassador Program",
      "Weekly Updates",
      "Marketing",
      "Expansion",
    ],
  },
  {
    phase: "PHASE 4",
    title: "GAMING HUB",
    progress: 0,
    icon: Gamepad2,
    items: [
      "Gaming Directory",
      "Project Discovery",
      "Gaming News",
      "Events",
      "Submit Game",
    ],
  },
  {
    phase: "PHASE 5",
    title: "ECOSYSTEM",
    progress: 0,
    icon: Globe,
    items: [
      "Platform Expansion",
      "Developer Tools",
      "Community Governance",
      "Integrations",
      "Long Term Growth",
    ],
  },
];

 export default function Roadmap() {
       return (
    <section
      id="roadmap"
      className="relative py-28 bg-[#050505] overflow-hidden"
>
      <div className="max-w-[1700px] mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-lime-400">
            DESTONOMA
          </p>

          <h2 className="text-6xl font-black mt-4">
            OUR ROADMAP
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Building the future of Robinhood Chain Gaming.
          </p>

        </div>

        <div className="overflow-x-auto pb-8">

          <div className="flex items-center gap-10 min-w-max px-10">
            {roadmap.map((item, index) => {
  const Icon = item.icon;

  return (
    <div key={item.phase} className="flex items-center gap-8">

      <div className="group w-[340px] rounded-3xl border border-lime-500/20 bg-zinc-900/80 backdrop-blur-xl p-8 hover:border-lime-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(163,230,53,.25)]">

        <div className="flex items-center justify-between">

          <span className="text-xs tracking-[3px] text-lime-400 font-bold">
            {item.phase}
          </span>

          <div className="w-14 h-14 rounded-2xl bg-lime-400/10 border border-lime-500/20 flex items-center justify-center group-hover:rotate-12 transition-all">

            <Icon className="w-7 h-7 text-lime-400" />

          </div>

        </div>

        <h3 className="text-3xl font-black mt-8">
          {item.title}
        </h3>

        <div className="mt-8 space-y-4">

          {item.items.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-3 text-gray-300"
            >

              <CheckCircle2
                className={`w-5 h-5 ${
                  item.progress === 100
                    ? "text-lime-400"
                    : "text-gray-600"
                }`}
              />

              <span>{feature}</span>

            </div>

          ))}

        </div>

        <div className="mt-10">

          <div className="flex justify-between mb-3">

            <span className="text-gray-400">
              Progress
            </span>

            <span className="text-lime-400 font-bold">
              {item.progress}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-black overflow-hidden">

            <div
              style={{
                width: `${item.progress}%`,
              }}
              className="h-full bg-lime-400 rounded-full transition-all duration-1000"
            />

          </div>

        </div>

      </div>

      {index !== roadmap.length - 1 && (

        <div className="text-6xl text-lime-400 animate-pulse select-none">

          →

        </div>

      )}

    </div>
  );
})} 

          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 right-0 -z-10">
        <div className="mx-auto h-80 w-[900px] rounded-full bg-lime-500/10 blur-[180px]" />
      </div>

    </section>
  );
}