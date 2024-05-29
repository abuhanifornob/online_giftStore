// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import fatherBanner from "../../assets/images/Banner/Father_s_day_main.jpg";
import jewelleryBanner from "../../assets/images/Banner/Jewellery_-Main.jpg";
import naughtyBanner from "../../assets/images/Banner/Naughty_Banner.jpg";
import puzzleBanner from "../../assets/images/Banner/puzzle-main-2_1.jpg";

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={fatherBanner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={puzzleBanner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={jewelleryBanner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={naughtyBanner} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
