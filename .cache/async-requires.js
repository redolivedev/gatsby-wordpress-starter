// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-portfolio-under-content-js": () => import("/Users/josh/sandbox/gatsby_myawesomeportfolio/src/templates/portfolioUnderContent.js" /* webpackChunkName: "component---src-templates-portfolio-under-content-js" */),
  "component---src-templates-page-js": () => import("/Users/josh/sandbox/gatsby_myawesomeportfolio/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-portfolio-js": () => import("/Users/josh/sandbox/gatsby_myawesomeportfolio/src/templates/portfolio.js" /* webpackChunkName: "component---src-templates-portfolio-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/josh/sandbox/gatsby_myawesomeportfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/josh/sandbox/gatsby_myawesomeportfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/josh/sandbox/gatsby_myawesomeportfolio/.cache/data.json")

