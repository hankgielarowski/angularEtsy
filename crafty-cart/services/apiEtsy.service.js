angular
  .module('crafty-cart')
  .service('ApiEtsyService', function($http,$q){

    var key = '111a6cmzqx4lq7zf4dnm4bmd';
 
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var img = '&includes=MainImage';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + img);


   function getActiveListings() {
     return $http.get(cors + url);
   }


  function showListing(id) {
    return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key='+ key + img))
  }


  return {
    getActiveListings: getActiveListings,
    showListing: showListing
  }
   });
