import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {
   render() {
      return (
         <div id="blog">
            <Slider title="Blog" size="slider-small" />

            <div className="center">
               <div id="content">
                  {/* Listado de artículos que vendran del API */}
                  <Articles/>
               </div>

               <Sidebar showBlogAction="true" />
            </div>
         </div>
      );
   }
}

export default Blog;
