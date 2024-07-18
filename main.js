/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! icons/plus.svg */ "./src/icons/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/clock-alert-outline.svg */ "./src/icons/clock-alert-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
   font-size: 16px;
   --light-gray: #f6f6f6;
   --scrollbar-color: #cecece;
   --sidebar-width: max(19vw, 200px);
}

html {
   height: 100%;
   scrollbar-color: var(--scrollbar-color) transparent;
}

body {
   margin: 0;
}

#sidebar {
   background-color: var(--light-gray);
   width: var(--sidebar-width);
   box-sizing: border-box;
   padding-left: 20px;
   overflow: auto;
   position: sticky;
   top: 0;
   height: 100vh;
   display: inline-block;
   vertical-align: top;
   scrollbar-color: var(--scrollbar-color) var(--light-gray);
}

.page-header {
   margin-top: 10px;
}

.personal-project-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.add-icon-button {
   margin-right: max(2vw, 15px);
   border: none;
   width: fit-content;
   padding: 0;
   background: none;
   cursor: pointer;
}

.add-icon {
   height: 25px;
   flex: 1;
   fill: #06b6d4;
}

.project-list {
   padding: 0;
   margin: 0;
}

li {
   list-style: none;
}

.project-item {
   line-height: 1.6;
   margin-right: 10px;
   cursor: pointer;
   margin-left: -10px;
   border-radius: 10px;
   display: grid;
   grid-template-rows: 1fr 1fr;
   grid-template-columns: 1fr 1fr;
   grid-template-areas: "name btn"
                        "date btn";
}

.project-item:hover {
   background-color: #c8fffb;
}

#sidebar .project-name {
   margin: 0;
   padding-left: 10px;
   grid-area: name;
   text-wrap: nowrap;
}

#sidebar .project-due-date {
   margin-top: 0;
   margin-bottom: 0;
   font-size: 0.9rem;
   padding-left: 10px;
   grid-area: date;
}

.sidebar-delete-btn {
   padding: 4px 0 0 0;
   border: none;
   background-color: transparent;
   cursor: pointer;
   grid-area: btn;
   align-self: start;
   justify-self: end;
   margin-right: max(1.6vw, 15px);
}

img[src\$=".svg"]:hover {
   filter: invert(22%) sepia(95%) saturate(4744%) hue-rotate(353deg) brightness(91%) contrast(128%);
}

#content {
   height: fit-content;
   display: inline-block;
   min-height: 100vh;
   width: calc(98.5vw - var(--sidebar-width));
   min-width: 500px;
}

#create-project {
   line-height: 1.6;
}

.name-container,
.project-header {
   margin: 10px 0 0 20px;
}

input,
#description {
   font-size: 1rem;
   border: 0.5px solid black;
   font-family: Arial;
}

#project-name,
.project-header > .project-name {
   font-size: 2rem;
}

#project-name,
#due-date {
   padding: 0;
   border: none;
}

.due-date-container {
   margin-left: 20px;
}

form .description-container {
   margin: 50px 0 0 20px;
}

label[for="description"],
.description-header {
   display: block;
   border-bottom: 1.5px solid springgreen
}

#description {
   display: block;
   line-height: 1.4;
   padding: 0;
   min-width: 160px;
   width: calc(calc(98.5vw - var(--sidebar-width)) - 50px);
}

fieldset {
   border: none;
   margin: 50px 0 0 20px;
   padding: 0;
}

.checklist-fieldset,
.notes-fieldset {
   display: flex;
   flex-direction: column;
   row-gap: 20px;
}

legend,
label[for="description"],
#content .description-header,
#content .checklist-header,
#content .note-header {
   font-size: 1.5rem;
   margin-bottom: 15px;
   width: -webkit-fill-available;
   margin-right: 30px;
}

#checklist,
.checklist-header {
   border-bottom: 1.5px solid coral;
}

#notes,
.note-header {
   border-bottom: 1.5px solid #0ea5e9;
}

form .checklist-container,
form .note-container {
   display: flex;
}

.checklist-fieldset input,
.notes-fieldset input {
   width: 25vw;
   min-width: 200px;
   padding: 3px 3px;
   margin-right: 30px;
}

.list-delete-btn {
   background-color: white;
   border: none;
   padding: 0;
}

#content img[src\$=".svg"] {
   cursor: pointer;
}

.add-list-item-container {
   display: flex;
   align-items: center;
}

.add-checklist-button,
.add-note-button {
   height: 25px;
   width: 25px;
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
   background-repeat: no-repeat;
   background-color: transparent;
   border: none;
   padding: 0;
   margin: 10px 0 0 16px;
   cursor: pointer;
}

.add-checklist-item-text {
   display: inline-block;
   margin-top: 10px;
   margin-left: 5px;
}

.priority-fieldset > label {
   margin-right: 15px;
   font-size: 1.1rem;
}

#priority {
   border-bottom: 1.5px solid magenta;
}

input[type="radio"] {
   cursor: pointer;
}

.align-submit-btn {
   display: flex;
   justify-content: flex-end;
}

button[type="submit"] {
   font-size: 1.1rem;
   background-color: #c8fffb;
   margin: 40px 90px 40px 0;
   border-radius: 20px;
   padding: 5px 12px;
   cursor: pointer;
   border-style: none;
   font-family: fantasy;
}

input[type="tel"]:focus:invalid {
   outline-color: red;
   background-color: rgb(255 209 209);
}

input[type="tel"]:focus:valid {
   outline-color: green;
   background-color: rgb(199 255 199);
}

input[type="tel"]:valid:not(:focus) {
   background-color: rgb(199 255 199);
}

input[type="tel"]:invalid:not(:focus) {
   background-color: rgb(255 209 209);
}

.project-name {
   font-weight: normal;
   margin: 0 0 4px 0;
}

#content h2,
#content p {
   margin: 0;
}

#content > .description-container,
#content > .checklist-container,
#content > .note-container {
   margin: 59px 0 0 20px;
}

.description-header,
.checklist-header,
.note-header {
   font-weight: normal;
   padding-bottom: 6px;
}

#content > .description-container > p.description-text {
   padding-top: 2.5px;
   padding-left: 0.5px;
   margin-right: 30px;
   line-height: 1.5;
}

.list {
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   row-gap: 10px;
}

.checklist-item,
.note-item {
   font-size: 1rem;
}

.list input[type="checkbox"] {
   margin-right: 10px;
}

input[type="checkbox"] {
   cursor: pointer;
}

#content > .note-container {
   margin-bottom: 40px;
}

#content .note-container li {
   list-style: decimal;
   list-style-position: inside;
}

.priority {
   color: rgb(238, 37, 37);
}

#content > .project-header > p.priority::after {
   content: " ";
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
   height: 25px;
}

.clock {
   filter: invert(22%) sepia(95%) saturate(4744%) hue-rotate(353deg) brightness(91%) contrast(128%);
   vertical-align: text-top;
   height: 16px;
   padding-left: 5px;
}

form #project-name,
form #due-date,
form [for="due-date"],
form [for="description"],
legend,
#content .project-name,
#content .project-due-date,
#content .description-header,
.checklist-header,
.note-header {
   font-family: Georgia;
}

textarea,
.checklist-container > input,
.note-container > input,
.priority-fieldset label,
#content .description-text,
.list,
.note-item {
   font-family: Arial;
}

.click-tab,
.click-tab:hover {
   background-color: #a4fff9;
}

.edit {
   position: sticky;
   top: 20px;
   left: calc(100vw - max(100px, 5vw));
   cursor: pointer;
   background-color: #c8fffb;
   border-radius: 20px;
   padding: 5px 13px;
   font-size: 1rem;
   border: none;
}

.project-header {
   margin-top: -15px;
}

