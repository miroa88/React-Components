import PaginationComponent from './PaginationComponent';
import './App.css';
import CardSlider from './CardSlider';
import Sidebar from './SideBar';
import Footer from './Footer';
import Header from './Header';
import Table from './Table';
function App() {
  return (
    // <div className="App">
    //   <PaginationComponent />
    // </div>
    // <div className="App">
    //   <h1>React Card Slider</h1>
    //   <CardSlider />
    // </div>
    <div>
      <Header />
      <Sidebar />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
