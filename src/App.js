import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// COMPONENTS IMPORT
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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

            <div className="center">
                <section id="content">
                    <section className="componentes">
                        <MiComponente />
                        <Peliculas />
                    </section>
                </section>

                <Sidebar />

                <div className="clearfix"></div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