.align-empty-state {
   align-content: center;
   text-align: center;
   margin-top: -7vh;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;GACG,eAAe;GACf,qBAAqB;GACrB,0BAA0B;GAC1B,iCAAiC;AACpC;;AAEA;GACG,YAAY;GACZ,mDAAmD;AACtD;;AAEA;GACG,SAAS;AACZ;;AAEA;GACG,mCAAmC;GACnC,2BAA2B;GAC3B,sBAAsB;GACtB,kBAAkB;GAClB,cAAc;GACd,gBAAgB;GAChB,MAAM;GACN,aAAa;GACb,qBAAqB;GACrB,mBAAmB;GACnB,yDAAyD;AAC5D;;AAEA;GACG,gBAAgB;AACnB;;AAEA;GACG,aAAa;GACb,mBAAmB;GACnB,8BAA8B;AACjC;;AAEA;GACG,4BAA4B;GAC5B,YAAY;GACZ,kBAAkB;GAClB,UAAU;GACV,gBAAgB;GAChB,eAAe;AAClB;;AAEA;GACG,YAAY;GACZ,OAAO;GACP,aAAa;AAChB;;AAEA;GACG,UAAU;GACV,SAAS;AACZ;;AAEA;GACG,gBAAgB;AACnB;;AAEA;GACG,gBAAgB;GAChB,kBAAkB;GAClB,eAAe;GACf,kBAAkB;GAClB,mBAAmB;GACnB,aAAa;GACb,2BAA2B;GAC3B,8BAA8B;GAC9B;kCAC+B;AAClC;;AAEA;GACG,yBAAyB;AAC5B;;AAEA;GACG,SAAS;GACT,kBAAkB;GAClB,eAAe;GACf,iBAAiB;AACpB;;AAEA;GACG,aAAa;GACb,gBAAgB;GAChB,iBAAiB;GACjB,kBAAkB;GAClB,eAAe;AAClB;;AAEA;GACG,kBAAkB;GAClB,YAAY;GACZ,6BAA6B;GAC7B,eAAe;GACf,cAAc;GACd,iBAAiB;GACjB,iBAAiB;GACjB,8BAA8B;AACjC;;AAEA;GACG,gGAAgG;AACnG;;AAEA;GACG,mBAAmB;GACnB,qBAAqB;GACrB,iBAAiB;GACjB,0CAA0C;GAC1C,gBAAgB;AACnB;;AAEA;GACG,gBAAgB;AACnB;;AAEA;;GAEG,qBAAqB;AACxB;;AAEA;;GAEG,eAAe;GACf,yBAAyB;GACzB,kBAAkB;AACrB;;AAEA;;GAEG,eAAe;AAClB;;AAEA;;GAEG,UAAU;GACV,YAAY;AACf;;AAEA;GACG,iBAAiB;AACpB;;AAEA;GACG,qBAAqB;AACxB;;AAEA;;GAEG,cAAc;GACd;AACH;;AAEA;GACG,cAAc;GACd,gBAAgB;GAChB,UAAU;GACV,gBAAgB;GAChB,uDAAuD;AAC1D;;AAEA;GACG,YAAY;GACZ,qBAAqB;GACrB,UAAU;AACb;;AAEA;;GAEG,aAAa;GACb,sBAAsB;GACtB,aAAa;AAChB;;AAEA;;;;;GAKG,iBAAiB;GACjB,mBAAmB;GACnB,6BAA6B;GAC7B,kBAAkB;AACrB;;AAEA;;GAEG,gCAAgC;AACnC;;AAEA;;GAEG,kCAAkC;AACrC;;AAEA;;GAEG,aAAa;AAChB;;AAEA;;GAEG,WAAW;GACX,gBAAgB;GAChB,gBAAgB;GAChB,kBAAkB;AACrB;;AAEA;GACG,uBAAuB;GACvB,YAAY;GACZ,UAAU;AACb;;AAEA;GACG,eAAe;AAClB;;AAEA;GACG,aAAa;GACb,mBAAmB;AACtB;;AAEA;;GAEG,YAAY;GACZ,WAAW;GACX,yDAAqC;GACrC,4BAA4B;GAC5B,6BAA6B;GAC7B,YAAY;GACZ,UAAU;GACV,qBAAqB;GACrB,eAAe;AAClB;;AAEA;GACG,qBAAqB;GACrB,gBAAgB;GAChB,gBAAgB;AACnB;;AAEA;GACG,kBAAkB;GAClB,iBAAiB;AACpB;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,eAAe;AAClB;;AAEA;GACG,aAAa;GACb,yBAAyB;AAC5B;;AAEA;GACG,iBAAiB;GACjB,yBAAyB;GACzB,wBAAwB;GACxB,mBAAmB;GACnB,iBAAiB;GACjB,eAAe;GACf,kBAAkB;GAClB,oBAAoB;AACvB;;AAEA;GACG,kBAAkB;GAClB,kCAAkC;AACrC;;AAEA;GACG,oBAAoB;GACpB,kCAAkC;AACrC;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,mBAAmB;GACnB,iBAAiB;AACpB;;AAEA;;GAEG,SAAS;AACZ;;AAEA;;;GAGG,qBAAqB;AACxB;;AAEA;;;GAGG,mBAAmB;GACnB,mBAAmB;AACtB;;AAEA;GACG,kBAAkB;GAClB,mBAAmB;GACnB,kBAAkB;GAClB,gBAAgB;AACnB;;AAEA;GACG,SAAS;GACT,UAAU;GACV,aAAa;GACb,sBAAsB;GACtB,aAAa;AAChB;;AAEA;;GAEG,eAAe;AAClB;;AAEA;GACG,kBAAkB;AACrB;;AAEA;GACG,eAAe;AAClB;;AAEA;GACG,mBAAmB;AACtB;;AAEA;GACG,mBAAmB;GACnB,2BAA2B;AAC9B;;AAEA;GACG,uBAAuB;AAC1B;;AAEA;GACG,YAAY;GACZ,yDAAsD;GACtD,YAAY;AACf;;AAEA;GACG,gGAAgG;GAChG,wBAAwB;GACxB,YAAY;GACZ,iBAAiB;AACpB;;AAEA;;;;;;;;;;GAUG,oBAAoB;AACvB;;AAEA;;;;;;;GAOG,kBAAkB;AACrB;;AAEA;;GAEG,yBAAyB;AAC5B;;AAEA;GACG,gBAAgB;GAChB,SAAS;GACT,mCAAmC;GACnC,eAAe;GACf,yBAAyB;GACzB,mBAAmB;GACnB,iBAAiB;GACjB,eAAe;GACf,YAAY;AACf;;AAEA;GACG,iBAAiB;AACpB;;AAEA;GACG,qBAAqB;GACrB,kBAAkB;GAClB,gBAAgB;AACnB","sourcesContent":[":root {\n   font-size: 16px;\n   --light-gray: #f6f6f6;\n   --scrollbar-color: #cecece;\n   --sidebar-width: max(19vw, 200px);\n}\n\nhtml {\n   height: 100%;\n   scrollbar-color: var(--scrollbar-color) transparent;\n}\n\nbody {\n   margin: 0;\n}\n\n#sidebar {\n   background-color: var(--light-gray);\n   width: var(--sidebar-width);\n   box-sizing: border-box;\n   padding-left: 20px;\n   overflow: auto;\n   position: sticky;\n   top: 0;\n   height: 100vh;\n   display: inline-block;\n   vertical-align: top;\n   scrollbar-color: var(--scrollbar-color) var(--light-gray);\n}\n\n.page-header {\n   margin-top: 10px;\n}\n\n.personal-project-header {\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n}\n\n.add-icon-button {\n   margin-right: max(2vw, 15px);\n   border: none;\n   width: fit-content;\n   padding: 0;\n   background: none;\n   cursor: pointer;\n}\n\n.add-icon {\n   height: 25px;\n   flex: 1;\n   fill: #06b6d4;\n}\n\n.project-list {\n   padding: 0;\n   margin: 0;\n}\n\nli {\n   list-style: none;\n}\n\n.project-item {\n   line-height: 1.6;\n   margin-right: 10px;\n   cursor: pointer;\n   margin-left: -10px;\n   border-radius: 10px;\n   display: grid;\n   grid-template-rows: 1fr 1fr;\n   grid-template-columns: 1fr 1fr;\n   grid-template-areas: \"name btn\"\n                        \"date btn\";\n}\n\n.project-item:hover {\n   background-color: #c8fffb;\n}\n\n#sidebar .project-name {\n   margin: 0;\n   padding-left: 10px;\n   grid-area: name;\n   text-wrap: nowrap;\n}\n\n#sidebar .project-due-date {\n   margin-top: 0;\n   margin-bottom: 0;\n   font-size: 0.9rem;\n   padding-left: 10px;\n   grid-area: date;\n}\n\n.sidebar-delete-btn {\n   padding: 4px 0 0 0;\n   border: none;\n   background-color: transparent;\n   cursor: pointer;\n   grid-area: btn;\n   align-self: start;\n   justify-self: end;\n   margin-right: max(1.6vw, 15px);\n}\n\nimg[src$=\".svg\"]:hover {\n   filter: invert(22%) sepia(95%) saturate(4744%) hue-rotate(353deg) brightness(91%) contrast(128%);\n}\n\n#content {\n   height: fit-content;\n   display: inline-block;\n   min-height: 100vh;\n   width: calc(98.5vw - var(--sidebar-width));\n   min-width: 500px;\n}\n\n#create-project {\n   line-height: 1.6;\n}\n\n.name-container,\n.project-header {\n   margin: 10px 0 0 20px;\n}\n\ninput,\n#description {\n   font-size: 1rem;\n   border: 0.5px solid black;\n   font-family: Arial;\n}\n\n#project-name,\n.project-header > .project-name {\n   font-size: 2rem;\n}\n\n#project-name,\n#due-date {\n   padding: 0;\n   border: none;\n}\n\n.due-date-container {\n   margin-left: 20px;\n}\n\nform .description-container {\n   margin: 50px 0 0 20px;\n}\n\nlabel[for=\"description\"],\n.description-header {\n   display: block;\n   border-bottom: 1.5px solid springgreen\n}\n\n#description {\n   display: block;\n   line-height: 1.4;\n   padding: 0;\n   min-width: 160px;\n   width: calc(calc(98.5vw - var(--sidebar-width)) - 50px);\n}\n\nfieldset {\n   border: none;\n   margin: 50px 0 0 20px;\n   padding: 0;\n}\n\n.checklist-fieldset,\n.notes-fieldset {\n   display: flex;\n   flex-direction: column;\n   row-gap: 20px;\n}\n\nlegend,\nlabel[for=\"description\"],\n#content .description-header,\n#content .checklist-header,\n#content .note-header {\n   font-size: 1.5rem;\n   margin-bottom: 15px;\n   width: -webkit-fill-available;\n   margin-right: 30px;\n}\n\n#checklist,\n.checklist-header {\n   border-bottom: 1.5px solid coral;\n}\n\n#notes,\n.note-header {\n   border-bottom: 1.5px solid #0ea5e9;\n}\n\nform .checklist-container,\nform .note-container {\n   display: flex;\n}\n\n.checklist-fieldset input,\n.notes-fieldset input {\n   width: 25vw;\n   min-width: 200px;\n   padding: 3px 3px;\n   margin-right: 30px;\n}\n\n.list-delete-btn {\n   background-color: white;\n   border: none;\n   padding: 0;\n}\n\n#content img[src$=\".svg\"] {\n   cursor: pointer;\n}\n\n.add-list-item-container {\n   display: flex;\n   align-items: center;\n}\n\n.add-checklist-button,\n.add-note-button {\n   height: 25px;\n   width: 25px;\n   background-image: url(icons/plus.svg);\n   background-repeat: no-repeat;\n   background-color: transparent;\n   border: none;\n   padding: 0;\n   margin: 10px 0 0 16px;\n   cursor: pointer;\n}\n\n.add-checklist-item-text {\n   display: inline-block;\n   margin-top: 10px;\n   margin-left: 5px;\n}\n\n.priority-fieldset > label {\n   margin-right: 15px;\n   font-size: 1.1rem;\n}\n\n#priority {\n   border-bottom: 1.5px solid magenta;\n}\n\ninput[type=\"radio\"] {\n   cursor: pointer;\n}\n\n.align-submit-btn {\n   display: flex;\n   justify-content: flex-end;\n}\n\nbutton[type=\"submit\"] {\n   font-size: 1.1rem;\n   background-color: #c8fffb;\n   margin: 40px 90px 40px 0;\n   border-radius: 20px;\n   padding: 5px 12px;\n   cursor: pointer;\n   border-style: none;\n   font-family: fantasy;\n}\n\ninput[type=\"tel\"]:focus:invalid {\n   outline-color: red;\n   background-color: rgb(255 209 209);\n}\n\ninput[type=\"tel\"]:focus:valid {\n   outline-color: green;\n   background-color: rgb(199 255 199);\n}\n\ninput[type=\"tel\"]:valid:not(:focus) {\n   background-color: rgb(199 255 199);\n}\n\ninput[type=\"tel\"]:invalid:not(:focus) {\n   background-color: rgb(255 209 209);\n}\n\n.project-name {\n   font-weight: normal;\n   margin: 0 0 4px 0;\n}\n\n#content h2,\n#content p {\n   margin: 0;\n}\n\n#content > .description-container,\n#content > .checklist-container,\n#content > .note-container {\n   margin: 59px 0 0 20px;\n}\n\n.description-header,\n.checklist-header,\n.note-header {\n   font-weight: normal;\n   padding-bottom: 6px;\n}\n\n#content > .description-container > p.description-text {\n   padding-top: 2.5px;\n   padding-left: 0.5px;\n   margin-right: 30px;\n   line-height: 1.5;\n}\n\n.list {\n   margin: 0;\n   padding: 0;\n   display: flex;\n   flex-direction: column;\n   row-gap: 10px;\n}\n\n.checklist-item,\n.note-item {\n   font-size: 1rem;\n}\n\n.list input[type=\"checkbox\"] {\n   margin-right: 10px;\n}\n\ninput[type=\"checkbox\"] {\n   cursor: pointer;\n}\n\n#content > .note-container {\n   margin-bottom: 40px;\n}\n\n#content .note-container li {\n   list-style: decimal;\n   list-style-position: inside;\n}\n\n.priority {\n   color: rgb(238, 37, 37);\n}\n\n#content > .project-header > p.priority::after {\n   content: \" \";\n   background-image: url(./icons/clock-alert-outline.svg);\n   height: 25px;\n}\n\n.clock {\n   filter: invert(22%) sepia(95%) saturate(4744%) hue-rotate(353deg) brightness(91%) contrast(128%);\n   vertical-align: text-top;\n   height: 16px;\n   padding-left: 5px;\n}\n\nform #project-name,\nform #due-date,\nform [for=\"due-date\"],\nform [for=\"description\"],\nlegend,\n#content .project-name,\n#content .project-due-date,\n#content .description-header,\n.checklist-header,\n.note-header {\n   font-family: Georgia;\n}\n\ntextarea,\n.checklist-container > input,\n.note-container > input,\n.priority-fieldset label,\n#content .description-text,\n.list,\n.note-item {\n   font-family: Arial;\n}\n\n.click-tab,\n.click-tab:hover {\n   background-color: #a4fff9;\n}\n\n.edit {\n   position: sticky;\n   top: 20px;\n   left: calc(100vw - max(100px, 5vw));\n   cursor: pointer;\n   background-color: #c8fffb;\n   border-radius: 20px;\n   padding: 5px 13px;\n   font-size: 1rem;\n   border: none;\n}\n\n.project-header {\n   margin-top: -15px;\n}\n\n.align-empty-state {\n   align-content: center;\n   text-align: center;\n   margin-top: -7vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/add-checklist-item.js":
/*!***********************************!*\
  !*** ./src/add-checklist-item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _attribute_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-iterator */ "./src/attribute-iterator.js");
/* harmony import */ var _remove_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-item.js */ "./src/remove-item.js");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/delete.svg */ "./src/icons/delete.svg");




