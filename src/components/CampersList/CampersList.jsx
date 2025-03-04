import CamperCard from 'components/CamperCard/CamperCard';
import { List, BtnLoad, CampersBlock, BtnWrap, Loader } from './CampersList.styled';
import { getCampersThunk } from '../../redux/adverts/advertsThunks';
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

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    dispatch(getCampersThunk(page));
  }, [dispatch, page]);

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
        {campers.length === 0 ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Loader key={index} />
          ))
        ) : (
          (filteredCampers.length > 0 ? filteredCampers : campers).map(data => (
            <CamperCard key={data._id} data={data} />
          ))
        )}
      </List>
      <BtnWrap>
      {!isLastPage && filteredCampers.length === 0 && (
        <BtnLoad type="button" aria-label='Load more' onClick={handleLoadMore}>
          Load more
        </BtnLoad>
      )}
      </BtnWrap>
    </CampersBlock>
  );
};

export default CampersList;
