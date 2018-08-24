const multi=(string,n) => {
    let cantidadLetras = Math.ceil(string.length/n);
    return [...Array(cantidadLetras)].map((nulo, Y) => {
        return [...Array(n)].map((nulo, X) => {
            return (typeof(string[X+(Y*n)]) != "undefined") ? string[X+(Y*n)] : ' ';
        });
    });  
};