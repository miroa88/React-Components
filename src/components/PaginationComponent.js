import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import dummyData from './Dummy';
import './PaginationComponent.css';

const PaginationComponent = () => {
  const [data, setData] = useState([]); // Your data to be paginated
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to show per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setData(dummyData)
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      {/* Display your paginated data */}
      {currentData.map((item) => (
        <div key={item.id} className="pagination-item">
          {item.name}
          <div className="icon-buttons">
            <button className="edit-button">
              <i className="fa fa-edit"></i>
            </button>
            <button className="delete-button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      ))}

      {/* Add the pagination component */}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PaginationComponent;