/* assign interface/type to the function definition properly */
const q1 = (m:number, n:number):number => {
  let sum = 0;
   for(let i = m ; i <= n ; i++){
    if(i%2 == 0){
      sum += i;
    }
   }
   return sum;
};


console.log(q1(1, 5));
console.log(q1(10, 20));

export default q1;
