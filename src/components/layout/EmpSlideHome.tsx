import { useEffect, useState } from 'react';
import BlockEmp from './BlockEmp';
import SlideApp from './Slide';

const EmpSlideHome = () => {
  const items = [
    <BlockEmp />,
    <BlockEmp />,
    <BlockEmp />,
    <BlockEmp />,
    <BlockEmp />,
    <BlockEmp />,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const [largura, setLargura] = useState(0);
  useEffect(() => {
    screen.width < 640 && setLargura(30);
  }, []);

  return (
    <section className="bg-bgi py-8">
      <div className="sm:container">
        <h1 className="title">Empreendimentos</h1>
        <div className="hero my-6">
          <SlideApp
            items={items}
            responsive={responsive}
            largura={largura}
            infinite={true}
          />
        </div>
      </div>
    </section>
  );
};

export default EmpSlideHome;
