import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-[#1f2937]">
      <div className="max-w-[1050px] mx-auto px-7 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Link href="/" className="font-semibold">Dmitry Savenkov</Link>
        <div className="flex gap-5 sm:gap-6 text-sm text-gray-300 flex-wrap">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <a href="mailto:dmytro.savenkov@gmail.com">Contact</a>
        </div>
      </div>
    </nav>
  );
}
