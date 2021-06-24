//Business logic
function BankAccount(name, initialDeposit, balance) {
    this.userName = name;
    this.firstDeposit = initialDeposit;
}

// adding a deposit
BankAccount.prototype.makeDeposit = function(deposit) {
    this.balance += deposit;
}

//subtracting a withdrawal
BankAccount.prototype.makeWithdrawal = function(withdrawal) {
    this.balance -= withdrawal;
}

//User logic
$(function() {
    $('#submit-new-account').submit(function(event) {
        event.preventDefault();
        let name = $('#user-name').val();
        let initialDeposit = parseInt($('#initial-deposit').val());
        let newBalance = initialDeposit;
        const userAccount = new BankAccount(name, initialDeposit, newBalance);
        console.log(userAccount);
        // $('.new-account').remove();
        $('.balance-here').text(`$${userAccount.balance}`);

        $('#make-deposit').submit(function(event) {
            event.preventDefault();
            let deposit = parseInt($('#current-deposit').val());
            userAccount.makeDeposit(deposit);
            $('.balance-here').text(`$${userAccount.balance}`);
            $('#make-deposit').trigger('reset');
        });

        $('#make-withdrawal').submit(function(event) {
            event.preventDefault();
            let withdrawal = parseInt($('#current-withdrawal').val());
            userAccount.makeWithdrawal(withdrawal);
            $('.balance-here').text(`$${userAccount.balance}`);
            $('#make-withdrawl').trigger('reset');
        });
    });
});
