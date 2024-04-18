import CamperCard from 'components/CamperCard/CamperCard';

const CampersList = ({ campers }) => {
  return (
    <ul>
      {campers &&
        campers.map(data => {
          return <CamperCard key={data._id} data={data} />;
        })}
    </ul>
  );
};

export default CampersList;
