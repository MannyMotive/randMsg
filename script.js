// Random message generatior project

// I Have decided to use Arrays for the data structure of the messages


// all the diffrent star signs 
const starSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn', 'Aquarius', 'Pisces'];

//positive messages 
const posMessage = ['Today is your lucky day', 'You are amazing', 'Your are shining', 'Good news awaits you'];

// critsism messages
const critMessage = ['watch your back', 'work harder','read more', 'learn to code', 'exersice more'];

console.log('Hi i made it finally');

// Create a function 
const ranGen = (arr) => {

      let ranNum = Math.floor(Math.random()*arr.length);
      console.log(arr[ranNum]);

}

ranGen(starSign);

// const ranPos = () => {
    
// }

// const ranCrit = () => {
    
// }

    