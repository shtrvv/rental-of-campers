import CamperCard from 'components/CamperCard/CamperCard';
import { List } from './CampersList.styled';

const CampersList = ({ campers }) => {
  return (
    <List>
      {campers &&
        campers.map(data => {
          return <CamperCard key={data._id} data={data} />;
        })}
    </List>
  );
};

export default CampersList;
