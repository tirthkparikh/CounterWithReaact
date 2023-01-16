
import './App.css';
import './components/classcounter'
import Classcounter from './components/classcounter';
import Hookcounter from './components/Hookcounter';


function App() {
  return (
    <div className="App">
      <Classcounter dif={20}/>
      <Hookcounter dif={10}/>
    </div>
  );
}

export default App;
