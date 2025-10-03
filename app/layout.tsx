import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
// Project fonts to match Figma
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Roop Clinic",
  description: "Roop Clinic website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfair.variable} antialiased bg-[#F5F7F8] text-[#0C1119] flex flex-col min-h-screen`}
      >
        {/* Persistent navbar with gap below */}
        <div className="sticky top-3 z-50 flex w-full justify-center mb-8">
          <div className="w-full max-w-[1067px] px-3">
            <Navbar />
          </div>
        </div>
        <main className="w-full flex justify-center flex-1">
          <div className="w-full max-w-[1067px] px-3">{children}</div>
        </main>
        {/* Persistent footer - full width */}
        <footer className="w-full bg-[#E0F0F5] px-5 md:px-20 py-11 mt-auto">
          <div className="mx-auto max-w-[1067px] grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[26px] mb-5">Quick Navigation</h4>
              <ul className="space-y-1.5 text-[18px]">
                <li>Home</li>
                <li>Services</li>
                <li>Doctors</li>
                <li>Contact Us</li>
                <li>Appointment Booking</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[26px] mb-5">Legal & Policy</h4>
              <ul className="space-y-1.5 text-[18px]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Disclaimer</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[26px] mb-5">Contact Us</h4>
              <ul className="space-y-2 text-[18px]">
                <li>
                  3 Phulwani Plaza, Opposite Iskcon Temple 286, Mahashweta
                  Nagar, Ujjain MP
                </li>
                <li>7024411704 | 0734-3506016</li>
                <li>roopclinique3@gmail.com</li>
                <li>@roop_cosmetic_surgery_clinic</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
