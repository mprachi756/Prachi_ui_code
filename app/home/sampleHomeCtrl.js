'use strict';

function sampleCtrl() {
	var vm = this;
    //greeting and welcome msg
	vm.greet = 'Hello!';
	vm.msg = 'Welcome to the sample application';
}


app.controller('sampleCtrl', [sampleCtrl]);