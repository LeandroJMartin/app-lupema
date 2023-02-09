import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Props {
  items: any;
  responsive?: any;
  gap?: number;
  largura: number;
  infinite: boolean;
  navigation: boolean;
}

const SlideApp = ({
  items,
  responsive,
  largura,
  infinite = false,
  navigation = false,
}: Props) => {
  const Prev = () => {
    return (
      <p className="p-[5px] absolute left-[-16px] top-[calc(50%-30px)] rounded-[100%] z-10 cursor-pointer bg-blue">
        <IoIosArrowBack size={24} className="stroke-white text-white" />
      </p>
    );
  };
  const Next = () => {
    return (
      <p className="p-[5px] absolute right-[-16px] top-[calc(50%-30px)] rounded-[100%] z-10 cursor-pointer bg-blue">
        <IoIosArrowForward size={24} className="text-white" />
      </p>
    );
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      renderPrevButton={Prev}
      renderNextButton={Next}
      controlsStrategy="responsive"
      paddingLeft={largura}
      paddingRight={largura}
      infinite={infinite}
      disableButtonsControls={navigation}
    />
  );
};

export default SlideApp;
