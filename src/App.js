import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// COMPONENTS IMPORT
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";

function getPresentacion(name, last_name, profesion) {
    return (
        <section>
            <h1>
                Hola, me llamo {name} {last_name} y soy {profesion}
            </h1>
        </section>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <Slider />

            <section className="componentes">
                <MiComponente />
                <Peliculas />
            </section>
        </div>
    );
}

export default App;
