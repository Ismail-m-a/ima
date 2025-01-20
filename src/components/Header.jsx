import {useState }from 'react';
// import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
          <header className="sticky bg-gray-800 top-0 bg-opacity-90 backdrop-filter backdrop-blur-sm shadow transition-all duration-75 ease-in z-[999]">
            <div className="container mx-auto px-6 py-4">
                <div className='flex items-center justify-between'>
                  <Logo />
                    <nav className='hidden md:block'>
                        <ul className="flex space-x-9 mr-10 text-white font-bold">
                            <li><a href="/#" className="relative hover:text-blue-400 transition-all after:bg-white after:absolute after:h-0.5 after:w-0 after:-bottom-1.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ">Home</a></li>
                            <li><a href="/#about" className="relative hover:text-blue-400 transition-all after:bg-white after:absolute after:h-0.5 after:w-0 after:-bottom-1.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">About</a></li>
                            <li><a href="/#skills" className="relative hover:text-blue-400 transition-all after:bg-white after:absolute after:h-0.5 after:w-0 after:-bottom-1.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Skills</a></li>
                            <li><a href="/#projects" className="relative hover:text-blue-400 transition-all after:bg-white after:absolute after:h-0.5 after:w-0 after:-bottom-1.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Projects</a></li>
                            <li><a href="/#contact" className="relative hover:text-blue-400 transition-all after:bg-white after:absolute after:h-0.5 after:w-0 after:-bottom-1.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Contact</a></li>
                        </ul>
                    </nav>
                    <button className='md:hidden text-white focus:outline-none'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>

                    </button>
                </div>
                {isMenuOpen && (
                    <nav className='mt-4 md:hidden'>
                        <ul className="flex flex-col space-y-2 text-white">
                            <li><a href="/#" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                            <li><a href="#about" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
                            <li><a href="#skills" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                            <li><a href="#projects" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                            <li><a href="#contact" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>
                )}
            </div>
          </header>  
        </>
    )
}
