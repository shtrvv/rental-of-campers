import { Outlet } from 'react-router-dom';
import { Header, Container, Navigation, List, Navlink } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Navlink to="/">Home</Navlink>
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
