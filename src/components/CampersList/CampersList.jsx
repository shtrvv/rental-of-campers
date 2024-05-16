import CamperCard from 'components/CamperCard/CamperCard';
import { List } from './CampersList.styled';
import { BtnLoad, CampersBlock } from './CampersList.styled';
import { getCampersThunk } from '../../redux/adverts/advertsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectCampers } from '../../redux/adverts/advertsSelectors';

const CampersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const max = 13;

  const campers = useSelector(selectCampers);

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
        {campers &&
          campers.map(data => {
            return <CamperCard key={data._id} data={data} />;
          })}
      </List>
      {!isLastPage && (
        <BtnLoad type="button" onClick={handleLoadMore}>
          Load more
        </BtnLoad>
      )}
    </CampersBlock>
  );
};

export default CampersList;
