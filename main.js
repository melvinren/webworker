const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result")

localStorage.setItem("result", result.value)

if(window.Worker){
    const myworker = new Worker("worker.js");
    first.addEventListener('change', function(){
        myworker.postMessage([first.value, second.value])
    })
    second.addEventListener('change', function(){
        myworker.postMessage([first.value, second.value])
    })
    myworker.addEventListener('message', function(e){
        result.textContent = e.data; 
        localStorage.setItem("result", e.data)
    })
    myworker.addEventListener('error', function(e){
        e.preventDefault()
        console.log(e)
        console.log(e.message, e.lineno, e.filename)
    })
} else {
    console.log('Your browser doesn\'t support web workers.')
}