import React, { Component } from "react";

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: "Pizza de jamon y queso",
            calorias: 123,
            ingredientes: ["Tomate", "Queso", "Jamón cocido"],
        };

        return (
            // Para devolver más de un componente en el return, hay dos maneras de hacerlo
            // 1- Con React.Fragment, para no crear un componente en el DOM | MENOS RECOMENDADO
            /*<React.Fragment>
                <h1>Hola, soy el componente que acabas de crear.</h1>
                <h3>Me llamo MiComponente</h3>
            </React.Fragment> */

            // 2- Con una etiqueta html/html5 (section, article o div suelen ser los más comunes) | MÁS RECOMENDADO
            /* <section className="mi-componente">
                <h1>Hola, soy el componente que acabas de crear.</h1>
                <h3>Me llamo MiComponente</h3>
            </section> */

            <section className="mi-componente">
                <h1>Receta: {receta.nombre}</h1>
                <h4>{"Calorias: " + receta.calorias}</h4>

                <p>Ingredientes: </p>
                <ol>
                    {receta.ingredientes.map((ingrediente, i) => {
                        return <li key={i}>{ingrediente}</li>;
                    })}
                </ol>
            </section>
        );
    }
}

export default MiComponente;
