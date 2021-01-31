import api from 'services/api';

import { IDataChangeState } from 'helpers/changeState';

import parserMovies from './parserMovies';

import { IActions, IState, IMovieNotParsed } from './dtos';

interface IData {
  data: IState;
  changeState(data: IDataChangeState): void;
}

interface IMoviesResponde {
  Search?: IMovieNotParsed[];
}

export default ({ data, changeState }: IData): IActions => ({
  searchMovies: async (search) => {
    const { error } = data;

    changeState({ label: 'loading', value: true });

    try {
      const response: IMoviesResponde = await api.get('', { params: { s: search } });

      changeState({
        label: 'list',
        value: response.Search ? response.Search.map(parserMovies) : [],
      });

      if (error) changeState({ label: 'error', value: null });
    } catch (err) {
      changeState({ label: 'error', value: 'Ocorreu um erro inesperado!' });
    } finally {
      changeState({ label: 'loading', value: false });
    }
  },
});
