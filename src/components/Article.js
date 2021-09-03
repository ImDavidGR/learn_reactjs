import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";

import Global from "../Global";
import Sidebar from "./Sidebar";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";

class Article extends Component {
   apiUrl = Global.url;
   state = {
      article: {},
      status: false,
   };

   componentWillMount() {
      this.getArticle();
   }

   getArticle = () => {
      var id = this.props.match.params.id;
      axios.get(this.apiUrl + "get-article/" + id).then((res) => {
         this.setState({
            article: res.data.article,
            status: true,
         });
      });
   };

   deleteArticle = (id) => {
      swal({
         title: "¿Quieres eliminar el artículo?",
         text: "Si lo borras no volverás a ver el artículo",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            axios.delete(this.apiUrl + "delete-article/" + id).then((res) => {
               this.setState({
                  article: res.data.article,
                  status: "deleted",
               });
            });

            swal("Poof!! Ya no volveras a ver el artículo", {
               icon: "success",
            });
         } else {
            swal("Tranquilo, todavia seguiras viendo el archivo");
         }
      });
   };

   render() {
      if (this.state.status === "deleted") {
         return <Redirect to="/blog" />;
      }

      const article = this.state.article;
      return (
         <div className="center">
            <section id="content">
               {this.state.status && (
                  <article className="article-item article-detail">
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

                        <h1 className="subheader">{article.title}</h1>
                     </div>
                     <span className="date">
                        <Moment locale="es" fromNow>
                           {article.date}
                        </Moment>
                     </span>

                     <p>{article.content}</p>

                     <button
                        onClick={() => {
                           this.deleteArticle(article._id);
                        }}
                        className="btn btn-danger"
                     >
                        Eliminar
                     </button>

                     <Link
                        to={"/blog/editar-articulo/" + article._id}
                        className="btn btn-primary"
                     >
                        Editar
                     </Link>
                     <div className="clearfix"></div>
                  </article>
               )}

               {!this.state.status && (
                  <div id="article">
                     <h2 className="subheader">El artículo no existe</h2>
                     <p>Intentelo con otro ´id´</p>
                  </div>
               )}

               {article === {} && this.state.status === true && (
                  <div id="article">
                     <h2 className="subheader">Cargando...</h2>
                     <p>Espere unos segundos</p>
                  </div>
               )}
            </section>

            <Sidebar />
         </div>
      );
   }
}

export default Article;
