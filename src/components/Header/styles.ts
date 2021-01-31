import styled from 'styled-components';

import { container } from 'styles/mixins';

export const HeaderStyles = styled.header`
  padding: ${({ theme }) => `${theme.base.padding * 2}px 0`};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: ${({ theme }) => theme.base.margin * 5}px;
`;

export const HeaderContainer = styled.div`
  ${container};
`;
