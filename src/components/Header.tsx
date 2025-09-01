import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black py-2 px-6 shadow-lg">
      <nav className="container mx-auto flex flex-row items-center h-16 justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Jacobi Jayne Logo"
                width={24}
                height={36}
                className="rounded-b-2xl"
              />
            </div>
          </Link>
        </div>

        {/* Navigationslinks */}
        <div className="hidden md:flex space-x-6 self-end mb-0">
          <Link
            href="/news"
            className="text-yellow-100 hover:text-white transition-colors duration-300"
          >
            News
          </Link>
          <Link href="/trade" className="text-yellow-100 hover:text-white  transition-colors duration-300">
            Trade
          </Link>
          <Link
            href="/international"
            className="text-yellow-100 hover:text-white  transition-colors duration-300"
          >
            International
          </Link>
          <Link href="/contact" className="text-yellow-100 hover:text-white  transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobiles Menü  !!!!!!! */}
        <div className="md:hidden self-end mb-0">
          {/* Hamburger-Icon */}
          <button aria-label="Mobile Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
