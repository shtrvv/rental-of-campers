import { Outlet } from 'react-router-dom';
import {
  Header,
  Container,
  Navigation,
  List,
  Navlink,
  NavlinkHome,
  LabelBlock,
} from './Layout.styled';
import icons from '../../assets/icons.svg';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <LabelBlock>
            <svg width="40" height="30">
              <use href={icons + '#icon-alcove'}></use>
            </svg>
            <NavlinkHome to="/">Camper Rentals</NavlinkHome>
          </LabelBlock>
          <List>
            <li>
              <Navlink to="/catalog">Catalog</Navlink>
            </li>
            <li>
              <Navlink to="/favorites">Favorites</Navlink>
            </li>
          </List>
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
