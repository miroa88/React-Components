import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import PaginationComponent from './PaginationComponent';
import './App.css';
import CardSlider from './CardSlider';
import Table from './Table';
import Layout from './Layout';
import AutocompleteTextField from './AutocompleteTextField'; 

function App() {
  const initialInputValue = 'Initial Value';
  const inputValue = 'Current Value';
  const suggestionArray = ['Apple', 'Ap1ple','App2le','Appl2e','Appl3e','App5le','Apple6','Apple7','Banana', 'Cherry', 'Grapes', 'Orange'];

  //setInputValueOnChange,

  const [selectedValue, setSelectedValue] = useState('');

  return (

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
  <div>
  <h1>Autocomplete Text Field {selectedValue}</h1>
  <AutocompleteTextField
    initialValue={initialInputValue}
    value={inputValue}
    options={suggestionArray}
    // setInputValueOnSelect={setSelectedValue}
    setInputValueOnChange={setSelectedValue}
    placeholder={"placeholder"}
    style={{ width: 200 }}
  />
</div>
  );
}

export default App;
