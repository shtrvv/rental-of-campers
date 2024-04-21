import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin: 150px 0;
`;
export const DescrBlock = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Descr = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 600;
  max-width: 550px;
  border: 4px solid var(--primary-red);
  padding: 10px;
  border-radius: 30px;
  background-color: var(--third-light);
`;
export const Navlink = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 24px;
  line-height: 1.5;
  color: var(--primary-red);
  text-decoration: underline;
`;
