interface Props {
  state: string;
}

const ButtonLoadMore = ({ state }: Props) => {
  return (
    <button className="text-center bg-green text-black py-2 px-8 mx-auto block uppercase font-semibold">
      Carregar mais
    </button>
  );
};

export default ButtonLoadMore;
