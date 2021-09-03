import React, {Component} from "react";
// import logo from "../assets/images/logo.svg";

// COMPONENTS
import MiComponente from "./MiComponente";

class SeccionPruebas extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         contador: 0,
    //     };
    // }

    state = {
        contador: 0,
    };

    getPresentacion(name, last_name, edad) {
        return (
            <section>
                <h1>
                    Hola, me llamo {name} {last_name} y tengo {edad} años
                </h1>
            </section>
        );
    }

    sumar = (e) => {
        // this.contador++;
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        // this.contador--;
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola, bienvenido a mis pruebas de ReactJS para el curso de
                    Victor Robles
                </p>

                <h2 className="subheader">Funciones y JSX básico</h2>
                {this.getPresentacion("David", "García", 24)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    <MiComponente />
                </section>

                <h2 className="subheader">Estados</h2>
                <p>Contador: {this.state.contador}</p>

                <input
                    type="button"
                    value="Sumar 1"
                    onClick={this.sumar}
                />
                <input
                    type="button"
                    value="Restar 1"
                    onClick={this.restar}
                />
            </section>
        );
    }
}

export default SeccionPruebas;
