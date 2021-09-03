import React, {Component} from 'react';
import Sidebar from './Sidebar';

class Formulario extends Component {
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    };

    getForm = (e) => {
        e.preventDefault();

        var generoSelected = "";
        if (this.generoHombreRef.current.checked) {
            generoSelected = "hombre";
        } else if (this.generoMujerRef.current.checked) {
            generoSelected = "mujer";
        } else if (this.generoOtroRef.current.checked) {
            generoSelected = "otro";
        }

        this.setState(
            {
                user: {
                    nombre: this.nombreRef.current.value,
                    apellidos: this.apellidosRef.current.value,
                    bio: this.bioRef.current.value,
                    genero: generoSelected
                }
            }
        );
    }

    render() {
        const user = this.state.user;

        return (
            <div id="formulario">
                <h1 className="subheader">Formulario</h1>

                {/* Mostrar datos del formulario */}
                <div id="user-data">
                    {user.nombre &&
                        <p><strong>Nombre:</strong> {user.nombre}</p>
                    }
                    {user.apellidos &&
                        <p><strong>Apellidos:</strong> {user.apellidos}</p>
                    }
                    {user.bio &&
                        <p><strong>Biografia:</strong> {user.bio}</p>
                    }
                    {user.genero &&
                        <p><strong>Genero:</strong> {user.genero}</p>
                    }
                </div>

                <div className="center">
                    <div id="content">
                        {/* Listado de artículos que vendran del API */}
                        <form className="mid-form" onSubmit={this.getForm} onChange={this.getForm}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>
                    </div>

                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Formulario;
