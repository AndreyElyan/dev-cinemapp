import React from 'react';

import { Container } from './styles';

interface IProps {
  src: string;
  width?: string;
  height?: string;
  alt: string;
}

const Image: React.FC<IProps> = ({
  src, width, height, alt,
}: IProps) => (
  <Container
    loading="lazy"
    src={src}
    width={width}
    height={height}
    alt={alt}
  />
);

Image.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export default Image;
