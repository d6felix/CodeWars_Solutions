var countChange = function(money, coins) {
    let currentMoney = 0, combinations = [], currentCombination = "", index = 0;
    count(currentMoney, currentCombination, money, coins, index, combinations);
    return combinations.length;
  }
  
  let count = function(currentMoney, currentCombination, target, coins, index, combinations) {
    for (let i = index; i < coins.length; i++) {   
      if (currentMoney + coins[i] < target) {
        count(currentMoney + coins[i], currentCombination + coins[i] + " ", target, coins, i, combinations);
      } else if (currentMoney + coins[i] == target) {
        currentCombination += coins[i];
        if (combinations.findIndex(elem => elem === currentCombination) === -1) {
          combinations.push(currentCombination.slice());
        }
      }
    }
  }