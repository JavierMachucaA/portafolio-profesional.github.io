(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"about\">\n    <div class=\"container\">\n      <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body p-custom\">\n              <div class=\"h4 mt-0 title\">Más Información</div>\n              <p>Mi nombre es <strong>Javier Machuca</strong> desarrollador con 4 años de experiencia laboral, en diferentes proyectos en variadas tecnologias. \n              Dentro de los conocimientos a disposición son javascript, Angular, Java, PHP, Laravel, C#, entre otros . \n              Algunos de los proyectos pueden ser visibles en mi github. Me gusta aprender nuevas tecnologías, \n              metodologías, para entregar una buena calidad en mis servicios. \n              Algunos de mis hobbies son realizar deportes como jugar football, ping pong, bastquetball, jugar algunos en línea.</p>\n                       \n              <p>\n                Me gusta mantenerme espectante a las nuevas tendencias en softwer, suelo ser un presente usuario de Twitter entorno a las tecnologías web buscando, alimentando mis conocimientos, procurando mejorar en el día a día y al mismo tiempo ser un aporte en la comunidad.\n              </p> \n                \n          \n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">Información Básica</div>\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Fecha de nacimiento:</strong>\n                </div>\n                <div class=\"col-sm-8\">19 Septiembre, 1993</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Email:</strong>\n                </div>\n                <div class=\"col-sm-8\">javier.machuca.a@gmail.com</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Ciudad:</strong>\n                </div>\n                <div class=\"col-sm-8\">Valparaíso\n                </div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Lenguajes:</strong>\n                </div>\n                <div class=\"col-sm-8\">Español, Ingles</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/certifications/certifications.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/certifications/certifications.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"certifications\">\n    <div class=\"container\">\n        <div class=\"h4 text-center mb-4 title\">{{title}}</div>\n        <div class=\"card\" *ngFor=\"let c of certificates; let i = index\" [attr.data-index]=\"i\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"\n         [ngClass]=\"[i == 0 ? 'withoutBottom' : '',  i != 0  ? 'interList' : '']\" >\n            <div class=\"card-body\" >\n                <mat-grid-list cols=\"12\" rowHeight=\"1:1\">\n                    <mat-grid-tile colspan=\"4\" rowspan=\"3\" class=\"gallery\" [style.background-color]=\"c.color\">\n                        <img *ngIf=\"showCertificate\" class=\"picture\" \n                            [src]=\"c.name\" alt=\"Image\" />\n                        <div class=\"overlay\">\n                            <a  class=\"icon\" (click)=\"showDialog(c)\" title=\"Ver más+\"> <!---->\n                                <mat-icon>pageview</mat-icon>\n                            </a>\n                        </div>\n                    </mat-grid-tile>\n                    <mat-grid-tile colspan=\"7\" rowspan=\"1\" class=\"titleText\">\n                        <h5 mat-subheader><b>{{c.title}}</b></h5>\n                    </mat-grid-tile>\n                    <mat-grid-tile colspan=\"7\" rowspan=\"2\" class=\"descriptionText\" >\n                        <p>\n                            <b><i>Descripción:</i></b>\n                            <br>\n                            <br>\n                            {{c.description}}\n                        </p>\n                    </mat-grid-tile>                  \n                </mat-grid-list>\n            </div>\n            </div>\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"contact\">\n        <div class=\"cc-contact-information\" style=\"background-image: url('assets/images/contact.jpg');\">\n          <div class=\"container\">\n            <div class=\"cc-contact\">\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <div class=\"card mb-0\" data-aos=\"zoom-in\">\n                    <div class=\"h4 text-center title\">Contact Me</div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <form name=\"form\" (ngSubmit)=\"f.form.valid ; f.resetForm()\" #f=\"ngForm\" novalidate>\n                            <div class=\"p pb-3\">\n                              <strong>Feel free to contact me </strong>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-user-circle\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\n                                    [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-file-text\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"subject\" placeholder=\"Subject\"\n                                    [(ngModel)]=\"model.subject\" #subject=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && subject.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\"\n                                    [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"form-group\">\n                                  <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                                    [(ngModel)]=\"model.message\" #message=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required></textarea>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <p class=\"mb-0\">\n                            <strong>Phone</strong>\n                          </p>\n                          <p class=\"pb-2\">+91 9974990993</p>\n                          <p class=\"mb-0\">\n                            <strong>Email</strong>\n                          </p>\n                          <p>mehulkothari05@gmail.com</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-snotify class=\"material\"></ng-snotify>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dialog/dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dialog/dialog.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data.type == dialogType.CERTIFICATE\">\n  <h2 mat-dialog-title>{{data.title}}</h2>\n  <mat-dialog-content>\n    <div>\n      <img [src]=\"data.source\" >\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-raised-button color=\"primary\" (click)=\"close()\" mat-dialog-close>\n      Cerrar\n    </button>\n  </mat-dialog-actions>\n</div>\n<!--<h2 mat-dialog-title>INFO</h2>\n<mat-dialog-content>\n  <div>\n    <mat-icon>info</mat-icon>Hello\n  </div>\n</mat-dialog-content>\n<mat-divider></mat-divider>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"primary\" (click)=\"close()\" mat-dialog-close>\n    Close\n  </button>\n</mat-dialog-actions>-->\n<!--<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"education\">\n    <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Education</div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2015 - 2019</p>\n              <div class=\"h5\">Bachelor's Degree</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Bachelor of Engineering</div>\n               <h4 class=\"category\">Aditya Silver Oak Institute Of Technology\n               </h4>\n               <ul>\n                <li> Aditya Silver Oak Institute is GTU Affiliated and <b>ranks 7th</b> in Gujurat </li>\n                    <li>Completed B.E in Computer Engineering with <b>9.54 CGPA</b>.</li>\n                 <li>Won the <b>Best Student Award</b> 3 times for excellent Academic records at College.</li>\n                 <li>Maintained above <b>9.1 spi</b> in every semester of college academic .</li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2013 - 2015</p>\n              <div class=\"h5\">Higher Secondary</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Higher Secondary</div>\n               <h4 class=\"category\">Gyandeeep Vidhyalaya\n               </h4>\n               <ul>\n                <li>\n                  The High School was mainly focus on the bases of science, mathematics, and Chemistry\n                                  </li>\n                                  <li>\n                                     There was also a good base on physics, mathematics and chemistry.\n                                  </li>\n                                  <li>\n                                      Completed my high school with<b> 78%</b>.\n                                  </li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2012 - 2013</p>\n              <div class=\"h5\">Sedcondary School</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Secondary School</div>\n               <h4 class=\"category\">Gyandeeep Vidhyalaya\n               </h4>\n               <ul>\n                <li>The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.\n                </li>\n               \n                <li>\n                    Completed my Secondary school with <b>84%</b>.\n                </li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/article/article.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/article/article.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n   <div class=\"timeline-entry-inner\">\n      <div class=\"timeline-icon color-1\">\n         <i class=\"icon-pen2\"></i>\n      </div>\n      <div class=\"timeline-label\">\n         <h2>{{article.charge}} <span>{{article.intervalTime}}</span></h2>\n         <h4>{{article.compay}}</h4>\n         <p>{{article.description}}</p>\n         <ul>\n            <li *ngFor=\"let role of article.roles\">{{role}}</li>\n         </ul>\n      </div>\n   </div>\n</article>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"experience\">\n   <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Experiencia Laboral</div>\n      <div class=\"colorlib-narrow-content\">\n         <div class=\"row\">\n            <div class=\"col-md-12\">\n               <div class=\"timeline-centered\">\n                  <!--<app-article *ngFor=\"let article of articles\" [article]=\"article\"></app-article>-->\n                  <article *ngFor=\"let article of articles;let i = index\" [attr.data-index]=\"i\" class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                     <div class=\"timeline-entry-inner\">\n                        <div class=\"timeline-icon color-{{i+1}}\" >\n                           <mat-icon style=\"vertical-align: middle;\" >event_available</mat-icon>\n                        </div>\n                        <div class=\"timeline-label\">\n                           <h2>{{article.charge}} <span>{{article.intervalTime}}</span></h2>\n                           <h4>{{article.company}}</h4>\n                           <p>{{article.description}}</p>\n                           <ul>\n                              <li *ngFor=\"let rol of article.roles\" >{{rol}}</li>\n                           </ul>\n                        </div>\n                     </div>\n                  </article>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container text-center\">\n      <a class=\"cc-facebook btn btn-link\" href=\"https://www.facebook.com/mehul.kothari.39\" target=\"_blank\">\n        <i class=\"fa fa-facebook fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-instagram btn btn-link\" href=\"https://www.instagram.com/mehul_kothari05/\" target=\"_blank\">\n        <i class=\"fa fa-instagram fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-twitter btn btn-link \" href=\"https://twitter.com/MehulKo18943279\" target=\"_blank\">\n        <i class=\"fa fa-twitter fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n\n      <a class=\"cc-github btn btn-link \" href=\"https://github.com/mehulk05\" target=\"_blank\">\n        <i class=\"fa fa-github fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <!-- <a class=\"cc-google-plus btn btn-link\" href=\"#\" target=\"_blank\">\n        <i class=\"fa fa-google-plus fa-2x\" aria-hidden=\"true\"></i>\n      </a> -->\n    </div>\n    <div class=\"text-center text-muted\">\n      <p>&copy; All rights reserved.\n      </p>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"profile-page sidebar-collapse\">\n      <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n        <div class=\"container\">\n          <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">Javier CV</a>\n            <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n              aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#about\">Acerca</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experiencia</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link smooth-scroll\" href=\"#projects\">Proyectos</a>\n                  </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" (click)=\"navigate('skill')\" >Habilidad</a>\n              </li>\n             \n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" (click)=\"navigate('certifications')\">Certificaciones</a>\n              </li>\n\n              <!--<li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#reference\">Referencia</a>\n                </li>-->\n\n              <!--<li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contacto</a>\n              </li>-->\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page\">\n    <div class=\"wrapper\">\n      <div class=\"page-header page-header-small\" filter-color=\"green\">\n        <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro-3.jpg');\">\n        </div>\n        <div class=\"container\">\n          <div class=\"content-center\">\n            <div class=\"cc-profile-image\">\n              <a href=\"#\">\n                <img src=\"assets/images/profile.jpg\" alt=\"Image\" />\n              </a>\n            </div>\n            <div class=\"h2 title\">Javier Machuca</div>\n            <p class=\"category text-white\">Full Stack Developer</p>\n            <a class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\"\n              data-aos-anchor=\"data-aos-anchor\">Contactame</a>\n            <a class=\"btn btn-primary\"\n              href=\"https://drive.google.com/file/d/1T2DibBG1vQ1X3RLyZUcw5tjuSATRYTli/view?usp=sharing\" target=\"_blank\"\n              data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Descargar CV</a>\n          </div>\n        </div>\n        <div class=\"section\">\n          <div class=\"container\">\n            <div class=\"button-container\">\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" [href]=\"constants.LINK_FACEBOOK\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Facebook\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" [href]=\"constants.LINK_INSTAGRAM\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                <i class=\"fa fa-instagram\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" [href]=\"constants.LINK_LINKEDIN\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Linkedin\">\n                <i class=\"fa fa-linkedin\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" [href]=\"constants.LINK_GITHUB\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\n                <i class=\"fa fa-github\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" [href]=\"constants.LINK_TWITTER\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"mailto:javier.machuca.a@gmail.com\" target=\"_blank\" rel=\"tooltip\"\n                title=\"Send me a Mail\">\n                <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"portfolio\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto\">\n          <div class=\"h4 text-center mb-4 title\">Portfolio</div>\n          <div class=\"nav-align-center\">\n            <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#web-development\" role=\"tablist\">\n                  <i class=\"fa fa-laptop\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              \n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-content gallery mt-5\">\n        <div class=\"tab-pane active\" id=\"web-development\">\n          <div class=\"ml-auto mr-auto\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"https://personal-portfolio0320.000webhostapp.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio1.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Angular8</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"http://msgc320.pythonanywhere.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio2.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Django</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"page-content\">\n    <app-intro></app-intro>\n    <app-about></app-about>\n    <app-experience></app-experience>\n    <!--<app-projects></app-projects>-->\n    <app-skills></app-skills>\n    <app-certifications></app-certifications>\n    <!--<app-education></app-education>\n    \n     <app-portfolio></app-portfolio> \n    <app-reference></app-reference> \n    <app-contact></app-contact>-->\n</div>\n<!--<app-footer></app-footer>-->\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"projects\">\n    <div class=\"container cc-education\">\n        <!--<div class=\"h4 text-center mb-4 title\">Projects</div>-->\n            \n     <!--<div class=\"row\">\n    \n    \n       <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n      <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p11.PNG\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Personal Portfolio Using Angular8</h4>\n          <h5 class=\"card-text\"><b>Technology :</b> Angular8,Bootstrap3 </h5>\n            <h5 class=\"card-text\"><a href=\"http://my-personal-portfolio.epizy.com/?i=2\">View my Live Demo</a></h5>\n           \n          <a href=\"https://medium.com/@mehulkothari05/personal-portfolio-using-django-dba49c355905\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/My-Personal-Portfolio\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        \n        </div>\n      </div>\n    </div>\n    </div>\n    \n    <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\"src=\"assets/images/p2.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Personal Portfolio Using Django</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Django,Python,Bootstrap3 </h5>\n    \n            <h5 class=\"card-text\"><a href=\"http://msgc320.pythonanywhere.com/\">View my Live Demo</a></h5>\n    \n        <a href=\"https://medium.com/@mehulkothari05/personal-portfolio-using-django-dba49c355905\" class=\"btn btn-primary  stretched-link ml-2 mr-5 \">See Project</a>\n          <a href=\"https://github.com/mehulk05/My-Personal-Portfolio\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n    </div>\n    </div>\n      </div>\n    \n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n      <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p44.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Matrimonial Website(Live Project)</h4>\n          <h5 class=\"card-text\"><b>Technology :</b> HTML5,CSS3,JS,MYSQL,PHP </h5>\n            <h5 class=\"card-text\"><a href=\"http://www.brahmanvarvadhusuchak.com/\">View my Live Demo</a></h5>\n        <a href=\"https://medium.com/@mehulkothari05/matrimonial-website-9cd5247f477d\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Matrimonial-Website\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n      </div>\n    </div>\n    </div>\n    \n    \n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p3.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n         <h4 class=\"card-title\">Movie Success Prediction(Hackathon)</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Django,Python,ML,DataScience </h5>\n           <h5 class=\"card-text\"><a href=\"https://medium.com/@mehulkothari05/movie-success-prediction-a67d871a7b1\"> Read Blog on this  Project</a></h5>\n        <a href=\"https://medium.com/@mehulkothari05/movie-success-prediction-a67d871a7b1\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05?tab=repositories\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n    </div>\n    </div>\n      </div>\n    \n       \n    <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p5.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Smart Baby Stroller(Final Year)</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Python,Android,Firebase </h5>\n             <h5 class=\"card-text\"><a href=\"https://medium.com/@mehulkothari05/smart-baby-stroller-system-3f6b4f49476a\"> Read Blog on this  Project</a></h5>\n          <a href=\"https://medium.com/@mehulkothari05/smart-baby-stroller-system-3f6b4f49476a\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Smart-Baby-Stroller-System.git\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n        </div>\n        </div>\n      </div>\n    \n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n           <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p6.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n         <h4 class=\"card-title\">Simple Chat Application Using Firebase</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Android,Java,Firebase </h5>\n             <h5 class=\"card-text\"><a href=\"https://code.tutsplus.com/tutorials/how-to-create-an-android-chat-app-using-firebase--cms-27397\"> Read Blog on this  Project</a></h5>\n          <a href=\"https://github.com/mehulk05?tab=repositories\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05?tab=repositories\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n        </div>\n        </div>\n        </div>\n    \n    \n     <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n      <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p8.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Know Your Disease</h4>\n          <h5 class=\"card-text\"><b>Technology :</b> HTML5,CSS3,JS,MYSQL,PHP </h5>\n         <a href=\"https://github.com/mehulk05/Know-Your-Disease\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Know-Your-Disease\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n      </div>\n    </div>\n    </div>\n    \n    <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n       <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/p9.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pizza Ordering System</h4>\n           <h5 class=\"card-text\"><b>Technology :</b> Java,Servlet,JSP,JDBC </h5>\n       <a href=\"https://github.com/mehulk05/Pizza-Ordering-System\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See Project</a>\n          <a href=\"https://github.com/mehulk05/Pizza-Ordering-System\" class=\"btn btn-primary stretched-link\">GithubLink</a>\n        </div>\n        </div>\n        </div>\n      </div>\n    \n      \n    \n    \n    </div>-->\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"reference\">\n        <div class=\"container cc-reference\">\n          <div class=\"h4 mb-4 text-center title\">References</div>\n          <div class=\"card\" data-aos=\"zoom-in\">\n            <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n                <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n               \n              </ol>\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/sg.jpg\" alt=\"Image\" />\n                      <div class=\"h5 pt-2\">Sagar Patel</div>\n                      <p class=\"category\">HOD </p>\n                      <p class=\"category\">at ASOIT </p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                    <p>\n                      Mehul is creative, innovative, responsible and quite a rational thinker. \n                    Coding as a way of life, his work presents products with great quality, following standards\n                     and good practices.He completed one of my live project on matrimonial website and \n                     I am so impressed with his techniques.\n                    </p>\n                    <p>He has always been hardworking ,creaive,and absolute genius in his creative criticial thinking \n                      He is always ready to take challege as his new opprotunities.\n                    </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"carousel-item\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/hn.jpg\" alt=\"Image\" />\n                      <h4>Hetal </h4>\n                      <p class=\"category\">Associate S/W Developer,</p>\n                      <p class=\"category\">at Sygnet</p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                      <p> Mehul is a really good working partner with high knowledge on backend and frontend development , \n                        he is always concerned with going forward never afraid of improving or making use of new technologies, \n                        helping his peers whenever\n                         he is able to and solving problems in a quick and efficient manner with his typical optimism</p>\n\n                         <p>We have worked two years togather in same project ,so i know him from my personal experience\n                           Every person want this guy to be in his team.And as a persona I m sure company wont regret for hiring him\n                         </p>\n                    </div>\n                  </div>\n                </div>\n               \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skill-desc/skill-desc.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skill-desc/skill-desc.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list *ngIf=\"skillsList\">\n  <mat-list-item *ngFor=\"let skillItem of skillsList\" style=\"height: auto;\">\n    <div matLine >\n      <div class=\"row\">\n      <div class=\"col-2\">\n        <mat-icon matListIcon class=\"icon\" [svgIcon]=\"skillItem.skill.icon\" [inline]=\"true\"></mat-icon>\n      </div>\n    <div class=\"col-2\">\n      <span class=\"progress-badge center-text\">{{skillItem.skill.name}}</span>\n    </div>\n    <div class=\"col-7\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <div class=\"row progress progress-container progress-primary mb-none vertical-center\">\n            <div class=\"progress-bar progress-bar-primary set-height\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n              data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n              style=\"height: 14px;\" [ngStyle]=\"{'width':skillItem.skill.percentage + '%'}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-2\">\n          <div class=\"row vertical-center2\">\n            &nbsp; &nbsp;\n            <span class=\"progress-value\">{{skillItem.skill.percentage}}%</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-1\">\n      <mat-icon *ngIf=\"skillItem.isOpen\" class=\"icon icon-rotate\" style=\"font-size: 30px;\" (click)=\"changeIcon(skillItem)\">{{skillItem.openIcon}}</mat-icon>\n      <mat-icon *ngIf=\"!skillItem.isOpen\" class=\"icon icon-rotate\" style=\"font-size: 30px;\" (click)=\"changeIcon(skillItem)\">{{skillItem.closeIcon}}</mat-icon>\n    </div>\n    </div>\n    </div>\n    <div matLine data-aos=\"fade-up\" *ngIf=\"!skillItem.isOpen\" >\n      <p >\n        <label>{{ skillItem.skill.skillSubitems | skillListColon}}</label>\n      </p>\n    </div>\n    \n  </mat-list-item>\n</mat-nav-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"skill\">\n  <div class=\"container\">\n    <div class=\"h4 text-center mb-4 title\">{{title}}</div>\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n      <div class=\"card-body\">\n        <mat-accordion *ngIf=\"skills\">\n          <app-skill-desc [skills]=\"skills\"></app-skill-desc>\n        </mat-accordion>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                material_1.MatIconModule
            ],
            exports: [
                material_1.MatIconModule
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());
exports.AngularMaterialModule = AngularMaterialModule;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var icons_service_1 = __webpack_require__(/*! ./service/icons.service */ "./src/app/service/icons.service.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var dialog_component_1 = __webpack_require__(/*! ./profile/dialog/dialog.component */ "./src/app/profile/dialog/dialog.component.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(iconService, dialog) {
        this.iconService = iconService;
        this.dialog = dialog;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.iconService.registerIcons();
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            width: '250px',
            data: this.data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.data = result;
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: icons_service_1.IconsService },
        { type: dialog_1.MatDialog }
    ]; };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var profile_component_1 = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var profile_module_1 = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var angular_material_module_1 = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var expansion_1 = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var routes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent
    }
];
var config = {
    useHash: true,
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                angular_material_module_1.AngularMaterialModule,
                router_1.RouterModule.forRoot(routes, config),
                profile_module_1.ProfileModule,
                http_1.HttpClientModule,
                material_1.MatIconModule,
                expansion_1.MatExpansionModule,
                dialog_1.MatDialogModule
            ],
            exports: [],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/directives/skill-list-colon.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/skill-list-colon.directive.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SkillListColonDirective = /** @class */ (function () {
    function SkillListColonDirective() {
    }
    SkillListColonDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[appSkillListColon]'
        })
    ], SkillListColonDirective);
    return SkillListColonDirective;
}());
exports.SkillListColonDirective = SkillListColonDirective;


