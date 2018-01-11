angular.module('controller', ['finance'])
.controller('AngularController', ['currencyConverter', function AngularController(currencyConverter ) {
    this.check = false;
    this.text = "yes, true";
    this.numbers = currencyConverter.numbers;
}])