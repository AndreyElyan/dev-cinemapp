import React from 'react';

import { Container } from './styles';

interface IProps {
  src: string;
  width: string;
  height: string;
}

const Image: React.FC<IProps> = ({ src, width, height }: IProps) => (
  <Container
    loading="lazy"
    src={src}
    width={width}
    height={height}
  />
);

export default Image;
