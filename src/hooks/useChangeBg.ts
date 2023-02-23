import { useRouter } from 'next/router';
import { RefObject, useEffect, useState } from 'react';

const UseChangeBg = (ref: RefObject<HTMLDivElement>) => {
  const router = useRouter();

  const routsbg = [
    '/assessoria',
    '/empreendimentos'
  ]

  const isPathInRoutsBg = routsbg.some((item) => router.asPath.match(item));


  function updatePosition() {
    if (!ref.current) return;

    const scrollYoffset = router.asPath === '/' ? ref.current.getBoundingClientRect().height : 180;

    ref.current.style.background = isPathInRoutsBg || router.asPath === '/' ? window?.scrollY > scrollYoffset ? '#28292e' : 'transparent' : '#28292e';
  }

  useEffect(() => {
    if (ref.current) {
      if (!isPathInRoutsBg && router.asPath !== '/') ref.current.style.background = '#28292e'
    }
  }, [ref]);

  useEffect(() => {

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);

  }, []);

};

export default UseChangeBg;