/***/ }),

/***/ "./src/app/directives/skill-list-colon.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/skill-list-colon.pipe.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SkillListColonPipe = /** @class */ (function () {
    function SkillListColonPipe() {
    }
    SkillListColonPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.map(function (v) { return v.name; }).join(', ');
    };
    SkillListColonPipe = tslib_1.__decorate([
        core_1.Pipe({
            name: 'skillListColon'
        })
    ], SkillListColonPipe);
    return SkillListColonPipe;
}());
exports.SkillListColonPipe = SkillListColonPipe;


/***/ }),

/***/ "./src/app/enum/dialog.type.ts":
/*!*************************************!*\
  !*** ./src/app/enum/dialog.type.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var DialogType;
(function (DialogType) {
    DialogType[DialogType["CERTIFICATE"] = 0] = "CERTIFICATE";
    DialogType[DialogType["OTHER"] = 1] = "OTHER";
})(DialogType = exports.DialogType || (exports.DialogType = {}));


/***/ }),

/***/ "./src/app/enum/icons.enum.ts":
/*!************************************!*\
  !*** ./src/app/enum/icons.enum.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Icons;
(function (Icons) {
    Icons["java"] = "java";
    Icons["java2"] = "java2";
    Icons["nodejs"] = "nodejs";
    Icons["nosql"] = "nosql";
    Icons["php"] = "php";
    Icons["html"] = "html";
    Icons["sql"] = "sql";
})(Icons = exports.Icons || (exports.Icons = {}));


/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row p {\n  font-weight: 700px;\n  color: black;\n}\n\n.p-custom p {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIFxufVxuXG4ucC1jdXN0b20gcHtcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnlcbiAgfSIsIi5yb3cgcCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucC1jdXN0b20gcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-about',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")).default]
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/profile/certifications/certifications.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/profile/certifications/certifications.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gallery {\n  background-color: #dbe490;\n  border-radius: 30px 30px 0px 0px;\n}\n\n.withoutBottom {\n  margin-bottom: 0px;\n}\n\n.picture {\n  width: 70%;\n  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  background-color: red;\n  opacity: 1;\n}\n\n.picture:hover {\n  opacity: 0.5;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.mat-icon {\n  color: white;\n  font-size: 150px;\n  position: absolute;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  top: 18%;\n  left: 28%;\n  width: auto;\n  height: auto;\n  /*transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);*/\n  text-align: center;\n  opacity: 0;\n}\n\n.mat-icon:hover {\n  opacity: 1;\n}\n\n.descriptionText {\n  position: absolute;\n  margin-left: 2%;\n  top: -10px;\n}\n\n.titleText {\n  -webkit-box-pack: left !important;\n          justify-content: left !important;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBRUEsa0RBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQTt3Q0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksaUNBQUE7VUFBQSxnQ0FBQTtFQUNBLE9BQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2VydGlmaWNhdGlvbnMvY2VydGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjgsIDE0NCk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XG4gICAgXG59XG5cbi53aXRob3V0Qm90dG9tIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5waWN0dXJlIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTVweCAxNXB4IDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICBcbn1cblxuLnBpY3R1cmU6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tYXQtaWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgcG9zaXRpb246ICBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0b3A6IDE4JTtcbiAgICBsZWZ0OiAyOCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5tYXQtaWNvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmRlc2NyaXB0aW9uVGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlOyBcbiAgICB0b3A6LTEwcHg7XG59XG5cbi50aXRsZVRleHQge1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDA7XG59XG4gICIsIi5nYWxsZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZTQ5MDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XG59XG5cbi53aXRob3V0Qm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucGljdHVyZSB7XG4gIHdpZHRoOiA3MCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTVweCAxNXB4IDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBpY3R1cmU6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWF0LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDE4JTtcbiAgbGVmdDogMjglO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWF0LWljb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZGVzY3JpcHRpb25UZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHRvcDogLTEwcHg7XG59XG5cbi50aXRsZVRleHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/certifications/certifications.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/certifications/certifications.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var dialog_service_1 = __webpack_require__(/*! src/app/service/dialog.service */ "./src/app/service/dialog.service.ts");
var constants_utils_1 = __webpack_require__(/*! src/app/utils/constants.utils */ "./src/app/utils/constants.utils.ts");
var dialog_type_1 = __webpack_require__(/*! src/app/enum/dialog.type */ "./src/app/enum/dialog.type.ts");
var CertificationsComponent = /** @class */ (function () {
    function CertificationsComponent(modalService) {
        this.modalService = modalService;
        this.title = 'Certificaciones';
        this.showCertificate = true;
        this.pathCertificates = constants_utils_1.ConstantsUtils.PATH_CERTIFICATES;
        this.certificates = null;
    }
    CertificationsComponent.prototype.ngOnInit = function () {
        this.certificates = [
            {
                name: this.pathCertificates + '/' + 'certificado-nodejs.jpg',
                title: 'Node : De Cero a Experto',
                description: "En este curso se abarcan los temas: MongoDB, SocketIO, Handlebars," +
                    "MLab, JWT, Git, GitHub,Robo 3T, JSON, Google Services, Google APIs, Heroku, MySQL," +
                    "TypeScript, PostMan,Express, YARGS, Aplicaciones de consola, Paquetes, NPM," +
                    "RESTServer, entre otros temas",
                color: 'rgb(219, 228, 144)',
                type: dialog_type_1.DialogType.CERTIFICATE
            },
            {
                name: this.pathCertificates + '/' + 'certificado-angular.jpg',
                title: 'Angular: De cero a experto creando aplicaciones (Angular 9+)',
                description: "Las bases de Angular, TypeScript, ECMAScript 6, Sockets," +
                    "Angular CLI, Local Storage, Bootstrap 4, Spotify API, Youtube API, entre otras tecnolog\u00EDas",
                color: 'rgb(143, 188, 143)',
                type: dialog_type_1.DialogType.CERTIFICATE
            }
        ];
    };
    CertificationsComponent.prototype.showDialog = function (certificate) {
        console.log('mostrar dialog');
        this.modalService.showCertificate(certificate);
    };
    CertificationsComponent.ctorParameters = function () { return [
        { type: dialog_service_1.DialogService }
    ]; };
    CertificationsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-certifications',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./certifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/certifications/certifications.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./certifications.component.scss */ "./src/app/profile/certifications/certifications.component.scss")).default]
        })
    ], CertificationsComponent);
    return CertificationsComponent;
}());
exports.CertificationsComponent = CertificationsComponent;


