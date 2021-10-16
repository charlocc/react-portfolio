import './App.css';
import Header from './components/Header';
import About from './components/About';
import Mywork from './components/Mywork';
import Contact from './components/Contact';
import Footer from './components/Footer';

const styles = {
  background: {
    backgroundImage: `url(./images/background.jpg)`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    width: '100vw',
    fontFamily:'Poppins',
  },
};

function App() {
  
  return (
    <div style={styles.background}>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Mywork />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;