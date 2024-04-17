import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1312px;
`;
export const Header = styled.header`
  padding: 10px 50px;
  border-bottom: 2px solid var(--primary-red);
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const List = styled.ul`
  display: flex;
  gap: 60px;
`;
export const Navlink = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;
  color: var(--third-light);
  text-shadow: 0 0 2px var(--primary-gray), 0 0 2px var(--primary-gray),
    0 0 2px var(--primary-gray), 0 0 2px var(--primary-gray);

  &.active {
    color: var(--primary-red);
    text-shadow: none;
  }
`;
