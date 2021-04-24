import React, { Component } from "react";
import MensajeEstatico from "./MensajeEstatico";

class Peliculas extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Soy el componente de películas</h1>
                <MensajeEstatico />
            </React.Fragment>
        );
    }
}

export default Peliculas;
