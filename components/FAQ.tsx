"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Destonoma Hood?",
    answer:
      "Destonoma Hood is a community-driven project focused on building a sustainable ecosystem on Robinhood Chain. Our vision is to connect communities, gaming projects, and future builders through a platform designed for discovery, engagement, and long-term growth.",
  },
  {
    question: "What is Genesis Pass?",
    answer:
      "Genesis Pass recognizes the earliest supporters of Destonoma. It represents participation during the project's foundation stage and will remain part of our community history as the ecosystem continues to grow.",
  },
  {
    question: "Will there be a $DTM token?",
    answer:
      "Yes. $DTM is planned as the native token of the Destonoma ecosystem on Robinhood Chain. Our priority is to build a strong community, deliver meaningful development, and expand token utility as the ecosystem evolves.",
  },
  {
    question: "Is Genesis Pass an NFT?",
    answer:
      "Not at this stage. Genesis Pass is currently a digital supporter credential created to recognize early community members. Any future utilities or upgrades will be announced through our official channels.",
  },
  {
    question: "How can I join Destonoma?",
    answer:
      "Getting started is simple. Complete the Genesis Pass application, follow our official X account, and stay connected with the community for future updates, announcements, and ecosystem developments.",
  },
  {
    question: "Why Robinhood Chain?",
    answer:
      "We believe Robinhood Chain offers strong long-term opportunities for builders and communities. By building early, Destonoma aims to help shape a growing gaming ecosystem while supporting projects and users joining the network.",
  },
  {
    question: "What is the long-term vision?",
    answer:
      "Our long-term goal is to establish Destonoma as a trusted gaming ecosystem on Robinhood Chain. We aim to support game discovery, community growth, ecosystem collaboration, and provide a platform where players and developers can connect.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-lime-400">
            SUPPORT
          </p>

          <h2 className="text-6xl font-black mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-6">
            Everything you need to know about Destonoma Hood.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-3xl border border-lime-500/20 bg-zinc-900/80 backdrop-blur-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-8 text-left"
              >

                <span className="text-xl font-bold">
                  {faq.question}
                </span>

                {open === index ? (
                  <Minus className="text-lime-400" />
                ) : (
                  <Plus className="text-lime-400" />
                )}

              </button>

              {open === index && (

                <div className="px-8 pb-8 text-gray-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

      <div className="absolute left-1/2 top-40 -translate-x-1/2 -z-10">
        <div className="w-[700px] h-[700px] rounded-full bg-lime-500/10 blur-[180px]" />
      </div>

    </section>
  );
}