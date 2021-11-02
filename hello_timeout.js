// print these words 3 seconds after the file is run
setTimeout ( () => {console.log('4311o', 'th3r3', 'w0r1d')}, 3000);



//print each word, one at the time, with 1 second delay
let words = ['4311o', 'th3r3', 'w0r1d']
words.forEach((word, i) => { 
  setTimeout ( () => {console.log(word)}, i * 1000);
}) 

