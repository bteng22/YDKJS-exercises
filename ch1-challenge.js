var prompt = require('prompt');
var customer;
var radioShack;

class RadioShack {
  constructor(props) {
    this.phonePrice = props.phonePrice;
    this.accessoryPrice = props.accessoryPrice;
    this.tax = props.tax;
    this.customer = props.customer;
  }

  purchasePhone() {
    customer.calculatePhonePurchase(this.phonePrice, this.tax);
  }

  purchaseAccessory() {
    customer.calculateAccessoryPurchase(this.accessoryPrice, this.tax);
  }

  makePurchase() {
    this.purchasePhone();
    if(customer.isTotalPurchaseLessThanThreshold()) {
      this.purchaseAccessory();
    }
  }
}

class Customer {
  constructor(props) {
    this.spendingThreshold = props.spendingThreshold;
    this.bankBalance = props.bankBalance;
    this.totalPurchase = props.totalPurchase;
  }

  checkBalance() {
    let totalPurchase = Math.round(this.totalPurchase * 100) / 100;
    let bankBalance = Math.round(this.bankBalance * 100) / 100;
    console.log("Total Purchase: $" + totalPurchase);
    console.log("Bank Balance: $" + bankBalance);
  }

  calculatePhonePurchase(phonePrice, tax) {
    debugger;
    let totalCost = phonePrice * (1+tax)
    this.totalPurchase += totalCost;
    this.bankBalance -= totalCost;
  }

  calculateAccessoryPurchase(accessoryPrice, tax) {
    let totalCost = accessoryPrice * (1+tax);
    this.totalPurchase += totalCost;
    this.bankBalance -= totalCost;
  }

  isTotalPurchaseLessThanThreshold() {
    return this.totalPurchase < this.spendingThreshold;
  }
}

prompt.start();
prompt.get(['userBalance'], function(err, result) {
  customer = new Customer({
    bankBalance: result.userBalance,
    totalPurchase: 0,
    spendingThreshold: 200
  });

  radioShack = new RadioShack({
    phonePrice: 99.99,
    accessoryPrice: 9.99,
    tax: 0.1,
    customer: customer
  });

  while(customer.bankBalance > radioShack.phonePrice) {
    radioShack.makePurchase();
  }

  customer.checkBalance();
});



