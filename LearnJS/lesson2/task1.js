"use strict";

function add(x, y) {
    return ( x + y );
}

function mul(x, y) {
    return ( x * y );
}

function idf(x) {
    return function() {
        return x;
    };
}

function adf(x) {
    return function(y) {
        x + y;
    }
}


function applyf(binary) {
    return function(x) {
        return function(y) {
            return binary(x) (y);
        }
    }
}

console.log( add(2, 5) );
console.log( mul(2, 2) );
console.log( idf(5) );
console.log( adf(4) );
console.log( applyf(5, 6) );
