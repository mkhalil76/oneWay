(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultAside.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultAside.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DefaultAside',
  components: {
    cSwitch: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Switch"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/_nav */ "./resources/js/_nav.js");
/* harmony import */ var _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
/* harmony import */ var _DefaultAside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultAside */ "./resources/js/containers/DefaultAside.vue");
/* harmony import */ var _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt */ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DefaultContainer',
  components: {
    AsideToggler: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["AsideToggler"],
    AppHeader: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Header"],
    AppSidebar: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Sidebar"],
    AppAside: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Aside"],
    TheFooter: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Footer"],
    Breadcrumb: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"],
    DefaultAside: _DefaultAside__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultHeaderDropdownAccnt: _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_3__["default"],
    SidebarForm: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarForm"],
    SidebarFooter: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarFooter"],
    SidebarToggler: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarToggler"],
    SidebarHeader: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarHeader"],
    SidebarNav: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarNav"],
    SidebarMinimizer: _node_modules_coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarMinimizer"]
  },
  data: function data() {
    return {
      nav: _js_nav__WEBPACK_IMPORTED_MODULE_0__["default"].items
    };
  },
  computed: {
    providers: function providers() {
      return this.$store.state.providers.active;
      return this._.cloneDeep(this.$store.state.providers.active);
    },
    name: function name() {
      return this.$route.name;
    },
    list: function list() {
      return this.$route.matched.filter(function (route) {
        return route.name || route.meta.label;
      });
    }
  },
  created: function created() {
    this.$store.dispatch('providers');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["HeaderDropdown"]
  },
  data: function data() {
    return {
      itemsCount: 42
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultAside.vue?vue&type=template&id=f0431334&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultAside.vue?vue&type=template&id=f0431334& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-tabs",
    [
      _c(
        "b-tab",
        [
          _c("template", { slot: "title" }, [
            _c("i", { staticClass: "icon-list" })
          ]),
          _vm._v(" "),
          _c(
            "b-list-group",
            { staticClass: "list-group-accent" },
            [
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
                },
                [_vm._v("\n        Today\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-warning list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "avatar float-right" }, [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v("Meeting with\n          "),
                    _c("strong", [_vm._v("Lucas")])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  1 - 3pm\n        ")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-location-pin" }),
                    _vm._v("  Palo Alto, CA\n        ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass: "list-group-item-accent-info",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "avatar float-right" }, [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/4.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v("Skype with "),
                    _c("strong", [_vm._v("Megan")])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  4 - 5pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-social-skype" }),
                    _vm._v("  On-line")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "transparent mx-3 my-0" }),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
                },
                [_vm._v("\n        Tomorrow\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-danger list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", [
                    _vm._v("New UI Project - "),
                    _c("strong", [_vm._v("deadline")])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  10 - 11pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-home" }),
                    _vm._v("  creativeLabs HQ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "avatars-stack mt-2" }, [
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/2.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/3.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/4.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/5.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/6.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-success list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", [
                    _c("strong", [_vm._v("#10 Startups.Garden")]),
                    _vm._v(" Meetup")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  1 - 3pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-location-pin" }),
                    _vm._v("  Palo Alto, CA")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-primary list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", [_c("strong", [_vm._v("Team meeting")])]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  4 - 6pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-home" }),
                    _vm._v("  creativeLabs HQ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "avatars-stack mt-2" }, [
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/2.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/3.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/4.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/5.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/6.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/7.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/8.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        [
          _c("template", { slot: "title" }, [
            _c("i", { staticClass: "icon-speech" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "p-3" }, [
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "success" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "danger" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "info" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "warning" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "dark" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        [
          _c("template", { slot: "title" }, [
            _c("i", { staticClass: "icon-settings" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "p-3" },
            [
              _c("h6", [_vm._v("Settings")]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-4" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 1")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm",
                        checked: ""
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-3" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 2")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-3" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 3")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm",
                        disabled: "",
                        defaultChecked: ""
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Disabled option.")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-3" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 4")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm",
                        checked: ""
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("h6", [_vm._v("System Utilization")]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-4" }, [
                _c("small", [_c("b", [_vm._v("CPU Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "info", value: 25 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("348 Processes. 1/4 Cores.")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-2" }, [
                _c("small", [_c("b", [_vm._v("Memory Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "warning", value: 70 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("11444GB/16384MB")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-2" }, [
                _c("small", [_c("b", [_vm._v("SSD 1 Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "danger", value: 95 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("243GB/256GB")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-2" }, [
                _c("small", [_c("b", [_vm._v("SSD 2 Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "success", value: 10 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [_vm._v("25GB/256GB")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app" },
    [
      _c(
        "AppHeader",
        { attrs: { fixed: "" } },
        [
          _c("SidebarToggler", {
            staticClass: "d-lg-none",
            attrs: { display: "md", mobile: "" }
          }),
          _vm._v(" "),
          _c("b-link", { staticClass: "navbar-brand", attrs: { to: "#" } }, [
            _c("img", {
              staticClass: "navbar-brand-full",
              attrs: {
                src: "img/brand/logo.svg",
                width: "89",
                height: "25",
                alt: "CoreUI Logo"
              }
            }),
            _vm._v(" "),
            _c("img", {
              staticClass: "navbar-brand-minimized",
              attrs: {
                src: "img/brand/sygnet.svg",
                width: "30",
                height: "30",
                alt: "CoreUI Logo"
              }
            })
          ]),
          _vm._v(" "),
          _c("SidebarToggler", {
            staticClass: "d-md-down-none",
            attrs: { display: "lg", defaultOpen: true }
          }),
          _vm._v(" "),
          _c(
            "b-navbar-nav",
            { staticClass: "d-md-down-none" },
            [
              _c(
                "b-nav-item",
                { staticClass: "px-3", attrs: { to: "/dashboard" } },
                [_vm._v("Dashboard")]
              ),
              _vm._v(" "),
              _c(
                "b-nav-item",
                { staticClass: "px-3", attrs: { to: "/users", exact: "" } },
                [_vm._v("Users")]
              ),
              _vm._v(" "),
              _c("b-nav-item", { staticClass: "px-3" }, [_vm._v("Settings")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-navbar-nav",
            { staticClass: "ml-auto" },
            [
              _c(
                "b-nav-item",
                { staticClass: "d-md-down-none" },
                [
                  _c("i", { staticClass: "icon-bell" }),
                  _vm._v(" "),
                  _c("b-badge", { attrs: { pill: "", variant: "danger" } }, [
                    _vm._v("5")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("b-nav-item", { staticClass: "d-md-down-none" }, [
                _c("i", { staticClass: "icon-list" })
              ]),
              _vm._v(" "),
              _c("b-nav-item", { staticClass: "d-md-down-none" }, [
                _c("i", { staticClass: "icon-location-pin" })
              ]),
              _vm._v(" "),
              _c("DefaultHeaderDropdownAccnt")
            ],
            1
          ),
          _vm._v(" "),
          _c("AsideToggler", { staticClass: "d-none d-lg-block" })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-body" },
        [
          _c(
            "AppSidebar",
            { attrs: { fixed: "" } },
            [
              _c("SidebarHeader"),
              _vm._v(" "),
              _c("SidebarForm"),
              _vm._v(" "),
              _c("SidebarNav", { attrs: { navItems: _vm.nav } }),
              _vm._v(" "),
              _c("SidebarFooter"),
              _vm._v(" "),
              _c("SidebarMinimizer")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "main",
            { staticClass: "main" },
            [
              _c("Breadcrumb", { attrs: { list: _vm.list } }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "container-fluid" },
                [_c("router-view")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("AppAside", { attrs: { fixed: "" } }, [_c("DefaultAside")], 1)
        ],
        1
      ),
      _vm._v(" "),
      _c("TheFooter", [
        _c("div", [
          _c("a", { attrs: { href: "https://coreui.io" } }, [_vm._v("CoreUI")]),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [_vm._v("© 2018 creativeLabs.")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ml-auto" }, [
          _c("span", { staticClass: "mr-1" }, [_vm._v("Powered by")]),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://coreui.io" } }, [
            _vm._v("CoreUI for Vue")
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppHeaderDropdown",
    { attrs: { right: "", "no-caret": "" } },
    [
      _c("template", { slot: "header" }, [
        _c("img", {
          staticClass: "img-avatar",
          attrs: { src: "img/avatars/6.jpg", alt: "admin@bootstrapmaster.com" }
        })
      ]),
      _vm._v("\\\n  "),
      _c(
        "template",
        { slot: "dropdown" },
        [
          _c(
            "b-dropdown-header",
            { staticClass: "text-center", attrs: { tag: "div" } },
            [_c("strong", [_vm._v("Account")])]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-bell-o" }),
              _vm._v(" Updates\n      "),
              _c("b-badge", { attrs: { variant: "info" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-envelope-o" }),
              _vm._v(" Messages\n      "),
              _c("b-badge", { attrs: { variant: "success" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-tasks" }),
              _vm._v(" Tasks\n      "),
              _c("b-badge", { attrs: { variant: "danger" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-comments" }),
              _vm._v(" Comments\n      "),
              _c("b-badge", { attrs: { variant: "warning" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-header",
            { staticClass: "text-center", attrs: { tag: "div" } },
            [_c("strong", [_vm._v("Settings")])]
          ),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-user" }),
            _vm._v(" Profile")
          ]),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-wrench" }),
            _vm._v(" Settings")
          ]),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-usd" }),
              _vm._v(" Payments\n      "),
              _c("b-badge", { attrs: { variant: "secondary" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-file" }),
              _vm._v(" Projects\n      "),
              _c("b-badge", { attrs: { variant: "primary" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("b-dropdown-divider"),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-shield" }),
            _vm._v(" Lock Account")
          ]),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-lock" }),
            _vm._v(" Logout")
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/_nav.js":
/*!******************************!*\
  !*** ./resources/js/_nav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'primary',
      text: 'NEW'
    }
  }, {
    title: true,
    name: 'Theme',
    "class": '',
    wrapper: {
      element: '',
      attributes: {}
    }
  }, {
    name: 'Resturants',
    url: '/resturants/index',
    icon: 'icon-drop'
  }, {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  }, {
    title: true,
    name: 'Components',
    "class": '',
    wrapper: {
      element: '',
      attributes: {}
    }
  }, {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [{
      name: 'Breadcrumbs',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle'
    }, {
      name: 'Cards',
      url: '/base/cards',
      icon: 'icon-puzzle'
    }, {
      name: 'Carousels',
      url: '/base/carousels',
      icon: 'icon-puzzle'
    }, {
      name: 'Collapses',
      url: '/base/collapses',
      icon: 'icon-puzzle'
    }, {
      name: 'Forms',
      url: '/base/forms',
      icon: 'icon-puzzle'
    }, {
      name: 'Jumbotrons',
      url: '/base/jumbotrons',
      icon: 'icon-puzzle'
    }, {
      name: 'List Groups',
      url: '/base/list-groups',
      icon: 'icon-puzzle'
    }, {
      name: 'Navs',
      url: '/base/navs',
      icon: 'icon-puzzle'
    }, {
      name: 'Navbars',
      url: '/base/navbars',
      icon: 'icon-puzzle'
    }, {
      name: 'Paginations',
      url: '/base/paginations',
      icon: 'icon-puzzle'
    }, {
      name: 'Popovers',
      url: '/base/popovers',
      icon: 'icon-puzzle'
    }, {
      name: 'Progress Bars',
      url: '/base/progress-bars',
      icon: 'icon-puzzle'
    }, {
      name: 'Switches',
      url: '/base/switches',
      icon: 'icon-puzzle'
    }, {
      name: 'Tables',
      url: '/base/tables',
      icon: 'icon-puzzle'
    }, {
      name: 'Tabs',
      url: '/base/tabs',
      icon: 'icon-puzzle'
    }, {
      name: 'Tooltips',
      url: '/base/tooltips',
      icon: 'icon-puzzle'
    }]
  }, {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [{
      name: 'Buttons',
      url: '/buttons/standard-buttons',
      icon: 'icon-cursor'
    }, {
      name: 'Button Dropdowns',
      url: '/buttons/dropdowns',
      icon: 'icon-cursor'
    }, {
      name: 'Button Groups',
      url: '/buttons/button-groups',
      icon: 'icon-cursor'
    }, {
      name: 'Brand Buttons',
      url: '/buttons/brand-buttons',
      icon: 'icon-cursor'
    }]
  }, {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  }, {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [{
      name: 'CoreUI Icons',
      url: '/icons/coreui-icons',
      icon: 'icon-star',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }, {
      name: 'Flags',
      url: '/icons/flags',
      icon: 'icon-star'
    }, {
      name: 'Font Awesome',
      url: '/icons/font-awesome',
      icon: 'icon-star',
      badge: {
        variant: 'secondary',
        text: '4.7'
      }
    }, {
      name: 'Simple Line Icons',
      url: '/icons/simple-line-icons',
      icon: 'icon-star'
    }]
  }, {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [{
      name: 'Alerts',
      url: '/notifications/alerts',
      icon: 'icon-bell'
    }, {
      name: 'Badges',
      url: '/notifications/badges',
      icon: 'icon-bell'
    }, {
      name: 'Modals',
      url: '/notifications/modals',
      icon: 'icon-bell'
    }]
  }, {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'primary',
      text: 'NEW'
    }
  }, {
    divider: true
  }, {
    title: true,
    name: 'Extras'
  }, {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [{
      name: 'Login',
      url: '/pages/login',
      icon: 'icon-star'
    }, {
      name: 'Register',
      url: '/pages/register',
      icon: 'icon-star'
    }, {
      name: 'Error 404',
      url: '/pages/404',
      icon: 'icon-star'
    }, {
      name: 'Error 500',
      url: '/pages/500',
      icon: 'icon-star'
    }]
  }, {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: {
      disabled: true
    }
  }, {
    name: 'Download CoreUI',
    url: 'http://coreui.io/vue/',
    icon: 'icon-cloud-download',
    "class": 'mt-auto',
    variant: 'success',
    attributes: {
      target: '_blank',
      rel: 'noopener'
    }
  }, {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/vue/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: {
      target: '_blank',
      rel: 'noopener'
    }
  }]
});

/***/ }),

/***/ "./resources/js/containers/DefaultAside.vue":
/*!**************************************************!*\
  !*** ./resources/js/containers/DefaultAside.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultAside_vue_vue_type_template_id_f0431334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultAside.vue?vue&type=template&id=f0431334& */ "./resources/js/containers/DefaultAside.vue?vue&type=template&id=f0431334&");
/* harmony import */ var _DefaultAside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultAside.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultAside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultAside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultAside_vue_vue_type_template_id_f0431334___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultAside_vue_vue_type_template_id_f0431334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultAside.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultAside.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/DefaultAside.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultAside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultAside.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultAside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultAside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultAside.vue?vue&type=template&id=f0431334&":
/*!*********************************************************************************!*\
  !*** ./resources/js/containers/DefaultAside.vue?vue&type=template&id=f0431334& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultAside_vue_vue_type_template_id_f0431334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultAside.vue?vue&type=template&id=f0431334& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultAside.vue?vue&type=template&id=f0431334&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultAside_vue_vue_type_template_id_f0431334___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultAside_vue_vue_type_template_id_f0431334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/DefaultContainer.vue":
/*!******************************************************!*\
  !*** ./resources/js/containers/DefaultContainer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultContainer.vue?vue&type=template&id=927e13a2& */ "./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&");
/* harmony import */ var _DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultContainer.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultContainer.vue?vue&type=template&id=927e13a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue":
/*!****************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderDropdownAccnt.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& */ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&");
/* harmony import */ var _DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultHeaderDropdownAccnt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);