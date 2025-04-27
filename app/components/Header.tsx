import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <Image
            src="/Pandora.png"
            alt="Pandora's Box Logo"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Pandora's Box
          </h1>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link 
            href="/how-it-works" 
            className="text-gray-300 hover:text-purple-400 transition-colors relative group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="/models" 
            className="text-gray-300 hover:text-purple-400 transition-colors relative group"
          >
            All Models
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="/learn" 
            className="text-gray-300 hover:text-purple-400 transition-colors relative group"
          >
            Learn
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-purple-400 transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="/profile" 
            className="text-gray-300 hover:text-purple-400 transition-colors relative group"
          >
            Profile
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
      </div>
    </header>
  );
} 