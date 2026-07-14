"use client";

import { Dispatch, SetStateAction, useState } from "react";

type TasksProps = {
  xp: number;
  setXp: Dispatch<SetStateAction<number>>;
};

export default function Tasks({ xp, setXp }: TasksProps) {
  const [followDone, setFollowDone] = useState(false);
  const [followCountdown, setFollowCountdown] = useState(0);
  const [likeDone, setLikeDone] = useState(false);
  const [likeCountdown, setLikeCountdown] = useState(0);
  const [repostDone, setRepostDone] = useState(false);
  const [repostCountdown, setRepostCountdown] = useState(0);
  const [telegramDone, setTelegramDone] = useState(false);
  const [telegramCountdown, setTelegramCountdown] = useState(0);

  return (
    <section
      id="quest"
      className="..."
    >
      <div className="mb-10">
        <p className="text-lime-400 uppercase tracking-[4px]">
          Complete Tasks
        </p>

        <h2 className="text-5xl font-black mt-3">
          Secure Your Early Pass
        </h2>

        <p className="text-gray-400 mt-4">
          Complete all tasks below to become an Early Supporter.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Follow */}
        <div className="rounded-3xl border border-lime-500/20 bg-zinc-900 p-8">

          <span className="text-lime-400 text-sm uppercase">
            Task 01
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Follow DTM on X
          </h3>

          <p className="text-gray-400 mt-4">
            Follow our official X account to receive all announcements.
          </p>

          <a
            href="https://x.com/DestonomaHood"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (followDone || followCountdown > 0) return;

              setFollowCountdown(30);

              const timer = setInterval(() => {
                setFollowCountdown((prev) => {
                  if (prev <= 1) {
                    clearInterval(timer);
                    setXp((xp) => xp + 700);
                    setFollowDone(true);
                    return 0;
                  }

                  return prev - 1;
                });
              }, 1000);
            }}
            className="inline-block mt-8 bg-lime-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            {followDone
              ? "✅ Completed (+700 XP)"
              : followCountdown > 0
              ? `Opening X... ${followCountdown}s`
              : "Follow (+700 XP)"}
          </a>

        </div>

        {/* Like */}
                <div className="rounded-3xl border border-lime-500/20 bg-zinc-900 p-8">

          <span className="text-lime-400 text-sm uppercase">
            Task 02
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Like Launch Post
          </h3>

          <p className="text-gray-400 mt-4">
            Like our official launch post on X.
          </p>

          <a
            href="LINK_POST_X"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
  if (likeDone || likeCountdown > 0) return;

  setLikeCountdown(30);

  const timer = setInterval(() => {
    setLikeCountdown((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        setXp((xp) => xp + 500);
        setLikeDone(true);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
}}
            className="inline-block mt-8 bg-lime-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            {likeDone
  ? "✅ Completed (+500 XP)"
  : likeCountdown > 0
  ? `Opening X... ${likeCountdown}s`
  : "Like (+500 XP)"}
          </a>

        </div>

        {/* Repost */}
        <div className="rounded-3xl border border-lime-500/20 bg-zinc-900 p-8">

          <span className="text-lime-400 text-sm uppercase">
            Task 03
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Repost Launch Post
          </h3>

          <p className="text-gray-400 mt-4">
            Repost our launch post to help spread the word.
          </p>

          <a
            href="LINK_POST_X"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
  if (repostDone || repostCountdown > 0) return;

  setRepostCountdown(30);

  const timer = setInterval(() => {
    setRepostCountdown((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        setXp((xp) => xp + 1000);
        setRepostDone(true);
        return 0;
      }

      return prev - 1;
    });
  }, 1000);
}}
            className="inline-block mt-8 bg-lime-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            {repostDone
  ? "✅ Completed (+1000 XP)"
  : repostCountdown > 0
  ? `Opening X... ${repostCountdown}s`
  : "Repost (+1000 XP)"}
          </a>

        </div>

        {/* Telegram */}
        <div className="rounded-3xl border border-lime-500/20 bg-zinc-900 p-8">

          <span className="text-lime-400 text-sm uppercase">
            Task 04
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Join Telegram
          </h3>

          <p className="text-gray-400 mt-4">
            Join the Destonoma Hood Telegram community.
          </p>

          <a
            href="https://t.me/destonomaHood"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
  if (telegramDone || telegramCountdown > 0) return;

  setTelegramCountdown(30);

  const timer = setInterval(() => {
    setTelegramCountdown((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        setXp((xp) => xp + 800);
        setTelegramDone(true);
        return 0;
      }

      return prev - 1;
    });
  }, 1000);
}}
            className="inline-block mt-8 bg-lime-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            {telegramDone
  ? "✅ Completed (+800 XP)"
  : telegramCountdown > 0
  ? `Opening Telegram... ${telegramCountdown}s`
  : "Join (+800 XP)"}
          </a>

        </div>

      </div>

    </section>
  );
}