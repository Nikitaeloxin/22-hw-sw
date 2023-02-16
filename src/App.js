import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
      <div className='wrapper'>
        <div className='main'>
          <div className='container-fluid'>
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </div>
      </div>
  );
}

export default App;
