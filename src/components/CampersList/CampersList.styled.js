import styled from 'styled-components';

export const CampersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  max-width: 888px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const BtnLoad = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  font-size: 16px;
  line-height: 1.5;
  background-color: transparent;
  color: var(--primary-dark);

  &:is(:hover),
  &:is(:focus) {
    border-color: var(--primary-red);
  }
`;
