var abc=angular.module("myApp.controllers", ["ngRoute"]);
                        abc.config(function($routeProvider){
                        $routeProvider
                        .when("/",{templateUrl:"home.html"})
                        .when("/home",{templateUrl:"home.html ",controller : "homeController"})
                        .when("/products",{templateUrl:"products.html"})
                        .when("/service",{templateUrl:"service.html"})
                        .when("/entertainment",{templateUrl:"entertainment.html"})
                        .when("/contact",{templateUrl:"contact.html"})
               
                     });
                     

