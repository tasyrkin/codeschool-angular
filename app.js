(function() {
  
  var app = angular.module("store", []);
  
  app.controller("StoreController", function(){
    this.products = gems; 
  });

  app.controller("PanelController", function(){

    this.tab = 1;

    this.setTab = function(tabToSet){
      this.tab = tabToSet;
    };

    this.isTabSet = function(tabToCheck) {
      return this.tab === tabToCheck;
    }
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "Dodecahedron is a very good thing!",
      canPurchase: true,
      soldOut: false,
      reviews : [
        {
          stars : "5",
          body  : "This product is awesome",
          author: "test@example.com"
        },
        {
          stars : "3",
          body  : "This product is good, but my friends did not like it",
          author: "manyfriends@example.com"
        }
      ]
    },
    {
      name: "Dodecahedron2",
      price: 10.0,
      description: "Dodecahedron2 is much better thing!",
      canPurchase: true,
    }
  ];
})();
