import Image from "next/image";
export default function Navbar() {

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const yOffset = -100; // sesuaikan kalau navbar lebih tinggi/rendah
  const y =
    element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
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
<nav className="hidden md:flex items-center gap-10 text-gray-300">

  <button
  onClick={() => scrollToSection("home")}
  className="hover:text-lime-400 transition"
>
  Home
</button>

  <button
  onClick={() => scrollToSection("about")}
  className="hover:text-lime-400 transition"
>
  About
</button>

  <button
  onClick={() => scrollToSection("roadmap")}
  className="hover:text-lime-400 transition"
>
  Roadmap
</button>

  <button
  onClick={() => scrollToSection("quest")}
  className="hover:text-lime-400 transition"
>
  Quest
</button>

  <button
  onClick={() => scrollToSection("claim")}
  className="hover:text-lime-400 transition"
>
  Claim Pass
</button>

  <button
  onClick={() => scrollToSection("faq")}
  className="hover:text-lime-400 transition"
>
  FAQ
</button>

</nav>

        {/* Button */}
        <button className="bg-lime-400 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
          Join Now
        </button>

      </div>
    </header>
  );
}