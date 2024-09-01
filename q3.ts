/* define interface for Monster objects */
interface Monster {
  name : string,
  power: number,
}

/* assign interface/type to the function definition properly */
const q3 = (mons: Monster[]):Monster[] => {
  let avg_pow:number = mons.reduce((prev,mon)=>prev+mon.power,0) / mons.length;
  let mon_arr = mons.filter((mon)=>mon.power >= avg_pow)
  return mon_arr;
};

//test cases
const input1 = [
  { name: "Zombie", power: 10 },
  { name: "Slime", power: 2 },
  { name: "Dragon", power: 15 },
];

console.log(q3(input1));

export default q3;
