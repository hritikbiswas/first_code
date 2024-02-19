function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; 
}

BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount && amount > 0) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
        console.log("Insufficient funds or invalid amount.");
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};

function getTotalBalance(accounts) {
    let totalBalance = 0;
    accounts.forEach(function(account) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    });
    return totalBalance;
}

const account1 = new BankAccount(123456, "John Doe", "Savings", 1000);
const account2 = new BankAccount(789012, "Jane Smith", "Checking", 5000);

account1.deposit(500);
account1.checkBalance();
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.checkBalance();
account2.withdraw(2000);
account2.checkBalance();

console.log("Account 1 active status:", account1.isActive());
console.log("Account 2 active status:", account2.isActive());

const allAccounts = [account1, account2];
console.log("Total balance of all active accounts:", getTotalBalance(allAccounts));