let checklistNum = 2;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(checklist) {
   const checklistFieldset = document.querySelector('.checklist-fieldset');
   const container = document.createElement('div');
   const label = document.createElement('label');
   const input = document.createElement('input');
 
   const inputAttributes = {
      firstAt: {
         attribute: 'type',
         value: 'input'
      },
      secondAt: {
         attribute: 'name',
         value: `checklist-${checklistNum}`
      },
      thirdAt: {
         attribute: 'id',
         value: `checklist-${checklistNum}`
      },
      fourthAt: {
         attribute: 'placeholder',
         value: 'Enter Checklist'
      }
   };

   container.classList.add('checklist-container');
   checklistFieldset.appendChild(container);
 
   label.setAttribute('for', `checklist-${checklistNum}`);
   container.appendChild(label);

   if (checklist.type !== 'click') input.value = checklist;

   (0,_attribute_iterator__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, container, input);
 
   input.focus();
 
   checklistNum++;

   appendRemoveChecklistBtn();
};

function appendRemoveChecklistBtn() {
   const deleteButton = document.createElement('button');
   const img = document.createElement('img');
   const checklistContainer = document.querySelector('.checklist-container:last-child');

   deleteButton.addEventListener('click', _remove_item_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
   deleteButton.setAttribute('type', 'button');
   deleteButton.classList.add('list-delete-btn');
   checklistContainer.appendChild(deleteButton);

   img.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
   img.setAttribute('width', '25px');
   deleteButton.appendChild(img);
}

/***/ }),

/***/ "./src/add-note.js":
/*!*************************!*\
  !*** ./src/add-note.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _attribute_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-iterator */ "./src/attribute-iterator.js");
/* harmony import */ var _remove_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-item.js */ "./src/remove-item.js");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/delete.svg */ "./src/icons/delete.svg");




let noteNum = 2;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(note) {
   const noteFieldSet = document.querySelector('.notes-fieldset');
   const container = document.createElement('div');
   const label = document.createElement('label');
   const input = document.createElement('input');

   const inputAttributes = {
      firstAt: {
         attribute: 'type',
         value: 'input'
      },
      secondAt: {
         attribute: 'name',
         value: `note-${noteNum}`,
      },
      thirdAt: {
         attribute: 'id',
         value: `note-${noteNum}`
      },
      fourthAt: {
         attribute: 'placeholder',
         value: 'Enter note'
      }
   };

   container.classList.add('note-container');
   noteFieldSet.appendChild(container);

   label.setAttribute('for', `note-${noteNum}`);
   container.appendChild(label);

   if (note.type !== 'click') input.value = note;

   (0,_attribute_iterator__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, container, input);

   input.focus();

   noteNum++;

   appendRemoveChecklistBtn();
};

function appendRemoveChecklistBtn() {
   const deleteButton = document.createElement('button');
   const img = document.createElement('img');
   const checklistContainer = document.querySelector('.note-container:last-child');

   deleteButton.addEventListener('click', _remove_item_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
   deleteButton.setAttribute('type', 'button');
   deleteButton.classList.add('list-delete-btn');
   checklistContainer.appendChild(deleteButton);

   img.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
   img.setAttribute('width', '25px');
   deleteButton.appendChild(img);
}

/***/ }),

/***/ "./src/attribute-iterator.js":
/*!***********************************!*\
  !*** ./src/attribute-iterator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(attributesObj, parentEl, childEl) {
   let objectKeys = Object.keys(attributesObj);

   for (let i = 0; i < objectKeys.length; i++) {
      let propName = Object.values(attributesObj[objectKeys[i]]);
    
      childEl.setAttribute(propName[0], propName[1]);
      parentEl.appendChild(childEl);
   }
};

/***/ }),

/***/ "./src/capitalize-name.js":
/*!********************************!*\
  !*** ./src/capitalize-name.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
   let splitName = name.split(' ');

   for (let i = 0; i < splitName.length; i++) {
      if (splitName[i].length > 0) {
         let upperCaseWord = splitName[i].at(0).toUpperCase() + splitName[i].slice(1);
         
         if (i === 0) splitName[i] = upperCaseWord;

         if (checkForWordsNotCapitalized(splitName[i]) && i !== 0) {
            splitName[i] = splitName[i].at(0).toLowerCase() + splitName[i].slice(1);
         }
      }
   }

   return splitName.join(' ');
};

let checkForWordsNotCapitalized = (name) => {
   const notCapitalizedWords = ['A', 'And', 'As', 'At', 'But', 'By', 'Down', 'For', 'From', 'If', 'In',
      'Into', 'Like', 'Near', 'Nor', 'Of', 'Off', 'On', 'Once', 'Onto', 'Or', 'Over', 'Past', 'So', 'Than',
      'The', 'That', 'To', 'Upon', 'When', 'With', 'Yet'
   ];

   return notCapitalizedWords.some(word => (word == name));
};

/***/ }),

/***/ "./src/change-tab-color.js":
/*!*********************************!*\
  !*** ./src/change-tab-color.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(currentTab) {
   const [...allTabs] = document.getElementsByClassName('project-item');

   allTabs.map(previousTab => {
      if (previousTab.classList.contains('click-tab')) previousTab.classList.toggle('click-tab');
   });

   currentTab.classList.toggle('click-tab');
};

/***/ }),

