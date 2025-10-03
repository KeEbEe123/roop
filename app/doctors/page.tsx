"use client";

import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DoctorsPage() {
  // Dr. Raunak's expertise areas
  const raunakExpertise = [
    { title: "Rhinoplasty", icon: { src: "/icons/rhinoplasty.png" } },
    { title: "Skin Surgery", icon: { src: "/icons/skin.svg" } },
    { title: "Liposuction", icon: { src: "/icons/liposuction.svg" } },
    { title: "Hair Transplant", icon: { src: "/icons/hairtransplant.svg" } },
    { title: "Otoplasty", icon: { src: "/icons/otoplasty.svg" } },
    { title: "Tummy Tuck", icon: { src: "/icons/tummytuck.svg" } },
    { title: "Peels", icon: { src: "/icons/peels.svg" } },
  ];

  // Dr. Kavisha's expertise areas
  const kavishaExpertise = [
    { title: "Gynecology", icon: { src: "/icons/gynecology.svg" } },
    { title: "PRP", icon: { src: "/icons/prp.svg" } },
    {
      title: "Infertility Counselling",
      icon: { src: "/icons/infertilitycounselling.svg" },
    },
  ];

  return (
    <div className="bg-[#f5f7f8] flex flex-col items-center pb-0">
      <Tabs defaultValue="raunak" className="w-full">
        <div className="w-full max-w-[1046px] px-3 mx-auto pt-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="raunak" className="text-lg">
              Dr. Raunak Shinde
            </TabsTrigger>
            <TabsTrigger value="kavisha" className="text-lg">
              Dr. Kavisha Lambhate
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Dr. Raunak Shinde Tab */}
        <TabsContent value="raunak" className="mt-0">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-20 pb-16 w-full max-w-[1046px] px-3 mx-auto">
              {/* Hero Section */}
              <section className="bg-[#d5edfd] rounded-[18px] w-full p-[36px] flex items-center gap-[64px]">
                <div className="relative w-[286px] h-[376px] rounded-[22px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/gallery/raunak.png"
                    alt="Dr. Raunak Shinde"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[59px] text-[#0c1119] flex-1">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-['Playfair_Display'] font-bold text-[48px] leading-normal">
                      Dr. Raunak Shinde
                    </h1>
                    <p className="font-semibold text-[22px] leading-normal">
                      Board-Certified Plastic and Cosmetic Surgeon with
                      Expertise in Aesthetic Surgery.
                    </p>
                  </div>
                  <div className="text-[18px] leading-normal">
                    <p className="mb-3">
                      As the Director of Roop Plastic Surgery Clinique and
                      Infertility Counselling Centre in Ujjain, Madhya Pradesh,
                      Dr. Shinde has delivered exceptional plastic surgery
                      services for over 7 years.
                    </p>
                    <p>
                      Dr. Shinde has completed prestigious aesthetic fellowships
                      and reconstructive observerships at renowned centers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Expertise Section */}
              <section className="w-full flex flex-col gap-[51px] items-center">
                <div className="flex flex-col gap-2 items-center text-center text-[#0c1119] max-w-[642px]">
                  <h2 className="font-['Playfair_Display'] text-[34px] leading-normal">
                    Expertise in Aesthetic & Cosmetic Surgery
                  </h2>
                  <p className="text-[18px] leading-normal">
                    Dr. Raunak Shinde specializes in advanced procedures that
                    enhance beauty with natural results.
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-[32px] w-full">
                  {raunakExpertise.map((area) => (
                    <div key={area.title}>
                      <ServiceCard
                        title={area.title}
                        icon={area.icon}
                        variant="centered"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Timeline Section - Full Width */}
            <section
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="flex flex-col items-center justify-between h-[820px] w-[320px]">
                <div className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center">
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hat.svg"
                      alt="Education"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-center text-center text-[#0c1119]">
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    Advanced Training & Fellowships
                  </h3>
                  <div className="font-semibold text-[16px] leading-normal">
                    <p className="mb-0">Tamira Plastic Surgery, Chennai</p>
                    <p className="mb-0">Personiks, Hyderabad</p>
                    <p>Ganga Hospital, Coimbatore</p>
                  </div>
                </div>

                <div className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center">
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hands.svg"
                      alt="Care"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="h-[600px] w-[2px] bg-[#0c1119] opacity-20"></div>

              <div className="flex flex-col items-center justify-between h-[720px] w-[400px]">
                <div className="flex flex-col gap-4 items-center text-center text-[#0c1119]">
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    Qualifications
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>
                      IAAPS Recognised Fellowship in Aesthetic Surgery, Tamira
                      Plastic Surgery Centre, Chennai
                    </li>
                    <li>M.Ch. Plastic Surgery (PGIMER), Chandigarh</li>
                    <li>
                      M.S. (Master Of Surgery) General Surgery (IPGMER), Kolkata
                    </li>
                    <li>
                      M.B.B.S. Seth G.S. Medical College & King Edward VII
                      Memorial Hospital, Mumbai
                    </li>
                  </ul>
                </div>

                <div className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center">
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/suitcase.svg"
                      alt="Experience"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-center text-center text-[#0c1119]">
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    Personalized Care
                  </h3>
                  <p className="font-semibold text-[16px] leading-normal">
                    With over 13 years of surgical expertise, Dr. Shinde
                    combines advanced training with a compassionate approach,
                    ensuring tailored treatments and natural results for every
                    patient.
                  </p>
                </div>
              </div>
            </section>

            {/* Gallery Section - Full Width */}
            <section
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[100px] h-[130px] rounded-[18px] top-0 left-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[90px] h-[100px] rounded-[18px] bottom-0 right-0 z-0"></div>
                <div className="relative w-[380px] h-[285px] rounded-[18px] overflow-hidden ml-[20px] mt-[18px] z-10">
                  <Image
                    src="/gallery/raunak1.png"
                    alt="Dr. Raunak Shinde at conference"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[90px] h-[100px] rounded-[18px] top-0 right-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[90px] h-[100px] rounded-[18px] bottom-0 left-0 z-0"></div>
                <div className="relative w-[260px] h-[285px] rounded-[18px] overflow-hidden ml-[18px] mt-[16px] z-10">
                  <Image
                    src="/gallery/raunak2.png"
                    alt="Dr. Raunak Shinde presenting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        {/* Dr. Kavisha Lambhate Tab */}
        <TabsContent value="kavisha" className="mt-0">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-20 pb-16 w-full max-w-[1046px] px-3 mx-auto">
              {/* Hero Section */}
              <section className="bg-[#d5edfd] rounded-[18px] w-full p-[36px] flex items-center gap-[64px]">
                <div className="relative w-[286px] h-[376px] rounded-[22px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/gallery/kavisha.png"
                    alt="Dr. Kavisha Lambhate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[59px] text-[#0c1119] flex-1">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-['Playfair_Display'] font-bold text-[48px] leading-normal">
                      Dr. Kavisha Lambhate
                    </h1>
                    <p className="font-semibold text-[22px] leading-normal">
                      Gynecologist and Obstetrician Professional
                    </p>
                  </div>
                  <div className="text-[18px] leading-normal">
                    <p>
                      I aspire to be a competent and ethical Practitioner and
                      cultivate expertise in areas specific to the realm of
                      Infertility. I believe in the continuum of education and
                      learning while giving my dedicated input and sincere
                      contribution in the work place as an individual and as
                      part of the team.
                    </p>
                  </div>
                </div>
              </section>

              {/* Expertise Section */}
              <section className="w-full flex flex-col gap-[51px] items-center">
                <div className="flex flex-col gap-2 items-center text-center text-[#0c1119] max-w-[642px]">
                  <h2 className="font-['Playfair_Display'] text-[34px] leading-normal">
                    Expertise in Gynecology & Obstetrics
                  </h2>
                  <p className="text-[18px] leading-normal">
                    Focused on ethical care and infertility treatment with
                    compassion and expertise.
                  </p>
                </div>
                <div className="flex justify-center gap-[32px] w-full">
                  {kavishaExpertise.map((area) => (
                    <div key={area.title} className="w-[231px]">
                      <ServiceCard
                        title={area.title}
                        icon={area.icon}
                        variant="centered"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Timeline Section - Full Width */}
            <section
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="flex flex-col items-center justify-between h-[900px] w-[320px]">
                <div className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center">
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hat.svg"
                      alt="Education"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-center text-center text-[#0c1119]">
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    Experience
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>Registrar – CK Birla Hospital , CMRI, Kolkata</li>
                    <li>Senior Resident, PGIMER, Chandigarh</li>
                    <li>
                      Gynaecologist – National Health Mission, U.T., Chandigarh
                    </li>
                    <li>
                      Senior Resident – Govt. Medical College & Hospital,
                      Chandigarh
                    </li>
                  </ul>
                </div>

                <div className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center">
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hands.svg"
                      alt="Care"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="h-[700px] w-[2px] bg-[#0c1119] opacity-20"></div>

              <div className="flex flex-col items-center justify-between h-[900px] w-[400px]">
                <div className="flex flex-col gap-4 items-center text-center text-[#0c1119]">
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    Qualifications
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>
                      MS (Obstetrics & Gynaecology), Mahatma Gandhi Memorial
                      Medical College, Indore.
                    </li>
                    <li>
                      Thesis: Comparative study of induction of labour with
                      mechanical dilatation vs misoprostol (conducted at MGM
                      Medical College, Indore).
                    </li>
                    <li>
                      MBBS, Mahatma Gandhi Memorial Medical College, Indore.
                    </li>
                    <li>
                      Focus: postgraduate specialization in obstetrics &
                      gynaecology with research experience in labour induction
                      methods.
                    </li>
                  </ul>
                </div>

                <div className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center">
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/suitcase.svg"
                      alt="Experience"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-center text-center text-[#0c1119]">
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    Courses and Fellowships
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>
                      Fellowship in Infertility - Diploma in Clinical ART –
                      Amity University & Indian Fertility Society- At Wing's
                      Hospital, Ahmedabad
                    </li>
                    <li>
                      Laparoscopy Training, Marigold Women's Hospital, Ahmedabad
                    </li>
                    <li>
                      FOGSI Ultrasound Training Programme, Rajni Fetal Medicine
                      Center, Ahmedabad
                    </li>
                    <li>
                      Training Course in Infertility, Institute of Reproductive
                      Medicine, Kolkata
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Gallery Section - Full Width */}
            <section
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[70px] h-[115px] rounded-[18px] top-6 right-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[140px] h-[180px] rounded-[18px] bottom-0 left-0 z-0"></div>
                <div className="relative w-[225px] h-[300px] rounded-[18px] overflow-hidden ml-[18px] mt-0 z-10">
                  <Image
                    src="/gallery/kavisha1.png"
                    alt="Dr. Kavisha Lambhate with patients"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[140px] h-[60px] rounded-[18px] top-0 left-[13px] z-0"></div>
                <div className="absolute bg-[#f6de84] w-[70px] h-[115px] rounded-[18px] bottom-0 right-0 z-0"></div>
                <div className="relative w-[187px] h-[305px] rounded-[18px] overflow-hidden ml-0 mt-[14px] z-10">
                  <Image
                    src="/gallery/kavisha2.png"
                    alt="Dr. Kavisha Lambhate at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[140px] h-[115px] rounded-[18px] top-0 right-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[70px] h-[115px] rounded-[18px] bottom-0 left-0 z-0"></div>
                <div className="relative w-[231px] h-[308px] rounded-[18px] overflow-hidden ml-[18px] mt-[11px] z-10">
                  <Image
                    src="/gallery/kavisha3.png"
                    alt="Dr. Kavisha Lambhate with patient"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
