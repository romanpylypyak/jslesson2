// for (let i = 100; i >= 1; i--) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// let j = 100;
// while (j > 100) {
//     console.log(j);
//     j--;
// }


// let k = 100;
// do {
//     console.log(k);
//     k--;
// } while (k > 100)

// let isCorrect = false;
// let num;
// while (!isCorrect) {
//     num = parseFloat(prompt('Enter a number'));
//     isCorrect = !Number.isNaN(num);
// }


// let num;
// do {
//     num = parseFloat(prompt('Enter a number!'));    
// } while (Number.isNaN(num))


let productNames = [];
productNames.push('Tesla X'); // 0
productNames.push('Chevrolet Corvette'); // 1
productNames.push('Toyota Corolla'); // 2
productNames.unshift('Ford F150'); // 0
productNames[10] = 'Bugatti Veyron'; // 10

// document.write(productNames);

let productPrices = [10000, 20000, 30000];

// for (let i = 0; i < productNames.length; i++) {
//     if (productNames[i] === undefined) {
//         continue;
//     }
//     prn(i+1 + ': ' + productNames[i]);
// }
// productNames.forEach(prn);

function prn(val) {
    document.write(val + '<br>');
}

// // Regular anonymous function
// productNames.forEach(function(el, idx){
//     prn(idx + 1 + ': ' + el);
// });

// // Arrow function
// productNames.forEach( (el, idx) => prn(idx + 1 + ' : ' + el) );

// let indexer = 1;
// productNames.forEach( el => prn(indexer++ + ' : ' + el) );


// productNames
//   .filter( el => el !== undefined )
//   .forEach( (el, idx) => prn(idx + 1 + ' : ' + el) );

const sortedProducts = productNames.sort();
prn(sortedProducts);

const nums = [100, 99, 42, 1, 12, 2, 23, 4];
prn(nums.sort( (a, b) => b - a ));

