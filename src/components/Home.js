import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {
   render() {
      return (
         <div id="home">
            <Slider
               title="Bienvenido a la web del curso Master en Frameworks JS"
               size="slider-big"
               btn="Ir al blog"
            />

            <div className="center">
               <div id="content">
                  <h1 className="subheader">Últimos artículos</h1>
                  <Articles lastArticles="true" />
               </div>
               <Sidebar />
            </div>
         </div>
      );
   }
}

export default Home;
