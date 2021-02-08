(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{17:function(n,t,e){"use strict";var r=e(10),o=e.n(r),i=e(11);function c(){var n=o()(["\n  :host {\n    --primary-color: #F4AE00;\n    --primary-color-text: black;\n\n    --secondary-color: #2D2A32;\n    --secondary-color-text: #DDDDDD;\n\n    --auxiliary-color-1: #FDC41F;\n    --auxiliary-color-2: #EEEFA8;\n    --auxiliary-color-3: #FAFDF6;\n\n    --light-grey: #DDDDDD;\n    --regular-grey: #CCCCCC;\n    --dark-grey: #999999;\n\n    --shadow-color: #222222;\n    --elevated-surface-color: #3A3A3A;\n    --more-elevated-surface-color: #4C4C4C;\n\n    --smaller-block-spacing: 1em;\n    --regular-block-spacing: 2em;\n    --larger-block-spacing: 3em;\n  }\n"]);return c=function(){return n},n}t.a=Object(i.b)(c())},18:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(10),o=e.n(r),i=e(11);function c(){var n=o()(["\n  router-link {\n    cursor: pointer;\n  }\n\n  router-link:focus {\n    outline: none;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n\n  a.styled {\n    color: var(--primary-color);\n    text-decoration: underline;\n  }\n"]);return c=function(){return n},n}var u=Object(i.b)(c())},19:function(n,t,e){"use strict";var r=e(10),o=e.n(r),i=e(12),c=e.n(i),u=e(13),a=e.n(u),l=e(14),f=e.n(l),s=e(15),p=e.n(s),d=e(16),v=e.n(d),h=e(11),y=e(17),g=(e(3),e(18)),b=e.p+"images/burger-menu.svg",m=[{label:"Portfolio",path:"portfolio"},{label:"Resumè",path:"resume"},{label:"Blog",path:"blog"},{label:"About Me",path:"about-me"}];function k(){var n=o()(["\n        nav {\n          display: none;\n        }\n\n        img {\n          display: block;\n          cursor: pointer;\n          width: 30px;\n          height: 30px;\n        }\n\n        .open {\n          top: 0;\n          left: 0;\n          position: fixed;\n          display: block;\n\n          width: 250px;\n          height: 100%;\n\n          background-color: var(--primary-color);\n          border-right: 1px solid black;\n        }\n\n        ul {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-evenly;\n          align-items: flex-end;\n          list-style-type: none;\n          margin-left: 0;\n          padding-right: var(--smaller-block-spacing);\n        }\n\n        li {\n          margin-left: 0;\n          margin-bottom: var(--regular-block-spacing);\n          font-size: 1.2em;\n          font-weight: 500;\n        }\n      "]);return k=function(){return n},n}function w(){var n=o()(['\n      <li>\n        <router-link path="','">\n          ',"\n        </router-link>\n      </li>\n    "]);return w=function(){return n},n}function x(){var n=o()(['\n      <section>\n        <nav class="','">\n          <ul>\n            ','\n          </ul>\n        </nav>\n        <img src="','" alt="menu" @click="','"/>\n      </section>\n    ']);return x=function(){return n},n}function R(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}var D=function(n){f()(e,n);var t=R(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){var n=this;return Object(h.c)(x(),this.open?"open":"",m.map(this.navigationItemTemplate),b,(function(){n.open=!n.open}))}},{key:"navigationItemTemplate",value:function(n){var t=n.path,e=n.label;return Object(h.c)(w(),t,e)}}],[{key:"styles",get:function(){return[y.a,g.a,Object(h.b)(k())]}},{key:"properties",get:function(){return{open:{type:Boolean}}}}]),e}(h.a);function j(){var n=o()(["\n        ul {\n          display: flex;\n          flex-direction: row;\n          justify-content: space-evenly;\n          align-items: center;\n          list-style-type: none;\n        }\n\n        li {\n          margin-left: var(--larger-block-spacing);\n        }\n    "]);return j=function(){return n},n}function O(){var n=o()(['\n      <li>\n        <router-link path="','">\n          ',"\n        </router-link>\n      </li>\n    "]);return O=function(){return n},n}function E(){var n=o()(["\n      <nav>\n        <ul>\n          ","\n        </ul>\n      </nav>\n    "]);return E=function(){return n},n}function W(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}window.customElements.define("mobile-navigation-menu",D);var C=function(n){f()(e,n);var t=W(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){return Object(h.c)(E(),m.map(this.navigationItemTemplate))}},{key:"navigationItemTemplate",value:function(n){var t=n.path,e=n.label;return Object(h.c)(O(),t,e)}}],[{key:"styles",get:function(){return[y.a,g.a,Object(h.b)(j())]}}]),e}(h.a);function P(){var n=o()(["<desktop-navigation-menu></desktop-navigation-menu>"]);return P=function(){return n},n}function S(){var n=o()(["<mobile-navigation-menu></mobile-navigation-menu>"]);return S=function(){return n},n}function A(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}window.customElements.define("desktop-navigation-menu",C);var F=function(n){f()(e,n);var t=A(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){return this.windowWidth<720?Object(h.c)(S()):Object(h.c)(P())}},{key:"firstUpdated",value:function(){this.getWindowWidth(),this.ownerDocument.defaultView.addEventListener("resize",this.getWindowWidth.bind(this))}},{key:"disconnectedCallback",value:function(){this.ownerDocument.defaultView.removeEventListener("resize",this.getWindowWidth.bind(this))}},{key:"getWindowWidth",value:function(){this.windowWidth=this.ownerDocument.defaultView.innerWidth}}],[{key:"properties",get:function(){return{windowWidth:{type:Number}}}}]),e}(h.a);function z(){var n=o()(["\n        section {\n          background-color: var(--primary-color);\n          color: var(--primary-color-text);\n\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n          align-items: center;\n          padding: 0 var(--regular-block-spacing);\n\n          position: fixed;\n          z-index: 1;\n          left: 0;\n          top: 0;\n          width: 100vw;\n          height: ","px;\n          box-sizing: border-box;\n        }\n\n        .spacer {\n          height: ","px;\n        }\n    "]);return z=function(){return n},n}function I(){var n=o()(['\n      <section>\n        <header>\n          <h1>\n            <router-link path="">\n              Pedro Köhler\n            </router-link>\n          </h1>\n        </header>\n        <navigation-menu></navigation-menu>\n      </section>\n      <div class="spacer"></div>\n    ']);return I=function(){return n},n}function T(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}window.customElements.define("navigation-menu",F);var V=function(n){f()(e,n);var t=T(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){return Object(h.c)(I())}}],[{key:"styles",get:function(){return[y.a,g.a,Object(h.b)(z(),70,70)]}}]),e}(h.a);function B(){var n=o()(["\n        :host {\n          position: absolute;\n          left: var(--smaller-block-spacing);\n          bottom: 0;\n          opacity: 0.3;\n        }\n      "]);return B=function(){return n},n}function J(){var n=o()(["\n      <section>\n        <p>\n          Pedro Köhler &copy; ","\n        </p>\n      </section>\n    "]);return J=function(){return n},n}function K(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}window.customElements.define("app-bar",V);var L=function(n){f()(e,n);var t=K(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){return Object(h.c)(J(),(new Date).getFullYear())}}],[{key:"styles",get:function(){return[y.a,Object(h.b)(B())]}}]),e}(h.a);function M(){var n=o()(["\n        footer {\n          position: relative;\n          min-height: 100px;\n          background-color: var(--elevated-surface-color);\n          border-top: 1px black;\n        }\n      "]);return M=function(){return n},n}function N(){var n=o()(["\n        <footer>\n          <owner-signature></owner-signature>\n        </footer>\n    "]);return N=function(){return n},n}function U(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}window.customElements.define("owner-signature",L);var Y=function(n){f()(e,n);var t=U(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){return Object(h.c)(N())}}],[{key:"styles",get:function(){return[y.a,Object(h.b)(M())]}}]),e}(h.a);function q(){var n=o()(["\n        * {\n          background-color: var(--secondary-color);\n          color: var(--secondary-color-text);\n        }\n      "]);return q=function(){return n},n}function G(){var n=o()(["\n        <section>\n          <app-bar></app-bar>\n          <slot></slot>\n          <app-footer></app-footer>\n        </section>\n    "]);return G=function(){return n},n}function H(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}window.customElements.define("app-footer",Y);var Q=function(n){f()(e,n);var t=H(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){return Object(h.c)(G())}}],[{key:"styles",get:function(){return[y.a,Object(h.b)(q())]}}]),e}(h.a);window.customElements.define("app-shell",Q)},7:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return k}));var r=e(10),o=e.n(r),i=e(12),c=e.n(i),u=e(13),a=e.n(u),l=e(14),f=e.n(l),s=e(15),p=e.n(s),d=e(16),v=e.n(d),h=e(11),y=(e(19),e(17));function g(){var n=o()(["\n        section {\n          height: 100vh;\n          padding: var(--regular-block-spacing);\n\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n\n          box-sizing: border-box;\n        }\n\n        div {\n          padding: var(--regular-block-spacing);\n\n          margin-bottom: var(--larger-block-spacing);\n\n          border-width: 1px black;\n          border-radius: 5px;\n          box-shadow: 3px 3px 3px 3px var(--shadow-color);\n          background-color: var(--elevated-surface-color);\n        }\n\n        p {\n          text-align: left;\n        }\n\n        h1 {\n          text-align: center;\n          margin-bottom: var(--larger-block-spacing);\n        }\n      "]);return g=function(){return n},n}function b(){var n=o()(["\n      <app-shell>\n        <section>\n          <div>\n            <h1>We're working on it...</h1>\n            <p>Soon this section will be available! <br> In the meantime, keep browsing around.</p>\n          </div>\n        </section>\n      </app-shell>\n    "]);return b=function(){return n},n}function m(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v()(n);if(t){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}var k=function(n){f()(e,n);var t=m(e);function e(){return c()(this,e),t.apply(this,arguments)}return a()(e,[{key:"render",value:function(){return Object(h.c)(b())}}],[{key:"styles",get:function(){return[y.a,Object(h.b)(g())]}}]),e}(h.a);window.customElements.define("coming-soon-page",k)}}]);