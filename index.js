// Code your solutions in this file
function writeCards( namesArray, event) {
    let writeCards = []
    for (let i = 0; i < namesArray.length; i++) {
        writeCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return writeCards
}
   
function countDown(countdown) {
    while (countdown > 0) {
      console.log(countdown);
      countdown -= 1;
    }
      console.log(countdown);
 }

