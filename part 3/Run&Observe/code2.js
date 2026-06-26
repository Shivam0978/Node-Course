
                     //##EVENT LOOP SEQUENCE##//

console.log('1. Start of script'); 
// Microtask queue (Promise) 
Promise.resolve().then(() => console.log('2. Microtask 1')); 
// Timer queue 
setTimeout(() => console.log('3. Timer 1'), 0); 
// I/O queue 
const fs = require('fs'); 
fs.readFile('user-details.txt', () => console.log('4. I/O operation')); 
// Check queue 
setImmediate(() => console.log('5. Immediate 1')); 
// Close queue 
process.on('exit', (code) => { 
console.log('6. Exit event'); 
}); 
console.log('7. End of script');


                       //[SOLVE WHICH ORDER WILL BE SEEN AT OUTPUT]



  //my answer 
  /* 
  1 > 2 > 3 > 4 > 5 > 6 > 7    [wrong]
  1 > 7 > 2 > 3 > 5 > 4 > 6   [ microtask will be on first priority then timer]
  {5:20}
  */

  // priority order :-
  /* 
  > timer  (setTimeout / setInterval)
  > pending callbacks
  > poll request (file I/O)
  > check (set immediate)
  > close
  */
