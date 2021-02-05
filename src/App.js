import logo from './logo.svg';
import './App.css';
import { Header } from "./components/starts/Header";
import { Footer } from "./components/starts/Footer";
import Dashboard from "./components/starts/Dashboard";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Header name="Pooja"></Header>
      <Dashboard company="Pooja Company"></Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
