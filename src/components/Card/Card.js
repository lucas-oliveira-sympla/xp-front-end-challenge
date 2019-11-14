import React from 'react';
import { string } from 'prop-types';

import {
  CardStyled, ImageStyled, AlbumStyled, ArtistStyled,
} from './Card.styles';

const propTypes = {
  imgUrl: string,
  album: string.isRequired,
  artist: string.isRequired,
};

const defaultProps = {
  imgUrl: '',
};

export const renderCard = (imgUrl, album, artist, bigger) => {
  const alt = `${album} - ${artist}`;
  return (
    <CardStyled bigger={bigger}>
      <ImageStyled bigger={bigger}>{imgUrl && <img src={imgUrl} alt={alt} />}</ImageStyled>
      <AlbumStyled>{album}</AlbumStyled>
      <ArtistStyled>{artist}</ArtistStyled>
    </CardStyled>
  );
};

const Card = ({ imgUrl, album, artist }) => renderCard(imgUrl, album, artist);
Card.Bigger = ({ imgUrl, album, artist }) => renderCard(imgUrl, album, artist, true);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;