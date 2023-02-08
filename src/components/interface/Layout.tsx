import { ReactNode } from 'react';
import WhatsApp from '../layout/WhatsApp';
import FooterApp from './Footer';
import HeadApp from './Head';
import HeaderApp from './Header';

interface Props {
  children: ReactNode;
}

const LayoutApp = ({ children }: Props) => {
  return (
    <div className="bg-black">
      <HeadApp />
      <HeaderApp />

      <main>{children}</main>

      <WhatsApp />
      <FooterApp />
    </div>
  );
};

export default LayoutApp;
