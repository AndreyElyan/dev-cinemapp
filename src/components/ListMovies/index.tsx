import React from 'react';

import { IMovieParsed } from 'containers/movies/dtos';

import ListItem from './partials/ListItem';

import { Container, EmptyMessage } from './styles';

interface IProps {
  list: IMovieParsed[];
}

const ListMovies: React.FC<IProps> = ({ list }: IProps) => (
  <Container>
    {list.length
      ? list.map(({
        title, poster, type, year, imdbID,
      }) => (
        <ListItem
          key={imdbID}
          title={title}
          poster={poster}
          type={type}
          year={year}
          imdbID={imdbID}
        />
      ))
      : (
        <EmptyMessage>Nenhum filme encontradro ou pesquisado.</EmptyMessage>
      )}
  </Container>
);

export default ListMovies;
