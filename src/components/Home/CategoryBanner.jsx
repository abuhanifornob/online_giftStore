import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import birthdayIcon from "../../assets/images/Birthday gifts Icon.png";
import HatkeIcon from "../../assets/images/Hatke gifts icon.png";
import ForeverIcon from "../../assets/images/Forever rose icon.png";
import NaughtIcon from "../../assets/images/Naughty Gifts icon.png";
import AnniversaryIcon from "../../assets/images/Anniversary Gifts icon.png";
import personalisedIcon from "../../assets/images/personalised gifts icon.png";

const CategoryBanner = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
  });
  return (
    <div ref={sliderRef} className="keen-slider" style={{ maxWidth: 1200 }}>
      <div className="keen-slider__slide number-slide1">
        <img className="h-32" src={HatkeIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide2"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        <img className="h-32" src={NaughtIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide3"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        <img className="h-32" src={birthdayIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        <img className="h-32" src={ForeverIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        <img className="h-32" src={AnniversaryIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        <img className="h-32" src={personalisedIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        <img className="h-32" src={ForeverIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 200, minWidth: 200 }}
      >
        <img className="h-32" src={ForeverIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 300, minWidth: 300 }}
      >
        <img className="h-32" src={ForeverIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 300, minWidth: 300 }}
      >
        <img className="h-32" src={ForeverIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 300, minWidth: 300 }}
      >
        <img className="h-32" src={ForeverIcon} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide5"
        style={{ maxWidth: 150, minWidth: 150 }}
      >
        <img className="h-32" src={personalisedIcon} alt="" />
      </div>
    </div>
  );
};

export default CategoryBanner;
