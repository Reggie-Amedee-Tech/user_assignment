class user {
    constructor(userName) {
        this.name = userName
        this.balance = 0
    }
    makeDeposits(amount) {
        this.balance += amount
        return this
    }
    makeWithdrawel(amount) {
        this.balance -= amount
        return this
    }
    displayBalance() {
        return this.balance
        return this
    }
    transferMoney(otherUser, amount) {
        this.balance = this.balance - amount
        otherUser.balance = otherUser.balance + amount
    }
}

const reggie = new user('Reginald Jean Amedee')
const moneifa = new user('Moneifa Cherice Nance')
const betty = new user('Betty Noel')

reggie.makeDeposits(1000).makeDeposits(1000).makeDeposits(1000)

console.log(reggie.balance)
/*
reggie.makeDeposits(1000)
reggie.makeDeposits(1000)
reggie.makeDeposits(1000)
reggie.makeWithdrawel(500)
reggie.displayBalance()
*/
moneifa.makeDeposits(2000)
moneifa.makeDeposits(2000)
moneifa.makeWithdrawel(200)
moneifa.makeWithdrawel(200)
moneifa.displayBalance()

betty.makeDeposits(5000)
betty.makeWithdrawel(300)
betty.makeWithdrawel(500)
betty.makeWithdrawel(200)
betty.displayBalance()

reggie.transferMoney(betty, 1000)

console.log(betty)
