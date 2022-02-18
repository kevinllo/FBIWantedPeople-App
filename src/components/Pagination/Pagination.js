import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

const Pagination = ({ setWantedPeople }) => {
  const fetchWantedPeoplePerPage = async (currentPage) => {
    const response = await fetch(
      `https://api.fbi.gov/@wanted?pageSize=10&page=${currentPage}`
    );
    const data = await response.json();
    return data;
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const wantedPeoplePerPage = await fetchWantedPeoplePerPage(currentPage);
    setWantedPeople(wantedPeoplePerPage.items);
  };
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
