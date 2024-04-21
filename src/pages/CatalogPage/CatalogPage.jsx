import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/adverts/advertsSelectors';
import CampersList from 'components/CampersList/CampersList';
import FiltersList from 'components/FiltersList/FiltersList';
import { Section } from './CatalogPage.styled';

const CatalogPage = () => {
  const campers = useSelector(selectCampers);

  return (
    <Section>
      <FiltersList />
      <CampersList campers={campers} />
    </Section>
  );
};

export default CatalogPage;
