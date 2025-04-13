"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center text-primary text-3xl font-bold">
          <span className="text-primary">Promptate</span>
        </Link>
        
        <nav className="flex space-x-6">
          <Link 
            href="/chat" 
            className={`text-base ${pathname === '/chat' ? 'text-primary font-medium' : 'text-gray-600'}`}
          >
            Chat
          </Link>
          <Link 
            href="https://code.promptate.xyz/" 
            target="_blank"
            className="text-base text-gray-600"
          >
            PromptCoder
          </Link>
        </nav>
        
        <div>
          <button className="bg-primary text-white px-4 py-1 rounded-full text-sm">
            ZH
          </button>
        </div>
      </div>
    </header>
  );
} 