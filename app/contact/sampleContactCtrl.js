'use strict';

app.controller('sampleContactCtrl', [
    'pocRestangularService', 
    '$scope',
    sampleContactCtrl]);

function sampleContactCtrl(pocRestangularService, $scope) {
    //Initializing variables
    var vm = this;
    vm.firstName = '';
    vm.lastName = '';
    vm.email = '';
    vm.phone = '';
    vm.api_key = '';
    var user = {};

    vm.users = [];
    
    //Getting data from the server 
    pocRestangularService.getdata('users?api_key=ewrew@sdfd.com', function (response) {

       
        vm.users = response.data.users;
        //data for line graph
     })  
    // to post data
    vm.save = function () {
        var user = {};
        user.api_key = vm.api_key;
        user.first_name = vm.firstName;
        user.last_name = vm.lastName;
        user.email = vm.email;
        user.phone = vm.phone;
        pocRestangularService.postdata('user/add', user, function (response) {

            vm.users.push(response.data.user);
        });

        vm.reset();
    };
    //to delete all the users
    vm.delete = function () {
        pocRestangularService.deletedata('reset', function () {
            delete vm.users;
        })
    }
    // to clear the form
    vm.reset = function () {
        vm.firstName = '';
        vm.lastName = '';
        vm.email = '';
        vm.phone = '';
    };
}



