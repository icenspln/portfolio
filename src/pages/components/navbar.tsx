import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="hidden md:block my-4 text-grayText">
            <ul className="flex gap-5 w-full justify-start px-9 text-base">
                <li>
                    <Link href="/" className="text-white">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
