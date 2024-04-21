import { Section, DescrBlock, Descr, Navlink } from './HomePage.styled';
import icons from '../../assets/icons.svg';

const HomePage = () => {
  return (
    <Section>
      <DescrBlock>
        <Descr>
          Welcome to the world of unforgettable travel with Camper Rentals! We
          are your guide to the world of adventure and discovery. Our campers
          are not just vehicles, they are your mobile homes that will take you
          anywhere on the path of adventure and discovery. Choose your route,
          freely manage the time and direction of travel, and we will ensure
          comfort and safety!
        </Descr>
        <svg width="350" height="240">
          <use href={icons + '#icon-alcove'}></use>
        </svg>
      </DescrBlock>
      <Navlink to="/catalog">Choose a camper</Navlink>
    </Section>
  );
};

export default HomePage;
