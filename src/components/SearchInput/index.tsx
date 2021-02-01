import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';

import { useMovies } from 'containers/movies';

import {
  Container, InputStyles, FormContainer, WrapperButton,
} from './styles';

const SearchInput: React.FC = () => {
  const { actions: { searchMovies } } = useMovies();
  const history = useHistory();

  const [search, setSearch] = useState('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e?.preventDefault();
    history.push('');

    await searchMovies(search);

    setSearch('');
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <InputStyles
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
          name="search"
          placeholder="Procurar filme:"
          autoFocus
        />

        <WrapperButton>
          <Button width="90px">Buscar</Button>
        </WrapperButton>
      </FormContainer>
    </Container>
  );
};

export default SearchInput;
