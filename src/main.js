let ng = angular.module("ttf_app", []);

ng.controller("controlador", function ($scope, $timeout) {
    const cantidadRow = 13;
    const letrasDefault = "0123456789   ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const nombreDefault = "font";
    const colorFont = "#000000";

    $scope.valor = letrasDefault;
    $scope.rowCount = cantidadRow;
    $scope.fontSize = fontSize;
    $scope.colorFont = colorFont;
    $scope.metaBitmap = {};
    $scope.nombre = nombreDefault;


    $scope.cambio = () => {
        let size = `${$scope.fontSize}px`;
        $scope.styleBoxSize = {
            'font-size': size,
            'width': size,
            'height': size,
            'line-height': size,
            'color': $scope.colorFont
        };
        out = convertArray($scope.valor, $scope.rowCount);
        $scope.arreglos = out;
        
        $scope.metaBitmap = {
            image: $scope.nombre,
            width: size,
            height: size,
            chars: $scope.valor,
            offset: {x: 0, y: 0},
            spacing: {x: 0, y: 0},
            charsPerRow: $scope.rowCount
        }

    }
    $scope.generar = () => {
        html2canvas($("#out"), {
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }).then((canvas) => {
            let a = document.createElement("a");
            a.href = canvas.toDataURL();
            a.download = `${$scope.nombre}.png`;
            a.click();
            document.body.removeChild(a);
        });       
    }    
    $scope.cambio();
});

ng.filter("prettyJSON", () => {
    return (json) => {
        return JSON.stringify(json, null, "    ")
            .replace('{', '\n{')
            .replace('"image"', 'image')
            .replace('"width"', 'width')
            .replace('"height"', 'height')
            .replace('"chars"', 'chars')
            .replace('"offset"', 'offset')
            .replace('"spacing"', 'spacing')
            .replace('"x"', 'x')
            .replace('"y"', 'y')
            .replace('"x"', 'x')
            .replace('"y"', 'y')
            .replace('"charsPerRow"', 'charsPerRow')
            // .replace(/"/g, "'");      
    } 
})

// Cambio de fuente
const init = () => {
    let inputFont = $("#changeFont");
    inputFont.addEventListener("change", changeFont);
}
const changeFont = (e) => {
    let archivo = e.target.files[0];
    let lector = new FileReader();
    lector.onload = (e) => {
            let fontStyle = document.createElement('style');
            fontStyle.appendChild(document.createTextNode("\
            @font-face {\
                font-family: fuente;\
                src: url('"+e.target.result+"');\
            }\
            "));

            document.head.appendChild(fontStyle);
            $("#out").style.fontFamily = "fuente";
    };
    lector.readAsDataURL(archivo);
}

window.addEventListener("load", init, false);