import logo from './logo.svg';
import './App.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        Page content will go here.
      </div>
      <Footer />
    </div>
  );
}

export default App;