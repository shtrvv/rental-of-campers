import CampersList from 'components/CampersList/CampersList';
import FiltersList from 'components/FiltersList/FiltersList';
import { Section } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <Section>
      <FiltersList />
      <CampersList />
    </Section>
  );
};

export default CatalogPage;
