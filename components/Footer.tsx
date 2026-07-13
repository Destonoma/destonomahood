export default function Footer() {
  return (
    <footer className="border-t border-lime-500/20 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">

        <div>
          <h2 className="text-2xl font-black text-lime-400">
            DESTONOMA HOOD
          </h2>

          <p className="text-gray-500 mt-2">
            Build The Future.
          </p>
        </div>

        <div className="flex gap-8 mt-6 md:mt-0 text-gray-400">
          <a href="#">X</a>
          <a href="#">Telegram</a>
          <a href="#">Discord</a>
        </div>

      </div>
    </footer>
  );
}