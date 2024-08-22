window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "swagger.yaml",
    urls: [
      {url: "organization.yaml", name: "Organization and Customer"},
      {url: "product.yaml", name: "Product"},
      {url: "order.yaml", name: "Order"},
      {url: "stock.yaml", name: "Stock"},
      {url: "price.yaml", name: "Price"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
