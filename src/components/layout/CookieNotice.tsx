import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const CookieNotice: React.FC = () => {
  const [accepted, setAccepted] = useState<boolean>(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('cookieAccepted');
    if (isAccepted) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setAccepted(true);
  };

  if (!accepted) {
    return (
      <div className="bg-white px-8 py-8 fixed bottom-8 left-8 max-w-[330px] drop-shadow-lg z-10">
        <p className="text-sm">
          Pedimos gentilmente seu consentimento para usar seus dados sujeitos à
          nossa política de privacidade.
        </p>
        <div className="flex justify-between items-center mt-6">
          <Link
            href="/politica-de-privacidade"
            className="italic underline hover:text-green"
          >
            Consulte Mais informação
          </Link>
          <button
            onClick={handleAccept}
            className="py-2 px-4 bg-green text-black hover:bg-black hover:text-green"
          >
            Concordo
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default CookieNotice;
