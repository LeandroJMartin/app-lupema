const CoolText = () => {
  return (
    <div className="container">
      <div className="container flex flex-col sm:flex-row justify-center items-center py-6 text-sm border-t border-t-zinc-700/70 mt-7 text-white/50">
        <p>Lupema Engenharia. Todos os direitos reservados</p>
        <div className="flex items-center">
          <p className="ml-2 mr-2">Desenvolvido por </p>
          <a href="https://mayacomunicacao.com.br" title="Maya Comunicação">
            <svg
              width="23px"
              height="23px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 454.36 454.36"
            >
              <path
                fill="#729f2d"
                d="M3.78,3.78h446.8v446.8H3.78V3.78z M0,454.36h454.36V0H0V454.36z"
              />
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#729f2d"
                points="243.33,223.87 262.79,184.95 301.71,107.12 253.01,107.12 173.14,155.93 207.11,223.87 "
              />
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#729f2d"
                points="146.04,107.12 165.49,146.04 204.41,223.87 126.58,223.87 48.75,223.87 87.66,146.04 107.12,107.12 "
              />
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#729f2d"
                points="347.24,107.12 366.7,146.04 405.61,223.87 327.79,223.87 249.95,223.87 288.86,146.04 308.33,107.12	"
              />
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#729f2d"
                points="246.64,230.49 227.18,269.41 188.26,347.24 266.1,347.24 343.93,347.24 305.01,269.41 285.56,230.49	"
              />
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#729f2d"
                points="142.73,347.24 123.27,308.33 84.36,230.49 162.18,230.49 240.02,230.49 152.46,405.62 113.54,405.62	"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoolText;
