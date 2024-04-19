import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectCampers } from '../../redux/adverts/advertsSelectors';
import { getCampersThunk } from '../../redux/adverts/advertsThunks';
import CampersList from 'components/CampersList/CampersList';
import { Section } from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampersThunk());
  }, [dispatch]);

  return (
    <Section>
      <CampersList campers={campers} />
    </Section>
  );
};

export default CatalogPage;
