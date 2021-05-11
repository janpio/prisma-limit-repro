(function() {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 475:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": function() { return /* binding */ config; },
  "default": function() { return /* binding */ graphql; }
});

;// CONCATENATED MODULE: external "apollo-server-micro"
var external_apollo_server_micro_namespaceObject = require("apollo-server-micro");;
;// CONCATENATED MODULE: external "nexus"
var external_nexus_namespaceObject = require("nexus");;
;// CONCATENATED MODULE: external "nexus-plugin-prisma"
var external_nexus_plugin_prisma_namespaceObject = require("nexus-plugin-prisma");;
;// CONCATENATED MODULE: external "path"
var external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./graphql/resolvers.ts

const User = (0,external_nexus_namespaceObject.objectType)({
  name: 'User',

  definition(t) {
    t.model.id();
    t.model.name();
  }

});
/*
export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id")
    t.nonNull.string("name")
  }
})
*/
;// CONCATENATED MODULE: ./graphql/schema.ts




const schema = (0,external_nexus_namespaceObject.makeSchema)({
  types: [User],
  contextType: {
    module: external_path_default().join(process.cwd(), 'graphql', 'context.ts'),
    export: 'Context'
  },

  /**/
  plugins: [(0,external_nexus_plugin_prisma_namespaceObject.nexusPrisma)({
    outputs: {
      typegen: external_path_default().join(process.cwd(), 'generated', 'typegen-nexus-plugin-prisma.d.ts')
    }
  })],

  /**/
  outputs: {
    typegen: external_path_default().join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: external_path_default().join(process.cwd(), 'generated', 'schema.graphql')
  }
});
;// CONCATENATED MODULE: external "@prisma/client"
var client_namespaceObject = require("@prisma/client");;
;// CONCATENATED MODULE: ./lib/prisma.ts

let prisma;

if (true) {
  prisma = new client_namespaceObject.PrismaClient();
} else {}


;// CONCATENATED MODULE: ./graphql/context.ts

const createContext = async () => {
  return {
    prisma: prisma
  };
};
;// CONCATENATED MODULE: ./pages/api/graphql.ts



const apolloServer = new external_apollo_server_micro_namespaceObject.ApolloServer({
  context: createContext,
  schema: schema,
  tracing: false
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ var graphql = (apolloServer.createHandler({
  path: '/api/graphql'
}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(475));
module.exports = __webpack_exports__;

})();