import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectCampers } from '../../redux/adverts/advertsSelectors';
import { getCampersThunk } from '../../redux/adverts/advertsThunks';
import CampersList from 'components/CampersList/CampersList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampersThunk());
  }, [dispatch]);

  return (
    <div>
      <CampersList campers={campers} />
    </div>
  );
};

export default CatalogPage;
