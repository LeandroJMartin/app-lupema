import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import Logo from '../../../public/logo.svg';
import { useMenuMobileContext } from '../../context/menuMobileContext';
import { Page_Informacoesdecontato } from '../../generated';
import UseChangeBg from '../../hooks/useChangeBgMenu';
import MenuApp from '../layout/Menu';
import SearchApp from '../layout/Search';

interface Props {
  data: Page_Informacoesdecontato;
}

const HeaderApp = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  UseChangeBg(ref);

  const { state: status, toogleState } = useMenuMobileContext();

  const router = useRouter();
  const [clickSearch, setClickSearch] = useState(false);

  const [device, setDevice] = useState(false);
  function CheckResize() {
    if (window.innerWidth < 1070) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  }

  useEffect(() => {
    CheckResize();
    window.addEventListener('resize', CheckResize);
    return () => window.removeEventListener('resize', CheckResize);
  }, []);

  useEffect(() => {
    setClickSearch(false);
  }, [router]);

  return (
    <header
      className="fixed z-40 top-0 left-0 right-0 flex items-center border border-white/20 text-white backdrop-blur-xs ease-out duration-300"
      ref={ref}
    >
      <div className="flex items-center justify-between sm:justify-start w-full sm:w-[40%] xl:w-[60%] h-[100px] sm:h-[72px] bg-menu">
        <button
          aria-label="Menu site lupema"
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

      <div className="hidden sm:flex items-center justify-end sm:w-[60%] xl:w-[40%] h-[100px] sm:h-[72px]">
        {device ? (
          <a
            href={`tel:${data.coTelefone}`}
            className="border-l border-l-white/20 border-r border-r-white/20 px-6 h-[100px] sm:h-[72px] flex items-center"
          >
            <span className="border border-white rounded-full py-2 px-2">
              <MdWifiCalling3 />
            </span>
          </a>
        ) : (
          <div className="border-l border-l-white/20 border-r border-r-white/20 px-6 h-[100px] sm:h-[72px] flex items-center min-w-max">
            {data.coTelefone}
          </div>
        )}
        <div
          className={`w-0 pl-4 transition-all ${
            clickSearch
              ? 'w-[360px] visible opacity-100'
              : 'w-0 invisible opacity-0'
          }`}
        >
          <SearchApp />
        </div>
        <button
          aria-label="Botão de pesquisa"
          className="px-6 flex items-center h-[100px] sm:h-[72px]"
          onClick={() => setClickSearch((prev) => !prev)}
        >
          {clickSearch ? <IoMdClose size={18} /> : <IoIosSearch size={18} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 w-full h-full overflow-auto bg-bgi bg-repeat ${
          status ? 'block' : 'hidden'
        }`}
      >
        <MenuApp data={data} />
      </div>
    </header>
  );
};

export default HeaderApp;
