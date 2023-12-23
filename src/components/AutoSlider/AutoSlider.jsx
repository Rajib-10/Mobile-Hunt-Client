
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className='h-[80vh] text-center'>
        <img className='h-full   object-cover' src="https://i.ibb.co/LzzmtMm/Xiaomi-Poco-X3-NFC-Cobalt-Blue.jpg" alt="Slide 1" />
      </div>
      <div className='h-[80vh] text-center'>
        <img className='h-full mx-auto  object-cover' src="https://i.ibb.co/XsKk2LF/i-Phone-12-Mini.jpg" alt="Slide 2" />
      </div>
      <div className='h-[80vh] text-center'>
        <img className='h-full mx-auto  object-cover' src="https://i.ibb.co/bKZy1gS/Samsung-Galaxy-Z-Fold-3.webp" alt="Slide 3" />
      </div>
      <div className='h-[80vh] text-center'>
        <img className='h-full mx-auto  object-cover' src="https://i.ibb.co/gjvr66q/Google-Pixel-6-Pro.jpg" alt="Slide 4" />
      </div>
      <div className='h-[80vh] text-center'>
        <img className='h-full mx-auto  object-cover' src="https://i.ibb.co/h2R2jfW/One-Plus-9-Pro.png" alt="Slide 5" />
      </div>
      <div className='h-[80vh] text-center'>
        <img className='h-full mx-auto   object-cover' src="https://i.ibb.co/qYcP8yQ/Xiaomi-Mi-11.jpg" alt="Slide 6" />
      </div>
      
    </Slider>
  );
};

export default AutoSlider;
