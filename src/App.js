import './App.css';
import Header from './components/Header';
import About from './components/About';
import Mywork from './components/Mywork';
import Footer from './components/Header';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Mywork />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;