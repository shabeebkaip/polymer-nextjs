'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Unilever',
      position: 'Team Member',
      image: '/test.jpeg',
      text: 'Knowde is especially helping us with newer, smaller but up-and-coming suppliers that are useful to have on our radar especially in the field of Sustainability.',
      logo: '/clentlogo.png'
    },
    {
      id: 2,
      name: 'Tech Solutions Inc',
      position: 'Product Manager',
      image: '/test.jpeg',
      text: 'The platform has transformed how we discover and connect with innovative suppliers. Their focus on sustainability aligns perfectly with our corporate goals.',
      logo: '/clentlogo.png'
    },
    {
      id: 3,
      name: 'Green Industries',
      position: 'Sustainability Director',
      image: '/test.jpeg',
      text: 'We ve seen remarkable improvements in our supplier discovery process. The platform s sustainability focus has been instrumental in our green initiatives.',
      logo: '/clentlogo.png'
    },
    {
      id: 3,
      name: 'Green Industries',
      position: 'Sustainability Director',
      image: '/test.jpeg',
      text: 'We ve seen remarkable improvements in our supplier discovery process. The platform s sustainability focus has been instrumental in our green initiatives.',
      logo: '/clentlogo.png'
    }

  ];

  return (
    <div className=" bg-gray-50">
      <div className="container px-6 py-16 mx-auto">
        <div className="pb-16 text-left lg:text-center">
          <h2 className="pb-4 text-[40px] font-medium text-gray-900">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 ">
            Discover how leading companies are transforming their businesses with our solutions
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
            bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600'
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
                  <img
                    src={testimonial.image}
                    alt=""
                    className="object-cover w-full h-[400px] p-6 rounded-lg"
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
                      <p className="text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>

                    {testimonial.logo && (
                      <div className='w-[150px] '>

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