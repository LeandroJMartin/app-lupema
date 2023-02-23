import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import MenuApp from '../layout/Menu';
import { useRef } from 'react';
import UseChangeBg from '../../hooks/useChangeBg';
import { useMenuMobileContext } from '../../context/menuMobileContext';
import Link from 'next/link';

const HeaderApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  UseChangeBg(ref);

  const { state: status, toogleState } = useMenuMobileContext();

  return (
    <header
      className="fixed z-40 top-0 left-0 right-0 flex items-center border border-white/20 text-white backdrop-blur-xs bg-black/5 ease-out duration-300"
      ref={ref}
    >
      <div className="flex items-center justify-between sm:justify-start w-full sm:w-[60%] h-[100px] sm:h-[72px] bg-menu">
        <button
          className="h-full py-4 px-6 border-r border-white/20 order-2 sm:order-1"
          onClick={(e) => toogleState()}
        >
          {<HiMenuAlt2 size={26} />}
        </button>
        <Link href="/" className="px-6 order-1 sm:order-2 cursor-pointer">
          <Image
            src={Logo}
            alt="Logo Lupema Engenharia"
            width={200}
            height={37}
          />
        </Link>
      </div>
      <div className="hidden sm:flex items-center justify-end w-[40%] h-[100px] sm:h-[72px]">
        <a
          href="tel:1740062300"
          className="border-l border-l-white/20 px-6 h-[100px] sm:h-[72px] flex items-center"
        >
          17 4006 2300
        </a>
        <a
          href="mail:lupema@lupemaengenharia.com.br"
          className="border-x border-x-white/20 px-6 h-[100px] sm:h-[72px] flex items-center"
        >
          lupema@lupemaengenharia.com.br
        </a>
        <button className="px-6 flex items-center h-[100px] sm:h-[72px]">
          <IoIosSearch size={18} />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 w-full h-full overflow-auto bg-bgi bg-repeat ${
          status ? 'block' : 'hidden'
        }`}
      >
        <MenuApp />
      </div>
    </header>
  );
};

export default HeaderApp;
