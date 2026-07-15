"use client";

export default function Marquee() {
  const items = [
    "◉ Destonoma Hood",
    "◉ Join the Hood",
    "◉ Built on Robinhood Chain",
    "◉ Genesis Pass Live",
    "◉ Earn XP",
    "◉ Invite Friends",
    "◉ Community First",
    "◉ Become an Early Supporter",
  ];

  return (
    <div
  className="w-full overflow-hidden py-3"
  style={{
    background: "#0a0a0a",
    borderTop: "1px solid rgba(163,230,53,.15)",
    borderBottom: "1px solid rgba(163,230,53,.15)",
  }}
>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-sm font-semibold tracking-wide text-lime-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}