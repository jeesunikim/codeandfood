import Link from "next/link";

export default function Header() {
  return (
    <nav className="grid grid-cols-3 max-w-screen-xl mx-auto py-10 px-2">
      <ul className="flex place-items-center">
        <li className="flex-auto text-center">
          <a href="#">about</a>
        </li>
        <li className="flex-auto text-center">
          <a href="#">code</a>
        </li>
      </ul>

      <div className="flex flex-col	place-items-center justify-items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            Code & Food
          </Link>
        </h2>
        <span className="text-center text-sm italic">(work & life)</span>
      </div>

      <ul className="flex place-items-center">
        <li className="flex-auto text-center">
          <a href="#">journaling</a>
        </li>
      </ul>
    </nav>
  );
}
