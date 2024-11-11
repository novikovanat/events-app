import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import {
  DivFlex,
  PaginationFlex,
  Enumeration,
  ArrowButton,
  PlaceholderDiv,
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
      <PlaceholderDiv>
        {1 < currentPage && (
          <ArrowButton as="button" onClick={onPrevious}>
            <FcPrevious />
          </ArrowButton>
        )}
      </PlaceholderDiv>
      <PaginationFlex as="ul">{pageList}</PaginationFlex>
      <PlaceholderDiv>
        {totalCount > currentPage && (
          <ArrowButton as="button" onClick={onNext}>
            <FcNext />
          </ArrowButton>
        )}
      </PlaceholderDiv>
    </DivFlex>
  );
};

export default Pagination;
