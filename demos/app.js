(function (context, moduleName, definition) {
  // if node
  // global object
  // module
  // module.exports
  if (typeof module !== "undefined" && module.exports) {
    console.log('hello i am node server');
    module.exports = definition();
  }

  // if client 'ex: browser'
  // window object
  else {
    console.log('hello i am client');
    context[moduleName] = definition();
  }
})(this, "shoppingCardCustomModule", function () {
  const api = {
    name: " shopping cart ",
    description: " add items to card and get total amount of paymentI",
  };
  return api;
});
