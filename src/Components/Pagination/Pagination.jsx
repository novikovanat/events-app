import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import styled from "styled-components";

const Pagination = (props) => {
  const { setPage, totalCount, siblingCount = 1, currentPage } = props;

  const range = (start, end) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
  };
  const paginationRange = range(1, totalCount);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => setPage(currentPage + 1);

  const onPrevious = () => setPage(currentPage - 1);

  const pageList = paginationRange.map((pageNumber) => {
    return (
      siblingCount,
      (
        <li key={pageNumber} onClick={() => setPage(pageNumber)}>
          {pageNumber}
        </li>
      )
    );
  });

  const PaginationFlex = styled.ul`
    display: flex;
  `;
  const DivFlex = styled.div`
    display: flex;
  `;
  

  return (
    <DivFlex>
      <p>page: {currentPage}</p>
      {1 < currentPage && (
        <button onClick={onPrevious}>
          <FcPrevious />
        </button>
      )}
      <PaginationFlex>{pageList}</PaginationFlex>
      {totalCount > currentPage && (
        <button onClick={onNext}>
          <FcNext />
        </button>
      )}
    </DivFlex>
  );
};

export default Pagination;
