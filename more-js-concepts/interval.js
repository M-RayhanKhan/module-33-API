// console.log(1);
// console.log(2);
// setTimeout(()=>{
// console.log('lazy logged');
// }, 2000)
// console.log(4);

// function doSomething(){
//     console.log(3);
// }
let num = 0;
clockId = setInterval(() => {
    num++
    if (num > 8) {
        clearInterval(clockId)
    }
    console.log(num);
},1000)