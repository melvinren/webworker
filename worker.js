
console.log(this)

// const xhr = new XMLHttpRequest();
// xhr.addEventListener("load", function(e){
//     console.log(this);
// })
// xhr.open("get", "/api/data")
// xhr.send(null);
// console.log(222222)

// try{
//     importScripts("foo.js") // 同步加载
//     const foo = new Foo()
//     console.log(foo.add(1,2));
// } catch(e){
//     console.log(e);
// }
// console.log("1111111")

// sub worker
const subworker = new Worker("subworker.js");
subworker.addEventListener('message', function(e){
    console.log("sub worker")
    console.log(e.data)
})
subworker.postMessage(Math.random())

addEventListener('message', function(e){
    // read LS， 不能读！！！
    const res = localStorage.getItem("result");

    console.log(res)
    const result = e.data[0] * e.data[1];
    if(isNaN(result)){
        postMessage("please write two numbers")
    } else {
        postMessage("Result: "+ result)
    }
})