const { nodeFileTrace } = require("@vercel/nft");
(async () => {
  const files = ["./.next/server/pages/api/graphql.js"];
  const { fileList, reasons } = await nodeFileTrace(files);
  console.log(fileList)

  async function traceReasons(path) {
    let reason = reasons[path];
    while (reason) {
      console.log(reason);
      if (reason.parents.length > 1) {
        console.warn("More than one parent, choosing first one");
      }
      reason = reasons[reason.parents[0]];
    }
  }
  console.log("----------");
  traceReasons("node_modules/@prisma/engines/query-engine-darwin");
  console.log("----------");
  traceReasons("node_modules/@prisma/engines/query-engine-debian-openssl-1.1.x");
})();