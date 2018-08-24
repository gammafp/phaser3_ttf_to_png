let ng = angular.module("ttf_app", []);

ng.controller("controlador", function ($scope) {
    let cantidadRow = 10;
    const letrasDefault = "abcdefghijklmnñ  opqrstuvwkyz";
    $scope.valor = letrasDefault;

    out = multi(letrasDefault, cantidadRow);
    console.log(out);
    $scope.arreglos = out;
});