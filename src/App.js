import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// COMPONENTS IMPORT
import MiComponente from "./components/MiComponente";

function getPresentacion(name, last_name, profesion) {
    return (
        <section>
            <h1>
                Hola, me llamo {name} {last_name}
            </h1>
            <h3>y soy {profesion}</h3>
        </section>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {getPresentacion("David", "García", "Web developer")}
            </header>

            <section className="componentes">
                <MiComponente />
            </section>
        </div>
    );
}

export default App;
