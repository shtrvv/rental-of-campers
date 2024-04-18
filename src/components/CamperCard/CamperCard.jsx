import icons from '../../assets/icons.svg';

const CamperCard = ({ data }) => {
  return (
    <li>
      <img src={data.gallery[0]} alt={data.name} />
      <h2>{data.name}</h2>
      <p>€{data.price},00</p>
      <svg width="24" height="24">
        <use href={icons + '#icon-heart'}></use>
      </svg>
    </li>
  );
};

export default CamperCard;
