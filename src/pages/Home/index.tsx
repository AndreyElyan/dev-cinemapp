import React from 'react';

import { useMovies } from 'containers/movies';

import ListMovies from 'components/ListMovies';

import Loader from 'components/Loader';

import { Container } from './styles';

const Home: React.FC = () => {
  const { data: { list, loading } } = useMovies();

  return (
    <Container>
      {loading ? <Loader /> : <ListMovies list={list} />}
    </Container>
  );
};

export default Home;
