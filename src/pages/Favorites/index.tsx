import React, { useEffect } from 'react';

import { useFavorites } from 'containers/favorites';

// import { Container } from './styles';

const Favorites: React.FC = () => {
  const { data: { list }, actions: { loadFavorites } } = useFavorites();

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div>a</div>
  );
};

export default Favorites;
