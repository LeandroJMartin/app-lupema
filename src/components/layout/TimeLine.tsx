import { Page_Conteusobre } from '../../generated';
import SlideApp from './Slide';

interface Prop {
  prop: Page_Conteusobre;
}

const TimeLine = ({ prop }: Prop) => {
  const itemTimeLine = prop?.item?.map((item, index) => {
    return (
      <div key={index} className="flex flex-col justify-center">
        <div
          className={`block h-[70px] text-center ${
            index % 2 === 0 ? 'order-3 pt-8' : 'order-1'
          }`}
        >
          <span className="bg-green text-white text-xl font-medium inline-block rounded-2xl py-2 px-6">
            {item?.data}
          </span>
          <span className={index % 2 === 0 ? 'arrow-t' : 'arrow-b'}></span>
        </div>
        <div className="bg-black h-[14px] w-full order-2s">
          <p className="h-[28px] w-[28px] bg-white rounded-full relative -translate-y-2 mx-auto">
            <span className="h-4 w-4 bg-green rounded-full absolute top-2 left-2"></span>
          </p>
        </div>
        <div
          className={`h-[70px] text-center ${
            index % 2 === 0 ? 'order-1' : 'order-3'
          }`}
        >
          <span className={`block text-xl font-medium text-green py-4 px-3`}>
            {item?.nomeDoEmpreendimento}
          </span>
        </div>
      </div>
    );
  });

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  return (
    <div className="relative timeline my-8">
      <SlideApp
        items={itemTimeLine}
        responsive={responsive}
        navigation={false}
        largura={{ desktop: 0, mobile: 0 }}
        dots={true}
        infinite={false}
      />
    </div>
  );
};

export default TimeLine;
