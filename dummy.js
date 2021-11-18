
// function printString(string, time, callback){
//     setTimeout(
//       () => {
//         console.log(string)
//         callback()
//       }, 
//       time
//     )
//   }
//   function printAll(){
//     printString("A", 2000, ()=>{
//         printString("B", 7000, ()=>{
//             printString("C", 5000, ()=>{})
//         })
//     })
//   }
//   printAll()

//console.log(Math.floor(Math.random()*100));

function printString(string, time){
    return new Promise((resolve, reject)=>{
        setTimeout(
            () => {
              console.log(string)
              resolve()
            }, 
            time
          )
    })
}

function print(){
    printString("A", 2000)
    .then(()=>{
        return printString("b", 7000)
    })
    .then(()=>{
        return printString("c", 5000)
    })
}

print()