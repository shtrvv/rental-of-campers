import styled from 'styled-components';

export const ReviewBlock = styled.ul`
  max-width: 430px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ReviewHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  border: none;
  background-color: var(--secondary-light);
`;
export const ImgName = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: var(--primary-red);
`;
export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
`;
export const Comment = styled.p`
  margin-top: 16px;
  line-height: 1.5;
  color: var(--primary-gray);
`;
export const StarsList = styled.ul`
  display: flex;
  gap: 4px;
`;
export const StarItem = styled.li`
  display: flex;
  align-items: center;
`;
