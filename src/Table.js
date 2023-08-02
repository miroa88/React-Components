import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Table.css'; // Import the CSS file

const Table = () => {
  const [data, setData] = useState([]); // Your data to be paginated
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items to show per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Use dummy data for testing
  useEffect(() => {
    const dummyData = [
      { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { id: 3, name: 'Michael Johnson', age: 35, email: 'michael@example.com' },
      { id: 4, name: 'Emily Brown', age: 28, email: 'emily@example.com' },
      { id: 5, name: 'William Davis', age: 40, email: 'william@example.com' },
      { id: 6, name: 'Olivia Wilson', age: 22, email: 'olivia@example.com' },
      { id: 7, name: 'James Martinez', age: 33, email: 'james@example.com' },
      { id: 8, name: 'Sophia Anderson', age: 29, email: 'sophia@example.com' },
      { id: 9, name: 'Robert Taylor', age: 37, email: 'robert@example.com' },
      { id: 10, name: 'Ava Thomas', age: 24, email: 'ava@example.com' },
      // Add more items if needed
    ];
    setData(dummyData);
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default Table;