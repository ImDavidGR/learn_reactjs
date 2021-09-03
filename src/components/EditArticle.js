import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import swal from "sweetalert";

import Global from "../Global";
import Sidebar from "./Sidebar";

export default class EditArticle extends Component {
   apiUrl = Global.url;
   articleId = null;
   titleRef = React.createRef();
   contentRef = React.createRef();

   state = {
      article: {},
      status: null,
      selectedFile: null,
   };

   componentWillMount() {
      this.articleId = this.props.match.params.id;
      this.getArticle(this.articleId);

      this.validator = new SimpleReactValidator({
         messages: {
            required: "Campo obligatorio. Rellenalo por favor",
         },
      });
   }

   getArticle = (id) => {
      axios.get(this.apiUrl + "get-article/" + id).then((res) => {
         this.setState({
            article: res.data.article,
         });
      });
   };

   changeState = () => {
      this.validator.showMessages();
      this.forceUpdate();

      this.setState({
         article: {
            title: this.titleRef.current.value,
            content: this.contentRef.current.value,
         },
      });
   };

   fileChange = (e) => {
      this.setState({
         selectedFile: e.target.files[0],
      });
   };

   saveArticle = (e) => {
      e.preventDefault();
      this.changeState();

      if (this.validator.allValid()) {
         axios
            .put(this.apiUrl + "update-article/" + this.articleId, this.state.article)
            .then((res) => {
               if (res.data.article) {
                  this.setState({
                     article: res.data.article,
                     status: "waiting",
                  });

                  swal(
                     "Artículo editar",
                     "El artículo a sido editado correctamente",
                     "success"
                  );

                  // subir imagen
                  if (this.state.selectedFile !== null) {
                     // guardar id del articulo guardado
                     var articleId = this.state.article._id;

                     // crear form data y añadir el fichero
                     const formData = new FormData();
                     formData.append(
                        "file0",
                        this.state.selectedFile,
                        this.state.selectedFile.name
                     );

                     // peticion ajax
                     axios
                        .post(
                           this.apiUrl + "upload-image/" + articleId,
                           formData
                        )
                        .then((res) => {
                           if (res.data.article) {
                              this.setState({
                                 article: res.data.article,
                                 status: "success",
                              });
                           } else {
                              this.setState({
                                 article: res.data.article,
                                 status: "failed",
                              });
                           }
                        });
                  } else {
                     this.setState({
                        status: "success",
                     });
                  }
               } else {
                  this.setState({ status: "failed" });
               }
            });
      } else {
         this.validator.showMessages();
         this.forceUpdate();

         this.setState({ status: "failed" });
      }
   };

   render() {
      if (this.state.status === "success") {
         return <Redirect to="/blog" />;
      }

      return (
         <div className="center">
            <section id="content">
               <h1 className="subheader">Editar artículo</h1>
               {this.state.article.title && (
                  <form className="mid-form" onSubmit={this.saveArticle}>
                     <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input
                           type="text"
                           name="title"
                           ref={this.titleRef}
                           onChange={this.changeState}
                           defaultValue={this.state.article.title}
                        />

                        {this.validator.message(
                           "title",
                           this.state.article.title,
                           "required"
                        )}
                     </div>

                     <div className="form-group">
                        <label htmlFor="content">Contenido</label>
                        <textarea
                           name="content"
                           ref={this.contentRef}
                           onChange={this.changeState}
                           defaultValue={this.state.article.content}
                        />
                     </div>

                     <div className="form-group">
                        <label htmlFor="file0">Imagen</label>
                        <input
                           type="file"
                           name="file0"
                           onChange={this.fileChange}
                        />
                     </div>

                     <input
                        type="submit"
                        value="Guradar"
                        className="btn btn-success"
                     />
                  </form>
               )}
               {!this.state.article.title && (<h1 className="subheader">Cargando...</h1>)}
            </section>

            <Sidebar />
         </div>
      );
   }
}
