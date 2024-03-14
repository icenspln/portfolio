import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="hidden md:block my-4 text-grayText">
            <ul className="flex gap-5 w-full justify-center text-base">
                <li>
                    <Link href="#" className="text-white">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
