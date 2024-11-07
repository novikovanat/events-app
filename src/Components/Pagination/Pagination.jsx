import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import {
  DivFlex,
  PaginationFlex,
  Enumeration,
  ArrowButton,
} from "./Pagination.styled";

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
        <Enumeration
          key={pageNumber}
          $isCurrent={currentPage === pageNumber}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </Enumeration>
      )
    );
  });

  return (
    <DivFlex>
      {1 < currentPage && (
        <ArrowButton as="button" onClick={onPrevious}>
          <FcPrevious />
        </ArrowButton>
      )}
      <PaginationFlex>{pageList}</PaginationFlex>
      {totalCount > currentPage && (
        <ArrowButton onClick={onNext}>
          <FcNext />
        </ArrowButton>
      )}
    </DivFlex>
  );
};

export default Pagination;
