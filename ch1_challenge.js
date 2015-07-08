class RadioShack {
  constructor(props) {
    this.phone_price = props.phone_price;
    this.accessory_price = props.accessory_price;
    this.customer = props.customer;
  }

  purchasePhone() {
    customer.calculatePhonePurchase(this.phone_price);
  }

  purchaseAccessory() {
    customer.calculateAccessoryPurchase(this.accessory_price);
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
    this.spending_threshold = props.spending_threshold;
    this.bank_balance = props.bank_balance;
    this.total_purchase = props.total_purchase;
  }

  checkBalance() {
    console.log(this.total_purchase);
    console.log(this.bank_balance);
  }

  calculatePhonePurchase(phone_price) {
    this.total_purchase += phone_price;
    this.bank_balance -= phone_price;
  }

  calculateAccessoryPurchase(accessory_price) {
    this.total_purchase += accessory_price;
    this.bank_balance -= accessory_price;
  }

  isTotalPurchaseLessThanThreshold() {
    return this.total_purchase < this.spending_threshold;
  }
}

var customer = new Customer({
  bank_balance: 303.91,
  total_purchase: 0,
  spending_threshold: 200
});

var radioShack = new RadioShack({
  phone_price: 99.99,
  accessory_price: 9.99,
  customer: customer
});

while(customer.bank_balance > radioShack.phone_price) {
  radioShack.makePurchase();
}

customer.checkBalance();
