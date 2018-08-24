let ng = angular.module("ttf_app", []);

ng.controller("controlador", function ($scope) {
    let cantidadRow = 13;
    const letrasDefault = "abcdefghijklmnñ  opqrstuvwkyz";
    $scope.valor = letrasDefault;


    $scope.cambio = () => {
        out = multi($scope.valor, cantidadRow);
        $scope.arreglos = out;
    }

    $scope.cambio();
});