import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#f5f7f8] flex flex-col items-center gap-20 pb-16">
      {/* Contact Banner */}
      <section className="relative w-full max-w-[1046px] mx-auto px-3">
        <div className="relative h-[250px] w-full rounded-[18px] overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-inherit"
            style={{ backgroundImage: "url('/banners/contactBanner.png')" }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 rounded-inherit"
            style={{
              background:
                "linear-gradient(to right, rgba(44, 62, 90, 0.95), rgba(0, 116, 183, 0.85), rgba(212, 243, 249, 0.7))",
            }}
          />
          {/* Content */}
          <div className="absolute inset-0 p-8 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="font-['Playfair_Display'] font-bold text-[48px] text-white leading-tight">
                Contact Us
              </h1>
              <p className="text-white text-[22px]">
                Schedule an appointment with our specialists today.
              </p>
            </div>
            <button className="bg-[#F6DE84] text-[#0C1119] rounded-[18px] h-[45px] px-8 text-[18px] font-bold">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Telephone Support & Email Assistance */}
      <section className="w-full max-w-[1046px] mx-auto px-3 flex gap-12 items-start">
        {/* Telephone Support */}
        <div className="flex-1 flex flex-col gap-10 items-center">
          <h2 className="font-['Playfair_Display'] text-[34px] leading-normal text-[#0c1119] text-center">
            Telephone Support
          </h2>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-full w-[52px] h-[52px] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#0c1119]" />
              </div>
              <p className="font-semibold text-[22px] text-[#0c1119]">
                7024411704 | 0734-3506016
              </p>
            </div>
            <p className="font-light text-[16px] text-[#0c1119] text-center">
              Available on call: Mon – Sat, 9:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[208px] w-[1px] bg-[#0c1119] opacity-20"></div>

        {/* Email Assistance */}
        <div className="flex-1 flex flex-col gap-10 items-center">
          <h2 className="font-['Playfair_Display'] text-[34px] leading-normal text-[#0c1119] text-center">
            Email Assistance
          </h2>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-full w-[52px] h-[52px] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#0c1119]" />
              </div>
              <p className="font-semibold text-[22px] text-[#0c1119]">
                roopclinique3@gmail.com
              </p>
            </div>
            <p className="font-light text-[16px] text-[#0c1119] text-center">
              Write to us anytime
            </p>
          </div>
        </div>
      </section>

      {/* Stay in Touch Section */}
      <section className="w-full max-w-[1046px] mx-auto px-3 flex gap-12 items-center">
        {/* Image with decorative boxes */}
        <div className="relative flex-shrink-0">
          <div className="absolute bg-[#f6de84] w-[133px] h-[172px] rounded-[22px] top-0 left-0 z-0"></div>
          <div className="absolute bg-[#f6de84] w-[119px] h-[134px] rounded-[22px] bottom-0 right-0 z-0"></div>
          <div className="relative w-[367px] h-[280px] rounded-[18px] overflow-hidden ml-[26px] mt-[20px] z-10">
            <Image
              src="/gallery/contactimages.png"
              alt="Medical consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-7 flex-1">
          <h2 className="font-['Playfair_Display'] text-[48px] leading-tight text-[#0c1119]">
            Stay in touch, hassle free
          </h2>
          <p className="text-[18px] text-[#0c1119] leading-normal">
            Reach us easily via call, email, or Instagram — we're here to help
            you anytime.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 items-start">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119] leading-normal flex-1">
                3 Phulwani Plaza, Opposite Iskcon Temple 286, Mahashweta Nagar,
                Ujjain MP
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119]">
                7024411704 | 0734-3506016
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119]">
                roopclinique3@gmail.com
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119]">
                @roop_cosmetic_surgery_clinic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