/***/ }),

/***/ "./src/app/profile/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/contact/contact.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.model = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-contact',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./contact.component.scss */ "./src/app/profile/contact/contact.component.scss")).default]
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/profile/dialog/dialog.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/dialog/dialog.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-container {\n  max-height: 800px !important;\n  max-width: 800px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xufSIsIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDgwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/dialog/dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/dialog/dialog.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var dialog_type_1 = __webpack_require__(/*! src/app/enum/dialog.type */ "./src/app/enum/dialog.type.ts");
var constants_utils_1 = __webpack_require__(/*! src/app/utils/constants.utils */ "./src/app/utils/constants.utils.ts");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogType = dialog_type_1.DialogType;
        this.pathCertificates = constants_utils_1.ConstantsUtils.PATH_CERTIFICATES;
    }
    DialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DialogComponent.ctorParameters = function () { return [
        { type: material_1.MatDialogRef },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] }
    ]; };
    DialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dialog',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dialog/dialog.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./dialog.component.scss */ "./src/app/profile/dialog/dialog.component.scss")).default]
        }),
        tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;


/***/ }),

/***/ "./src/app/profile/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxjQUFBO0VBQ0osZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGg0e1xuICAgIGNvbG9yOiM0YTQ4NDM7XG5mb250LXNpemU6IDIwcHg7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xubWFyZ2luLXRvcDoycHg7XG59IiwiaDQge1xuICBjb2xvcjogIzRhNDg0MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-education',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./education.component.scss */ "./src/app/profile/education/education.component.scss")).default]
        })
    ], EducationComponent);
    return EducationComponent;
}());
exports.EducationComponent = EducationComponent;


