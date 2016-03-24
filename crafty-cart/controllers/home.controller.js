angular
  .module('crafty-cart')
  .controller('HomeController', function($scope, $location, ApiEtsyService, $routeParams, CartService ) {

  ApiEtsyService.getActiveListings()
    .then(function(data){
      $scope.listings = data.data.results;

    })

    if($routeParams.productId) {
    ApiEtsyService.showListing($routeParams.productId).then(function (data) {
      console.log('mah data', data);
      $scope.product = data.data.results[0]
    })
  }
  $scope.addToCart = function(post){
     CartService.postItem(post)
       .then(function(data) {
         console.log("UAU",data)
       })
   }
  })
