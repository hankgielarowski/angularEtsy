angular
  .module('crafty-cart')
  .controller('CartyCartController', function($scope,$location, CartService) {
    $scope.total = 0;

    CartService.getItems()
    .then(function(data) {
      $scope.listings = data.data;
    });
    CartService.getItems()
      .then(function(data){
        var total = 0;
        data.data.forEach(function(el){
          var parsedPrice = parseFloat(el.price);
          $scope.total += parsedPrice;
        })
      });

    $scope.deleteItem = function(obj){
      console.log(obj);
       var objPlace = $scope.listings.findIndex(function(el){
         return el._id === obj._id
       });
       $scope.total -= obj.price;
       $scope.listings.splice(objPlace,1);
       CartService.deleteItem(obj._id)
     }
})
