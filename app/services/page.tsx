"use client";

import ServiceCard, { ServiceCardIcon } from "../../components/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Services() {
  // All services organized by category
  const aestheticServices: { title: string; icon: ServiceCardIcon }[] = [
    { title: "Skin", icon: { src: "/icons/skin.svg", alt: "Skin" } },
    { title: "Hair Loss", icon: { src: "/icons/hairloss.svg", alt: "Hair Loss" } },
    { title: "Face", icon: { src: "/icons/face.svg", alt: "Face" } },
    { title: "Weight loss", icon: { src: "/icons/weightloss.svg", alt: "Weight loss" } },
    { title: "Male Breast", icon: { src: "/icons/gynecology.svg", alt: "Male Breast" } },
    { title: "Abdomen", icon: { src: "/icons/tummytuck.svg", alt: "Abdomen" } },
    { title: "Infertility Counselling", icon: { src: "/icons/infertilitycounselling.svg", alt: "Infertility" } },
  ];

  const nonSurgicalServices: { title: string; icon: ServiceCardIcon }[] = [
    { title: "Gynecology", icon: { src: "/icons/gynecology.svg", alt: "Gynecology" } },
    { title: "Cosmetology", icon: { src: "/icons/cosmetology.svg", alt: "Cosmetology" } },
    { title: "Microneedling", icon: { src: "/icons/microneedling.svg", alt: "Microneedling" } },
    { title: "PRP", icon: { src: "/icons/prp.svg", alt: "PRP" } },
    { title: "Peels", icon: { src: "/icons/peels.svg", alt: "Peels" } },
    { title: "Botox for Wrinkles", icon: { src: "/icons/face.svg", alt: "Botox" } },
    { title: "Threads for Facelift", icon: { src: "/icons/face.svg", alt: "Threads" } },
    { title: "Face Rejuvenation", icon: { src: "/icons/face.svg", alt: "Face Rejuvenation" } },
  ];

  const surgicalServices: { title: string; icon: ServiceCardIcon }[] = [
    { title: "Hair Transplant", icon: { src: "/icons/hairtransplant.svg", alt: "Hair Transplant" } },
    { title: "Liposuction", icon: { src: "/icons/liposuction.svg", alt: "Liposuction" } },
    { title: "Fat Grafting", icon: { src: "/icons/fatgrafting.svg", alt: "Fat Grafting" } },
    { title: "Tummy Tuck", icon: { src: "/icons/tummytuck.svg", alt: "Tummy Tuck" } },
    { title: "Gynecomastia", icon: { src: "/icons/gynecology.svg", alt: "Gynecomastia" } },
    { title: "Rhinoplasty", icon: { src: "/icons/rhinoplasty.svg", alt: "Rhinoplasty" } },
    { title: "Otoplasty", icon: { src: "/icons/otoplasty.svg", alt: "Otoplasty" } },
  ];

  const laserServices: { title: string; icon: ServiceCardIcon }[] = [
    { title: "MNRF Celina", icon: { src: "/icons/mnrfcelina.svg", alt: "MNRF Celina" } },
    { title: "Tattoo removal", icon: { src: "/icons/tattooremoval.svg", alt: "Tattoo removal" } },
    { title: "Laser hair reduction", icon: { src: "/icons/laserhairreduction.svg", alt: "Laser hair" } },
    { title: "HIFU", icon: { src: "/icons/hifu.svg", alt: "HIFU" } },
    { title: "Hydrafacial", icon: { src: "/icons/face.svg", alt: "Hydrafacial" } },
  ];

  const ScrollableRow = ({ services }: { services: { title: string; icon: ServiceCardIcon }[] }) => {
    return (
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-[36px] scrollbar-hide">
          {services.map((service, index) => (
            <CarouselItem key={service.title} className="pl-[36px] basis-auto">
              <div className="w-[232px]">
                <ServiceCard title={service.title} icon={service.icon} variant="compact" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };

  return (
    <div className="flex flex-col gap-20 pb-16">
      {/* Banner with gradient overlay */}
      <section className="rounded-2xl overflow-hidden relative">
        <div className="relative h-[200px] md:h-[250px] w-full">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/banners/servicesBanner.png')" }}
          />
          {/* Gradient overlay - matching hero gradient */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: "linear-gradient(to right, rgba(44, 62, 90, 0.95), rgba(0, 116, 183, 0.85), rgba(212, 243, 249, 0.7))" 
            }}
          />
          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-10 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-[38px] md:text-[48px] font-bold text-white">Our Services</h1>
              <p className="text-white text-[18px] md:text-[22px]">
                Specialized Expertise in Aesthetic and Reconstructive Procedures.
              </p>
            </div>
            <button className="bg-[#F6DE84] text-[#0C1119] rounded-xl h-11 px-6 text-[16px] font-bold hidden md:block">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Aesthetic Treatments */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">Aesthetic Treatments</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">View all →</button>
        </div>
        <ScrollableRow services={aestheticServices} />
      </section>

      {/* Non Surgical */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">Non Surgical</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">View all →</button>
        </div>
        <ScrollableRow services={nonSurgicalServices} />
      </section>

      {/* Surgical */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">Surgical</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">View all →</button>
        </div>
        <ScrollableRow services={surgicalServices} />
      </section>

      {/* Laser Treatments */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">Laser Treatments</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">View all →</button>
        </div>
        <ScrollableRow services={laserServices} />
      </section>
    </div>
  );
}
