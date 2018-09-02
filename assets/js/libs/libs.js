// const multi = (string,n) => {
//     let cantidadLetras = Math.ceil(string.length/n);
//     return [...Array(cantidadLetras)].map((nulo, Y) => {
//         return [...Array(n)].map((nulo, X) => {
//             return (typeof(string[X+(Y*n)]) != "undefined") ? string[X+(Y*n)] : ' ';
//         });
//     });
// };

// const multi = (d, n, nr = []) => {
//     if (d.length - 1 < n) {
//         nr[nr.length] = d;
//         return nr
//     }
//     nr[nr.length] = d.slice(0, n);
//     return multi(d.slice(n, d.length), n, nr);
// }

const multi = (abc, n) => {
    if (n < 1) n = 1
    if (abc.length < 1) return ''
    return [abc.slice(0, n).split(''), ...multi(abc.slice(n), n)]
}

const convertArray = (x, n) => multi(Array.from(x), n);

const $ = (x) => document.querySelector(x);