/***/ "./src/check-due-date-format.js":
/*!**************************************!*\
  !*** ./src/check-due-date-format.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dueDate) {
	const dueDatePattern = '(0[1-9]|1[1,2])\\/(0[1-9]|[12][0-9]|3[01])';

	const date = new RegExp(dueDatePattern);

	if (date.test(dueDate)) {
		return true;
	} else {
		return false;
	}
};

/***/ }),

/***/ "./src/check-priority.js":
/*!*******************************!*\
  !*** ./src/check-priority.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_clock_alert_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/clock-alert-outline.svg */ "./src/icons/clock-alert-outline.svg");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(priority, sidebarTab) {
   if (priority == 'yes' && sidebarTab !== undefined && !sidebarTab.children[0].classList.contains('priority')) {
      const clock = document.createElement('img');
      const name = sidebarTab.children[0];
      const dueDate = sidebarTab.children[1];

      name.classList.add('priority');
      dueDate.classList.add('priority');

      clock.classList.add('clock');
      clock.setAttribute('src', _icons_clock_alert_outline_svg__WEBPACK_IMPORTED_MODULE_0__);
      
      dueDate.appendChild(clock);

      const mainDueDate = document.querySelector('#content .project-due-date');

      if (document.contains(mainDueDate)) {
         const mainName = document.querySelector('h1.project-name');

         mainName.classList.add('priority');
         mainDueDate.classList.add('priority');
      }
   } else if ((priority == 'yes' && sidebarTab === undefined) || (priority == 'yes' && sidebarTab !== undefined && sidebarTab.children[0].classList.contains('priority'))) {
      const mainName = document.querySelector('h1.project-name');
      const mainDueDate = document.querySelector('#content .project-due-date');

      mainName.classList.add('priority');
      mainDueDate.classList.add('priority');

   } else if (priority == 'no' && sidebarTab !== undefined && sidebarTab.children[0].classList.contains('priority')) {
      const name = sidebarTab.children[0];
      const dueDate = sidebarTab.children[1];

      name.classList.remove('priority');
      dueDate.classList.remove('priority');

      dueDate.textContent = dueDate.textContent;
   }
}

/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
function createProject(createProjectInstances) {
   for (let i = 0; i < createProjectInstances.length; i++) {
      Object.getOwnPropertyNames(Object.getPrototypeOf(createProjectInstances[i]))
      .filter(methodName => (methodName !== 'constructor')).map(method => createProjectInstances[i][method]());
   }
};

/***/ }),

/***/ "./src/delete-project.js":
/*!*******************************!*\
  !*** ./src/delete-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remove_current_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-current-content.js */ "./src/remove-current-content.js");
/* harmony import */ var _empty_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-state.js */ "./src/empty-state.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e) {
	e.stopPropagation();

	const ul = document.querySelector('.project-list');
	let currentProjectTab = this.closest('.project-item');

	let currentName = currentProjectTab.children[0].textContent;
	let currentDueDate = currentProjectTab.children[1].textContent.split(' ');

	let savedProjects = JSON.parse(localStorage.getItem('projects'));

	if (currentProjectTab.classList.contains('click-tab')) {
		const projectList = document.getElementsByClassName('project-item');

		(0,_remove_current_content_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
		
		for (let i = 0; i < projectList.length; i++) {
			if (i == projectList.length - 1 && projectList[i].innerHTML == currentProjectTab.innerHTML && projectList.length !== 1) {
				projectList[i - 1].click();

			} else if (i !== projectList.length - 1 && projectList[i].innerHTML == currentProjectTab.innerHTML && projectList.length !== 1) {
				projectList[i + 1].click();

			} else if (i == 0 && projectList.length == 1) {
				(0,_empty_state_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
			}
		}
	}

	ul.removeChild(currentProjectTab);

	for (let project in savedProjects) {
		let savedName = savedProjects[project].name;
		let savedDueDate = savedProjects[project].dueDate;

		if (Object.is(savedName, currentName) && Object.is(savedDueDate, currentDueDate[1])) {
			const {[project]: remove , ...projects} = savedProjects;
			
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	}
};

/***/ }),

/***/ "./src/edit-project.js":
/*!*****************************!*\
  !*** ./src/edit-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redisplayFormForEdit: () => (/* binding */ redisplayFormForEdit),
/* harmony export */   updateChecklist: () => (/* binding */ updateChecklist),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _project_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-form.js */ "./src/project-form.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _remove_current_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-current-content.js */ "./src/remove-current-content.js");




let redisplayFormForEdit = () => {
   const savedProjects = JSON.parse(localStorage.getItem('projects'));
   const selectedTab = document.querySelector('.click-tab');
   let name = selectedTab.children[0].textContent;
   let dueDate = selectedTab.children[1].textContent.split(' ');

   for (let project in savedProjects) {
		const savedProject = savedProjects[project];

		if (Object.is(savedProject.name, name) && Object.is(savedProject.dueDate, dueDate[1])) {
         const selectedTab = document.querySelector('.click-tab');
         const {[project]: projectToEdit} = savedProjects;

         (0,_remove_current_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

         const form = new _project_form_js__WEBPACK_IMPORTED_MODULE_0__.Form();
         const header = new _project_form_js__WEBPACK_IMPORTED_MODULE_0__.Header(savedProject.name, savedProject.dueDate);

         form.appendForm();
         header.appendProjectHeader(selectedTab);
         header.appendDueDate(selectedTab);

			const createForm = [
            new _project_form_js__WEBPACK_IMPORTED_MODULE_0__.Description(savedProject.description),
            new _project_form_js__WEBPACK_IMPORTED_MODULE_0__.Checklist(savedProject.checklist),
            new _project_form_js__WEBPACK_IMPORTED_MODULE_0__.Notes(savedProject.notes),
            new _project_form_js__WEBPACK_IMPORTED_MODULE_0__.Priority(savedProject.priority),
            new _project_form_js__WEBPACK_IMPORTED_MODULE_0__.Submit()
			];

			(0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(createForm);

         localStorage.setItem('projectToEdit', JSON.stringify(projectToEdit));
		}
	}
};

let updateProject = (name, dueDate, description, checklist, notes, priority) => {
   const currentProjectTab = document.querySelector('.click-tab');
   let originalProject = JSON.parse(localStorage.getItem('projectToEdit'));
   let savedProjects =JSON.parse(localStorage.getItem('projects'));
   let allProjects = {};

   for (let project in savedProjects) {
      let savedProject = savedProjects[project];

      if (Object.is(savedProject.name, originalProject.name) && Object.is(savedProject.dueDate, originalProject.dueDate)) {
         const {[project]: removeOldProject, ...projects} = savedProjects;

         Object.assign(allProjects, projects);

         allProjects[`${name}`] = {
            name: name,
            dueDate: dueDate,
            description: description,
            checklist: checklist,
            notes: notes,
            priority: priority
         };

         localStorage.setItem('projects', JSON.stringify(allProjects));
         localStorage.setItem('recentlyViewedTab', JSON.stringify(currentProjectTab.innerHTML));
      }
   }
};

let updateChecklist = (e) => {
   const selectedTab = document.querySelector('.click-tab');
   const name = selectedTab.children[0].textContent;
   const dueDate = selectedTab.children[1].textContent.split(' ')[1];
   let checklistNumber = e.target.id.split('-')[1];
   let projects = JSON.parse(localStorage.getItem('projects'));

   for (let project in projects) {
      if (Object.is(projects[project].name, name) && Object.is(projects[project].dueDate, dueDate)) {
         projects[project].checklist[checklistNumber].isChecked ? 
         projects[project].checklist[checklistNumber].isChecked = false : 
         projects[project].checklist[checklistNumber].isChecked = true;
         
         localStorage.setItem('projects', JSON.stringify(projects));
      }
   }
};



/***/ }),

/***/ "./src/empty-state.js":
/*!****************************!*\
  !*** ./src/empty-state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_seaside_vacation_empty_beach_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/seaside-vacation-empty-beach.png */ "./src/icons/seaside-vacation-empty-beach.png");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
   const content = document.getElementById('content');
   const img = document.createElement('img');
   const msg = document.createElement('p');
   const height = window.innerHeight / 2;
   
   img.src = _icons_seaside_vacation_empty_beach_png__WEBPACK_IMPORTED_MODULE_0__;
   img.setAttribute('height', `${height}px`);

   msg.textContent = 'Empty! Relax and enjoy your free time. You have earned it!';
   msg.style['font-family'] = "Comic Sans MS";
   
   content.classList.add('align-empty-state');

   content.appendChild(img);
   content.appendChild(msg);
}

/***/ }),

/***/ "./src/finalize-tab.js":
/*!*****************************!*\
  !*** ./src/finalize-tab.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, dueDate, targetNode) {
   const  projectName = targetNode.children[0];
   const date = targetNode.children[1];

   let dateAndClock = date.innerHTML.split("<");

   projectName.textContent = name;

   date.innerHTML = `Due: ${dueDate}<${dateAndClock[1]}`;
};

/***/ }),

/***/ "./src/get-form.js":
/*!*************************!*\
  !*** ./src/get-form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getForm)
/* harmony export */ });
/* harmony import */ var _check_due_date_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-due-date-format */ "./src/check-due-date-format.js");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-content */ "./src/main-content.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _finalize_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finalize-tab.js */ "./src/finalize-tab.js");
/* harmony import */ var _save_project_to_local_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save-project-to-local-storage.js */ "./src/save-project-to-local-storage.js");
/* harmony import */ var _check_priority_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-priority.js */ "./src/check-priority.js");
/* harmony import */ var _sort_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort-tabs.js */ "./src/sort-tabs.js");
/* harmony import */ var _capitalize_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capitalize-name.js */ "./src/capitalize-name.js");
/* harmony import */ var _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save-unfinished-project.js */ "./src/save-unfinished-project.js");
/* harmony import */ var _edit_project_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-project.js */ "./src/edit-project.js");











