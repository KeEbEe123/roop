"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const nav = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/doctors", label: "Doctors" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];
  
  return (
    <nav className="bg-[#E0F0F5] rounded-2xl px-5 py-1.5">
      <div className="flex items-center justify-between h-[54px]">
        {/* Logo with symbol and text - clickable to home */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/logos/logoSymbol.png" 
            alt="Roop Clinic Logo" 
            width={43} 
            height={54}
            className="object-contain"
          />
          <Image 
            src="/logos/logoText.png" 
            alt="Roop Clinic" 
            width={93} 
            height={25}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center justify-between gap-6">
          {nav.map((n) => (
            <Link 
              key={n.label} 
              href={n.href} 
              className={`text-[16px] font-semibold transition-colors ${
                pathname === n.href 
                  ? "text-[#0074B7] font-bold" 
                  : "hover:text-[#0074B7]"
              }`}
            >
              {n.label}
            </Link>
          ))}
          {/* Translate icon */}
          <Image 
            src="/icons/translate.svg" 
            alt="Translate" 
            width={19} 
            height={19}
            className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </nav>
  );
}