/***/ }),

/***/ "./src/app/profile/experience/article/article.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/profile/experience/article/article.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNESjs7QURHSTtFQUVJO0lBRUksZ0JBQUE7SUFDQSxtQkFBQTtFQ0ZWO0FBQ0Y7O0FETUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDSlI7O0FETU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0hSOztBREtNO0VBQ0UsV0FBQTtBQ0ZSOztBRElNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNEUjs7QURHTTtFQUNFLFdBQUE7QUNBUjs7QURFTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ007RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNJUjs7QURIUTtFQUNFLFdBQUE7QUNNVjs7QURMUTtFQUNFLG1CQUFBO0FDUVY7O0FEUFE7RUFDRSxtQkFBQTtBQ1VWOztBRFRRO0VBQ0UsbUJBQUE7QUNZVjs7QURYUTtFQUNFLG1CQUFBO0FDY1Y7O0FEYlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNnQlY7O0FEZE07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDaUJSOztBRGZNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ2tCUjs7QURoQk07RUFDRSxnQkFBQTtBQ21CUjs7QURqQk07RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQ29CUjs7QURsQk07RUFDRSxXQUFBO0FDcUJSOztBRG5CTTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNzQlI7O0FEbEJNO0VBRUUsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFBZSxnQkFBQTtBQ3FCdkI7O0FEakJNO0VBRUMsV0FBQTtFQUFZLGdCQUFBO0FDb0JuQjs7QURqQk07RUFFRSxnQkFBQTtFQUFpQixnQkFBQTtBQ29CekI7O0FEbEJNO0VBQ0UsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBaUIsMkNBQUE7QUN1QjFDIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcmxpYi1leHBlcmllbmNlXG57XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOWVtO1xuICBcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXG4gICAge1xuICAgICAgICAuY29sb3JsaWItZXhwZXJpZW5jZVxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjbGVhcjogYm90aDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI5cHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmM5OGYwO1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYzU0NTM7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y5YmYzZjsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTg0Y2I4OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZmE0OTk7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogOXB4IDlweCA5cHggMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmM2Y3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xuICAgICAgICBjb2xvcjogIzAwMDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gICAgICAgIC13ZWJraXQtb3BhY2l0eTogLjQ7XG4gICAgICAgIC1tb3otb3BhY2l0eTogLjQ7XG4gICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcbiAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtbGFiZWwgaDR7XG4gICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjNTQ1NzU1O2ZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIFxuICAgICAgXG4gICAgICB9XG4gICAgICAudGltZWxpbmUtbGFiZWwgc3BhbntcbiAgICAgIFxuICAgICAgIGNvbG9yOiAjMDAwO2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1sYWJlbCBwe1xuICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07Zm9udC13ZWlnaHQ6NTAwO1xuICAgICAgfVxuICAgICAgLnRpbWVsaW5lLWxhYmVsIHVse1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO2ZvbnQtd2VpZ2h0OjUwMDsgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgfSIsIi5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDllbTtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbG9ybGliLWV4cGVyaWVuY2Uge1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgfVxufVxuLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgdG9wOiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzJjOThmMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24gaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0yIHtcbiAgYmFja2dyb3VuZDogI2VjNTQ1Mztcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gIGJhY2tncm91bmQ6ICNmOWJmM2Y7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTQge1xuICBiYWNrZ3JvdW5kOiAjYTg0Y2I4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci01IHtcbiAgYmFja2dyb3VuZDogIzJmYTQ5OTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gIC13ZWJraXQtb3BhY2l0eTogMC40O1xuICAtbW96LW9wYWNpdHk6IDAuNDtcbiAgb3BhY2l0eTogMC40O1xuICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGltZWxpbmUtbGFiZWwgaDQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU0NTc1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgdWwge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/experience/article/article.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/profile/experience/article/article.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        core_1.Input()
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-article',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/article/article.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./article.component.scss */ "./src/app/profile/experience/article/article.component.scss")).default]
        })
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;


