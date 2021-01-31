import styled from 'styled-components';

import { simpleFlex } from 'styles/mixins';

export const Container = styled.li`
  ${simpleFlex}

  padding: ${({ theme }) => theme.base.padding}px;
  background: rgba(255, 255, 255, 0.2);
  border: ${({ theme }) => theme.base.radius * 2}px;

  & + & {
    margin-top: ${({ theme }) => theme.base.margin}px;
  }
`;
