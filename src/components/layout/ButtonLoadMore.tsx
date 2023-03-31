const ButtonLoadMore = ({ loadMore }: any) => {
  return (
    <button
      onClick={loadMore}
      className="text-center bg-green text-black py-2 px-8 mx-auto block uppercase font-semibold"
      aria-label="Botão carregar mais"
    >
      Carregar mais
    </button>
  );
};

export default ButtonLoadMore;