function getForm(e) {
	e.preventDefault();

	let name = document.getElementById('project-name').value;
	const dueDate = document.getElementById('due-date').value;
	const description = document.getElementById('description').value;
	const checklist = document.querySelectorAll('.checklist-container input');
	const notes = document.querySelectorAll('.note-container input');
	const priority = document.querySelector('input[name="priority"]:checked').value;

	const content = document.getElementById('content');
	const form = document.getElementById('create-project');

	let checklistItems = {};
	let noteItems = [];
	let checklistText = [];

	name = (0,_capitalize_name_js__WEBPACK_IMPORTED_MODULE_7__["default"])(name);

	const finalizeProject = [
		new _main_content__WEBPACK_IMPORTED_MODULE_1__.Edit(),
		new _main_content__WEBPACK_IMPORTED_MODULE_1__.Header(name, dueDate),
		new _main_content__WEBPACK_IMPORTED_MODULE_1__.Description(description),
		new _main_content__WEBPACK_IMPORTED_MODULE_1__.Checklist(checklistItems),
		new _main_content__WEBPACK_IMPORTED_MODULE_1__.Notes(noteItems)
	];

	let trimInput = () => {
		for (let i = 0; i < checklistText.length; i++) {
			checklistText[i] = checklistText[i].trim();
		}

		for (let i = 0; i < noteItems.length; i++) {
			noteItems[i] = noteItems[i].trim();
		}
	};

	let removeWhiteSpaceInput = () => {
		checklistText = checklistText.filter(text => (text !== ''));
		noteItems = noteItems.filter(note => (note !== ''));
	};

	if ((0,_check_due_date_format__WEBPACK_IMPORTED_MODULE_0__["default"])(dueDate)) {
		let edited = false;
		let projectToEdit = JSON.parse(localStorage.getItem('projectToEdit'));

		for (let i = 0; i < checklist.length; i++) {
			checklistText.push(checklist[i].value);
		}
	
		for (let i = 0; i < notes.length; i ++) {
			noteItems.push(notes[i].value);
		}

		trimInput();
		removeWhiteSpaceInput();

		if (projectToEdit) {
			let keys = Object.keys(projectToEdit.checklist);

			for (let i = 0; i < checklistText.length; i++) {
				if (i + 1 == keys[i]) {
					checklistItems[i + 1] = {
						text: checklistText[i],
						isChecked: projectToEdit.checklist[keys[i]].isChecked
					};

				} else {
					checklistItems[i + 1] = {
						text: checklistText[i],
						isChecked: false
					};
				}
			}

			edited =  true;

		} else {
			for (let i = 0; i < checklistText.length; i++) {
				checklistItems[i + 1] = {
					text: checklistText[i],
					isChecked: false
				};
			}
		}

		if (localStorage.getItem('projectToEdit')) {
			(0,_edit_project_js__WEBPACK_IMPORTED_MODULE_9__.updateProject)(name, dueDate, description, checklistItems, noteItems, priority);
			edited = true;
		}

		content.removeChild(form);

		(0,_create_project__WEBPACK_IMPORTED_MODULE_2__.createProject)(finalizeProject);

		if (!localStorage.getItem('projectToEdit')) {
			(0,_save_project_to_local_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"])(name, dueDate, description, checklistItems, noteItems, priority);
		}

		const selectedTab = document.querySelector('.click-tab');
		
		(0,_finalize_tab_js__WEBPACK_IMPORTED_MODULE_3__["default"])(name, dueDate, selectedTab);
		(0,_check_priority_js__WEBPACK_IMPORTED_MODULE_5__["default"])(priority, selectedTab);
		(0,_sort_tabs_js__WEBPACK_IMPORTED_MODULE_6__["default"])();

		selectedTab.classList.remove('new-tab');

		localStorage.setItem('recentlyViewedTab', JSON.stringify(selectedTab.innerHTML));

		if (!edited) localStorage.removeItem('unfinishedProject');

		localStorage.removeItem('projectToEdit');

      window.removeEventListener('keyup', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

	} else {
		return;
	}
};

/***/ }),

/***/ "./src/load-tabs.js":
/*!**************************!*\
  !*** ./src/load-tabs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_project_tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-project-tab.js */ "./src/sidebar-project-tab.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _finalize_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finalize-tab.js */ "./src/finalize-tab.js");
/* harmony import */ var _check_priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-priority.js */ "./src/check-priority.js");
/* harmony import */ var _empty_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty-state.js */ "./src/empty-state.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
   let savedProjects = JSON.parse(localStorage.getItem('projects'));

   if (!savedProjects || Object.getOwnPropertyNames(savedProjects).length == 0) {
      (0,_empty_state_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
      return;
   }

   for (let project in savedProjects) {
      let newTab = [
         new _sidebar_project_tab_js__WEBPACK_IMPORTED_MODULE_0__["default"](savedProjects[project].name, savedProjects[project].dueDate)
      ];

      (0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(newTab);

      const recentTab = document.querySelector('.project-item:last-child');

      (0,_check_priority_js__WEBPACK_IMPORTED_MODULE_3__["default"])(savedProjects[project].priority, recentTab);

      (0,_finalize_tab_js__WEBPACK_IMPORTED_MODULE_2__["default"])(savedProjects[project].name, savedProjects[project].dueDate, recentTab);
   }
};

/***/ }),

/***/ "./src/main-content.js":
/*!*****************************!*\
  !*** ./src/main-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checklist: () => (/* binding */ Checklist),
/* harmony export */   Description: () => (/* binding */ Description),
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Notes: () => (/* binding */ Notes)
/* harmony export */ });
/* harmony import */ var _attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-iterator.js */ "./src/attribute-iterator.js");
/* harmony import */ var _edit_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-project.js */ "./src/edit-project.js");



const content = document.getElementById('content');

class Edit {
	appendEditBtn() {
		const editBtn = document.createElement('button');
		const contentContainer = document.querySelector('#content');

		editBtn.textContent = 'Edit';
		editBtn.classList.toggle('edit');
		editBtn.setAttribute('type', 'button');

		editBtn.addEventListener('click', _edit_project_js__WEBPACK_IMPORTED_MODULE_1__.redisplayFormForEdit);

		contentContainer.appendChild(editBtn);
	}
}

class Header {
	constructor(projectName, dueDate) {
		this.projectName = projectName;
		this.dueDate = dueDate;
	}

	appendName() {
		const headerContainer = document.createElement('div');
		const name = document.createElement('h1');

		headerContainer.classList.add('project-header');
		content.appendChild(headerContainer);

		name.textContent = this.projectName;
		name.classList.add('project-name');
		headerContainer.appendChild(name);
	}

	appendDueDate() {
		const headerContainer = document.querySelector('#content > div:not(class)');
		const date = document.createElement('p');

		date.textContent = `Due: ${this.dueDate}`;
		date.classList.add('project-due-date');

		headerContainer.appendChild(date);
	}
}

class Description {
	constructor(description) {
		this.description = description;
	}

	appendDescription() {
		const descriptionContainer = document.createElement('div');
		const header = document.createElement('h2');
		const description = document.createElement('p');

		descriptionContainer.classList.add('description-container');
		content.appendChild(descriptionContainer);

		header.textContent = 'Description';
		header.classList.add('description-header');
		descriptionContainer.appendChild(header);

		description.textContent = this.description;
		description.classList.add('description-text');
		descriptionContainer.appendChild(description);
	}
}

class Checklist {
	constructor(checklistItems) {
		this.checklistItems = checklistItems;
	}

	appendChecklist() {
		const checklistContainer = document.createElement('div');
		const header = document.createElement('h2');
		const listItemContainer =  document.createElement('div');

		checklistContainer.classList.add('checklist-container');
		content.appendChild(checklistContainer);

		header.textContent = 'Checklist';
		header.classList.add('checklist-header');
		checklistContainer.appendChild(header);

		listItemContainer.addEventListener('click', _edit_project_js__WEBPACK_IMPORTED_MODULE_1__.updateChecklist);

		listItemContainer.classList.add('list');
		checklistContainer.appendChild(listItemContainer);

		let count = 1;

		for (let checklistItem in this.checklistItems) {
			if (this.checklistItems[checklistItem].text !== '') {
				const listItem = document.createElement('div');
				const input = document.createElement('input');
				const label = document.createElement('label')

				const inputAttributes = {
					firstAt: {
						attribute: 'type',
						value: 'checkbox'
					},
					secondAt: {
						attribute: 'name',
						value: `checklist-${count}`
					},
					thirdAt: {
						attribute: 'id',
						value: `checklist-${count}`
					}
				};

				listItem.classList.add('checklist-item');
				listItemContainer.appendChild(listItem);

				input.checked = this.checklistItems[checklistItem].isChecked;

				(0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, listItem, input);

				label.textContent = this.checklistItems[checklistItem].text;
				label.setAttribute('for', `checklist-${count}`)
				listItem.appendChild(label);

				count++;
			}
		}
	}
}

class Notes {
	constructor(noteItems) {
		this.noteItems = noteItems;
	}

	appendNotes() {
		const noteContainer = document.createElement('div');
		const header = document.createElement('h2');
		const list = document.createElement('ul');

		noteContainer.classList.add('note-container');
		content.appendChild(noteContainer);

		header.textContent = 'Notes';
		header.classList.add('note-header');
		noteContainer.appendChild(header);

		list.classList.add('list')
		noteContainer.appendChild(list);

		for (let i = 0; i < this.noteItems.length; i++) {
			if (this.noteItems[i] !== '') {
				const note = document.createElement('li');

				note.classList.add('note-item');
				note.textContent = this.noteItems[i];
				list.appendChild(note);
			}
		}
	}
}



