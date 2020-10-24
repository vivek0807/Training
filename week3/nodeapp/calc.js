function add(a, b) {
    return a + b;
}

module.exports=add;

/* function sub(a, b) {
    return a - b;
}

/* module.exports.add = add;
module.exports.sub = sub; */
//module.exports = { add: add, sub: sub }; */

/* const obj={}
obj.a=10;
obj=b=20
const obj1={a:10, b: 20} */

/* const sub = function (a, b) {
    return a - b;
}
const prod = (a, b) => a * b;

function util(callback, a, b) {
    console.log(callback(a,b))
}
util(add,10,20)
util(sub,10,20)
util(function (a, b) {
    return a * b;
}, 10, 20)
util((a, b) => a / b, 100, 20) */


/* const arr = [1, 2, 3, 4, 5];
const a=arr.map(val=> val * val);
console.log(a)

//filer - odd nos
console.log(arr.filter(item=>item%2))

//reduce - sum of all array entries
console.log(arr.reduce((sum, val) => sum + val, 0))

//find - first even no
console.log(arr.find(data => data % 2 == 0))

//some - Check if 5 exists in the array
console.log(arr.some(data => data == 5))

//every - Check if all elements are < 10
console.log(arr.every(data => data < 10))

//foreach - Print all array items
arr.forEach(val => console.log(val))

console.log(arr.includes(5))

 */