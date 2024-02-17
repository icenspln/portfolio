const Navbar = () => {
    return (
        <nav className="hidden md:block my-4 text-grayText">
            <ul className="flex gap-5 w-full justify-center text-base">
                <li>
                    <a href="#">portfolio</a>
                </li>
                <li>
                    <a href="#">tech</a>
                </li>
                <li>
                    <a href="#">testimonials</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
