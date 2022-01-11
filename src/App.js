import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Works from './containers/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Works />
    </div>
  );
}

export default App;
