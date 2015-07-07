const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;

var bank_balance = 303.91;
var purchase_amount = 0;

var purchasePhone = () => {
  purchase_amount += PHONE_PRICE;
  bank_balance -= PHONE_PRICE;
}

var purchaseAccessory = () => {
  purchase_amount += ACCESSORY_PRICE;
  bank_balance -= ACCESSORY_PRICE;
}

var isAmountLessThanThreshold = () => {
  return purchase_amount < SPENDING_THRESHOLD;
}

while(bank_balance > PHONE_PRICE) {
  purchasePhone();
  if(isAmountLessThanThreshold()) {
    purchaseAccessory();
  }
}

console.log(purchase_amount);
console.log(bank_balance);
