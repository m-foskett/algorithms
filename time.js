
// async function getData(){
//     return await Promise.resolve('Hello');
// }
// const data = getData();
// console.log(data)
// setTimeout(function() {
//     console.log(data);
// }, 0)

(function(){
    var a = b =5;
})();
console.log(b)

// var arr = {}
// const alert = (i) => {
//     console.log(i)
// }

// for(var i = 0; i < 3; i++){
//     setTimeout(function() { alert(i);}, 1000 + i);
// }