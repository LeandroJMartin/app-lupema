import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Props {
  items: any;
  responsive?: any;
  gap?: number;
  largura?: {
    desktop: number;
    mobile: number;
  };
  infinite: boolean;
  navigation: boolean;
  dots: boolean;
  autoPlay?: boolean;
}

const SlideApp = ({
  items,
  responsive,
  largura,
  infinite = false,
  navigation = false,
  dots = false,
  autoPlay = false,
}: Props) => {
  const Prev = () => {
    return (
      <p className="p-[5px] absolute hidden sm:block  sm:left-[-16px] top-[calc(50%-30px)] rounded-[100%] z-10 cursor-pointer bg-green">
        <IoIosArrowBack size={24} className="stroke-white text-white" />
      </p>
    );
  };
  const Next = () => {
    return (
      <p className="p-[5px] absolute  hidden sm:block sm:right-[-16px] top-[calc(50%-30px)] rounded-[100%] z-10 cursor-pointer bg-green">
        <IoIosArrowForward size={24} className="text-white" />
      </p>
    );
  };

  const [larg, setLarg] = useState(0);

  useEffect(() => {
    if (largura) {
      setLarg(window?.innerWidth > 1024 ? largura.desktop : largura.mobile);
    }
  }, [largura]);

  return (
    <AliceCarousel
      autoPlay={autoPlay}
      mouseTracking
      items={items}
      responsive={responsive}
      renderPrevButton={Prev}
      renderNextButton={Next}
      controlsStrategy="responsive"
      paddingLeft={larg}
      paddingRight={larg}
      infinite={infinite}
      disableButtonsControls={navigation}
      disableDotsControls={dots}
      autoPlayInterval={2600}
    />
  );
};

export default SlideApp;
