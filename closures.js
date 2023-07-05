let greet =()=>{
    let name="Jem";
    let displayName=()=>{
        return "Hello my name is ${name}";
    }
    return displayName;
}

let talk =greet();
// console.log({talk});
// console.log(talk());

let nums=(num)=>{
    let add=(digit)=>{
        return digit +num
    }
    return add;
}
let addition=nums(45);
console.log({addition});
console.log(addition(20));

function human(name){
    function sayHi(){
        console.log("Hi I am ${name} ")
    }
    function sayHowYouFeel(){
        cons
    }
    sayHi()
}