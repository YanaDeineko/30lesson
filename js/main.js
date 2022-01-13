

let list = [
    {productName: 'banana', count: '6', isBuy: false, priceFor1: 5, total: 30},
    {productName: 'apple', count: '10', isBuy: false, priceFor1: 2, total: 20},
    {productName: 'potato', count: '7', isBuy: true, priceFor1: 3, total: 21},
    {productName: 'ice cream', count: '3', isBuy: true, priceFor1: 4, total: 12},
    {productName: 'cake', count: '2', isBuy: false, priceFor1: 14, total: 28},
];


let showProduct = function (){
    list.sort(function (a,b){
        return b.isBuy - a.isBuy;
    });
    let i = 1;
    for (let product of list){
        console.log(`Product${i} ${product.productName}, ${product.count}, ${product.isBuy}, ${product.priceFor1}, ${product.total}`);
        i++;
    }
console.log("\n");
};

let buyProduct = function(Product) {
    let count = 0;
    Product = String(Product);
    for (let i = 0; i < list.length; ++i) {
        if (list[i].productName === Product) {
            count = i;
        }
    }
    if (count === 0) {
        console.log(`You did not buy this product: ${Product}`);
    } else {
        list[count].isBuy = true;
    }
};

let productAdd = function(productAdd) {
    let count = 0;
    for (let i = 0; i < list.length; ++i) {
        if (list[i].productName === productAdd) {
            count = i;
        }
    }

    if (count === 0) {
        list[list.length - 1] = {
            productName: productAdd,
            count: '1',
        }
    } else {
        list[count].count = Number(list[count].count);
        list[count].count += 1;
    }
};

let totalSum = function (){
    let sum = 0;
    for (let info of list){
        sum += info.total;
    }
    return sum;
};

showProduct(list);
buyProduct('cake');
showProduct(list);
productAdd('ice cream');
showProduct(list);
let sum = totalSum();
console.log(`Total price is: ${sum}`);


