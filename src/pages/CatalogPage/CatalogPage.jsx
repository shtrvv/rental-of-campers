import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectCampers } from '../../redux/adverts/advertsSelectors';
import { getCampersThunk } from '../../redux/adverts/advertsThunks';
import CampersList from 'components/CampersList/CampersList';
import { Section, BtnLoad } from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCampersThunk(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Section>
      <CampersList campers={campers} />
      <BtnLoad type="button" onClick={handleLoadMore}>
        Load more
      </BtnLoad>
    </Section>
  );
};

export default CatalogPage;
