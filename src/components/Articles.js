import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";

import Global from "../Global";

class Articles extends Component {
   apiUrl = Global.url;

   state = {
      articles: {},
      status: null,
   };

   componentWillMount() {
      var lastArticles = this.props.lastArticles;
      var search = this.props.search;

      if (lastArticles) {
         this.getLastArticles();
      } else if (search && search !== null && search !== undefined) {
         this.getArticlesBySearch(search);
      } else {
         this.getArticles();
      }
   }

   getArticles = () => {
      axios.get(this.apiUrl + "get-articles").then((res) => {
         this.setState({
            articles: res.data.articles,
            status: "success",
         });
      });
   };

   getLastArticles = () => {
      axios.get(this.apiUrl + "get-articles/last").then((res) => {
         this.setState({
            articles: res.data.articles,
            status: "success",
         });
      });
   };

   getArticlesBySearch = (searched) => {
      axios
         .get(this.apiUrl + "search-article/" + searched)
         .then((res) => {
            this.setState({
               articles: res.data.articles,
               status: "success",
            });
         })
         .catch((err) => {
            this.setState({
               articles: [],
               status: "success",
            });
         });
   };

   render() {
      if (this.state.articles.length >= 1) {
         const listArticles = this.state.articles.map((article) => {
            return (
               <article
                  key={article._id}
                  className="article-item"
                  id="article-template"
               >
                  <div className="image-wrap">
                     {article.image !== null ? (
                        <img
                           src={this.apiUrl + "get-image/" + article.image}
                           alt={article.title}
                        />
                     ) : (
                        <img
                           src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst4.depositphotos.com%2F14953852%2F24787%2Fv%2F600%2Fdepositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg&f=1&nofb=1"
                           alt="sin imagen"
                        />
                     )}
                  </div>

                  <h2>{article.title}</h2>
                  <span className="date">
                     <Moment locale="es" fromNow>
                        {article.date}
                     </Moment>
                  </span>

                  <Link to={"/blog/articulo/" + article._id}>Leer más</Link>

                  <div className="clearfix"></div>
               </article>
            );
         });

         return <div id="articles">{listArticles}</div>;
      } else if (
         this.state.articles.length === 0 &&
         this.state.status === "success"
      ) {
         return (
            <div id="articles">
               <h2>Sin articluos para mostrar</h2>
            </div>
         );
      } else {
         return (
            <div id="articles">
               <h2>Cargando...</h2>
               <p>Espere mientras cargan los articulos</p>
            </div>
         );
      }
   }
}

export default Articles;
