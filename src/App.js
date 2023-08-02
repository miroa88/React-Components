import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaginationComponent from './PaginationComponent';
import './App.css';
import CardSlider from './CardSlider';
import Table from './Table';
import Layout from './Layout';

function App() {
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
    <Router>
    <Layout>
      <Routes>
        <Route exact path="/table" element={<Table/>}/>
        <Route exact path="/pagination" element={<PaginationComponent/>}/>
        <Route exact path="/cardSlider" element={<CardSlider/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
