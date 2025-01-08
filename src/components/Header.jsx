import {useState }from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
          <header className="sticky bg-gray-800 top-0 z-10 bg-opacity-90 backdrop-filter backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4">
                <div className='flex items-center justify-between'>
                  <Logo />
                    <nav className='hidden md:block'>
                        <ul className="flex space-x-9 mr-10 text-white">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                            <li><Link to="/skills" className="hover:text-blue-400 transition-colors">Skills</Link></li>
                            <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
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
                            <li><Link to="/#" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link to="#about" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                            <li><Link to="#skills" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
                            <li><Link to="#projects" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                            <li><Link to="#contact" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
          </header>  
        </>
    )
}
