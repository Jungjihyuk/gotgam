webpackJsonp([1],{"8Bq5":function(t,n){},"9WXl":function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=c("On8H"),s=c("MCMF"),a={components:{HomeHeader:e.default,Section1:s.default}},i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("HomeHeader"),this._v(" "),n("div",{staticClass:"wrap"},[n("Section1")],1)],1)},staticRenderFns:[]};var r=c("VU/8")(a,i,!1,function(t){c("fY0o")},null,null);n.default=r.exports},CU3Q:function(t,n){},Cz8s:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=c("c/Tr"),s=c.n(e);window.addEventListener("resize",function(t){i(),document.getElementsByTagName("body")[0].classList.remove("display_menu")});var a=0;function i(){var t=document.getElementById("menu").getElementsByTagName("li");s()(t).forEach(function(t){t.style.marginTop=0});var n=document.getElementsByClassName("drop_menu");s()(n).forEach(function(t){t.classList.remove("display")})}window.onscroll=function(){if(!document.getElementById("loader")){i();var t=document.getElementsByTagName("header")[0];if(Math.abs(a-this.scrollY)<=5)return;this.scrollY<a?t.style.top="0":t.style.top="-"+t.clientHeight+"px",a=this.scrollY}};var r={methods:{display_menu:function(){var t=document.getElementsByTagName("body")[0];t.classList.contains("display_menu")?t.classList.remove("display_menu"):t.classList.add("display_menu")},display_drop_menu:function(){var t=event.target.parentElement.getElementsByClassName("drop_menu")[0],n=document.getElementsByClassName("drop_menu");s()(n).forEach(function(n){n!=t&&n.classList.remove("display")});var c=document.getElementById("menu").getElementsByTagName("li");s()(c).forEach(function(t){t.style.marginTop=0}),t.classList.contains("display")?t.classList.remove("display"):t.classList.add("display"),window.innerWidth<660&&t.classList.contains("display")&&(event.target.parentElement.nextSibling.nextSibling.style.marginTop=t.clientHeight+"px")}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("div",{staticClass:"wrap"},[e("div",{attrs:{id:"hamburger"},on:{click:function(n){return t.display_menu()}}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")]),t._v(" "),e("img",{attrs:{src:c("xAza"),alt:"logo"}}),t._v(" "),e("nav",{attrs:{id:"menu"}},[e("li",{staticClass:"drop"},[e("a",{on:{click:function(n){return t.display_drop_menu()}}},[t._v("Travel "),e("i",{staticClass:"icon-arrow"})]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("ul",{staticClass:"drop_menu"},[n("a",[this._v("All Travel")]),this._v(" "),n("a",[this._v("Travel By Region")]),this._v(" "),n("a",[this._v("Travel By Mood")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("a",{attrs:{href:"/enroll"}},[this._v("Registration")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("a",[this._v("About")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"login_bar"},[n("li",[n("a",[this._v("Login")])]),this._v(" "),n("li",[n("a",[this._v("Join")])])])}]};var o=c("VU/8")(r,l,!1,function(t){c("LVAd")},null,null);n.default=o.exports},Gkxr:function(t,n,c){t.exports=c.p+"static/img/jade.4e545b0.png"},LVAd:function(t,n){},MCMF:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"section1_wrap"},[c("div",{staticClass:"section1_inner_wrap"},[c("div",{staticClass:"intro_wrap"},[c("div",{staticClass:"intro_inner_wrap"},[c("svg",{staticStyle:{"enable-background":"new 0 0 511.438 511.438"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 511.438 511.438","xml:space":"preserve"}},[c("ellipse",{staticStyle:{fill:"#6DAFDF"},attrs:{cx:"283.481",cy:"296.079",rx:"215.352",ry:"215.352"}}),t._v(" "),c("g",[c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M167.343,469.641c-0.048,0.08-0.112,0.128-0.16,0.208c0.32,0.096,0.624,0.24,0.944,0.32\n\nL167.343,469.641z"}}),t._v(" "),c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M173.471,165.849l-0.384-0.896c3.632-0.304,4.032-2.816,6.816-3.568\n\nc3.168-0.816,2.032,0.224,5.104,0.32c2.48,0.064,3.872,1.952,6.784,0.832c-0.752,1.168-1.936,1.92-3.104,2.688\n\nc-2.448,1.504-4.928,3.056-7.744,3.504C178.143,169.177,174.927,168.281,173.471,165.849z"}}),t._v(" "),c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M204.031,360.201c-0.176,1.888-1.392,3.472-2.464,5.008c-4.784,6.768-7.936,14.768-9.04,22.992\n\nc-1.088,7.888-1.376,17.68-8.528,21.12c-4.08,1.936-9.6,1.184-12.464,4.72c-0.896,1.072-1.376,2.448-1.856,3.744\n\nc-2.096,6.064-4.192,12.128-6.304,18.192c-2.176-0.336-4.4-0.72-6.56-1.104c2.528,0.992,4.096,4.608,2.384,6.896\n\nc-2.4-1.472-5.76-0.128-7.28,2.272c-1.472,2.4-1.472,5.424-0.912,8.192c1.712,8.208,8.208,15.168,16.192,17.632\n\nc-1.584,2.576-5.84,1.136-8.336-0.832c-18-13.952-30.944-34.256-36-56.448c-1.792-7.824-2.72-16.096-6.768-22.992\n\nc-3.392-5.824-8.768-10.272-12.144-16.112c-4.736-8.304-5.04-18.784-10.64-26.512c-3.136-4.4-8.048-9.888-4.752-14.16\n\nc1.328-1.776,4.032-3.36,3.136-5.36c-0.304-0.656-0.96-1.088-1.456-1.664c-1.904-2.32-0.272-5.68,0.928-8.432\n\nc2.016-4.8,2.352-10.048,1.968-15.344c-4.816-4.896-8.48-10.848-10.592-17.376c-1.264-3.984-2.944-8.976-7.12-9.296\n\nc-0.88-3.088-1.808-6.16-2.672-9.248c-0.464,1.04-1.568,1.664-2.752,1.728c6.432-49.04,29.184-92.432,62.32-125.056\n\nc0.672-0.256,1.376-0.608,2.08-0.96c7.616-3.808,13.856-9.856,21.264-14.064c1.52-0.88,3.232-1.696,5.024-1.392\n\nc1.744,0.256,3.28,2.16,2.544,3.776c-0.288,0.672-0.896,1.168-1.52,1.568c-8.768,6.528-18.256,12.112-28.256,16.592\n\nc-1.2,0.512-2.464,1.104-3.072,2.24c-1.104,1.936,0.384,4.528,2.432,5.392s4.4,0.576,6.576,0.224\n\nc-1.968,2.464-2.72,5.872-1.984,8.96c1.984,0.32,2.784-2.368,3.488-4.224c2.912-7.376,15.12-9.664,14.848-17.648\n\nc3.152,1.92,6.704-1.664,8.896-4.656c2.192-3.024,6.816-5.856,9.072-2.928c0.048,1.568,0.144,3.136,0.192,4.704\n\nc4.352-0.8,8.752-1.632,13.088-2.432c-2.544,1.552-3.6,5.136-2.368,7.856c1.232,2.72,4.656,4.256,7.488,3.36\n\nc-0.192,2.288-2.352,3.904-4.288,5.136c-4.944,3.248-10.24,6.576-15.84,7.968l1.088,2.704c-0.144,0.032-0.304,0.08-0.448,0.064\n\nc-3.52,0.112-7.056-2.656-10.832-2.4c-2.304,0.144-5.12-0.032-6.592,2.208c-0.208,0.272-1.296,4.304-0.704,4\n\nc2.112-1.04,4.24-2.064,6.304-3.104c0.528,1.696,0.56,3.552,0.096,5.328c2.496-0.08,5.04,0.624,7.136,2.064\n\nc-2.624,5.152-8.736,8.32-14.496,7.52c0.064-1.76,0.08-3.504,0.144-5.264c-4.736-0.688-8.896,3.136-11.536,7.072\n\nc-2.688,3.968-4.848,8.576-9.008,10.944c-2.544,1.504-5.552,1.936-8.256,3.136c-2.672,1.248-5.216,3.76-4.88,6.672\n\nc0.16,1.376,0.944,2.704,0.816,4.112c-0.32,2.608-3.456,3.632-5.616,5.2c-3.696,2.688-4.912,7.984-8.816,10.32\n\nc-2.848,1.728-6.432,1.44-9.664,2.208c-3.216,0.768-6.592,3.728-5.52,6.864c-1.584,0.432-3.408-0.848-3.456-2.512\n\nc-6.304,10.624-10.768,22.352-13.056,34.496c2.64,2.128,5.744-2.112,6.496-5.44c0.8-3.312,4-7.504,6.592-5.344\n\nc-0.944,4.768-1.888,9.504-2.816,14.272c-0.208,0.912-0.368,1.888,0.016,2.736c0.464,1.056,1.6,1.568,2.432,2.352\n\nc2.336,2.304,1.76,6.064,1.696,9.328c-0.112,4,0.96,7.968,2.816,11.504c-0.144-0.688-0.256-1.392-0.352-2.08\n\nc3.76,0.736,7.776-0.224,10.8-2.576c1.6-1.264,2.976-2.928,4.912-3.488c1.984-0.608,4.096,0.064,6.048,0.736\n\nc6.064,2.096,12.512,4.416,16.32,9.552c1.936,2.608,3.04,5.808,5.392,8.016c5.328,5.12,14.992,3.648,19.808,9.28\n\nc3.856,4.544,2.64,11.392,1.136,17.216c-2.72-1.728-6.768,1.904-5.28,4.784c1.616-1.552,3.472-3.2,5.664-3.056\n\nc2.24,0.096,3.984,3.28,2.24,4.592c4.208-4.704,13.6-2.048,14.72,4.224c5.424,0.736,10.896,1.488,16.304,2.272\n\nC188.191,350.633,204.879,352.201,204.031,360.201z"}}),t._v(" "),c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M185.487,133.145c-2.176,0.896-4.976-0.464-5.616-2.72s1.024-4.896,3.344-5.264\n\nc1.472-0.24,3.456,0.048,3.984-1.344c0.16-0.416,0.112-0.896,0.144-1.344c0.112-2.656,2.64-4.704,5.264-5.2\n\nc2.624-0.496,5.296,0.192,7.872,0.88c0.8,1.968,0.928,4.224,0.352,6.272c-1.792-0.032-3.584-0.08-5.392-0.112\n\nc-0.032,2.976-0.56,6.704-3.392,7.616c-2.528,0.816-5.632-1.216-7.808,0.32"}}),t._v(" "),c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M215.279,105.257c5.04-2.016,9.408-5.44,14.384-7.6c8.56-3.712,18.256-3.472,27.584-3.152\n\nc21.232,0.72,42.464,1.424,63.696,2.144c-5.088,2.368-10.176,4.752-15.264,7.12c-4.16,1.936-8.864,3.92-13.184,2.384\n\nc-0.336,3.536,2.688,7.024,6.224,7.216c-9.056,4.816-20.784-1.472-30.256,2.448c-3.968,1.648-7.312,5.024-11.584,5.424\n\nc-2.48,0.224-4.976-0.592-7.44-0.208c-4.128,0.624-6.944,4.32-10.144,7.008c-3.696,3.104-8.928,5.04-13.36,3.152\n\ns-6.368-8.784-2.512-11.696c1.888-1.44,4.464-1.52,6.64-2.464s4.032-3.728,2.56-5.6c-0.64-0.816-1.744-1.184-2.336-2.032\n\nc-0.624-0.928-0.48-2.192-0.976-3.2c-1.904-3.92-8.224,0.784-12.192-1.008"}}),t._v(" "),c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M278.463,127.321c2.912-0.48,5.504-2.016,8.256-3.072s5.984-1.584,8.528-0.112\n\nc0.656,2-1.712,3.632-3.728,4.208c-3.872,1.088-8.032,1.184-11.952,0.272"}}),t._v(" "),c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M450.303,159.929c-0.784,0.048-1.616-0.048-2.416-0.304c-3.6-1.008-6.192-4.016-9.168-6.256\n\nc-6.896-5.232-16.672-6.496-24.704-3.104c2.016-2.56,3.152-5.808,3.168-9.072l-1.136,0.32\n\nc-12.256-8.208-26.688-16.848-40.912-12.784c-3.28,0.96-6.32,2.528-9.648,3.44c-3.536,0.992-7.408,1.232-10.512,3.184\n\nc-3.152,1.952-5.056,6.56-2.656,9.296c2.048,2.336,5.584,1.968,8.624,2.464c2.992,0.48,6.256,3.728,4.432,6.192\n\nc-13.728,5.36-27.488,10.784-41.216,16.192c6,2.384,9.584,9.6,7.872,15.84c-4.528,0.496-8.672-2.512-13.168-3.088\n\nc-6.544-0.768-13.184,4.624-13.76,11.168c-0.624,6.56,5.024,13.024,11.584,13.344c4.912,0.272,9.92-2.384,14.608-0.816\n\nc0.48-4.464,3.792-8.048,7.152-11.056c6.512-5.728,15.632-10.72,23.6-7.168c2.608,1.136,4.784,3.088,6.896,5.024\n\nc4.656,4.208,9.312,8.464,13.968,12.72c1.664-1.504,3.312-3.008,4.976-4.464c2.496,2.992,4.992,5.984,7.52,9.024\n\nc1.424-0.832,2.896-1.616,4.304-2.464c0.816,2.592,1.664,5.136,2.48,7.728c0.576-2.752,1.088-5.44,1.6-8.144\n\nc3.2,0.304,6.592,0.624,9.616-0.656c3.008-1.216,5.376-4.592,4.352-7.68c-0.528-1.648-1.952-3.008-2.144-4.72\n\nc-0.416-3.44,4.592-5.472,7.664-3.696c3.008,1.712,4.336,5.36,5.44,8.704c0.944-3.264,1.84-6.48,2.768-9.728\n\nc2.544,8.176,6.448,15.936,11.472,22.848c-9.84-2.544-20.416-2.144-30,1.104c2.704,4.368,7.648,7.184,12.752,7.312\n\nc2.288,0.096,4.848-0.272,6.512,1.296c1.248,1.2,1.472,3.024,1.6,4.688c0.48,4.72,0.96,9.392,1.392,14.048\n\nc-4.976-4.672-12.592-4.672-19.44-5.248c-6.848-0.64-14.736-3.04-16.864-9.584c-2.928,2.896-4.416,7.184-3.904,11.312\n\nc-6.992-2.16-14.976-5.408-16.576-12.544c-5.68,1.68-12.352-2.304-13.488-8.096c-0.4-2.032-0.4-4.464-2.08-5.648\n\nc-1.024-0.704-2.4-0.688-3.664-0.624c-10.624,0.544-21.2,1.024-31.776,1.568c-5.776,0.32-11.76,0.608-16.992,3.104\n\nc-5.232,2.448-9.616,7.632-9.408,13.408c-10.048,5.12-18.8,12.896-24.96,22.32c-1.952,2.896-3.68,6.256-3.216,9.696\n\nc0.32,2.656,1.92,5.008,2.288,7.616c0.64,4.48-2.16,8.592-3.52,12.912c-3.808,12.256,4.864,24.576,13.008,34.576\n\nc3.856,4.64,8.304,9.712,14.32,10.336c3.728,0.384,7.392-1.04,10.976-2.176c10.272-3.296,21.28-4.384,31.984-3.264\n\nc-2.56,1.744-0.288,6.032,2.688,6.864c2.976,0.832,6.288,0.064,9.152,1.264c6.512,2.816,4.96,12.528,1.536,18.704\n\nc1.52-0.192,3.104-0.384,4.672-0.576c-0.96,2.08-1.92,4.176-2.896,6.208c9.056,1.76,11.744,13.984,9.024,22.832\n\nc-2.672,8.864-8.544,16.784-9.28,26c-0.368,5.056,0.864,10.064,2.112,14.976c3.104,12.448,6.208,24.912,9.312,37.408\n\nc10.8,2.016,17.968-11.44,28.352-15.12c3.904-1.408,8.384-1.456,11.536-4.096c3.04-2.544,2.528-8.96-1.168-9.2\n\nc5.04-0.208,9.616-4.512,10.08-9.552c0.144-1.408,0.032-2.832,0.32-4.224c0.464-1.968,1.84-3.648,3.168-5.264\n\nc8.448-10.592,14.272-22.96,20.08-35.168c1.536-3.264,3.056-6.496,4.576-9.76c5.76-12.176,11.472-24.304,17.232-36.48\n\nc2.256-4.784,4.512-9.52,6.784-14.304c-2.96,4.256-9.92,3.216-13.696-0.336c-3.824-3.568-5.584-8.704-8.48-13.04\n\nc-2.448-3.728-5.84-7.104-6.832-11.52c-0.576-2.528-0.256-5.184-0.528-7.792c-0.608-5.648-4-10.56-6.208-15.776\n\ns-3.088-11.872,0.736-16.064c9.056,18.496,17.168,37.472,24.368,56.832c1.104-2.864,3.408-5.248,6.224-6.48\n\nc2.064-0.944,4.32-1.232,6.48-1.984c5.696-2.08,9.92-7.712,10.304-13.744c0.336-6.032-3.12-12.16-8.56-14.896\n\nc-2.688-1.344-5.824-1.936-8.352-3.712c-2.528-1.728-4.192-5.392-2.368-7.872c1.712-2.336,5.456-2.048,7.936-0.512\n\nc2.48,1.584,4.224,4.08,6.56,5.84c1.68,1.28,3.664,2.192,5.488,3.376c9.888,6.544,11.552,20.08,12.944,31.888\n\nc0.768,6.352,1.68,12.656,2.832,18.88c0.128-1.312,0.224-2.672,0.304-3.984C502.031,253.369,483.519,200.585,450.303,159.929z\n\n M465.391,231.833c-1.408-0.192-2.656-1.2-3.712-2.144c-1.76-1.584-3.488-3.392-3.872-5.712c-0.464-2.768,1.056-5.792-0.24-8.32\n\nc-0.608-1.216-1.776-2.016-2.736-2.912c-2.544-2.304-4.288-5.504-4.8-8.848c-0.448-2.96,0.736-6.784,3.728-7.088\n\nc1.424-0.16,2.928,0.72,3.472,2.08l-2.064,0.944c3.328,0.608,4.56,5.76,1.84,7.776c-0.368,0.32-0.816,0.576-0.848,1.072\n\nc-0.016,0.288,0.16,0.592,0.384,0.8c1.952,2.416,5.008,3.44,7.632,5.088c2.64,1.584,5.136,4.384,4.512,7.36\n\nc-0.896,0.288-1.744,0.528-2.64,0.8c-0.992,0.864-0.368,2.56,0.56,3.552c0.912,0.992,2.112,1.984,2.08,3.36\n\nC468.575,231.113,466.847,232.025,465.391,231.833z"}}),t._v(" "),c("path",{staticStyle:{fill:"#E8EFF3"},attrs:{d:"M457.103,381.481l-3.664,2.256c0.944,4.384-1.84,9.264-6.096,10.672\n\nc-2.256,0.752-5.2,0.944-6.08,3.152c-0.752,1.872,0.624,3.904,0.688,5.92c0.112,3.328-3.152,5.6-5.536,7.92\n\ns-3.872,6.864-0.992,8.544c0.672,0.384,1.456,0.512,2.224,0.64c3.216,0.496,6.736,0.816,9.504-0.896\n\nc7.904-4.912,1.68-20,9.504-25.056c1.104-0.72,2.48-1.2,3.152-2.336C461.727,388.905,455.455,385.033,457.103,381.481z"}})]),t._v(" "),c("path",{staticStyle:{fill:"#FFD93B"},attrs:{d:"M222.143,129.401c-2.144,1.552-4.336,3.024-6.64,4.352c-1.856,1.072-3.056,1.68-3.888,2.032\n\tc-4.144,4.096-8.416,8.016-12.416,12.272c-4.064,4.336-7.856,8.88-11.744,13.36c-0.064,0.112-0.032,0.096-0.112,0.224\n\tc-11.424,20.096-23.568,40.016-38.128,58.032c190.768,102.864,257.712,210.176,196.528,282.48c0.128-0.048,0.272-0.112,0.4-0.16\n\tc47.648-19.872,80.256-67.28,76.448-118.784C417.007,307.609,351.999,218.233,222.143,129.401z"}}),t._v(" "),c("path",{staticStyle:{fill:"#5A5F63"},attrs:{d:"M223.599,32.585l-31.024,5.408l-10.928-10.928c-3.344-3.344-8.784-3.344-12.144,0\n\tc-3.344,3.344-3.344,8.784,0,12.128l2.4,2.4l-13.776,2.4l-9.04-9.04c-3.344-3.36-8.784-3.36-12.144,0\n\tc-3.344,3.344-3.344,8.784,0,12.128l0.496,0.512l-35.968,6.256l-27.04-27.04c-8.736-8.736-18.832-16.032-30.048-21.184\n\tc-8.384-3.84-17.776-6.704-25.36-5.232c-3.04,0.592-5.44,2.992-6.032,6.032c-1.648,8.496,2.144,19.264,6.672,28.352\n\tc4.928,9.888,11.536,18.832,19.344,26.656l27.456,27.456l-6.272,35.968l-0.512-0.496c-3.36-3.344-8.784-3.344-12.144,0\n\ts-3.36,8.784,0,12.128l9.04,9.04l-2.4,13.776l-2.4-2.384c-3.344-3.36-8.784-3.36-12.144,0c-3.344,3.344-3.344,8.784,0,12.128\n\tl10.928,10.928l-5.408,31.024c-0.576,3.328,0.496,6.736,2.88,9.12c4.832,4.832,12.928,3.76,16.336-2.144l13.888-24.08\n\tc8.16,7.12,17.248,9.872,17.248,9.872s-3.2-10.736-11.776-19.344l9.296-16.096c8.416,7.856,18.336,10.848,18.336,10.848\n\ts-3.2-10.784-11.824-19.408c-0.32-0.352-0.672-0.624-1.008-0.944l13.856-24.016l34.864,34.864l-9.664,43.312\n\tc-1.536,7.616,2.864,15.232,10.24,17.68c7.392,2.448,15.488-1.056,18.864-8.224l12.976-31.6c8.448,1.392,16.912,1.264,20.896,0.128\n\tc4.192,2.592,7.008,4,7.008,4s-1.408-2.816-4-7.008c1.136-3.968,1.264-12.432-0.128-20.896l31.792-13.056\n\tc1.616-0.752,3.056-1.776,4.304-3.024c4.144-4.16,5.584-10.192,3.744-15.744c-2.448-7.392-10.064-11.792-17.68-10.24l-43.312,9.664\n\tl-34.88-34.88l24.016-13.856c0.32,0.336,0.592,0.688,0.928,1.024c8.624,8.624,19.408,11.824,19.408,11.824\n\ts-3.008-9.904-10.864-18.336l16.096-9.296c8.624,8.576,19.36,11.776,19.36,11.776s-2.752-9.072-9.872-17.248l24.08-13.888\n\tc5.92-3.408,6.976-11.504,2.16-16.336C230.335,33.081,226.927,31.993,223.599,32.585z"}}),t._v(" "),c("path",{staticStyle:{fill:"#E9B02C"},attrs:{d:"M390.383,445.177c-1.424,10-1.312,9.888-7.84,29.44c3.744-14.016,5.36-17.248,6.24-29.6\n\tc7.696-53.872-29.008-121.744-63.04-158.72c-17.04-20.608-40.096-43.376-62.24-61.6c-19.072-15.92-27.68-21.536-43.68-32.96\n\tc-3.68-2.4-4.64-7.52-2.08-11.04c2.56-3.68,7.52-4.64,11.2-2.08c0,0.16,0.16,0.16,0.32,0.32\n\tc15.696,12.208,22.496,16.848,43.04,35.52c23.376,21.264,44.736,44.672,60.96,65.92\n\tC368.463,323.753,398.799,386.105,390.383,445.177z"}})]),t._v(" "),c("p",{staticClass:"intro_title"},[t._v("Search and Compare")]),t._v(" "),c("p",{staticClass:"intro_content"},[t._v("수많은 여행 경험을 곶감과 공유해보세요.")])])]),t._v(" "),c("div",{staticClass:"intro_wrap"},[c("div",{staticClass:"intro_inner_wrap"},[c("svg"),t._v(" "),c("p",{staticClass:"intro_title"},[t._v("Plan Your Trip")]),t._v(" "),c("p",{staticClass:"intro_content"},[t._v("막막하고 복잡한 여행계획을 곶감으로 쉽고 재미있게 계획해봐요.")])])]),t._v(" "),c("div",{staticClass:"intro_wrap"},[c("div",{staticClass:"intro_inner_wrap"},[c("svg"),t._v(" "),c("p",{staticClass:"intro_title"},[t._v("Emotion Sharing")]),t._v(" "),c("p",{staticClass:"intro_content"},[t._v("곶감과 함께 감정을 공유해봐요.")])])])])])},staticRenderFns:[]};var s=c("VU/8")({},e,!1,function(t){c("N/v+")},null,null);n.default=s.exports},"N/v+":function(t,n){},NHnr:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=c("7+uW"),s=(c("xsZ7"),c("dAjm")),a=c("xEgl"),i={name:"App",components:{Index:s.default,registration:a.default}},r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Index")],1)},staticRenderFns:[]};var l=c("VU/8")(i,r,!1,function(t){c("CU3Q")},null,null).exports,o=c("Dd8w"),d=c.n(o),v=c("/ocq"),u=[{path:"/",component:"index"},{path:"/enroll",component:"registration"}].map(function(t){return d()({},t,{component:function(){return c("mUJ2")("./"+t.component+".vue")}})});e.a.use(v.a);var _=new v.a({routes:u,mode:"history"});e.a.config.productionTip=!1,new e.a({el:"#app",router:_,render:function(t){return t(l)}})},On8H:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"homeHeader"},[c("div",{staticClass:"hh_wrap1"},[c("div",{staticClass:"hh_inner_wrap1"},[t._m(0),t._v(" "),t._m(1),t._v(" "),c("div",{staticClass:"hh_form_wrap"},[c("div",{staticClass:"desti_wrap"},[c("div",{staticClass:"desti_form"},[c("div",{staticClass:"desti_icon"},[c("svg",{attrs:{"data-v-3c805d31":"","data-v-738935cd":"",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"20",viewBox:"0 0 19 26"}},[c("g",{attrs:{"data-v-3c805d31":"",fill:"none","fill-rule":"evenodd",stroke:"#ff4401","stroke-linecap":"square","stroke-width":"2",transform:"translate(1 1.6)"}},[c("path",{attrs:{"data-v-3c805d31":"",d:"M16.8615385,8.4 C16.8615385,13.545 8.43076923,22.05 8.43076923,22.05 C8.43076923,22.05 0,13.545 0,8.4 C0,3.045 4.32076923,0 8.43076923,0 C12.5407692,0 16.8615385,3.045 16.8615385,8.4 Z"}}),t._v(" "),c("ellipse",{attrs:{"data-v-3c805d31":"",cx:"8.431",cy:"8.4",rx:"3.162",ry:"3.15"}})])])]),t._v(" "),t._m(2)])]),t._v(" "),c("div",{staticClass:"etc_wrap"},[c("div",{staticClass:"day_form"},[c("div",{staticClass:"day_inner_form"},[c("div",{staticClass:"day_icon"},[c("svg",{attrs:{"data-v-738935cd":"",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"20",viewBox:"0 0 31 31"}},[c("g",{attrs:{fill:"none","fill-rule":"evenodd",stroke:"#ff4401","stroke-linecap":"square","stroke-width":"2",transform:"translate(1 1)"}},[c("polyline",{attrs:{points:"29 10.545 29 29 0 29 0 10.545"}}),t._v(" "),c("rect",{attrs:{width:"29",height:"7.909",y:"2.636"}}),t._v(" "),c("path",{attrs:{d:"M14.5 0L14.5 5.27272727M6.59090909 0L6.59090909 5.27272727M22.4090909 0L22.4090909 5.27272727"}})])])]),t._v(" "),t._m(3)])]),t._v(" "),c("div",{staticClass:"mood_form"},[c("div",{staticClass:"mood_inner_form"},[c("div",{staticClass:"mood_icon"},[c("svg",{attrs:{"data-v-08714426":"","data-v-738935cd":"",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 17 17"}},[c("g",{attrs:{"data-v-08714426":"",fill:"none","fill-rule":"evenodd",stroke:"#ff4401","stroke-linecap":"square"}},[c("path",{attrs:{"data-v-08714426":"",d:"M0.369565217,16.6304348 C0.369565217,12.5482174 3.67865217,9.23913043 7.76086957,9.23913043 L9.23913043,9.23913043 C13.3213478,9.23913043 16.6304348,12.5482174 16.6304348,16.6304348"}}),t._v(" "),c("circle",{attrs:{"data-v-08714426":"",cx:"8.5",cy:"4.804",r:"4.435"}})])])]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])])])]),t._v(" "),t._m(6)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",[this._v("\n        We Travel\n        "),n("br"),this._v("\n        We Are Gotgam!\n      ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("\n        식상한 여행은 그만!\n        "),n("br"),this._v("\n        곶감과 기분을 공유하며 현지인들이 추천하는\n        숨겨진 명소를 알아내고 지역의 감성을 느껴보세요.\n      ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"desti_input"},[n("input",{attrs:{type:"text",disabled:"disabled",size:"1",placeholder:"Destination"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"day_input"},[n("input",{attrs:{type:"text",disabled:"disabled",size:"1",placeholder:"Dates"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"mood_input"},[n("input",{attrs:{type:"text",disabled:"disabled",size:"1",placeholder:"Guests"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"search_form"},[n("span",[this._v("Search")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hh_wrap2"},[n("div",{staticClass:"hh_inner_wrap2"},[n("img",{attrs:{src:c("Gkxr"),alt:""}}),this._v(" "),n("div",{staticClass:"subscri_wrap"},[n("a",[this._v("강원 춘천시 남산면 햇골길 80 제이드가든수목원")]),this._v(" "),n("p",[this._v("Photo-by Hyeon Yu Jin in Republic of Korea")])])])])}]};var s=c("VU/8")({},e,!1,function(t){c("v5r1")},null,null);n.default=s.exports},dAjm:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=c("Cz8s"),s=c("9WXl"),a=c("mzkE"),i={components:{Header:e.default,Container:s.default,Footer:a.default}},r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"wrapper"},[n("Header"),this._v(" "),n("Container"),this._v(" "),n("Footer")],1)},staticRenderFns:[]};var l=c("VU/8")(i,r,!1,function(t){c("yWzA")},null,null);n.default=l.exports},fY0o:function(t,n){},mUJ2:function(t,n,c){var e={"./container.vue":["9WXl"],"./footer.vue":["mzkE"],"./header.vue":["Cz8s"],"./homeHeader.vue":["On8H"],"./index.vue":["dAjm"],"./registration.vue":["xEgl"],"./section1.vue":["MCMF"]};function s(t){var n=e[t];return n?Promise.all(n.slice(1).map(c.e)).then(function(){return c(n[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}s.keys=function(){return Object.keys(e)},s.id="mUJ2",t.exports=s},mzkE:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"})},staticRenderFns:[]};var s=c("VU/8")({},e,!1,function(t){c("8Bq5")},null,null);n.default=s.exports},v5r1:function(t,n){},xAza:function(t,n,c){t.exports=c.p+"static/img/logo2.f3e447d.png"},xEgl:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("등록 페이지")])},staticRenderFns:[]};var s=c("VU/8")({name:"registration"},e,!1,function(t){c("yY0y")},"data-v-089511c0",null);n.default=s.exports},xsZ7:function(t,n){},yWzA:function(t,n){},yY0y:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.e966ca4aee7260177f88.js.map