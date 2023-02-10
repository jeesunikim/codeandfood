import Link from "next/link";

export default function Header() {
  return (
    <nav className="grid grid-cols-3 justify-items-center py-10">
      <ul className="grid grid-cols-3 place-items-center">
        <li className="col-span-2">
          <a href="#">Code</a>
        </li>
        <li>
          <a href="#">Creative Coding</a>
        </li>
      </ul>

      <div className="place-items-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            Code & Food
          </Link>
        </h2>
      </div>

      <ul className="grid grid-cols-3 place-items-center">
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">Travel & Food</a>
        </li>
        <li>
          <a href="#">Lifestyle</a>
        </li>
      </ul>
    </nav>
  );
}
