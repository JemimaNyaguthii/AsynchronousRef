
// let success =true;
// // promises takes in arguments which are callback
// let promise =new Promise((resolve,reject)=>{
//     if(success){
//         resolve("I have a job");
//     }
//     else{
//         reject("I do not have a job");
//     }
// });
// console.log({promise});
// promise.then(()=>{
//     console.log("I will pay all debts");

// })
// promise.catch(()=>{
//     console.log("I will apply again after three months");
// })
// promise.finally(()=>{
//     console.log("I will make my family proud");
// })


let promise = new Promise( (resolve, reject) => {
    let momIsHappy = false; 
    /* This is an arbitrary variable and is NOT part of the Promise */
    if (momIsHappy){
        const phone = {
            type: 'IOS',
            color: 'Sea-Blue'
        }
    }
    
    //This condition is considered successful, hence invoke resolve()
    resolve(phone);
    if (!momIsHappy)
    //This condition is considered NOT successful, hence invoke reject()
    reject('Mum is not happy!');
    })
    promise.then(()=>{
        console.log("The phone is an iPhone 13 Pro in Sea-Blue");
        
        //define the resolve() function, in other words, what to do when the promise is successful.
        })
        .catch(()=>{
        console.log("I will try and make mom happy next time");
        
        //define the reject() function, in other words, what to do when the promise is NOT successful.
        
        })