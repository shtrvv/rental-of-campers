import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/advertsSelectors';
import CamperCard from 'components/CamperCard/CamperCard';
import { List } from './FavoritesPage.styled';
import { Section } from 'pages/CatalogPage/CatalogPage.styled';
import { Message } from './FavoritesPage.styled';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <Section>
      {favorites && favorites.length > 0 ? (
        <List>
          {favorites.map(data => (
            <CamperCard key={data._id} data={data} />
          ))}
        </List>
      ) : (
        <Message>You have no favorites yet</Message>
      )}
    </Section>
  );
};

export default FavoritePage;
