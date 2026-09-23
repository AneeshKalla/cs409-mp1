/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js"
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) { n[e] = r[e]; } return n; }
var nav = document.querySelector('nav');
var links = _toConsumableArray(nav.querySelectorAll('a'));
var headings = links.map(function (link) {
  return document.querySelector(link.hash);
});
function updatePosition() {
  nav.classList.toggle('compact', window.scrollY > 0);
  var navBottom = nav.getBoundingClientRect().bottom;
  var current = 0;
  headings.forEach(function (heading, index) {
    if (heading.getBoundingClientRect().top - 100 <= navBottom + 1) current = index;
  });

  // The final section may be too short to reach the top of the viewport.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
    current = links.length - 1;
  }
  links.forEach(function (link, index) {
    if (index === current) link.setAttribute('aria-current', 'location');else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updatePosition, {
  passive: true
});
window.addEventListener('resize', updatePosition);
window.addEventListener('load', updatePosition);
updatePosition();
var carousel = document.querySelector('.carousel');
var slides = _toConsumableArray(carousel.querySelectorAll('img'));
var slideCount = carousel.querySelector('.slide-count');
var currentSlide = 0;
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides.forEach(function (slide, index) {
    slide.hidden = index !== currentSlide;
  });
  slideCount.textContent = "Photo ".concat(currentSlide + 1, " of ").concat(slides.length);
}
carousel.querySelector('.previous').addEventListener('click', function () {
  return changeSlide(-1);
});
carousel.querySelector('.next').addEventListener('click', function () {
  return changeSlide(1);
});
var peopleModal = document.querySelector('#people-modal');
document.querySelector('.photo-preview').addEventListener('click', function () {
  peopleModal.showModal();
});
var pageUrl = encodeURIComponent(window.location.href.split('#')[0]);
document.querySelector('.share-facebook').href += "?u=".concat(pageUrl);
document.querySelector('.share-linkedin').href += "?url=".concat(pageUrl);

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/lot_of_cocoa.png */ "./assets/lot_of_cocoa.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/arrow.svg */ "./assets/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/facebook.svg */ "./assets/facebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/linkedin.svg */ "./assets/linkedin.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  scroll-behavior: smooth;
}

h1, h2, h3 {
  text-align: center;
}

body {
  margin: 0;
  color: #3e2723;
  background-color: #e8eddf;
}

main > section {
  padding: 3rem 0;
  background-color: #e8eddf;
}
main > section:nth-child(even) {
  background-color: #faf5ec;
}
main > section > h2 {
  margin-top: 0;
}

main > section > p {
  width: calc(100% * 2 / 3);
  margin: 1rem auto;
  line-height: 1.6;
}

.introduction > p {
  font-family: Georgia, serif;
  font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  line-height: 1.8;
  text-align: center;
}

section[aria-labelledby=picking] > p {
  text-align: center;
}

header {
  padding: 2rem 1rem;
  background: #3e2723;
  color: #fff8ed;
  text-align: center;
}
header h1 {
  margin: 0;
}

nav {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 1.5rem;
  padding: 2rem 1rem;
  font-size: 1.25rem;
  background: #f4ead8;
  color: #3e2723;
  transition: padding 0.2s ease, font-size 0.2s ease;
}
nav.compact {
  padding: 1rem;
  font-size: 1rem;
}
nav a {
  color: inherit;
  text-underline-offset: 0.25rem;
}
nav a:hover, nav a:focus-visible {
  color: #79451f;
}
nav a[aria-current=location] {
  color: #79451f;
  text-decoration-thickness: 3px;
}

.carousel {
  position: relative;
  max-width: 900px;
  margin: 1.5rem auto;
}
.carousel img {
  width: 100%;
  aspect-ratio: 3/2;
  -o-object-fit: cover;
     object-fit: cover;
}
.carousel button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  padding: 0.75rem 1rem;
  background: #f4ead8;
  color: #3e2723;
  font-size: 1.5rem;
  cursor: pointer;
}
.carousel button:hover {
  background: #e4d1ae;
}
.carousel .previous {
  left: 0.5rem;
}
.carousel .next {
  right: 0.5rem;
}
.carousel .slide-count {
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0.25rem 0.75rem;
  background: #f4ead8;
  color: #3e2723;
}

