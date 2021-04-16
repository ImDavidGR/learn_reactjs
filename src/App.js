import logo from './logo.svg';
import './App.css';

function getPresentacion(name, last_name, profesion) {
  return (<section>
            <h1>Hola, me llamo {name} {last_name}</h1>
            <h3>y soy {profesion}</h3>
          </section>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {getPresentacion('David', 'García', 'Web developer')}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
