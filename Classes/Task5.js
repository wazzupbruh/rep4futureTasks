const declareWinner = (fighter1, fighter2, firstAttacker) => {  
let secondAttacker;
if(firstAttacker === fighter1.name){firstAttacker = fighter1; secondAttacker = fighter2;}
else{firstAttacker = fighter2; secondAttacker = fighter1;}
while(fighter1.health > 0 && fighter2.health > 0){
  secondAttacker.health -= firstAttacker.damagePerAttack;
  if(secondAttacker.health <= 0 ) return firstAttacker.name;
  firstAttacker.health -= secondAttacker.damagePerAttack;
  if(firstAttacker.health <= 0) return secondAttacker.name;}    
}

// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
