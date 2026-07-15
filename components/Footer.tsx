import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-lime-500/20 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">

        <Image
          src="/images/logo.png"
          alt="DTM Logo"
          width={180}
          height={60}
          className="mb-5"
        />

        <p className="text-gray-400">
          Built on{" "}
          <span className="text-lime-400 font-semibold">
            Robinhood Chain
          </span>
        </p>

        <div className="flex gap-8 mt-8 text-gray-400">

          <a
            href="https://x.com/DestonomaHood"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition"
          >
            X
          </a>

          <a
            href="https://t.me/destonomaHood"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition"
          >
            Telegram
          </a>

        </div>

        <p className="text-gray-600 text-sm mt-8">
          © 2026 Destonoma Hood. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}