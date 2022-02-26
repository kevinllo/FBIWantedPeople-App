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
    <ReactPaginate
      previousLabel={"← Previous"}
      nextLabel={"Next →"}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      containerClassName={"mainContainer__pagination"}
      pageClassName={"mainContainer__pagination__li"}
      activeClassName={"mainContainer__pagination__li--active"}
      onPageChange={handlePageClick}
      breakClassName={"mainContainer__pagination__li--break"}
      nextClassName={"mainContainer__pagination__li--next"}
      previousClassName={"mainContainer__pagination__li--prev"}
    />
  );
};

export default Pagination;