.harvest-video {
  display: block;
  width: calc(100% * 2 / 3);
  margin: 1.5rem auto;
}

.text-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: calc(100% * 2 / 3);
  margin: 0 auto;
}
.text-columns p {
  line-height: 1.6;
}
@media (max-width: 600px) {
  .text-columns {
    grid-template-columns: 1fr;
  }
}

.drying {
  padding: 6rem 0;
  color: #fff8ed;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: currentColor;
  -webkit-mask: var(--icon) center/contain no-repeat;
          mask: var(--icon) center/contain no-repeat;
  vertical-align: middle;
}

.icon-arrow {
  --icon: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.previous-arrow {
  transform: rotate(180deg);
}

.icon-facebook {
  --icon: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.icon-linkedin {
  --icon: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

footer {
  padding: 2rem 1rem;
  background: #f4ead8;
  color: #3e2723;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.social-links a {
  padding: 0.75rem;
  color: inherit;
}
.social-links a:hover, .social-links a:focus-visible {
  color: #79451f;
}

.photo-preview {
  display: block;
  width: calc(100% * 2 / 3);
  max-width: 600px;
  margin: 1rem auto;
  padding: 0;
  border: 0;
  cursor: zoom-in;
}

.photo-preview img, #people-modal img {
  display: block;
  width: 100%;
}

#people-modal {
  box-sizing: border-box;
  width: 900px;
  max-width: 90vw;
  max-height: 90vh;
  padding: 1.5rem;
  border: 0;
  background: #fff8ed;
  color: #3e2723;
}
#people-modal::backdrop {
  background: rgba(0, 0, 0, 0.7);
}
#people-modal form {
  text-align: right;
}
#people-modal button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
#people-modal p {
  line-height: 1.6;
}

