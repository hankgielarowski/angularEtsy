angular
  .module('crafty-cart',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: "templates/index.html",
        controller: "HomeController"
})
      .when('/details/:productId', {
        templateUrl: "templates/details.html",
        controller: "HomeController"
      })
      .when('/shoppingCart', {
        templateUrl: "templates/cart.html",
        controller: "CartyCartController"
      })
      })
