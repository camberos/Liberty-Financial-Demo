/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Loads backstretch background
$.backstretch("img/background.jpg");

// Initialization of Angular Module
angular.module('myApp', []).controller('userCtrl', function($scope, $http) {

// Declaration of scopes with initial values
$scope.showModel0 = false;
$scope.showModel1 = false;
$scope.showModel2 = true;
$scope.showModel3 = true;
$scope.showModel4 = true;

$scope.showTabs='registration';
$scope.showValidationMessages = false;
$scope.loading = false ;

// Declares Scope for Registration Form JSON format
$scope.form = {
        userName: '',
        password : '',
        passwordRepeat: '',
        email: '',
        name: '',
        address: '',
        mobileNumber: '',
        accountType: '',
        gender: ''
    };

// Default Values to mock login
$scope.mylogin = {
        userNameLogin: 'admin',
        userPassLogin: 'pass',
        userName: 'George Lopez',
        userEmail: 'george@myemail.com.au',
        userAccountType: 'Personal'
};
// Submit Function for registration, includes validation 
$scope.submitRegistration = function(formValid) {
   if(formValid) {
        $scope.loading = true ; 
//         setTimeout(
//                 function(){ 
//                 }, 3000);
        $scope.showModel0 = true;
        $scope.showModel1 = true;
        $scope.showModel2 = true;
        $scope.showModel3 = false;
   }
   else {
      alert("Complete the Form");
   }
};

// Submit function for the login form, includes validation
$scope.submitLogin = function(formValid) {
    if(formValid) {
        $scope.loading = true ; 
//         setTimeout(
//                 function(){ 
//                     alert("Done Login"); 
//                 }, 3000);
        if($scope.mylogin.userNameLogin == $scope.form.userNameLogin && $scope.mylogin.userPassLogin == $scope.form.userPassLogin)  {
            $scope.showModel0 = true;
            $scope.showModel1 = true;
            $scope.showModel2 = true;
            $scope.showModel3 = true;
            $scope.showModel4 = false;
        }
        else {
            alert("User/Password Invalid");
            $scope.loading = false ; 
        }

        
   }
   else {
      alert("Missing Fields");
   }
};

// Logic to change tabs Registration/Login
$scope.changeTabs = function() {
     if ($scope.showTabs==='registration'){
         $scope.showModel1 = false;
         $scope.showModel2 = true;
     }
     if ($scope.showTabs==='login'){
         $scope.showModel1 = true;
         $scope.showModel2 = false;
     }
};

$scope.reloadRoute = function() {
    alert('Return Home page');
};

});