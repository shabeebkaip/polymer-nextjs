'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const brandsData = [
    {
        id: 1,
        name: 'Nouryon',
        imageUrl: '/clentlogo1.png',
        category: 'Specialty Chemicals',
    },
    {
        id: 2,
        name: 'Ingredion',
        imageUrl: '/clentlogo.png',
        category: 'Food Ingredients',
    },
    {
        id: 3,
        name: 'Braskem',
        imageUrl: '/clentlogo1.png',
        category: 'Petrochemicals',
    },
    {
        id: 4,
        name: 'ADM',
        imageUrl: '/clentlogo.png',
        category: 'Agricultural Processing',
    },
    {
        id: 5,
        name: 'Mitsubishi Chemical',
        imageUrl: '/clentlogo1.png',
        category: 'Chemical Manufacturing',
    },
    {
        id: 6,
        name: 'P&G',
        imageUrl: '/clentlogo.png',
        category: 'Consumer Goods',
    },
    {
        id: 7,
        name: 'Nouryon',
        imageUrl: '/clentlogo.png',
        category: 'Specialty Chemicals',
    },
    {
        id: 8,
        name: 'Ingredion',
        imageUrl: '/clentlogo.png',
        category: 'Food Ingredients',
    },
    {
        id: 9,
        name: 'Braskem',
        imageUrl: '/clentlogo.png',
        category: 'Petrochemicals',
    },
    {
        id: 10,
        name: 'ADM',
        imageUrl: '/clentlogo.png',
        category: 'Agricultural Processing',
    },
    {
        id: 14,
        name: 'Mitsubishi Chemical',
        imageUrl: '/clentlogo.png',
        category: 'Chemical Manufacturing',
    },
    {
        id: 15,
        name: 'P&G',
        imageUrl: '/clentlogo.png',
        category: 'Consumer Goods',
    },
];

const Brands = () => {
    return (
        <div className="relative py-20 ">
        
            <div className="text-[40px]  pb-6 flex justify-center container  mx-auto px-6 ">
                <h6 className="xl:w-[50%] w-full font-medium text-left  lg:text-center">Trusted by the World's Top Customers & Suppliers</h6>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={2}
                spaceBetween={20}
                style={{ paddingBottom: "60px" }}

                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 5, spaceBetween: 20 },
                    768: { slidesPerView: 8, spaceBetween: 30 },
                    1024: { slidesPerView: 10, spaceBetween: 40 },
                }}
                className="mySwiper"
            >
                {brandsData.map((brand, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                       <div className="w-[200px]">
                        <img
                            src={brand.imageUrl}
                            alt={brand.name}
                            className="w-full "
                        />
                       </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands;
