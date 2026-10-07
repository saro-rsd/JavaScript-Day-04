let age;
{
    var name = "Johns";
    age = 16;
}
console.log(name);
console.log(age);

let custormerList = ["Saman", "Nimal", "Kamal"]
console.log(custormerList);

custormerList = "Sunil";
console.log(custormerList);

const custormerList2 = ["Saman", "Nimal", "Kamal"]
console.log(custormerList2);

custormerList2.push = "Sunil";
console.log(custormerList2);

custormerList2.push = 65;
console.log(custormerList2);

custormerList.push = true;
console.log(custormerList2);

custormerList2.push = false;
console.log(custormerList2);


const numbers = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);
console.log(numbers);
numbers.reverse();
console.log(numbers);

custormerList2.reverse();
console.log(custormerList2);


const productList = [
    { name: "Bun", inStock: true, price: 100 },
    { name: "Milk", inStock: false, price: 200 },
    { name: "Egg", inStock: true, price: 300 },
    { name: "Bread", inStock: false, price: 400 },
    { name: "butter", inStock: true, price: 500 },
];

console.log(productList);

let inStockProducts=productList.filter(
    function (product){
        return product.inStock==true;
    }
);

console.log(inStockProducts);

let notInStockProducts=productList.filter(
    function(product){
        return product.inStock==false;
    }
);

console.log(notInStockProducts);



