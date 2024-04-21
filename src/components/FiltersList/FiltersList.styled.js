import styled from 'styled-components';

export const FilterBlock = styled.div`
  max-width: 360px;
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Label = styled.label`
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 18px 40px 18px;
  background-color: var(--third-light);
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-dark);
  outline: none;
  width: 78%;

  &:focus + svg {
    opacity: 1;
  }

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;
export const SvgMap = styled.svg`
  position: absolute;
  fill: transparent;
  stroke: var(--primary-dark);
  opacity: 0.6;
  left: 18px;
  top: 32%;
`;
export const Paragraph = styled.p`
  margin-top: 32px;
  margin-bottom: 20px;
  line-height: 1.5;
  color: var(--primary-gray);
`;
export const Header = styled.h3`
  font-size: 20px;
  line-height: 1.2;
  color: var(--primary-dark);
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-color: rgba(16, 24, 40, 0.1);
    top: 46px;
    height: 1px;
    width: 100%;
    border-radius: 1px;
    display: block;
  }
`;
export const EquipmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
export const EquipmentItem = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  width: 115px;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover,
  &:focus {
    border-color: var(--primary-red);
  }
`;
export const EquipInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;
export const EquipBlock = styled.div`
  margin-bottom: 32px;
`;
export const StyledSpan = styled.span`
  font-size: 17px;
  text-align: center;
`;
export const BtnSearch = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
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
export const VehicleBlock = styled.div`
  margin-bottom: 64px;
`;