/***/ }),

/***/ "./src/app/profile/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElJO0VBRUk7SUFFSSxnQkFBQTtJQUNBLG1CQUFBO0VDSFY7QUFDRjs7QURPSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNMUjs7QURPTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDSlI7O0FETU07RUFDRSxXQUFBO0FDSFI7O0FES007RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRElNO0VBQ0UsV0FBQTtBQ0RSOztBREdNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ1I7O0FEQ007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDRVI7O0FEQU07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUlBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREZRO0VBQ0UsV0FBQTtBQ0tWOztBREpRO0VBQ0UsbUJBQUE7QUNPVjs7QUROUTtFQUNFLG1CQUFBO0FDU1Y7O0FEUlE7RUFDRSxtQkFBQTtBQ1dWOztBRFZRO0VBQ0UsbUJBQUE7QUNhVjs7QURaUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2VWOztBRGJNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ2dCUjs7QURkTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNpQlI7O0FEZk07RUFDRSxnQkFBQTtBQ2tCUjs7QURoQk07RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQ21CUjs7QURqQk07RUFDRSxXQUFBO0FDb0JSOztBRGxCTTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNxQlI7O0FEakJNO0VBRUUsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFBZSxnQkFBQTtBQ29CdkI7O0FEaEJNO0VBRUMsV0FBQTtFQUFZLGdCQUFBO0FDbUJuQjs7QURoQk07RUFFRSxnQkFBQTtFQUFpQixnQkFBQTtBQ21CekI7O0FEakJNO0VBQ0UsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBaUIsMkNBQUE7QUNzQjFDIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JsaWItZXhwZXJpZW5jZVxue1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDllbTtcbiAgXG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXG4gICAge1xuICAgICAgICAuY29sb3JsaWItZXhwZXJpZW5jZVxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjbGVhcjogYm90aDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI5cHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmM5OGYwO1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYzU0NTM7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y5YmYzZjsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTg0Y2I4OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZmE0OTk7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogOXB4IDlweCA5cHggMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmM2Y3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xuICAgICAgICBjb2xvcjogIzAwMDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gICAgICAgIC13ZWJraXQtb3BhY2l0eTogLjQ7XG4gICAgICAgIC1tb3otb3BhY2l0eTogLjQ7XG4gICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcbiAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtbGFiZWwgaDR7XG4gICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjNTQ1NzU1O2ZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIFxuICAgICAgXG4gICAgICB9XG4gICAgICAudGltZWxpbmUtbGFiZWwgc3BhbntcbiAgICAgIFxuICAgICAgIGNvbG9yOiAjMDAwO2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1sYWJlbCBwe1xuICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07Zm9udC13ZWlnaHQ6NTAwO1xuICAgICAgfVxuICAgICAgLnRpbWVsaW5lLWxhYmVsIHVse1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO2ZvbnQtd2VpZ2h0OjUwMDsgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgfSIsIi5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDllbTtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbG9ybGliLWV4cGVyaWVuY2Uge1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgfVxufVxuLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgdG9wOiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzJjOThmMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24gaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0yIHtcbiAgYmFja2dyb3VuZDogI2VjNTQ1Mztcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gIGJhY2tncm91bmQ6ICNmOWJmM2Y7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTQge1xuICBiYWNrZ3JvdW5kOiAjYTg0Y2I4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci01IHtcbiAgYmFja2dyb3VuZDogIzJmYTQ5OTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gIC13ZWJraXQtb3BhY2l0eTogMC40O1xuICAtbW96LW9wYWNpdHk6IDAuNDtcbiAgb3BhY2l0eTogMC40O1xuICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGltZWxpbmUtbGFiZWwgaDQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU0NTc1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgdWwge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.articles = [
            {
                id: 1,
                charge: 'Ingeniero en Proyectos',
                intervalTime: 'Octubre 2018 - Diciembre 2019',
                compay: 'Zeke',
                description: "Trabajando con el rol de Analista desarrollador, se construyen aplicaciones web en Angular con\n        backend en Java, Angular con Laravel, una aplicaci\u00F3n M\u00F3vil en Flutter, entre otros\n        desarrollos.",
                roles: ['Desarrollador Software', 'Desarrollador Aplicaciones', 'Desarrollador Web']
            },
            {
                id: 2,
                charge: 'Desarrollador Junior',
                intervalTime: 'Enero - Agosto 2018',
                compay: 'Wiseconn',
                description: "Como desarrollador, se aporta en proyectos Java capturando informaci\u00F3n de servicio rest y\n                      se apoya en cambios efectuados sobre aplciaci\u00F3n de escritorio Java Swing del producto que\n                      entrega la empresa a sus clientes.",
                roles: ['Desarrollador Software', 'Desarrollador Web',]
            },
            {
                id: 3,
                charge: 'Desarrollador',
                intervalTime: 'Enero 2016 - Enero 2018',
                compay: 'Accenture',
                description: "Como desarrollador, se aporta en proyectos Java capturando informaci\u00F3n de servicio rest y\n                      se apoya en cambios efectuados sobre aplciaci\u00F3n de escritorio Java Swing del producto que\n                      entrega la empresa a sus clientes.",
                roles: ['Desarrollador Software', 'Desarrollador Web',]
            },
        ];
    };
    ExperienceComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-experience',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./experience.component.scss */ "./src/app/profile/experience/experience.component.scss")).default]
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());
exports.ExperienceComponent = ExperienceComponent;


