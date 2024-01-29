import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
