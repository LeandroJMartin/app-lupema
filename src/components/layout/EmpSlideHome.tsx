import { useEffect, useState } from 'react';
import { RootQueryToEmpreendimentoConnection } from '../../generated';
import BlockEmp from './BlockEmp';
import SlideApp from './Slide';

interface Props {
  data: RootQueryToEmpreendimentoConnection;
}

const EmpSlideHome = ({ data }: Props) => {
  const items = data.nodes.map((item) => {
    return <BlockEmp content={item.empreendimento} />;
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2, itemsFit: 'contain' },
    1024: { items: 3, itemsFit: 'contain' },
  };

  const [largura, setLargura] = useState(0);
  useEffect(() => {
    screen.width < 640 && setLargura(30);
  }, []);

  return (
    <section className="bg-bgi py-[40px] md:py-[80px] emphome">
      <div className="sm:container">
        <h1 className="title">Empreendimentos</h1>
        <div className="hero my-6">
          <SlideApp
            items={items}
            responsive={responsive}
            largura={{ desktop: 0, mobile: 0 }}
            infinite={true}
            navigation={true}
          />
        </div>
      </div>
    </section>
  );
};

export default EmpSlideHome;
