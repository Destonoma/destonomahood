import Image from "next/image";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-lime-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center">
        <Image
         src="/images/logo.png"
         alt="DTM Logo"
         width={170}
         height={55}
         priority
  />
</div>

        {/* Menu */}
        <nav className="hidden lg:flex gap-10 text-gray-300">

          <a href="#" className="hover:text-lime-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-lime-400 transition">
            About
          </a>

          <a href="#" className="hover:text-lime-400 transition">
            Roadmap
          </a>

          <a href="#" className="hover:text-lime-400 transition">
            Quest
          </a>

          <a href="#" className="hover:text-lime-400 transition">
            FAQ
          </a>

        </nav>

        {/* Button */}
        <button className="bg-lime-400 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
          Join Now
        </button>

      </div>
    </header>
  );
}