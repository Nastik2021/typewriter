 const sentence = "hello there from lighthouse labs";
let delay = 0      //to be able to increment delay by 50
let tracker = 0    // to be able to loop through the sentence and get the number of characters 


for (const char of sentence) {
  setTimeout( () => {
    process.stdout.write(char);
    tracker++
    if (tracker == sentence.length) {
      console.log('')
    }
  }, delay +=50)
} 


// a different way to do this is to have 2 setTimeouts

/*

const sentence = "hello there from lighthouse labs";
let delay = 0    

for (const char of sentence) {
  setTimeout( () => process.stdout.write(char), delay)
  delay +=50
}

setTimeout( () => {
  console.log('')
}, delay); 

*/





