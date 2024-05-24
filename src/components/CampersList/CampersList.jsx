import CamperCard from 'components/CamperCard/CamperCard';
import { List } from './CampersList.styled';
import { BtnLoad, CampersBlock } from './CampersList.styled';
import {
  getAllCampersThunk,
  getCampersThunk,
} from '../../redux/adverts/advertsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectCampers,
  selectFiltered,
} from '../../redux/adverts/advertsSelectors';

const CampersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const max = 13;

  const campers = useSelector(selectCampers);
  const filteredCampers = useSelector(selectFiltered);
  // const showFiltered = dispatch(getAllCampersThunk());

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (filteredCampers.length > 0) {
      dispatch(getAllCampersThunk());
    } else {
      dispatch(getCampersThunk(page));
    }
  }, [dispatch, page, filteredCampers]);

  useEffect(() => {
    if (campers.length >= max) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [campers]);

  return (
    <CampersBlock>
      <List>
        {(filteredCampers.length > 0 ? filteredCampers : campers).map(data => {
          return <CamperCard key={data._id} data={data} />;
        })}
      </List>
      {!isLastPage && filteredCampers.length === 0 && (
        <BtnLoad type="button" onClick={handleLoadMore}>
          Load more
        </BtnLoad>
      )}
    </CampersBlock>
  );
};

export default CampersList;
