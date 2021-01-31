import React from 'react';

import { IMovieParsed } from 'containers/movies/dtos';

import { Container } from './styles';

const ListItem: React.FC<IMovieParsed> = ({
  title, poster, type, year,
}: IMovieParsed) => (
  <Container>
    <p>
      title:
      {title}
    </p>
    <p>
      poster:
      {poster}
    </p>
    <p>
      type:
      {type}
    </p>
    <p>
      year:
      {year}
    </p>
  </Container>
);

export default ListItem;
