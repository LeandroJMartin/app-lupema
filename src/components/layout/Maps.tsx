interface Props {
  address: string;
}

const Maps = ({ address }: Props) => {
  const formatString = (str: string) => {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    str = str.replace(/\s/g, '%20');
    return str;
  };

  const end = formatString(address);

  return (
    <iframe
      src={`https://maps.google.com/maps?q=${end}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
      height="100%"
      width="100%"
      allowFullScreen
    ></iframe>
  );
};

export default Maps;