/***/ }),

/***/ "./src/project-form.js":
/*!*****************************!*\
  !*** ./src/project-form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checklist: () => (/* binding */ Checklist),
/* harmony export */   Description: () => (/* binding */ Description),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Notes: () => (/* binding */ Notes),
/* harmony export */   Priority: () => (/* binding */ Priority),
/* harmony export */   Submit: () => (/* binding */ Submit)
/* harmony export */ });
/* harmony import */ var _attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-iterator.js */ "./src/attribute-iterator.js");
/* harmony import */ var _add_checklist_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-checklist-item.js */ "./src/add-checklist-item.js");
/* harmony import */ var _add_note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-note.js */ "./src/add-note.js");
/* harmony import */ var _remove_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-item.js */ "./src/remove-item.js");
/* harmony import */ var _get_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-form.js */ "./src/get-form.js");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _update_tab_live_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-tab-live.js */ "./src/update-tab-live.js");








class Form {
   appendForm() {
      const content = document.getElementById('content');
      const form = document.createElement('form');

      const inputAttributes = {
         firstAt: {
            attribute: 'action',
            value: '#'
         },
         secondAt: {
            attribute: 'method',
            value: 'get'
         },
         thirdAt: {
            attribute: 'id',
            value: 'create-project'
         }
      }

      ;(0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, content, form);
   }
}

class Header {
   constructor(name, dueDate) {
      this.name = name;
      this.dueDate = dueDate;
   }

   appendProjectHeader(tabNode) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const nameContainer = document.createElement('div');
      const form = document.getElementById('create-project');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'project-name'
         },
         secondAt: {
            attribute: 'name',
            value: 'project-name'
         },
         thirdAt: {
            attribute: 'id',
            value: 'project-name'
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'Project Name'
         },
         fifthAt: {
            attribute: 'required',
            value: ''
         }
      };

      input.value = this.name;
      nameContainer.classList.add('name-container');

      form.appendChild(nameContainer);

      const name = document.querySelector('form div');

      label.setAttribute('for', 'project-name');
      name.appendChild(label);

      name.addEventListener('keydown', function(e) {
         (0,_update_tab_live_js__WEBPACK_IMPORTED_MODULE_6__.updateName)(e, tabNode);
      });

      (0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, name, input);

      input.focus();
   }

   appendDueDate(tabNode) {
      const form = document.getElementById('create-project');
      const dateContainer = document.createElement('div');
      const dateLabel = document.createElement('label');
      const inputDate = document.createElement('input');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'tel'
         },
         secondAt: {
            attribute: 'name',
            value: 'due-date'
         },
         thirdAt: {
            attribute: 'id',
            value: 'due-date'
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'mm/dd'
         },
         fifthAt: {
            attribute: 'required',
            value: ''
         },
         sixthAt: {
            attribute: 'pattern',
            value: '(0[1-9]|1[1,2])\\/(0[1-9]|[12][0-9]|3[01])'
         },
         seventhAt: {
            attribute: 'minlength',
            value: '5'
         },
         eighthAt: {
            attribute: 'maxlength',
            value: '5'
         }
      };

      dateContainer.classList.add('due-date-container');
      form.appendChild(dateContainer);

      dateLabel.textContent = 'Due: ';
      dateLabel.setAttribute('for', 'due-date');

      dateContainer.appendChild(dateLabel);
      
      inputDate.addEventListener('keydown', function(e) {
         (0,_update_tab_live_js__WEBPACK_IMPORTED_MODULE_6__.updateDueDate)(e, tabNode);
      });
      inputDate.addEventListener('keyup', function(e) {
         (0,_update_tab_live_js__WEBPACK_IMPORTED_MODULE_6__.addForwardSlash)(e, tabNode);
      });

      inputDate.value = this.dueDate;

      (0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, dateContainer, inputDate);
   }
}

class Description {
   constructor(description) {
      this.description = description;
   }

   appendDescription() {
      const form = document.getElementById('create-project');
      const descriptionContainer = document.createElement('div');
      const label = document.createElement('label');
      const textArea = document.createElement('textarea');

      const textAreaAttributes = {
         firstAt: {
            attribute: 'id',
            value: 'description'
         },
         secondAt: {
            attribute: 'name',
            value: 'description'
         },
         thirdAt: {
            attribute: 'rows',
            value: '5'
         },
         fourthAt: {
            attribute: 'cols',
            value: '60'
         }
      };

      descriptionContainer.classList.add('description-container');

      form.appendChild(descriptionContainer);

      label.textContent = 'Description';
      label.setAttribute('for', 'description');

      descriptionContainer.appendChild(label);

      textArea.value = this.description;

      (0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(textAreaAttributes, descriptionContainer, textArea);
   }
}

class Checklist {
   constructor(checklist) {
      this.checklist = checklist;
   }

   appendChecklist() {
      const form = document.getElementById('create-project');
      const fieldSet = document.createElement('fieldset');
      const legend = document.createElement('legend');
      const container = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: `text`
         },
         secondAt: {
            attribute: 'name',
            value: `checklist-1`
         },
         thirdAt: {
            attribute: 'id',
            value: `checklist-1`
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'Enter Checklist'
         }
      };
      
      fieldSet.classList.add('checklist-fieldset');
      form.appendChild(fieldSet);

      legend.textContent = 'Checklist';
      legend.setAttribute('id', 'checklist');

      fieldSet.appendChild(legend);

      container.classList.add('checklist-container');
      fieldSet.appendChild(container);

      label.setAttribute('for', 'checklist-1');
      container.appendChild(label);

      if (this.checklist['1'] !== undefined) input.value = this.checklist['1'].text;

      (0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, container, input);

      for (let checklistItem in this.checklist) {
         let keys =  Object.keys(this.checklist);

         if (checklistItem !== keys[0]) {
            (0,_add_checklist_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.checklist[checklistItem].text);
         }
      }
   }

   appendRemoveChecklistBtn() {
      const deleteButton = document.createElement('button');
      const img = document.createElement('img');
      const checklistContainer = document.querySelector('.checklist-container');

      deleteButton.addEventListener('click', _remove_item_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      deleteButton.setAttribute('type', 'button');
      deleteButton.classList.add('list-delete-btn');
      checklistContainer.appendChild(deleteButton);

      img.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__;
      img.setAttribute('width', '25px');
      deleteButton.appendChild(img);
   }

   appendAddChecklistBtn() {
      const form = document.getElementById('create-project');
      const addItemContainer = document.createElement('div');
      const iconBtn = document.createElement('button');
      const addItem = document.createElement('div');

      addItemContainer.classList.add('add-list-item-container');

      form.appendChild(addItemContainer);

      iconBtn.setAttribute('type', 'button');
      iconBtn.classList.add('add-checklist-button');
      iconBtn.addEventListener('click', _add_checklist_item_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

      addItemContainer.appendChild(iconBtn);

      addItem.textContent = 'New Checklist';
      addItem.classList.add('add-checklist-item-text');
      
      addItemContainer.appendChild(addItem);
   }
}

class Notes {
   constructor(notes) {
      this.notes = notes;
   }

   appendNotes() {
      const form = document.getElementById('create-project');
      const fieldSet = document.createElement('fieldset');
      const container = document.createElement('div');
      const legend = document.createElement('legend');
      const label = document.createElement('label');
      const input = document.createElement('input');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'input'
         },
         secondAt: {
            attribute: 'name',
            value: 'note-1'
         },
         thirdAt: {
            attribute: 'id',
            value: 'note-1'
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'Enter Note'
         }
      };

      fieldSet.classList.add('notes-fieldset');
      form.appendChild(fieldSet);

      legend.textContent = 'Notes';
      legend.setAttribute('id', 'notes');
      fieldSet.appendChild(legend);

      container.classList.add('note-container');
      fieldSet.appendChild(container);

      label.setAttribute('for', 'note-1');
      container.appendChild(label);

      input.value = this.notes[0];

      (0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputAttributes, container, input);

      for (let i = 1; i < this.notes.length; i++) {
         (0,_add_note_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.notes[i]);
      }
   }

   appendRemoveNoteBtn() {
      const deleteButton = document.createElement('button');
      const img = document.createElement('img');
      const checklistContainer = document.querySelector('.note-container');

      deleteButton.addEventListener('click', _remove_item_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      deleteButton.setAttribute('type', 'button');
      deleteButton.classList.add('list-delete-btn');
      checklistContainer.appendChild(deleteButton);

      img.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__;
      img.setAttribute('width', '25px');
      deleteButton.appendChild(img);
   }

   appendAddNoteBtn() {
      const form = document.getElementById('create-project');
      const addItemContainer = document.createElement('div');
      const iconBtn = document.createElement('button');
      const addNote = document.createElement('div');

      addItemContainer.classList.add('add-list-item-container');
      form.appendChild(addItemContainer);

      iconBtn.setAttribute('type', 'button');
      iconBtn.classList.add('add-note-button');
      iconBtn.addEventListener('click', _add_note_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

      addItemContainer.appendChild(iconBtn);

      addNote.textContent = 'New Note';
      addNote.classList.add('add-checklist-item-text');
      addItemContainer.appendChild(addNote);
   }
}

class Priority {
   constructor(priority) {
      this.priority = priority;
   }

   appendAskIfPriority() {
      const form = document.getElementById('create-project');
      const fieldSet = document.createElement('fieldset');
      const legend = document.createElement('legend');
      const yesInput = document.createElement('input');
      const noInput = document.createElement('input');
      const yesLabel = document.createElement('label');
      const noLabel = document.createElement('label');

      const yesInputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'radio'
         },
         secondAt: {
            attribute: 'name',
            value: 'priority'
         },
         thirdAt: {
            attribute: 'id',
            value: 'yes'
         },
         fourthAt: {
            attribute: 'value',
            value: 'yes'
         }
      };

      const noInputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'radio'
         },
         secondAt: {
            attribute: 'name',
            value: 'priority'
         },
         thirdAt: {
            attribute: 'id',
            value: 'no'
         },
         fourthAt: {
            attribute: 'value',
            value: 'no'
         }
      };

      fieldSet.classList.add('priority-fieldset');
      form.appendChild(fieldSet);

      legend.textContent = 'Priority';
      legend.setAttribute('id', 'priority');

      fieldSet.appendChild(legend);

      (0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(yesInputAttributes, fieldSet, yesInput);

      yesLabel.textContent = 'Yes';
      yesLabel.setAttribute('for', 'yes');
      fieldSet.appendChild(yesLabel);

      (0,_attribute_iterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(noInputAttributes, fieldSet, noInput);

      noLabel.textContent = 'No';
      noLabel.setAttribute('for', 'no');
      fieldSet.appendChild(noLabel);

      const checkedPriority = document.getElementById(`${this.priority}`);
      checkedPriority.checked = true;
   }
}

