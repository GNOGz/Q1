/* define interface for Hero and Item objects */
interface Hero {
  items: string[];
  gold: number;
}
interface Item {
  item: string;
  price: number;
}
/* assign interface/type to the function definition properly */
const q4 = (hero: Hero, shopItems: Item[]):Hero => {
  for (let i = 0; i < shopItems.length; i++){
    if (hero.gold >= shopItems[i].price){
      hero.gold -= shopItems[i].price
      hero.items.push(shopItems[i].item)
    }
    else{
      return hero;
    }
  }
  return hero;

};

const hero1: Hero = {
  items: ["sword", "potion"],
  gold: 100,
};

const hero2: Hero = {
  items: ["knife"],
  gold: 100,
};

const shopItems1 = [
  {
    item: "armor",
    price: 10,
  },
  {
    item: "boot",
    price: 5,
  },
  {
    item: "gun",
    price: 50,
  },
];

const shopItems2 = [
  {
    item: "helmet",
    price: 70,
  },
  {
    item: "boot",
    price: 40,
  },
  {
    item: "magic wand",
    price: 20,
  },
];

console.log(q4(hero1, shopItems1));
console.log(q4(hero2, shopItems2));

export default q4;
