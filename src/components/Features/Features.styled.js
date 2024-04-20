import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  max-width: 430px;
`;
export const Header = styled.h3`
  font-size: 20px;
  line-height: 1.2;
  position: relative;
  margin-bottom: 48px;

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
export const VehicleInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const VehicleItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 1.3;
`;
