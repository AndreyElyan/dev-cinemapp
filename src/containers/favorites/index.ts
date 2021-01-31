/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState, useCallback, useContext, memo,
} from 'react';

import changeState from 'helpers/changeState';
import actions from './actions';

import { IActions, IState } from './dtos';

export const initialState = {
  list: [],
};

interface IData {
  data: IState;
  actions: IActions;
}

export const FavoritesContext = React.createContext<IData>({
  data: initialState,
  actions: actions({ data: initialState, changeState: changeState(() => {}) }),
});

export const useFavorites = () => useContext(FavoritesContext);

export default function withFavoritesProvider(WrappedComponent: React.FC): React.FC {
  const WithFavorites = (props: any) => {
    const [data, setData] = useState(initialState);

    const value = useCallback(() => ({
      data,
      actions: actions({ data, changeState: changeState(setData) }),
    }), [data]);

    const dataValue: IData = value();

    return null;
  };

  return memo(WithFavorites);
}