h2[id] {
  scroll-margin-top: 7rem;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  nav {
    transition: none;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,SAAA;EACA,cAAA;EACA,yBAAA;AACJ;;AAEA;EACI,eAAA;EACA,yBAAA;AACJ;AACI;EACI,yBAAA;AACR;AAEI;EACI,aAAA;AAAR;;AAIA;EACI,yBAAA;EACA,iBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,2BAAA;EACA,uCAAA;EACA,gBAAA;EACA,kBAAA;AADJ;;AAIA;EACI,kBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AADJ;AAGI;EACI,SAAA;AADR;;AAKA;EACI,gBAAA;EACA,MAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,kDAAA;AAFJ;AAII;EACI,aAAA;EACA,eAAA;AAFR;AAKI;EACI,cAAA;EACA,8BAAA;AAHR;AAKQ;EAEI,cAAA;AAJZ;AAOQ;EACI,cAAA;EACA,8BAAA;AALZ;;AAUA;EACI,kBAAA;EACA,gBAAA;EACA,mBAAA;AAPJ;AASI;EACI,WAAA;EACA,iBAAA;EACA,oBAAA;KAAA,iBAAA;AAPR;AAUI;EACI,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,SAAA;EACA,qBAAA;EACA,mBAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;AARR;AAUQ;EACI,mBAAA;AARZ;AAYI;EAAY,YAAA;AAThB;AAUI;EAAQ,aAAA;AAPZ;AASI;EACI,kBAAA;EACA,eAAA;EACA,SAAA;EACA,2BAAA;EACA,SAAA;EACA,wBAAA;EACA,mBAAA;EACA,cAAA;AAPR;;AAWA;EACI,cAAA;EACA,yBAAA;EACA,mBAAA;AARJ;;AAWA;EACI,aAAA;EACA,qCAAA;EACA,SAAA;EACA,yBAAA;EACA,cAAA;AARJ;AAUI;EACI,gBAAA;AARR;AAWI;EAXJ;IAYQ,0BAAA;EARN;AACF;;AAWA;EACI,eAAA;EACA,cAAA;EACA,kHAAA;EAEA,sBAAA;EACA,2BAAA;EACA,4BAAA;AATJ;;AAYA;EACI,qBAAA;EACA,aAAA;EACA,cAAA;EACA,wBAAA;EACA,kDAAA;UAAA,0CAAA;EACA,sBAAA;AATJ;;AAYA;EACI,+CAAA;AATJ;;AAYA;EACI,yBAAA;AATJ;;AAYA;EACI,+CAAA;AATJ;;AAYA;EACI,+CAAA;AATJ;;AAYA;EACI,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AATJ;;AAYA;EACI,aAAA;EACA,uBAAA;EACA,SAAA;AATJ;AAWI;EACI,gBAAA;EACA,cAAA;AATR;AAWQ;EACI,cAAA;AATZ;;AAcA;EACI,cAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;AAXJ;;AAcA;EACI,cAAA;EACA,WAAA;AAXJ;;AAcA;EACI,sBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;EACA,cAAA;AAXJ;AAaI;EACI,8BAAA;AAXR;AAcI;EACI,iBAAA;AAZR;AAeI;EACI,oBAAA;EACA,eAAA;AAbR;AAgBI;EACI,gBAAA;AAdR;;AAkBA;EACI,uBAAA;AAfJ;;AAkBA;EACI;IACI,qBAAA;EAfN;;EAkBE;IACI,gBAAA;EAfN;AACF","sourcesContent":["html {\n    scroll-behavior: smooth;\n}\n\nh1, h2, h3 {\n    text-align: center;\n}\n\nbody {\n    margin: 0;\n    color: #3e2723;\n    background-color: #e8eddf;\n}\n\nmain > section {\n    padding: 3rem 0;\n    background-color: #e8eddf;\n\n    &:nth-child(even) {\n        background-color: #faf5ec;\n    }\n\n    > h2 {\n        margin-top: 0;\n    }\n}\n\nmain > section > p {\n    width: calc(100% * 2 / 3);\n    margin: 1rem auto;\n    line-height: 1.6;\n}\n\n.introduction > p {\n    font-family: Georgia, serif;\n    font-size: clamp(1.2rem, 1.5vw, 1.6rem);\n    line-height: 1.8;\n    text-align: center;\n}\n\nsection[aria-labelledby=\"picking\"] > p {\n    text-align: center;\n}\n\nheader {\n    padding: 2rem 1rem;\n    background: #3e2723;\n    color: #fff8ed;\n    text-align: center;\n\n    h1 {\n        margin: 0;\n    }\n}\n\nnav {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1rem 1.5rem;\n    padding: 2rem 1rem;\n    font-size: 1.25rem;\n    background: #f4ead8;\n    color: #3e2723;\n    transition: padding 0.2s ease, font-size 0.2s ease;\n\n    &.compact {\n        padding: 1rem;\n        font-size: 1rem;\n    }\n\n    a {\n        color: inherit;\n        text-underline-offset: 0.25rem;\n\n        &:hover,\n        &:focus-visible {\n            color: #79451f;\n        }\n\n        &[aria-current=\"location\"] {\n            color: #79451f;\n            text-decoration-thickness: 3px;\n        }\n    }\n}\n\n.carousel {\n    position: relative;\n    max-width: 900px;\n    margin: 1.5rem auto;\n\n    img {\n        width: 100%;\n        aspect-ratio: 3 / 2;\n        object-fit: cover;\n    }\n\n    button {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        border: 0;\n        padding: 0.75rem 1rem;\n        background: #f4ead8;\n        color: #3e2723;\n        font-size: 1.5rem;\n        cursor: pointer;\n\n        &:hover {\n            background: #e4d1ae;\n        }\n    }\n\n    .previous { left: 0.5rem; }\n    .next { right: 0.5rem; }\n\n    .slide-count {\n        position: absolute;\n        bottom: 0.75rem;\n        left: 50%;\n        transform: translateX(-50%);\n        margin: 0;\n        padding: 0.25rem 0.75rem;\n        background: #f4ead8;\n        color: #3e2723;\n    }\n}\n\n.harvest-video {\n    display: block;\n    width: calc(100% * 2 / 3);\n    margin: 1.5rem auto;\n}\n\n.text-columns {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 2rem;\n    width: calc(100% * 2 / 3);\n    margin: 0 auto;\n\n    p {\n        line-height: 1.6;\n    }\n\n    @media (max-width: 600px) {\n        grid-template-columns: 1fr;\n    }\n}\n\n.drying {\n    padding: 6rem 0;\n    color: #fff8ed;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n        url('../assets/lot_of_cocoa.png');\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n}\n\n.icon {\n    display: inline-block;\n    width: 1.5rem;\n    height: 1.5rem;\n    background: currentColor;\n    mask: var(--icon) center / contain no-repeat;\n    vertical-align: middle;\n}\n\n.icon-arrow {\n    --icon: url('../assets/arrow.svg');\n}\n\n.previous-arrow {\n    transform: rotate(180deg);\n}\n\n.icon-facebook {\n    --icon: url('../assets/facebook.svg');\n}\n\n.icon-linkedin {\n    --icon: url('../assets/linkedin.svg');\n}\n\nfooter {\n    padding: 2rem 1rem;\n    background: #f4ead8;\n    color: #3e2723;\n    text-align: center;\n}\n\n.social-links {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n\n    a {\n        padding: 0.75rem;\n        color: inherit;\n\n        &:hover, &:focus-visible {\n            color: #79451f;\n        }\n    }\n}\n\n.photo-preview {\n    display: block;\n    width: calc(100% * 2 / 3);\n    max-width: 600px;\n    margin: 1rem auto;\n    padding: 0;\n    border: 0;\n    cursor: zoom-in;\n}\n\n.photo-preview img, #people-modal img {\n    display: block;\n    width: 100%;\n}\n\n#people-modal {\n    box-sizing: border-box;\n    width: 900px;\n    max-width: 90vw;\n    max-height: 90vh;\n    padding: 1.5rem;\n    border: 0;\n    background: #fff8ed;\n    color: #3e2723;\n\n    &::backdrop {\n        background: rgba(0, 0, 0, 0.7);\n    }\n\n    form {\n        text-align: right;\n    }\n\n    button {\n        padding: 0.5rem 1rem;\n        cursor: pointer;\n    }\n\n    p {\n        line-height: 1.6;\n    }\n}\n\nh2[id] {\n    scroll-margin-top: 7rem;\n}\n\n@media (prefers-reduced-motion: reduce) {\n    html {\n        scroll-behavior: auto;\n    }\n\n    nav {\n        transition: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/collecting_cocoa.png */ "./assets/collecting_cocoa.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/peeling_cocoa.png */ "./assets/peeling_cocoa.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/processing_cocoa.png */ "./assets/processing_cocoa.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/gettyimages-2197437465-640_adpp.mp4 */ "./assets/gettyimages-2197437465-640_adpp.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/child_labor.png */ "./assets/child_labor.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Before the Chocolate: A Look at Cocoa Farming</title>\n    </head>\n    <body>\n        <header>\n            <h1>Before the Chocolate: A Look at Cocoa Farming</h1>\n        </header>\n        <nav aria-label=\"Essay sections\">\n                <a href=\"#harvest\">A Harvest in Three Pictures</a>\n                <a href=\"#picking\">Picking a Cocoa Pod</a>\n                <a href=\"#pod\">Inside the Pod</a>\n                <a href=\"#drying\">Spread Out in the Sun</a>\n                <a href=\"#people\">The People Behind the Harvest</a>\n                <a href=\"#chocolate\">Remembering Where Chocolate Begins</a>\n        </nav>\n        <main>\n            <section class=\"introduction\" aria-label=\"Introduction\">\n                <p>\n                    A piece of chocolate can disappear in a few bites. The work behind it\n                    takes much longer. Before cocoa reaches a kitchen or a shop, there are\n                    pods to gather, beans to remove, and a harvest to prepare. These images\n                    bring that work into view, following cocoa from a pile of colorful pods\n                    to sacks of beans ready for the next part of their journey.\n                </p>\n        \n            </section>\n            <section aria-labelledby=\"harvest\">\n                <h2 id=\"harvest\">A Harvest in Three Pictures</h2>\n                <p>\n                    The first photograph shows cocoa pods being gathered beneath the trees.\n                    In the second, an opened pod reveals beans surrounded by pale pulp.\n                    The third shows beans being poured from a woven basket into a sack.\n                    Together, these moments offer a glimpse of the hands-on work between\n                    harvesting a fruit and preparing an ingredient.\n                </p>\n                <div class=\"carousel\" role=\"region\" aria-roledescription=\"carousel\" aria-label=\"Cocoa harvest photographs\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"A person tipping cocoa pods from a basin onto a large pile beneath the trees.\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Hands removing pale, pulp-covered beans from an opened cocoa pod over a bucket.\" hidden>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"People pouring cocoa beans from a woven basket into an open sack.\" hidden>\n                    <button class=\"previous\" type=\"button\" aria-label=\"Previous photograph\"><span class=\"icon icon-arrow previous-arrow\" aria-hidden=\"true\"></span></button>\n                    <button class=\"next\" type=\"button\" aria-label=\"Next photograph\"><span class=\"icon icon-arrow\" aria-hidden=\"true\"></span></button>\n                    <p class=\"slide-count\" aria-live=\"polite\" aria-atomic=\"true\">Photo 1 of 3</p>\n                </div>\n        \n            </section>\n            <section aria-labelledby=\"picking\">\n                <h2 id=\"picking\">Picking a Cocoa Pod</h2>\n                <p>\n                    Watch a moment from the harvest: picking a cocoa pod is the beginning\n                    of the journey from the tree to the beans inside.\n                </p>\n                <video class=\"harvest-video\" controls playsinline preload=\"metadata\" aria-label=\"Picking a cocoa pod\">\n                    <source src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" type=\"video/mp4\">\n                    Your browser does not support embedded video.\n                </video>\n        \n            </section>\n            <section aria-labelledby=\"pod\">\n                <h2 id=\"pod\">Inside the Pod</h2>\n                <div class=\"text-columns\">\n                    <div>\n                        <h3>Opening the Pod</h3>\n                        <p>\n                            A cocoa pod's thick, ridged shell surrounds seeds wrapped in\n                            pale, soft pulp. Opening the pod reveals the beans that will\n                            eventually become chocolate. They are removed from the shell\n                            and collected for the next stage.\n                        </p>\n                    </div>\n                    <div>\n                        <h3>Fermenting the Beans</h3>\n                        <p>\n                            The fresh beans begin their transformation through fermentation.\n                            The surrounding pulp breaks down, and changes within the beans\n                            help develop the foundation of chocolate's flavor. There is\n                            still more work ahead before they are ready for roasting.\n                        </p>\n                    </div>\n                    <div>\n                        <h3>Drying the Harvest</h3>\n                        <p>\n                            After fermentation, the beans are spread out to dry. Reducing\n                            their moisture prepares them for storage and transport. From\n                            opening the pods to tending the drying beans, each stage calls\n                            for care before cocoa leaves the farm.\n                        </p>\n                    </div>\n                </div>\n        \n            </section>\n    \n            <section class=\"drying\" aria-labelledby=\"drying\">\n                    <h2 id=\"drying\">Spread Out in the Sun</h2>\n                    <p>\n                        A broad layer of brown beans fills the foreground of this photograph.\n                        Behind it, a person tends the drying surface, surrounded by greenery.\n                        Drying helps remove moisture from the beans, preparing them for storage\n                        and transport. The scene looks quiet, but the sheer number of beans\n                        gives a sense of how much attention a harvest requires.\n                    </p>\n            </section>\n    \n            <section aria-labelledby=\"people\">\n                <h2 id=\"people\">The People Behind the Harvest</h2>\n                <p>\n                    The group portrait shifts attention from the crop to the people in the\n                    landscape. Buckets, boots, and tools appear alongside the trees and\n                    low plants. A photograph cannot tell us everyone's role or personal\n                    story, but it can remind us that farming is about people as much as\n                    it is about what they grow.\n                </p>\n                <p>\n                    Thinking about cocoa means making room for questions about the lives\n                    behind it. Can farming provide a dependable livelihood? Are working\n                    conditions safe? Do children have the time and opportunity to learn?\n                    Those questions deserve a place in the story we tell about chocolate.\n                </p>\n                <p>Select the photograph for a closer look at the people behind the harvest.</p>\n                <button class=\"photo-preview\" type=\"button\" aria-label=\"View group photograph and learn more\" aria-haspopup=\"dialog\" aria-controls=\"people-modal\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"A group posing outdoors among trees and low vegetation with buckets and farming tools.\">\n                </button>\n                <dialog id=\"people-modal\" aria-labelledby=\"people-modal-title\">\n                    <form method=\"dialog\">\n                        <button type=\"submit\" autofocus>Close</button>\n                    </form>\n                    <h2 id=\"people-modal-title\">A Closer Look at the People</h2>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"A group posing outdoors among trees and low vegetation with buckets and farming tools.\">\n                    <p>\n                        Look beyond the crop: the buckets, boots, and tools connect this\n                        portrait to the everyday work of tending the land. The people have\n                        paused together for a photograph, giving us a moment to consider\n                        the human side of farming. Their individual experiences cannot be\n                        read from an image alone; listening to farming communities is an\n                        essential part of understanding where our food begins.\n                    </p>\n                </dialog>\n        \n            </section>\n            <section aria-labelledby=\"chocolate\">\n                <h2 id=\"chocolate\">Remembering Where Chocolate Begins</h2>\n                <p>\n                    These five images offer a different way to think about a familiar food.\n                    There is color in the pods, texture in the beans, and effort in every\n                    stage of handling them. Remembering those details makes chocolate more\n                    than a finished product: it connects a small everyday pleasure to the\n                    land and the people at the beginning of its story.\n                </p>\n            </section>\n        </main>\n        <footer>\n            <p>Before the Chocolate · A look at cocoa farming</p>\n            <p>Share this essay</p>\n            <div class=\"social-links\">\n                <a class=\"share-facebook\" href=\"https://www.facebook.com/sharer/sharer.php\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Share on Facebook\">\n                    <span class=\"icon icon-facebook\" aria-hidden=\"true\"></span>\n                </a>\n                <a class=\"share-linkedin\" href=\"https://www.linkedin.com/sharing/share-offsite/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Share on LinkedIn\">\n                    <span class=\"icon icon-linkedin\" aria-hidden=\"true\"></span>\n                </a>\n            </div>\n        </footer>\n    </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./assets/arrow.svg"
/*!**************************!*\
  !*** ./assets/arrow.svg ***!
  \**************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0ibTkgNSA3IDctNyA3IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPgo=";

/***/ },

/***/ "./assets/child_labor.png"
/*!********************************!*\
  !*** ./assets/child_labor.png ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c01f3271e0661eddac6a.png";

/***/ },

/***/ "./assets/collecting_cocoa.png"
/*!*************************************!*\
  !*** ./assets/collecting_cocoa.png ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "25ff6d50c2c7aa005635.png";

/***/ },

