import React from 'react';

import { useMovies } from 'containers/movies';

import ListMovies from 'components/ListMovies';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { Container } from './styles';

const Home: React.FC = () => {
  const { data: { list, loading, error } } = useMovies();

  return error ? (
    <Container>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  ) : (
    <Container>
      {loading ? <Loader /> : <ListMovies list={list} />}
    </Container>
  );
};

export default Home;
