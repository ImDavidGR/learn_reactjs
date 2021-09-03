import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// componentes para las rutas
import MiComponente from "./components/MiComponente";
import Error_404 from "./components/Error_404";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Peliculas from "./components/Peliculas";
import Search from "./components/Search";
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";

class Router extends Component {
   render() {
      return (
         <BrowserRouter>
            <Header />

            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/home" component={Home} />

               <Route exact path="/blog" component={Blog} />
               <Route exact path="/blog/articulo/:id" component={Article} />
               <Route exact path="/blog/nuevo-articulo" component={CreateArticle} />
               <Route exact path="/blog/editar-articulo/:id" component={EditArticle} />
               <Route exact path="/blog/search/:searched" component={Search} />
               <Route exact path="/redirect/:search" render={(props) => {
                    var search = props.match.params.search;
                    return <Redirect to={"/blog/search/" + search} />;
                  }}
               />

               <Route exact path="/formulario" component={Formulario} />
               <Route exact path="/peliculas" component={Peliculas} />

               <Route exact path="/segunda-ruta" component={MiComponente} />
               {/*pagina sin componente*/}
               <Route
                  exact
                  path="/pagina-1"
                  render={() => (
                     <React.Fragment>
                        <h1>Hola mundo, desde pagina-1</h1>
                        <MiComponente saludo="Hola amigo" />
                     </React.Fragment>
                  )}
               />
               <Route
                  exact
                  path="/pruebas/:name/:apel?"
                  render={() => {
                     <div id="content">
                        <h1 className="subheader">Página de pruebas</h1>
                     </div>;
                  }}
               />

               <Route component={Error_404} />
            </Switch>

            <div className="clearfix"></div>

            <Footer />
         </BrowserRouter>
      );
   }
}

export default Router;
