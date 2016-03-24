angular
  .module('crafty-cart')
  .service('CartService',function($http) {
    var url = "https://tiny-tiny.herokuapp.com/collections/crafty-carts";

    function getItems() {
      return $http.get(url)
    }
    function postItem(post) {
      return $http.post(url,post);
    }

    function deleteItem(id) {
      return $http.delete(url + '/' + id);
    }

    return {
    getItems:getItems,
    postItem:postItem,
    deleteItem:deleteItem

    };
  })
