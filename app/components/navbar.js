import Image from 'next/image';
import logo from '/public/logo.svg';

export default function Navbar() {
    return (
        <header className="sticky top-0 left-0 w-full bg-white border-b border-primary shadow-md z-50">
        <div className="container max-w-6xl mx-auto py-1 flex justify-between items-center">
          <Image src={logo} alt="Tulsi Tech Labs" width={300} height={30} />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="/" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="/" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}