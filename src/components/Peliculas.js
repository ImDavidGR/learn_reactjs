import React, {Component} from "react";
import CardPelicula from './CardPelicula';
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {
        var {peliculas} = this.state;
        peliculas[0].title = "Inception"

        this.setState({peliculas})
    }

    favorita = (pelicula) => {
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount() {
        // alert("Se va a montar el componente PELÍCULA");

        this.setState({
            peliculas: [
                {title: "Origen", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.elseptimoarte.net%2Fcarteles%2Forigen_5356.jpg&f=1&nofb=1"},
                {title: "Gran Torino", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fstatic.cinemagia.ro%2Fimg%2Fdb%2Fmovie%2F02%2F63%2F19%2Fgran-torino-366375l.jpg&f=1&nofb=1"},
                {title: "Django desencadenado", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw1280%2FnaaYX64yMGzEFsATOFQDaxxQWbJ.jpg&f=1&nofb=1"}
            ],
            name: "David García",
            favorita: {}
        });
    }

    componentDidMount() {
        // alert("El componente se ya se ha montado");
    }

    componentWillUnmount() {
        // alert("Me voy a desmontar");
    }

    render() {

        var peliFav = (this.state.favorita.title) ?
            (<p><strong>La película favorita es: </strong>{this.state.favorita.title}</p>)
            : (<p>NO HAY UNA PELÍCULA FAVORITA</p>);

        return (
            <div id="peliculas">
                <Slider title="Peliculas" size="slider-small" />

                <div className="center">
                    <div id="content">
                        <p>Selección de 3 películas favoritas de {this.state.name}</p>
                        <button onClick={this.cambiarTitulo}>Cambiar el título de la primera peli</button>

                        {/*this.state.favorita.title ?
                            (<p><strong>La película favorita es: <span>{this.state.favorita.title}</span></strong></p>)
                            : (<p>NO HAY UNA PELÍCULA FAVORITA</p>) */}
                        {peliFav}

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <CardPelicula
                                            key={i}
                                            pelicula={pelicula}
                                            marcarFavorita={this.favorita}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Peliculas;
