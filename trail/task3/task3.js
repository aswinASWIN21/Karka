// task1
function sayhello(){
    console.log("Hello, World!" )
}
sayhello()

// task2
function add(a,b){
    console.log(a+b)
}
add(10,10)

// task3
function mul(x,y){
    let c = x*y
    return c
}
total = mul(10,10)
console.log(total)

// task4
function mul(a,b){
console.log(a*b)
}
mul(10,10)

// task5
function div(a,b){
console.log(a/b)
}
div(10,10)

// task6

function factorial(n) {
  if (n === 0) {
    return 1
  } else if (n < 0) {
    return "Factorial is not defined for negative numbers";
  } else {
    let result = 1
    for (let i = 1; i <= n; i++) {
      result *= i
    }
    return result
  }
}

console.log(factorial(5)) 
console.log(factorial(0)) 
console.log(factorial(3))
console.log(factorial(-2))
// task7
let a = 20
let total = a**2
console.log(total)
