import { ReactNode } from 'react';
import WhatsApp from '../layout/WhatsApp';
import FooterApp from './Footer';
import HeadApp from './Head';
import HeaderApp from './Header';

interface Props {
  children: ReactNode;
  ApiData: any;
}

const LayoutApp = ({ children, ApiData }: Props) => {
  return (
    <div>
      <HeadApp />
      <HeaderApp data={ApiData.data?.social} />

      <main>{children}</main>

      <WhatsApp data={ApiData.data?.social} />
      <FooterApp data={ApiData.data?.social} />
    </div>
  );
};

export default LayoutApp;
