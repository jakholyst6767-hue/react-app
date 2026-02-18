import logo from './logo.svg';
import './App.css';
import{News} from "./components/news";

function App() {

const name = "Kuba";

  return (
    <div className="crazy-glow">
      <header className="App-header">
        <h1>Hello {name}!</h1>
        <News></News>
      </header>
    </div>
  );
}

export default App;
