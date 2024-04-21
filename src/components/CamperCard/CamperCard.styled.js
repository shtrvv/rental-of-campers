import styled from 'styled-components';

export const Card = styled.li`
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  display: flex;
  gap: 24px;
`;
export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FirstInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Data = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;
export const PriceBlock = styled.div`
  display: flex;
  gap: 10px;
`;
export const BtnHeart = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
`;
export const SvgHeart = styled.svg`
  fill: transparent;
  stroke: var(--primary-dark);
`;
export const SecondInfo = styled.div`
  display: flex;
  gap: 16px;
`;
export const ReviewsBlock = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
export const SvgStar = styled.svg`
  fill: var(--primary-yellow);
  stroke: var(--primary-yellow);
`;
export const Rating = styled.span`
  line-height: 1.5;
  text-decoration: underline;
`;
export const SvgMap = styled.svg`
  fill: transparent;
  stroke: var(--primary-dark);
`;
export const Description = styled.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  color: var(--primary-gray);
`;
export const BtnInfo = styled.button`
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  background-color: var(--primary-red);
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-light);
  border: none;

  &:is(:hover),
  &:is(:focus) {
    background-color: var(--secondary-red);
  }
`;
export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const DetailsItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 100px;
  background-color: var(--secondary-light);
  align-items: center;
`;
export const NameCapitalize = styled.span`
  text-transform: capitalize;
`;
export const SvgDetail = styled.svg`
  fill: transparent;
  stroke: var(--primary-dark);
`;
export const SvgHeartFill = styled.svg`
  fill: var(--primary-red);
`;
