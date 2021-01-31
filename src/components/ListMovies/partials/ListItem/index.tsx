import React from 'react';

import { IMovieParsed } from 'containers/movies/dtos';

import Image from 'components/Image';

import Button from 'components/Button';
import {
  Container, WrapperContent, WrapperImage, ValueText, ButtonWrapper,
} from './styles';

const ListItem: React.FC<IMovieParsed> = ({
  title, poster, type, year,
}: IMovieParsed) => {
  console.log('poster: ', poster);

  return (
    <Container>
      <WrapperImage>
        <Image src={poster} alt={title} />
      </WrapperImage>

      <WrapperContent>
        <ValueText>{title}</ValueText>

        <ValueText>{type}</ValueText>

        <ValueText>{year}</ValueText>

        <ButtonWrapper>
          <Button onClick={() => alert(title)}>Favoritar</Button>
        </ButtonWrapper>
      </WrapperContent>
    </Container>
  );
};

export default ListItem;
