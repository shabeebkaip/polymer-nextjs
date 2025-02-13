"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import Image from "next/image";

const Testimonial = () => {
  const [heroBg, setHeroBg] = useState("/svgimage.svg");
  const testimonials = [
    {
      id: 1,
      name: "Lubrizol",
      position: "Senior Chemist",
      image: "/01-adhesives.webp",
      text: "Polymers Hub has streamlined our supplier discovery process, making it easier to find innovative and sustainable solutions.",
      logo: "/clients/lubrizol_logo.webp",
    },
    {
      id: 2,
      name: "Johnson & Johnson",
      position: "Procurement Manager",
      image: "/02-agriculture.webp",
      text: "The platform has been invaluable in connecting us with high-quality suppliers that align with our sustainability goals.",
      logo: "/clients/jj.webp",
    },
    {
      id: 3,
      name: "Givaudan",
      position: "Innovation Lead",
      image: "/03-automotive.webp",
      text: "Polymers Hub has provided us with deep insights into emerging ingredient suppliers, helping us stay ahead in the industry.",
      logo: "/clients/03-Givaudan-logo.webp",
    },
    {
      id: 4,
      name: "Evonik",
      position: "R&D Specialist",
      image: "/04-building.webp",
      text: "A game-changer in supplier discovery. The platform makes it easy to evaluate and connect with sustainable material providers.",
      logo: "/clients/evonik.webp",
    },
    {
      id: 5,
      name: "Unilever",
      position: "Team Member",
      image: "/07-food.webp",
      text: "Polymers Hub is especially helping us with newer, smaller but up-and-coming suppliers that are useful to have on our radar, especially in the field of sustainability.",
      logo: "/clients/05-Unilever-logo.webp",
    },
    {
      id: 6,
      name: "AdvanSix",
      position: "Supply Chain Director",
      image: "/test.jpeg",
      text: "We've seen remarkable improvements in our supplier network thanks to Polymers Hub. Their sustainability focus is truly valuable.",
      logo: "/clients/Homepage_TrustedBy_Advansix.webp",
    },
    {
      id: 7,
      name: "PPG Industries",
      position: "Materials Engineer",
      image: "/test.jpeg",
      text: "Polymers Hub has transformed how we source specialty chemicals and sustainable polymers. Highly recommended!",
      logo: "/clients/07-PPG-logo.webp",
    },
    {
      id: 8,
      name: "Bunge",
      position: "Product Development Manager",
      image: "/test.jpeg",
      text: "An excellent platform that connects us with innovative suppliers in the polymer industry, enhancing our R&D efforts.",
      logo: "/clients/TrustedBy_Bunge.webp",
    },
    {
      id: 9,
      name: "SABIC",
      position: "Procurement Specialist",
      image: "/test.jpeg",
      text: "Polymers Hub provides a comprehensive marketplace for sourcing high-quality materials and sustainable polymer solutions.",
      logo: "/clients/Homepage_SabicLogo.webp",
    },
    {
      id: 10,
      name: "Nouryon",
      position: "Sustainability Director",
      image: "/test.jpeg",
      text: "Polymers Hub has revolutionized our approach to supplier discovery, particularly in our sustainability initiatives.",
      logo: "/clients/10-Nouryon-logo.webp",
    },
    {
      id: 11,
      name: "Ingredion",
      position: "Innovation Manager",
      image: "/test.jpeg",
      text: "A must-have platform for any company looking for reliable, high-quality polymer suppliers. The experience has been seamless.",
      logo: "/clients/ingredion.webp",
    },
    {
      id: 12,
      name: "Braskem",
      position: "Head of Procurement",
      image: "/test.jpeg",
      text: "With Polymers Hub, we have expanded our supplier network and improved our material sourcing strategies significantly.",
      logo: "/clients/12-Braskem-logo.webp",
    },
    {
      id: 13,
      name: "ADM",
      position: "Strategic Sourcing Manager",
      image: "/test.jpeg",
      text: "Polymers Hub is a critical tool for identifying top-tier polymer suppliers and ensuring we meet our production needs efficiently.",
      logo: "/clients/adm.webp",
    },
    {
      id: 14,
      name: "Mitsubishi Chemical",
      position: "Innovation Director",
      image: "/test.jpeg",
      text: "The ease of finding sustainable material suppliers on Polymers Hub has helped us drive our green initiatives forward.",
      logo: "/clients/14-MitsubishiChem-logo.webp",
    },
    {
      id: 15,
      name: "Procter & Gamble",
      position: "Materials Scientist",
      image: "/test.jpeg",
      text: "Polymers Hub provides unparalleled access to innovative polymer suppliers, making material sourcing more efficient than ever.",
      logo: "/clients/15_PG_Logo.webp",
    },
  ];

  return (
    <div
      className=" bg-gray-50"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div className="container px-6 py-16 mx-auto">
        <div className="pb-16 text-left lg:text-center">
          <h2 className="pb-4 text-[40px] font-medium text-gray-900">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 ">
            Discover how leading companies are transforming their businesses
            with our solutions
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active bg-blue-600",
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col h-full gap-10 lg:gap-20 md:flex-row ">
                <div className="flex justify-start bg-white shadow-lg ">
                  <Image
                    width={400}
                    height={400}
                    src={testimonial.image}
                    alt=""
                    className="object-contain h-full p-6 rounded-lg w-80"
                  />
                </div>

                <div className="flex-1 ">
                  <Quote className="w-4 h-4 mb-4 text-black rounded-full" />

                  <p className="text-[24px] leading-relaxed text-gray-700 ">
                    {testimonial.text}
                  </p>

                  <div className="flex flex-col gap-3 pt-10 ">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>

                    {testimonial.logo && (
                      <div className="w-[150px] ">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.name} logo`}
                          className="w-full "
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
