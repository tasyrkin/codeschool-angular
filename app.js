(function() {
  
  var app = angular.module("store", []);
  
  app.controller("StoreController", function(){
    this.products = gems; 
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "Dodecahedron is a very good thing!",
      canPurchase: true,
      soldOut: false
    },
    {
      name: "Dodecahedron2",
      price: 10.0,
      description: "Dodecahedron2 is much better thing!",
      canPurchase: true,
    }
  ];
})();
