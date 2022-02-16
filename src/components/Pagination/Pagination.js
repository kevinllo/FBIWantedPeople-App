import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

const Pagination = ({ handlePageClick }) => {
  return (
    <div className="mainContainer__pagination">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        containerClassName={"mainContainer__pagination--ul"}
        pageClassName={"mainContainer__pagination--ul--li"}
        pageLinkClassName={"mainContainer__pagination--ul--li--link"}
        activeClassName={"mainContainer__pagination--ul--li--link--active"}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default Pagination;
