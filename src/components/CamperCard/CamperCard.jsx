import { useState } from 'react';
import icons from '../../assets/icons.svg';
import {
  Card,
  Image,
  Info,
  MainInfo,
  FirstInfo,
  Data,
  PriceBlock,
  BtnHeart,
  SvgHeart,
  SecondInfo,
  ReviewsBlock,
  SvgStar,
  Rating,
  SvgMap,
  Description,
  BtnInfo,
  DetailsList,
  DetailsItem,
  NameCapitalize,
  SvgDetail,
  SvgHeartFill,
} from './CamperCard.styled';
import CamperModal from 'components/CamperModal/CamperModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/advertsSelectors';
import { deleteFavorite, setFavorites } from '../../redux/adverts/advertsSlice';

const CamperCard = ({ data }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.find(favorite => favorite._id === data._id);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = 'auto';
  };
  const handleSetFavorite = () => {
    dispatch(setFavorites(data));
    localStorage.setItem('persist:favorites', JSON.stringify(favorites));
  };
  const handleDeleteFavorite = () => {
    dispatch(deleteFavorite(data._id));
    localStorage.setItem('persist:favorites', JSON.stringify(favorites));
  };

  return (
    <Card>
      <Image src={data.gallery[0]} alt={data.name} width='290' height='310' loading='lazy' />
      <Info>
        <MainInfo>
          <FirstInfo>
            <Data>{data.name}</Data>
            <PriceBlock>
              <Data>€{data.price},00</Data>
              <BtnHeart
                type="button"
                aria-label='Favorite'
                onClick={isFavorite ? handleDeleteFavorite : handleSetFavorite}
              >
                {isFavorite ? (
                  <SvgHeartFill width="24" height="24">
                    <use href={icons + '#icon-heart-fill'}></use>
                  </SvgHeartFill>
                ) : (
                  <SvgHeart width="24" height="24">
                    <use href={icons + '#icon-heart-default'}></use>
                  </SvgHeart>
                )}
              </BtnHeart>
            </PriceBlock>
          </FirstInfo>
          <SecondInfo>
            <ReviewsBlock>
              <SvgStar width="16" height="16">
                <use href={icons + '#icon-star-fill'}></use>
              </SvgStar>
              <Rating>
                {data.rating}({data.reviews.length} Reviews)
              </Rating>
            </ReviewsBlock>
            <ReviewsBlock>
              <SvgMap width="16" height="16">
                <use href={icons + '#icon-map-pin'}></use>
              </SvgMap>
              <span>{data.location}</span>
            </ReviewsBlock>
          </SecondInfo>
        </MainInfo>
        <Description>{data.description}</Description>
        <DetailsList>
          <DetailsItem>
            <svg width="20" height="20">
              <use href={icons + '#icon-adults'}></use>
            </svg>
            <span>{data.adults} adults</span>
          </DetailsItem>
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-automatic'}></use>
            </SvgDetail>
            <NameCapitalize>{data.transmission}</NameCapitalize>
          </DetailsItem>
          <DetailsItem>
            <svg width="20" height="20">
              <use href={icons + '#icon-petrol'}></use>
            </svg>
            <NameCapitalize>{data.engine}</NameCapitalize>
          </DetailsItem>
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-kitchen'}></use>
            </SvgDetail>
            <span>{data.details.kitchen && 'Kitchen'}</span>
          </DetailsItem>
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-bed'}></use>
            </SvgDetail>
            <span>{data.details.beds} beds</span>
          </DetailsItem>
          <DetailsItem>
            <svg width="20" height="20">
              <use href={icons + '#icon-ac'}></use>
            </svg>
            <span>{data.details.airConditioner && 'AC'}</span>
          </DetailsItem>
        </DetailsList>
        <BtnInfo type="button" aria-label='Show more' onClick={handleOpenModal}>
          Show more
        </BtnInfo>
      </Info>
      {isModalOpen ? (
        <CamperModal handleCloseModal={handleCloseModal} data={data} />
      ) : null}
    </Card>
  );
};

export default CamperCard;
