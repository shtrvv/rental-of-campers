import styled from 'styled-components';

export const FormContainer = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FormHeader = styled.h3`
  font-size: 20px;
  line-height: 1.2;
  position: relative;
`;
export const Description = styled.p`
  line-height: 1.5;
  color: var(--primary-gray);
`;
export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;
export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 18px;
  background-color: var(--third-light);
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-dark);
  outline: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;
export const TextArea = styled.textarea`
  border-radius: 10px;
  border: none;
  padding: 18px;
  background-color: var(--third-light);
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-dark);
  outline: none;
  height: 114px;
  resize: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;
export const BtnSubmit = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  background-color: var(--primary-red);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-light);
  border: none;

  &:is(:hover),
  &:is(:focus) {
    background-color: var(--secondary-red);
  }

  &:disabled {
    cursor: not-allowed;

    &:is(:hover),
    &:is(:focus) {
      background-color: var(--primary-red);
    }
  }
`;
export const Message = styled.span`
  color: var(--secondary-red);
  font-size: 14px;
`;
