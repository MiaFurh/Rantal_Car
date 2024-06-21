function rentalCarCost(d) {
  let cost = 40*d;
if 
 (d >= 3 && d < 7) 
 {(cost = cost-20);
    return cost} 
else {
if 
(d>=7) 
{(cost = cost-50);
    return cost}
}
return cost;
};
console.log(rentalCarCost (7, + 'cost'))