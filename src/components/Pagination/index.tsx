import React from 'react';
import ReactPaginate from 'react-paginate';

import { Container } from './styles';

interface IProps {
  page: number;
  pages: number;
  onChange(value: number): void;
}

const Pagination: React.FC<IProps> = ({ page, pages, onChange }: IProps) => {
  return pages ? (
    <Container>
      <ReactPaginate
        marginPagesDisplayed={10}
        pageCount={pages}
        pageRangeDisplayed={5}
        initialPage={page}
        onPageChange={value => onChange(value.selected)}
      />
    </Container>
  ) : (
    <></>
  );
};

export default Pagination;