class Submit {
   appendSubmitBtn() {
      const form = document.getElementById('create-project');
      const div = document.createElement('div');
      const submitBtn = document.createElement('button');

      div.classList.add('align-submit-btn');
      form.appendChild(div);

      submitBtn.textContent = 'Submit';
      submitBtn.addEventListener('click', _get_form_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      submitBtn.setAttribute('type', 'submit');

      div.appendChild(submitBtn);
   }
}



/***/ }),

/***/ "./src/remove-current-content.js":
/*!***************************************!*\
  !*** ./src/remove-current-content.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
   const content = document.getElementById('content');

   while (content.lastChild !== null) {
		content.removeChild(content.lastChild);
   }
};

/***/ }),

/***/ "./src/remove-item.js":
/*!****************************!*\
  !*** ./src/remove-item.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
   let currentFieldSet = this.closest('fieldset');
   let currentItemContainer = this.closest('.note-container') || this.closest('.checklist-container');

   currentFieldSet.removeChild(currentItemContainer);
};

/***/ }),

/***/ "./src/save-project-to-local-storage.js":
/*!**********************************************!*\
  !*** ./src/save-project-to-local-storage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let allProjects = {};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, dueDate, description, checklist, notes, priority) {
   if (!localStorage.getItem('projects')) {
      allProjects[`${name}`] = {
         name: name,
         dueDate: dueDate,
         description: description,
         checklist: checklist,
         notes: notes,
         priority: priority
      };

      localStorage.setItem('projects', JSON.stringify(allProjects));
      
   } else {
      let savedProjects = JSON.parse(localStorage.getItem('projects'));

      Object.assign(allProjects, savedProjects);

      allProjects[`${name}`] = {
         name: name,
         dueDate: dueDate,
         description: description,
         checklist: checklist,
         notes: notes,
         priority: priority
      };

      localStorage.setItem('projects', JSON.stringify(allProjects));
   }
};

/***/ }),

/***/ "./src/save-unfinished-project.js":
/*!****************************************!*\
  !*** ./src/save-unfinished-project.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
   const projectName = document.getElementById('project-name').value;
   const dueDate = document.getElementById('due-date').value;
   const description = document.getElementById('description').value;
   const checklist = document.querySelectorAll('.checklist-container input');
   const notes = document.querySelectorAll('.note-container input');
   const priority = document.querySelector('input[name="priority"]:checked').value;

   let checklistItems = {};
   let noteItems = [];
   let checklistText = [];

   for (let i = 0; i < checklist.length; i++) {
      checklistText.push(checklist[i].value);
   }

   for (let i = 0; i < notes.length; i ++) {
      noteItems.push(notes[i].value);
   }

   for (let i = 0; i < checklistText.length; i++) {
      checklistItems[i + 1] = {
         text: checklistText[i],
         isChecked: false
      };
   }

   let unfinishedProject = {
      name: projectName,
      dueDate: dueDate,
      description: description,
      checklist: checklistItems,
      notes: noteItems,
      priority: priority
   };

   localStorage.setItem('unfinishedProject', JSON.stringify(unfinishedProject));
};

/***/ }),

/***/ "./src/select-tab.js":
/*!***************************!*\
  !*** ./src/select-tab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content.js */ "./src/main-content.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _check_priority_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-priority.js */ "./src/check-priority.js");
/* harmony import */ var _remove_current_content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-current-content.js */ "./src/remove-current-content.js");
/* harmony import */ var _change_tab_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-tab-color.js */ "./src/change-tab-color.js");
/* harmony import */ var _project_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-form.js */ "./src/project-form.js");
/* harmony import */ var _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save-unfinished-project.js */ "./src/save-unfinished-project.js");








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e) {
   let savedProjects = JSON.parse(localStorage.getItem('projects'));
   let tab = e.target.closest('.project-item');
   let name = tab.children[0].textContent;
   let dueDate = tab.children[1].textContent.split(' ');

   (0,_remove_current_content_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
	window.removeEventListener('keyup', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
	localStorage.removeItem('projectToEdit');

   for (let project in savedProjects) {
		let savedName = savedProjects[project].name;
		let savedDueDate = savedProjects[project].dueDate;

		if (Object.is(savedName, name) && Object.is(savedDueDate, dueDate[1])) {
			const finalizeProject = [
				new _main_content_js__WEBPACK_IMPORTED_MODULE_0__.Edit(),
				new _main_content_js__WEBPACK_IMPORTED_MODULE_0__.Header(savedProjects[project].name, savedProjects[project].dueDate),
				new _main_content_js__WEBPACK_IMPORTED_MODULE_0__.Description(savedProjects[project].description),
				new _main_content_js__WEBPACK_IMPORTED_MODULE_0__.Checklist(savedProjects[project].checklist),
				new _main_content_js__WEBPACK_IMPORTED_MODULE_0__.Notes(savedProjects[project].notes)
			];

			const recentlyViewedTab = tab.innerHTML;

			localStorage.setItem('recentlyViewedTab', JSON.stringify(recentlyViewedTab));

			(0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(finalizeProject);
			(0,_check_priority_js__WEBPACK_IMPORTED_MODULE_2__["default"])(savedProjects[project].priority);
			(0,_change_tab_color_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tab);
		}
	}

	let unfinishedProject = JSON.parse(localStorage.getItem('unfinishedProject'));

	if (tab.classList.contains('new-tab') && localStorage.getItem('unfinishedProject')) {
		const form = new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Form();
		const header = new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Header(unfinishedProject.name, unfinishedProject.dueDate);

		form.appendForm();
		header.appendProjectHeader(tab);
		header.appendDueDate(tab);


		const createForm = [
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Description(unfinishedProject.description),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Checklist(unfinishedProject.checklist),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Notes(unfinishedProject.notes),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Priority(unfinishedProject.priority),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Submit()
		];

		(0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(createForm);
		(0,_change_tab_color_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tab);

		const priorityFieldset = document.querySelector('.priority-fieldset');

		window.addEventListener('keyup', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
		priorityFieldset.addEventListener('click', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

	} else if (tab.classList.contains('new-tab') && !localStorage.getItem('unfinishedProject')) {
		const form = new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Form();
		const header = new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Header('', '');

		form.appendForm();
		header.appendProjectHeader(tab);
		header.appendDueDate(tab);


		const createForm = [
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Description(''),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Checklist(['']),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Notes(['']),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Priority('yes'),
			new _project_form_js__WEBPACK_IMPORTED_MODULE_5__.Submit()
		];

		(0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(createForm);
		(0,_change_tab_color_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tab);

		const priorityFieldset = document.querySelector('.priority-fieldset');

		window.addEventListener('keyup', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
		priorityFieldset.addEventListener('click', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
	}
};

/***/ }),

/***/ "./src/sidebar-project-tab.js":
/*!************************************!*\
  !*** ./src/sidebar-project-tab.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBarProjectTab)
/* harmony export */ });
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _delete_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-project.js */ "./src/delete-project.js");



class SideBarProjectTab {
   constructor(name, dueDate) {
      this.name = name;
      this.dueDate = dueDate;
   }

   appendItem() {
      const li = document.createElement('li');
      const projectList = document.querySelector('.project-list');
 
      projectList.appendChild(li);
 
      const newProject = document.querySelector('.project-list li:last-child');
 
      newProject.classList.add('project-item');
   }
 
   appendName() {
      const title = document.createElement('h3');
      const projectItem = document.querySelector('.project-item:last-child');
 
      title.textContent = this.name;
      projectItem.appendChild(title);
 
      const projectName = document.querySelector('.project-item:last-child h3');
 
      projectName.classList.add('project-name');
   }
 
   appendDueDate() {
      const para = document.createElement('p');
      const projectItem = document.querySelector('.project-item:last-child');
 
      para.textContent = `Due: ${this.dueDate}`;
      projectItem.appendChild(para);
 
      const projectDueDate = document.querySelector('.project-item:last-child p');
 
      projectDueDate.classList.add('project-due-date');
   }

   appendDeleteBtn() {
      const tab = document.querySelector('.project-item:last-child');
      const deleteBtn = document.createElement('button');
      const img = document.createElement('img');

      img.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
      img.setAttribute('width', '25px');
      img.setAttribute('alt', 'Trash can icon');

      deleteBtn.addEventListener('click', _delete_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      deleteBtn.appendChild(img);

      deleteBtn.classList.add('sidebar-delete-btn');

      tab.appendChild(deleteBtn);
   }
}

/***/ }),

/***/ "./src/sort-tabs.js":
/*!**************************!*\
  !*** ./src/sort-tabs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sidebarList = document.querySelector('.project-list');
const sidebarTabs = document.getElementsByClassName('project-item');

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
   const priorityTabs = [...sidebarTabs].filter(tab => tab.children[0].classList.contains('priority'));
   const firstNonPriorityTab = [...sidebarTabs].find(tab => !tab.children[0].classList.contains('priority'));
   const nonPriorityTabs = [...sidebarTabs].filter(tab => !tab.children[0].classList.contains('priority'));

   const sortedPriorityTabs = priorityTabs.sort((tabA, tabB) => {
      return tabA.children[0].textContent > tabB.children[0].textContent ? 1 : -1;
   });

   const sortedNonPriorityTabs = nonPriorityTabs.sort((tabA, tabB) => {
      return tabA.children[0].textContent > tabB.children[0].textContent ? 1 : -1;
   });

   sortedPriorityTabs.map(tab => sidebarList.insertBefore(tab, firstNonPriorityTab));

   sortedNonPriorityTabs.map(tab => sidebarList.appendChild(tab));
};

/***/ }),

/***/ "./src/update-tab-live.js":
/*!********************************!*\
  !*** ./src/update-tab-live.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addForwardSlash: () => (/* binding */ addForwardSlash),
