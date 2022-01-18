import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Basket></Basket>
    </div>
  );
}

export default App;