/***/ "./assets/facebook.svg"
/*!*****************************!*\
  !*** ./assets/facebook.svg ***!
  \*****************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0IDIzVjEzaDNsMS00aC00VjdjMC0xLjUuNS0yIDItMmgyVjFoLTNjLTQgMC02IDItNiA2djJINnY0aDN2MTB6Ii8+PC9zdmc+Cg==";

/***/ },

/***/ "./assets/gettyimages-2197437465-640_adpp.mp4"
/*!****************************************************!*\
  !*** ./assets/gettyimages-2197437465-640_adpp.mp4 ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2427bcd3ef67a8176db7.mp4";

/***/ },

/***/ "./assets/linkedin.svg"
/*!*****************************!*\
  !*** ./assets/linkedin.svg ***!
  \*****************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjIiLz48cGF0aCBkPSJNMiA4aDR2MTRIMnpNOSA4aDR2MmMxLTEuNSAyLjUtMi41IDQuNS0yLjUgMyAwIDQuNSAyIDQuNSA1VjIyaC00di04YzAtMi0uNS0zLTItM3MtMyAxLTMgM3Y4SDl6Ii8+PC9zdmc+Cg==";

/***/ },

/***/ "./assets/lot_of_cocoa.png"
/*!*********************************!*\
  !*** ./assets/lot_of_cocoa.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "036acb626df9e4f7fc89.png";

/***/ },

/***/ "./assets/peeling_cocoa.png"
/*!**********************************!*\
  !*** ./assets/peeling_cocoa.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c9ba9f1c145975fb7888.png";

/***/ },

/***/ "./assets/processing_cocoa.png"
/*!*************************************!*\
  !*** ./assets/processing_cocoa.png ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "4520bb373e3b4c6a7b5c.png";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map