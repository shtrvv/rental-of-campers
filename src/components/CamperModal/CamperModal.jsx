import { useEffect, useState } from 'react';
import {
  Backdrop,
  Modal,
  FirstInfo,
  BtnClose,
  SvgClose,
  Price,
  AdditionalInfo,
  ImgBlock,
  Description,
  ListDetails,
  BtnDetail,
} from './CamperModal.styled';
import {
  Data,
  MainInfo,
  Rating,
  ReviewsBlock,
  SecondInfo,
  SvgMap,
  SvgStar,
  Image,
} from 'components/CamperCard/CamperCard.styled';
import icons from '../../assets/icons.svg';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import Form from 'components/Form/Form';
import { Container } from './CamperModal.styled';

const CamperModal = ({ handleCloseModal, data }) => {
  const [isFeaturesActive, setIsFeaturesActive] = useState(true);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') handleCloseModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [handleCloseModal]);

  return (
    <Backdrop onClick={handleClose}>
      <Modal>
        <MainInfo>
          <FirstInfo>
            <Data>{data.name}</Data>
            <BtnClose aria-label='Close' onClick={handleCloseModal}>
              <SvgClose width="32" height="32">
                <use href={icons + '#icon-close'}></use>
              </SvgClose>
            </BtnClose>
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
          <Price>€{data.price},00</Price>
        </MainInfo>
        <AdditionalInfo>
          <ImgBlock>
            <li>
              <Image src={data.gallery[0]} alt="" loading='lazy' />
            </li>
            <li>
              <Image src={data.gallery[1]} alt="" loading='lazy' />
            </li>
            <li>
              <Image src={data.gallery[2]} alt="" loading='lazy' />
            </li>
          </ImgBlock>
          <Description>{data.description}</Description>
          <ListDetails>
            <li>
              <BtnDetail
                type="button"
                aria-label='Features'
                onClick={() => setIsFeaturesActive(true)}
                className={isFeaturesActive ? 'active' : ''}
              >
                Features
              </BtnDetail>
            </li>
            <li>
              <BtnDetail
                type="button"
                aria-label='Reviews'
                onClick={() => setIsFeaturesActive(false)}
                className={!isFeaturesActive ? 'active' : ''}
              >
                Reviews
              </BtnDetail>
            </li>
          </ListDetails>
          <Container>
            {isFeaturesActive ? (
              <Features data={data} />
            ) : (
              <Reviews data={data} />
            )}
            <Form />
          </Container>
        </AdditionalInfo>
      </Modal>
    </Backdrop>
  );
};

export default CamperModal;