/***/ }),

/***/ "./src/app/profile/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-footer',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/profile/footer/footer.component.scss")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/profile/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.navigate = function (route) {
        var element = document.getElementById(route);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    HeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-header',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./header.component.scss */ "./src/app/profile/header/header.component.scss")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/profile/intro/intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var constants_utils_1 = __webpack_require__(/*! src/app/utils/constants.utils */ "./src/app/utils/constants.utils.ts");
var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
        this.constants = constants_utils_1.ConstantsUtils;
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-intro',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./intro.component.scss */ "./src/app/profile/intro/intro.component.scss")).default]
        })
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;


/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-portfolio',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/profile/portfolio/portfolio.component.scss")).default]
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ngx_spinner_1 = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(spinner) {
        this.spinner = spinner;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 2000);
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: ngx_spinner_1.NgxSpinnerService }
    ]; };
    ProfileComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-profile',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_snotify_1 = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var profile_component_1 = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
var header_component_1 = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
var footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
var intro_component_1 = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
var about_component_1 = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
var skills_component_1 = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
var portfolio_component_1 = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/profile/portfolio/portfolio.component.ts");
var experience_component_1 = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
var education_component_1 = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
var reference_component_1 = __webpack_require__(/*! ./reference/reference.component */ "./src/app/profile/reference/reference.component.ts");
var contact_component_1 = __webpack_require__(/*! ./contact/contact.component */ "./src/app/profile/contact/contact.component.ts");
var ngx_spinner_1 = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var projects_component_1 = __webpack_require__(/*! ./projects/projects.component */ "./src/app/profile/projects/projects.component.ts");
var article_component_1 = __webpack_require__(/*! ./experience/article/article.component */ "./src/app/profile/experience/article/article.component.ts");
var angular_material_module_1 = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");
var skill_desc_component_1 = __webpack_require__(/*! ./skills/skill-desc/skill-desc.component */ "./src/app/profile/skills/skill-desc/skill-desc.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var common_2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var list_1 = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
var skill_list_colon_directive_1 = __webpack_require__(/*! ../directives/skill-list-colon.directive */ "./src/app/directives/skill-list-colon.directive.ts");
var skill_list_colon_pipe_1 = __webpack_require__(/*! ../directives/skill-list-colon.pipe */ "./src/app/directives/skill-list-colon.pipe.ts");
var certifications_component_1 = __webpack_require__(/*! ./certifications/certifications.component */ "./src/app/profile/certifications/certifications.component.ts");
var dialog_component_1 = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/profile/dialog/dialog.component.ts");
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_snotify_1.SnotifyModule,
                ngx_spinner_1.NgxSpinnerModule,
                angular_material_module_1.AngularMaterialModule,
                material_1.MatExpansionModule,
                list_1.MatListModule,
                material_1.MatGridListModule
            ],
            exports: [
                material_1.MatExpansionModule,
                dialog_component_1.DialogComponent
            ],
            declarations: [
                profile_component_1.ProfileComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                intro_component_1.IntroComponent,
                about_component_1.AboutComponent,
                skills_component_1.SkillsComponent,
                portfolio_component_1.PortfolioComponent,
                experience_component_1.ExperienceComponent,
                education_component_1.EducationComponent,
                reference_component_1.ReferenceComponent,
                contact_component_1.ContactComponent,
                projects_component_1.ProjectsComponent,
                article_component_1.ArticleComponent,
                skill_desc_component_1.SkillDescComponent,
                skill_list_colon_directive_1.SkillListColonDirective,
                skill_list_colon_pipe_1.SkillListColonPipe,
                certifications_component_1.CertificationsComponent,
                dialog_component_1.DialogComponent
            ],
            providers: [
                { provide: 'SnotifyToastConfig', useValue: ng_snotify_1.ToastDefaults },
                ng_snotify_1.SnotifyService,
                { provide: common_2.APP_BASE_HREF, useValue: '/' }
            ],
            entryComponents: [dialog_component_1.DialogComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "./src/app/profile/projects/projects.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: relative;\n  max-width: 100%;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 20px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.3em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREFJO0VBQ0U7SUFDRSxrQkFBQTtFQ0dOO0FBQ0Y7O0FESEk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNLTjs7QURKTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBSUEsbUJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0FDT1I7O0FETkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDU047O0FEUk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNXUjs7QURWSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2FOOztBRFpNO0VBQ0UsY0FBQTtBQ2VSOztBRGRJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDaUJOOztBRGhCSTtFQUNFLDZCQUFBO0VBSUEscUJBQUE7QUNtQk47O0FEakJNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ29CUjs7QURqQlE7RUFDSyxtQkFBQTtFQUNELGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDb0JaIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWVudHJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTsgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuYmxvZy1lbnRyeSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNlbTsgfSB9XG4gICAgLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cbiAgICAgIC5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7IH1cbiAgICAuYmxvZy1lbnRyeSAuZGVzYyBoMyB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IGF1dG87XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cbiAgICAgIC5ibG9nLWVudHJ5IC5kZXNjIGgzIGEge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgICAgIC5ibG9nLWVudHJ5IC5kZXNjIHNwYW4gc21hbGwgaSB7XG4gICAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XG4gICAgLmJsb2ctZW50cnkgLmRlc2MgLmxlYWQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzAwMDsgfVxuICAgIC5ibG9nLWVudHJ5OmhvdmVyIC5ibG9nLWltZyBpbWcge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgXG4gICAgICAuYmxvZy1lbnRyeSBoNHtcbiAgICAgICAgZm9udC13ZWlnaHQ6NTYwO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgXG4gICAgICAgIC5ibG9nLWVudHJ5IGg1e1xuICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6MS4zZW07XG4gICAgICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgICAgICAgXG4gICAgICAgIH0iLCIuYmxvZy1lbnRyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmxvZy1lbnRyeSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICB9XG59XG4uYmxvZy1lbnRyeSAuYmxvZy1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIGEge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHNtYWxsIGkge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgLmxlYWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYmxvZy1lbnRyeTpob3ZlciAuYmxvZy1pbWcgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmJsb2ctZW50cnkgaDQge1xuICBmb250LXdlaWdodDogNTYwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJsb2ctZW50cnkgaDUge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-projects',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./projects.component.scss */ "./src/app/profile/projects/projects.component.scss")).default]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "./src/app/profile/reference/reference.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/reference/reference.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cc-reference p {\n  font-weight: 1000px;\n  color: black;\n  font-style: bold;\n}\n\n.category p {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0ksVUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNjLXJlZmVyZW5jZSBwe1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIH1cblxuICAuY2F0ZWdvcnkgcHtcbiAgICAgIHdpZHRoOiAxMCVcbiAgfSIsIi5jYy1yZWZlcmVuY2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLmNhdGVnb3J5IHAge1xuICB3aWR0aDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/reference/reference.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/reference/reference.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ReferenceComponent = /** @class */ (function () {
    function ReferenceComponent() {
    }
    ReferenceComponent.prototype.ngOnInit = function () {
    };
    ReferenceComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-reference',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./reference.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./reference.component.scss */ "./src/app/profile/reference/reference.component.scss")).default]
        })
    ], ReferenceComponent);
    return ReferenceComponent;
}());
exports.ReferenceComponent = ReferenceComponent;


