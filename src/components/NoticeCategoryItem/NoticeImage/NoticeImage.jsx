import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageThumb,
  ImageCard,
  InfoWrapper,
  CategoryLabel,
  FavoriteLabel,
  LabelText,
} from './NoticeImage.styled';
import { FavoriteHeartIcon } from '../../icons/FavoriteHeartIcon';
import theme from '../../../utils/theme';

export const NoticeImage = ({ icon, addToFavorite, category, image }) => {
  return (
    <>
      <ImageThumb>
        <ImageCard src={image} alt={category} />
        <InfoWrapper>
          <CategoryLabel>
            <LabelText>{category}</LabelText>
          </CategoryLabel>
          <FavoriteLabel onClick={addToFavorite}>
            <FavoriteHeartIcon fill={icon ? theme.colors.accent : theme.colors.light} />
          </FavoriteLabel>
        </InfoWrapper>
      </ImageThumb>
    </>
  );
};

NoticeImage.propTypes = {
  icon: PropTypes.bool,
  category: PropTypes.string,
  image: PropTypes.string,
  addToFavorite: PropTypes.func,
};
