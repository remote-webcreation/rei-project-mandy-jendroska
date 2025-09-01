
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo-Bereich */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="flex items-center">
              <Image 
                src="/Logo.png" 
                alt="Jacobi Jayne Logo" 
                width={50} 
                height={50} 
                className="rounded-2xl"
              />
              <span className="ml-2 text-xl font-bold">Jacobi Jayne</span>
            </div>
          </Link>
        </div>

        {/* Navigationslinks */}
        <div className="hidden md:flex space-x-6">
          <Link href="/news" className="hover:text-gray-300">
            News
          </Link>
          <Link href="/trade" className="hover:text-gray-300">
            Trade
          </Link>
          <Link href="/international" className="hover:text-gray-300">
            International
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobiles Menü (optional, erfordert weitere Logik) */}
        <div className="md:hidden">
          {/* Hier könnte ein Hamburger-Icon sein */}
          <button aria-label="Mobile Menu">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;