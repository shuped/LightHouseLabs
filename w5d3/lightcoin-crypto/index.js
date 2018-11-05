class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Withdrawal extends Transaction{

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('dude-guy');

const t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(myAccount, 9.99);
t2.commit();
console.log('Transaction 2:', t2);

const t3 = new Deposit(myAccount, 120.00);
t3.commit()
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);
