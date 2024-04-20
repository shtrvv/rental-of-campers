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
} from './CamperCard.styled';
import CamperModal from 'components/CamperModal/CamperModal';

const CamperCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = 'auto';
  };

  return (
    <Card>
      <Image src={data.gallery[0]} alt={data.name} />
      <Info>
        <MainInfo>
          <FirstInfo>
            <Data>{data.name}</Data>
            <PriceBlock>
              <Data>€{data.price},00</Data>
              <BtnHeart type="button">
                <SvgHeart width="24" height="24">
                  <use href={icons + '#icon-heart'}></use>
                </SvgHeart>
              </BtnHeart>
            </PriceBlock>
          </FirstInfo>
          <SecondInfo>
            <ReviewsBlock>
              <SvgStar width="16" height="16">
                <use href={icons + '#icon-star'}></use>
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
        <BtnInfo type="button" onClick={handleOpenModal}>
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
