import Link from "next/link"
export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="text-orange-800 font-bold hover:underline font-orbitron"
          >
            Indie Gamer
          </Link>
        </li>
        <li>
          <Link
            href="/reviews"
            className="text-orange-800 hover:underline ml-auto"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-orange-800 hover:underline ml-auto"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
