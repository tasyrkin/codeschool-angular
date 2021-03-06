(function(){
  var app = angular.module("store-products", []);

  app.directive("productTitle", function(){
    return {
      restrict: "E",
      templateUrl: "product-title.html"
    };
  });

  app.directive("productPanels", function(){
    return {
      restrict: "E",
      templateUrl: "product-panels.html",
      controller: function(){
        this.tab = 1;

        this.setTab = function(tabToSet){
          this.tab = tabToSet;
        };

        this.isTabSet = function(tabToCheck) {
          return this.tab === tabToCheck;
        }
      },
    controllerAs: "panel"
    };
  });
})();
