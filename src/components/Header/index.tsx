import React from 'react';

import SearchInput from 'components/SearchInput';

import { HeaderStyles, HeaderContainer } from './styles';

const Header: React.FC = () => (
  <HeaderStyles>
    <HeaderContainer>
      <SearchInput />
    </HeaderContainer>
  </HeaderStyles>
);

export default Header;