/***/ }),

/***/ "./src/app/profile/skills/skill-desc/skill-desc.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/profile/skills/skill-desc/skill-desc.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-for-card {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\nmat-icon.icon-rotate:focus {\n  -webkit-animation: rotate 1s ease-in-out 0s;\n          animation: rotate 1s ease-in-out 0s;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n/*.mat-expansion-panel-header, .ng-animating.mat-expansion-panel-header {\n    background: green !important;\n    height: 100px !important;\n}*/\n\n/*.ng-animating mat-card mat-expansion-panel-header {\n    height: 100px !important;\n    background: green !important;\n}\n.ng-animating mat-card div.mat-expansion-panel-content {\n    height: 100px !important;\n    visibility: hidden;\n    background: green !important;\n}\n\n::ng-deep .ng-animating mat-card  .mat-expansion-panel-content{\n    height: 100px !important;\n    background: green !important;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phdmRldi9wcm9qZWN0cy9wZXJzb25hbC9wb3J0YWZvbGlvLXByb2Zlc2lvbmFsL3NyYy9hcHAvcHJvZmlsZS9za2lsbHMvc2tpbGwtZGVzYy9za2lsbC1kZXNjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3NraWxscy9za2lsbC1kZXNjL3NraWxsLWRlc2MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO1VBQUEsbUNBQUE7QUNDSjs7QURDQTtFQUNJO0lBQU8sK0JBQUE7WUFBQSx1QkFBQTtFQ0dUO0VERkU7SUFBSyxpQ0FBQTtZQUFBLHlCQUFBO0VDS1A7QUFDRjs7QURSQTtFQUNJO0lBQU8sK0JBQUE7WUFBQSx1QkFBQTtFQ0dUO0VERkU7SUFBSyxpQ0FBQTtZQUFBLHlCQUFBO0VDS1A7QUFDRjs7QURIQTs7O0VBQUE7O0FBTUE7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxsLWRlc2Mvc2tpbGwtZGVzYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tZm9yLWNhcmR7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbm1hdC1pY29uLmljb24tcm90YXRlOmZvY3Vze1xuICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGVhc2UtaW4tb3V0IDBzO1xufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vKi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciwgLm5nLWFuaW1hdGluZy5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59Ki9cblxuXG4vKi5uZy1hbmltYXRpbmcgbWF0LWNhcmQgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xufVxuLm5nLWFuaW1hdGluZyBtYXQtY2FyZCBkaXYubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctYW5pbWF0aW5nIG1hdC1jYXJkICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50e1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xufSovIiwiLm1hcmdpbi1mb3ItY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxubWF0LWljb24uaWNvbi1yb3RhdGU6Zm9jdXMge1xuICBhbmltYXRpb246IHJvdGF0ZSAxcyBlYXNlLWluLW91dCAwcztcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLyoubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIsIC5uZy1hbmltYXRpbmcubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGdyZWVuICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufSovXG4vKi5uZy1hbmltYXRpbmcgbWF0LWNhcmQgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xufVxuLm5nLWFuaW1hdGluZyBtYXQtY2FyZCBkaXYubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctYW5pbWF0aW5nIG1hdC1jYXJkICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50e1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xufSovIl19 */");

