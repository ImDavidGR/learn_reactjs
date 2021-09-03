import React, { Component } from "react";

class CardPelicula extends Component {
   marcar = () => {
      this.props.marcarFavorita(this.props.pelicula);
   };

   render() {
      const { title, image } = this.props.pelicula;

      return (
         <article className="article-item" id="article-template">
            <div className="image-wrap">
               <img src={image} alt={title} />
            </div>

            <h2>{title}</h2>
            <span className="date">Hace 5 minutos</span>
            <span>Leer más</span>
            <button onClick={this.marcar}>Marcar como favorita</button>

            <div className="clearfix"></div>
         </article>
      );
   }
}

export default CardPelicula;
