function greet(){
    console.log("Welcome to our site")

};
let data=[{}];
let createUser= new Promise((resolve,reject)=>{
    if(data){
        setTimeout(()=>{resolve("user successfully created")},5000);
        
    }
    else{
      setTimeout(()=> {reject("User already exixts")},5000);
    }

});

async function createUserAccount(){
    let response=await createUser; //to be resolved or rejected
    console.log({response});
}
createUserAccount();