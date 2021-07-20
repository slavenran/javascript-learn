function checkCashRegister(price, cash, cid) {
    const currency = {
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01
    }
  
    // Fun for checking how much money does the register have left in total
    const checkCid = (cid) => cid.reduce((sum, elem) => sum + elem[1], 0);
  
    // Count how much change needs to be given back
    let change = (cash - price).toFixed(2);
  
    let status = {"status": "INSUFFICIENT_FUNDS", "change": []};
  
    // Make a deep copy of cid
    let cidCopy = [];
    for (let i = 0; i < cid.length; i++) {
      cidCopy.push([...cid[i]]);
    }
  
    let i = cidCopy.length-1;
  
    // Loop for money counting
    for (let [k, v] of Object.entries(currency)) {
      if (change / v >= 1 && change > 0) {

        let countChange = v * (Math.floor(change/v));

        // Check if value exceeds the required number
        if (countChange > cidCopy[i][1]) {
          countChange = cidCopy[i][1];
        }

        // Make changes if value is of use
        if (countChange > 0) {
          cidCopy[i][1] -= countChange;
          status["change"].push([k, countChange]);
          change = (change - countChange).toFixed(2);
        }
      }
      i--;
    }
  
    // Check immediately if change condition has been met, after that check if cid is empty
    if(change > 0) {
      status["change"] = [];
    } else {

      status["status"] = "OPEN";
  
      if(checkCid(cidCopy) == 0) {
        status["status"] = "CLOSED";
        status["change"] = cid;
      }
    }
  
    return status;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));