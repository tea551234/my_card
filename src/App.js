import logo from './logo.svg';
import './App.css';
import Mycard from './components/Mycard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleSlider from './components/SimpleSlider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleSlider />
        <SimpleSlider />
      </header>
    </div>
  );
}

export default App;
