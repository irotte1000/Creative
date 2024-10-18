"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Im1 from "../../public/images/im1.jpg";
import Im2 from "../../public/images/im2.jpg";
import Im3 from "../../public/images/im3.jpg";
import Im4 from "../../public/images/im4.jpg";
import Im5 from "../../public/images/im5.jpg";
import Im6 from "../../public/images/im6.jpg";

const portfolios = [
  {
    name: "Portfolio title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore.",
    image: Im1,
  },
  {
    name: "Portfolio title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    image: Im2,
  },
  {
    name: "Portfolio title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    image: Im3,
  },
  {
    name: "Portfolio title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    image: Im4,
  },
  {
    name: "Portfolio title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    image: Im5,
  },
  {
    name: "Portfolio title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    image: Im6,
  },
];

const PortfolioSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={2}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        700: {
          slidesPerView: 3,
        },
      }}
      className="porfolioSlider items-center"
    >
      {portfolios.map((portfolio, index) => {
        return (
          <>
            <SwiperSlide className="mt-8 z-10" key={index}>
              <div className="flex gap-x-16 relative group overflow-hidden ">
                <Image src={portfolio.image} height={550} width={650} />

                <div
                  className="flex flex-col gap-y-5 absolute items-center w-full h-full top-0  text-white
         -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 py-10 px-6"
                >
                  <div className="text-2xl font-medium flex gap-x-2">
                    {portfolio.name}
                  </div>
                  <div className="text-[20px] text-center">
                    {portfolio.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default PortfolioSlider;
