interface Props {
  address: string;
}

const Maps = ({ address }: Props) => {
  const formatString = (str: string) => {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    str = str.replace(/\s/g, '+');
    return str;
  };

  const end = formatString(address);

  const link = `https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=pt&amp;q=${end}&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;
  return <iframe src={link} height="100%" width="100%"></iframe>;
};

export default Maps;
