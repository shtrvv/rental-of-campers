import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 18, 19, 0.4);
`;
export const Modal = styled.div`
  background-color: var(--primary-light);
  border-radius: 20px;
  padding: 40px;
  max-width: 982px;
  height: 620px;
  z-index: 999;
`;
export const FirstInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BtnClose = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;
export const SvgClose = styled.svg`
  stroke: var(--primary-dark);
`;
export const Price = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin-top: 16px;
`;
export const AdditionalInfo = styled.div`
  margin-top: 24px;
  overflow-y: scroll;
  max-height: 475px;
  margin-right: -15px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scroll-color);
    border-radius: 7px;
  }
`;
export const ImgBlock = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;
export const Description = styled.p`
  line-height: 1.5;
  color: var(--primary-gray);
  max-width: 902px;
  margin-bottom: 44px;
`;
export const ListDetails = styled.ul`
  display: flex;
  gap: 38px;
  position: relative;
  margin-bottom: 64px;

  &::after {
    content: '';
    position: absolute;
    background-color: rgba(16, 24, 40, 0.2);
    top: 40px;
    height: 1px;
    width: 100%;
    border-radius: 1px;
    display: block;
  }
`;
export const BtnDetail = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--primary-dark);
  position: relative;

  &.active {
    &::after {
      content: '';
      position: absolute;
      background-color: var(--primary-red);
      top: 38px;
      height: 5px;
      width: 100%;
      border-radius: 2px;
      display: block;
      z-index: 99;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 24px;
`;
