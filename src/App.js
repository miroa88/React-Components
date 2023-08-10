import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import PaginationComponent from './PaginationComponent';
import './App.css';
import CardSlider from './CardSlider';
// import Table from './Table';
import Layout from './Layout';
import AutocompleteTextField from './AutocompleteTextField'; 
import DatePicker from './DatePicker';
import { Table } from 'antd';
function App() {
  const initialInputValue = 'Initial Value';
  const inputValue = 'Current Value';
  const suggestionArray = ['Apple', 'Ap1ple','App2le','Appl2e','Appl3e','App5le','Apple6','Apple7','Banana', 'Cherry', 'Grapes', 'Orange'];

  //setInputValueOnChange,

  const [selectedValue, setSelectedValue] = useState('');


  const dataSource = [
    {
      key: '1',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '3',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '4',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '5',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '6',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '7',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '8',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '9',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '10',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '11',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '12',
      name: 'John Doe',
      age: 32,
      address: '10 Downing Street'
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          {/* Add a clickable element inside the cell */}
          <a onClick={() => handleRowClick(record)}>Click Me</a>
        </span>
      ),
      onRow: (record) => ({
        onClick: () => handleRowClick(record), // Attach the onClick event handler
      }),
    },
  ];

  const handleRowClick = (record) => {
    console.log('Clicked row:', record);
    // Perform any action you want with the clicked row's data
  };

  return (
    <Table
    dataSource={dataSource}
    columns={columns}
    pagination={{
      position: ['bottomCenter'],
      className: 'custom-pagination', // Apply the custom class
    }}
  />
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route path="/"  component={<Table />} />
    //       <Route path="/pagination" component={<PaginationComponent />} />
    //       <Route path="/cardSlider" component={<CardSlider />} />
    //     </Routes>
    //   </Layout>
    // </Router>
  //   <Router>
  //   <Layout>
  //     <Routes>
  //       <Route exact path="/table" element={<Table/>}/>
  //       <Route exact path="/pagination" element={<PaginationComponent/>}/>
  //       <Route exact path="/cardSlider" element={<CardSlider/>}/>
  //       <Route exact path="/pieChart" element={<PieChart />}/>
  //       {/* <Route path="*" element={<NotFound/>}/> */}
  //     </Routes>
  //   </Layout>
  // </Router>
//   <div>
//   <h1>Autocomplete Text Field {selectedValue}</h1>
//   <AutocompleteTextField
//     initialValue={initialInputValue}
//     value={inputValue}
//     options={suggestionArray}
//     // setInputValueOnSelect={setSelectedValue}
//     setInputValueOnChange={setSelectedValue}
//     placeholder={"placeholder"}
//     style={{ width: 200 }}
//   />
// </div>
//<div>
//  <DatePicker />
//</div> 

  );
}

export default App;
