"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);


const Fonts = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
        styles: `
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
    `
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fonts);


/***/ }),

/***/ 2634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5345);
/* harmony import */ var _no_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8373);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _voxel_dog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_voxel_dog__WEBPACK_IMPORTED_MODULE_5__]);
_voxel_dog__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Main = ({ children , router  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charset: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Poussin des for\xeats - Page Principale"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                path: router.asPath
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
                maxW: "container.md",
                pt: 14,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_no_ssr__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_voxel_dog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    }),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/logo.js





const LogoBox = (styled_default()).span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    &:hover img {

    }
`;
const Logo = ()=>{
    const footPrintImg = `/images/hasselblad${(0,react_.useColorModeValue)("", "-dark")}.png`;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: footPrintImg,
                        width: 20,
                        height: 20,
                        alt: "logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: (0,react_.useColorModeValue)("gray.800", "whiteAlpha.900"),
                        fontFamily: 'M PLUS Rounded 1c", sans-serif',
                        fontWeight: "bold",
                        ml: 3,
                        children: "Poussin des for\xeats"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const logo = (Logo);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/theme-toggle-button.js




const ThemeToggleButton = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    return /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        exitBeforeEnter: true,
        initial: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.div, {
            style: {
                display: "inline-block"
            },
            initial: {
                x: -20,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            exit: {
                x: 20,
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "arial-label": "Toggle theme",
                colorScheme: (0,react_.useColorModeValue)("purple", "orange"),
                icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {}), /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {})),
                onClick: toggleColorMode
            })
        }, (0,react_.useColorModeValue)("light", "dark"))
    });
};
/* harmony default export */ const theme_toggle_button = (ThemeToggleButton);

;// CONCATENATED MODULE: ./components/navbar.js






const LinkItem = ({ href , path , children  })=>{
    const active = path === href;
    const inactiveColor = (0,react_.useColorModeValue)("gray200", "whiteAlpha.900");
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            p: 2,
            bg: active ? "glasseTeal" : undefined,
            color: active ? "#202023" : inactiveColor,
            children: children
        })
    });
};
const Navbar = (props)=>{
    const { path  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)("#ffffff40", "#20202380"),
        style: {
            backdropFilter: "blur(10px"
        },
        zIndex: 1,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.md",
            wrap: "wrap",
            align: "center",
            justify: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    align: "center",
                    mr: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h1",
                        size: "lg",
                        letterSpacing: "tighter",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {})
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: {
                        base: "column",
                        md: "row"
                    },
                    display: {
                        base: "none",
                        md: "flex"
                    },
                    width: {
                        base: "full",
                        md: "auto"
                    },
                    alignItems: "center",
                    flexGrow: 1,
                    mt: {
                        base: 4,
                        md: 0
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/portfolio",
                            path: path,
                            children: "Portfolio"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/articles",
                            path: path,
                            children: "Articles"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/posts",
                            path: path,
                            children: "Posts"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/menu",
                            path: path,
                            children: "La Graine \xe0 Nuno"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    flex: 1,
                    align: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_button, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            ml: 2,
                            display: {
                                base: "inline-block",
                                md: "none"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        as: react_.IconButton,
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {}),
                                        variant: "outline",
                                        "aria-label": "Options"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/portfolio",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Portfolio"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/articles",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Articles"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/posts",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Posts"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/menu",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "La Graine \xe0 Nuno"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);


/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const NoSsr = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(NoSsr)
, {
    ssr: false
}));


/***/ }),

/***/ 4085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oi": () => (/* binding */ DogContainer),
/* harmony export */   "j_": () => (/* binding */ DogSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const DogSpinner = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
        size: "xl",
        position: "absolute",
        left: "50%",
        top: "50%",
        ml: "calc(0px - var(--spinner-size) / 2)",
        mt: "calc(0px - var(--spinner-size))"
    })
;
const DogContainer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children  }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: ref,
        className: "voxel-dog",
        m: "auto",
        mt: [
            "-20px",
            "-60px",
            "-120px"
        ],
        mb: [
            "-40px",
            "-140px",
            "-200px"
        ],
        w: [
            280,
            480,
            640
        ],
        h: [
            280,
            480,
            640
        ],
        position: "relative",
        children: children
    })
);
const Loader = ()=>{
    return /*#__PURE__*/ _jsx(DogContainer, {
        children: /*#__PURE__*/ _jsx(DogSpinner, {})
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Loader)));


/***/ }),

/***/ 5212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2949);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9365);
/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1764);
/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4085);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_2__, three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__, _lib_model__WEBPACK_IMPORTED_MODULE_4__]);
([three__WEBPACK_IMPORTED_MODULE_2__, three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__, _lib_model__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}
const VoxelDog = ()=>{
    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: renderer1 , 1: setRenderer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: _camera , 1: setCamera  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: target  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-0.5, 1, 1.5));
    const { 0: initialCameraPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));
    const { 0: scene  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_2__.Scene());
    const { 0: _controls , 1: setControls  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const { current: container  } = refContainer;
        if (container && renderer1) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            renderer1.setSize(scW, scH);
        }
    }, [
        renderer1
    ]);
    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { current: container  } = refContainer;
        if (container && !renderer1) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_2__.sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);
            // 640 -> 240
            // 8   -> 6
            const scale = 3 * (scH * 0.005 + 4.8);
            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);
            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0xcccccc, 1);
            scene.add(ambientLight);
            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__/* .OrbitControls */ .z(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            setControls(controls);
            (0,_lib_model__WEBPACK_IMPORTED_MODULE_4__/* .loadGLTFModel */ .D)(scene, "/terre.glb", {
                receiveShadow: false,
                castShadow: false
            }).then(()=>{
                animate();
                setLoading(false);
            });
            let req = null;
            let frame = 0;
            const animate = ()=>{
                req = requestAnimationFrame(animate);
                frame = frame <= 100 ? frame + 1 : frame;
                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20 - 10;
                    camera.position.y = 60 //60
                    ;
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }
                renderer.render(scene, camera);
            };
            return ()=>{
                console.log("unmount");
                cancelAnimationFrame(req);
                renderer.dispose();
            };
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("resize", handleWindowResize, false);
        return ()=>{
            window.removeEventListener("resize", handleWindowResize, false);
        };
    }, [
        renderer1,
        handleWindowResize
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_5__/* .DogContainer */ .Oi, {
        ref: refContainer,
        children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_5__/* .DogSpinner */ .j_, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoxelDog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1764:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ loadGLTFModel)
/* harmony export */ });
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1217);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__]);
three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function loadGLTFModel(scene, glbPath, options = {
    receiveShadow: true,
    castShadow: true
}) {
    const { receiveShadow , castShadow  } = options;
    return new Promise((resolve, reject)=>{
        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__/* .GLTFLoader */ .E();
        loader.load(glbPath, (gltf)=>{
            const obj = gltf.scene;
            obj.name = "dog";
            obj.position.y = -4;
            obj.position.x = 0;
            obj.receiveShadow = receiveShadow;
            obj.castShadow = castShadow;
            obj.translateY = 10;
            scene.add(obj);
            obj.traverse(function(child) {
                if (child.isMesh) {
                    child.castShadow = castShadow;
                    child.receiveShadow = receiveShadow;
                }
            });
            resolve(obj);
        }, undefined, function(error) {
            reject(error);
        });
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8280);
/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2634);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6655);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_main__WEBPACK_IMPORTED_MODULE_4__]);
_components_layouts_main__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Website = ({ Component , pageProps , router  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fonts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_main__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                router: router,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {
                    exitBeforeEnter: true,
                    initial: true,
                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {
                        ...pageProps,
                        key: router.route
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Website);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,632,655], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();