/***/ }),

/***/ "./src/app/profile/skills/skill-desc/skill-desc.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/profile/skills/skill-desc/skill-desc.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SkillDescComponent = /** @class */ (function () {
    function SkillDescComponent() {
        this.skillsList = [];
        this.addIcon = 'add';
        this.clearIcon = 'clear';
    }
    SkillDescComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.skills);
        var i = 0;
        this.skills.forEach(function (s) {
            return _this.skillsList.push({ id: i++, skill: s, openIcon: _this.addIcon, closeIcon: _this.clearIcon, isOpen: true });
        });
    };
    SkillDescComponent.prototype.changeIcon = function (skillItem) {
        var id = this.skillsList.indexOf(skillItem);
        console.log(id);
        this.skillsList[id].isOpen = !this.skillsList[id].isOpen;
    };
    tslib_1.__decorate([
        core_1.Input()
    ], SkillDescComponent.prototype, "skills", void 0);
    SkillDescComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-skill-desc',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./skill-desc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skill-desc/skill-desc.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./skill-desc.component.scss */ "./src/app/profile/skills/skill-desc/skill-desc.component.scss")).default]
        })
    ], SkillDescComponent);
    return SkillDescComponent;
}());
exports.SkillDescComponent = SkillDescComponent;


/***/ }),

/***/ "./src/app/profile/skills/skills.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.title = 'Habilidades';
        this.skills = [];
        this.skills.push({ name: 'Java', icon: 'java', percentage: 80, description: '', skillSubitems: [{ name: 'Java 1.6' }, { name: 'Java 1.8' }, { name: 'JSF' }, { name: 'JPA' }, { name: 'Spring Boot' }, { name: 'Hibernate' }] });
        this.skills.push({ name: 'PHP', icon: 'php', percentage: 60, description: '', skillSubitems: [{ name: 'Laravel' }] });
        this.skills.push({ name: 'NodeJs', icon: 'nodejs', percentage: 80, description: '', skillSubitems: [{ name: 'ExpressJs' }, { name: 'Angular 6' }, { name: 'Angular 7' }, { name: 'Angular 8' }] });
        this.skills.push({ name: 'SQL', icon: 'sql', percentage: 80, description: '', skillSubitems: [{ name: 'Mysql' }, { name: 'Postgres' }, { name: 'Oracle' }] });
        this.skills.push({ name: 'HTML,CSS,JS', icon: 'html', percentage: 80, description: '', skillSubitems: [] });
        this.skills.push({ name: 'NoSql', icon: 'nosql', percentage: 40, description: '', skillSubitems: [{ name: 'MongoDB' }] });
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-skills',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./skills.component.scss */ "./src/app/profile/skills/skills.component.scss")).default]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;


/***/ }),

/***/ "./src/app/service/dialog.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/dialog.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var dialog_component_1 = __webpack_require__(/*! ../profile/dialog/dialog.component */ "./src/app/profile/dialog/dialog.component.ts");
var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openInfoModal = function () {
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            width: '500px',
            data: ''
        });
    };
    DialogService.prototype.showCertificate = function (certificate) {
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            width: '860px',
            data: {
                type: certificate.type,
                title: certificate.title,
                source: certificate.name
            }
        });
    };
    DialogService.ctorParameters = function () { return [
        { type: material_1.MatDialog }
    ]; };
    DialogService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;


/***/ }),

/***/ "./src/app/service/icons.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/icons.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var icons_enum_1 = __webpack_require__(/*! ../enum/icons.enum */ "./src/app/enum/icons.enum.ts");
var IconsService = /** @class */ (function () {
    function IconsService(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
    }
    IconsService.prototype.registerIcons = function () {
        this.loadIcons(Object.values(icons_enum_1.Icons), '../assets/svg/icons');
    };
    IconsService.prototype.loadIcons = function (iconKeys, iconUrl) {
        var _this = this;
        iconKeys.forEach(function (key) {
            _this.matIconRegistry.addSvgIcon(key, _this.domSanitizer.bypassSecurityTrustResourceUrl(iconUrl + "/" + key + ".svg"));
        });
    };
    IconsService.ctorParameters = function () { return [
        { type: material_1.MatIconRegistry },
        { type: platform_browser_1.DomSanitizer }
    ]; };
    IconsService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], IconsService);
    return IconsService;
}());
exports.IconsService = IconsService;


/***/ }),

/***/ "./src/app/utils/constants.utils.ts":
/*!******************************************!*\
  !*** ./src/app/utils/constants.utils.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ConstantsUtils = /** @class */ (function () {
    function ConstantsUtils() {
    }
    /**
     * Path of certificates
     */
    ConstantsUtils.PATH_CERTIFICATES = 'assets/images/certifications';
    /**
     * Links
     */
    ConstantsUtils.LINK_FACEBOOK = 'https://www.facebook.com/javier.machuca1/';
    ConstantsUtils.LINK_INSTAGRAM = 'https://www.instagram.com/javier.machuca.a/?hl=es-la';
    ConstantsUtils.LINK_LINKEDIN = 'https://www.linkedin.com/in/javier-ignacio-machuca-5182bb74/';
    ConstantsUtils.LINK_GITHUB = 'https://github.com/JavierMachucaA';
    ConstantsUtils.LINK_TWITTER = 'https://twitter.com/javiermachucaa1';
    ConstantsUtils.LINK_GOOGLE = 'https://twitter.com/javiermachucaa1';
    return ConstantsUtils;
}());
exports.ConstantsUtils = ConstantsUtils;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ng_snotify_1 = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
exports.environment = {
    production: false,
    //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
    //baseUrl : `http://localhost:4200/`,
    snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify_1.SnotifyPosition.rightTop,
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/javdev/projects/personal/portafolio-profesional/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map