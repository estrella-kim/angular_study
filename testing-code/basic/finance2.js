angular.module('finance', [])
.factory('currencyConverter', function () {
    var decimal = [1,2,3,4,5].map( function( arr) { return arr * 10;})
    return {
        numbers: decimal
    }
})