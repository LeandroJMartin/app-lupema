import { useRouter } from 'next/router';
import { RefObject, useEffect } from 'react';

const UseChangeBg = (ref: RefObject<HTMLDivElement>) => {
  const router = useRouter();

  const routschangeBackground = [
    '/',
    '/assessoria',
    '/empreendimentos/',
  ];

  const regex = new RegExp('empreendimentos(s)?/*');
  const color = (routschangeBackground.includes(router.asPath) || regex.test(router.asPath)) ? 'transparent' : '#28292e';

  useEffect(() => {
    if (ref.current) {
      ref.current.style.background = color;
    }
  }, [ref, router.asPath]);

  const changeBackground = () => {
    if (!ref.current) return;
    ref.current.style.background = (window.scrollY >= 300) ? '#28292e' : color;
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, [ref, router.asPath]);

};

export default UseChangeBg;
