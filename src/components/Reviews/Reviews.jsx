import {
  ReviewBlock,
  ReviewHeader,
  Img,
  ImgName,
  NameBlock,
  Name,
  Comment,
  StarsList,
  StarItem,
} from './Reviews.styled';
import icons from '../../assets/icons.svg';

const Reviews = ({ data }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <ReviewBlock>
      {data.reviews &&
        data.reviews.map((review, idx) => (
          <li key={idx}>
            <ReviewHeader>
              <Img>
                <ImgName>{review.reviewer_name.charAt(0)}</ImgName>
              </Img>
              <NameBlock>
                <Name>{review.reviewer_name}</Name>
                <StarsList>
                  {stars.map((star, idx) => (
                    <StarItem key={idx}>
                      {star > review.reviewer_rating ? (
                        <svg width="16" height="16">
                          <use href={icons + '#icon-star-default'}></use>
                        </svg>
                      ) : (
                        <svg width="16" height="16">
                          <use href={icons + '#icon-star-fill'}></use>
                        </svg>
                      )}
                    </StarItem>
                  ))}
                </StarsList>
              </NameBlock>
            </ReviewHeader>
            <Comment>{review.comment}</Comment>
          </li>
        ))}
    </ReviewBlock>
  );
};

export default Reviews;