/* harmony export */   updateDueDate: () => (/* binding */ updateDueDate),
/* harmony export */   updateName: () => (/* binding */ updateName)
/* harmony export */ });
let updateName = (e, tab) => {
   let tabName = tab.children[0];
   let key = e.key;
   let projectName = e.target.value;

   if (key == 'Backspace') {
      let updatedName = projectName.slice(0, -1);

      tabName.textContent = updatedName;

      if (projectName.length == 1 || projectName.length == 0) {
         tabName.textContent = 'New Project';
      }

   } else if (checkForWhiteSpaceAndModifierKeys(key)) {
      return;

   } else if ((!Number(key) && key !== '0') || key == ' ') {
      tabName.textContent = projectName + key;

   } else {
      e.preventDefault();
   }
};

let updateDueDate = (e, tab) => {
   let tabDueDate = tab.children[1];
   let key = e.key;
   let date = e.target.value;
   let dateArray = date.slice('');

   if (key == 'Backspace') {
      let updatedDate = date.slice(0, -1);
      let dateAndClock = tabDueDate.innerHTML.split('<');

      if (tabDueDate.classList.contains('priority')) {
         tabDueDate.innerHTML = `Due: ${updatedDate}<${dateAndClock[1]}`;

      } else {
         tabDueDate.textContent = `Due: ${updatedDate}`;
      }

   } else if ((Number(key) || key == '0') && dateArray.length < 5) {
      let dateAndClock = tabDueDate.innerHTML.split('<');

      if (tabDueDate.classList.contains('priority')) {
         tabDueDate.innerHTML = `Due: ${date + key}<${dateAndClock[1]}`;

      } else {
         tabDueDate.textContent = `Due: ${date + key}`;
      }

   } else if (checkForWhiteSpaceAndModifierKeys(key)) {
      return;

   } else {
      e.preventDefault();
   }
};

let addForwardSlash = (e, tab) => {
   let tabDueDate = tab.children[1];
   let date = e.target.value;
   let dateArray = date.slice('');

   if (dateArray.length == 2 && e.key !== 'Backspace') {
      e.target.value = date + '/';
      let dateAndClock = tabDueDate.innerHTML.split('<');

      if (tabDueDate.classList.contains('priority')) {
         tabDueDate.innerHTML = `Due: ${date}<${dateAndClock[1]}`;

      } else {
         tabDueDate.textContent = `Due: ${date}/`;
      }
      
   } else if (dateArray.length == 3 && e.key !== 'Backspace' && Number(e.key)) {
      e.target.value = dateArray[0] + dateArray[1] + '/' + dateArray[2];
      let dateAndClock = tabDueDate.innerHTML.split('<');

      if (tabDueDate.classList.contains('priority')) {
         tabDueDate.innerHTML = `Due: ${dateArray[0] + dateArray[1] + '/' + dateArray[2]}<${dateAndClock[1]}`;

      } else {
         tabDueDate.textContent = `Due: ${dateArray[0] + dateArray[1] + '/' + dateArray[2]}`;
      }
   }
}

let checkForWhiteSpaceAndModifierKeys = (keyEntered) => {
   const unwantedKeys = ['Shift', 'Enter', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
                 'Control', 'Alt', 'Tab', 'CapsLock', 'Escape'];

   return unwantedKeys.some(unwantedKey => (keyEntered === unwantedKey));
};



/***/ }),

/***/ "./src/icons/clock-alert-outline.svg":
/*!*******************************************!*\
  !*** ./src/icons/clock-alert-outline.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb0305926b97c5fcc6a8.svg";

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/icons/plus.svg":
/*!****************************!*\
  !*** ./src/icons/plus.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/icons/seaside-vacation-empty-beach.png":
/*!****************************************************!*\
  !*** ./src/icons/seaside-vacation-empty-beach.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f11e88cd5d4d0b50d960.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
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
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _sidebar_project_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-project-tab */ "./src/sidebar-project-tab.js");
/* harmony import */ var _project_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-form */ "./src/project-form.js");
/* harmony import */ var _load_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-tabs.js */ "./src/load-tabs.js");
/* harmony import */ var _select_tab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-tab.js */ "./src/select-tab.js");
/* harmony import */ var _remove_current_content_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-current-content.js */ "./src/remove-current-content.js");
/* harmony import */ var _sort_tabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sort-tabs.js */ "./src/sort-tabs.js");
/* harmony import */ var _change_tab_color_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-tab-color.js */ "./src/change-tab-color.js");
/* harmony import */ var _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./save-unfinished-project.js */ "./src/save-unfinished-project.js");











const addProjectBtn = document.querySelector('.add-icon-button');

addProjectBtn.addEventListener('click', function() {
   const content = document.getElementById('content');
   let newTab = document.querySelector('.new-tab');
   let unfinishedProject = localStorage.getItem('unfinishedProject');

   content.classList.remove('align-empty-state');

   if (!unfinishedProject && newTab == null) {
      (0,_remove_current_content_js__WEBPACK_IMPORTED_MODULE_6__["default"])();

      const createTab = [
         new _sidebar_project_tab__WEBPACK_IMPORTED_MODULE_2__["default"]('New Project', ''),
      ];

      (0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(createTab);

      const newSidebarTab = document.querySelector('.project-item:last-child');

      newSidebarTab.classList.toggle('new-tab');

      const form = new _project_form__WEBPACK_IMPORTED_MODULE_3__.Form();
      const header = new _project_form__WEBPACK_IMPORTED_MODULE_3__.Header('', '');

      form.appendForm();
      header.appendProjectHeader(newSidebarTab);
      header.appendDueDate(newSidebarTab);


      const createForm = [
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Description(''),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Checklist({}),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Notes(['']),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Priority('yes'),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Submit()
      ];

      (0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(createForm);
      (0,_change_tab_color_js__WEBPACK_IMPORTED_MODULE_8__["default"])(newSidebarTab);

      const priorityFieldset = document.querySelector('.priority-fieldset');

      window.addEventListener('keyup', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
      priorityFieldset.addEventListener('click', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

   } else if (unfinishedProject && newTab == null) {
      (0,_remove_current_content_js__WEBPACK_IMPORTED_MODULE_6__["default"])();

      let createTab;

      unfinishedProject = JSON.parse(unfinishedProject);

      if (unfinishedProject.name !== '') {
         createTab = [
            new _sidebar_project_tab__WEBPACK_IMPORTED_MODULE_2__["default"](unfinishedProject.name, unfinishedProject.dueDate),
         ];

      } else {
         createTab = [
            new _sidebar_project_tab__WEBPACK_IMPORTED_MODULE_2__["default"]('New Project', unfinishedProject.dueDate),
         ];
      }

      (0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(createTab);

      const newSidebarTab = document.querySelector('.project-item:last-child');

      newSidebarTab.classList.toggle('new-tab');

      const form = new _project_form__WEBPACK_IMPORTED_MODULE_3__.Form();
      const header = new _project_form__WEBPACK_IMPORTED_MODULE_3__.Header(unfinishedProject.name, unfinishedProject.dueDate);

      form.appendForm();
      header.appendProjectHeader(newSidebarTab);
      header.appendDueDate(newSidebarTab);


      const createForm = [
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Description(unfinishedProject.description),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Checklist(unfinishedProject.checklist),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Notes(unfinishedProject.notes),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Priority(unfinishedProject.priority),
         new _project_form__WEBPACK_IMPORTED_MODULE_3__.Submit()
      ];

      (0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(createForm);
      (0,_change_tab_color_js__WEBPACK_IMPORTED_MODULE_8__["default"])(newSidebarTab);

      const priorityFieldset = document.querySelector('.priority-fieldset');

      window.addEventListener('keyup', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
      priorityFieldset.addEventListener('click', _save_unfinished_project_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
   }
});

window.addEventListener('load', _load_tabs_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

const tabList = document.querySelector('.project-list');

tabList.addEventListener('click', _select_tab_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

window.addEventListener('load', _sort_tabs_js__WEBPACK_IMPORTED_MODULE_7__["default"]);

window.addEventListener('load', () => {
   const allTabs = document.getElementsByClassName('project-item');
   const recentlyViewedTab = JSON.parse(localStorage.getItem('recentlyViewedTab'));

   [...allTabs].map(tab => {
      if (tab.innerHTML == recentlyViewedTab) tab.click();
   });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map