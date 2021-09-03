import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Search extends Component {
   render() {
      var searched = this.props.match.params.searched;

      return (
         <div id="blog">
            <Slider
               title={"Busqueda realizada: " + searched}
               size="slider-small"
            />

            <div className="center">
               <div id="content">
                  {/* Listado de artículos que vendran del API */}
                  <Articles search = {searched} />
               </div>

               <Sidebar showBlogAction="true" />
            </div>
         </div>
      );
   }
}
export default Search;