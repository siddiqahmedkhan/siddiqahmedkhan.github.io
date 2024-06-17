"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 3110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(3488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server_namespaceObject.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Csiddi%5COneDrive%5CDesktop%5Cproject%5Csiddiqahmedkhan%20portfolio%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\siddi\\OneDrive\\Desktop\\project\\siddiqahmedkhan portfolio\\app\\favicon.ico?__next_metadata_route__","nextConfigOutput":"export"}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,451], () => (__webpack_exec__(3110)));
module.exports = __webpack_exports__;

})();