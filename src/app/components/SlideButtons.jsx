import { useSwiper } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SlideButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between mt-8">
      {/* Previous Button */}
      <button
        className="bg-purcolour text-black hover:bg-oracolour p-3 rounded-full transition-all duration-300"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft className="text-white" />
      </button>

      {/* Next Button */}
      <button
        className="bg-purcolour text-black hover:bg-oracolour p-3 rounded-full transition-all duration-300"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight className="text-white" />
      </button>
    </div>
  );
};

export default function SlideButtons() {
    return <SlideButton />;
  }

