document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateExpenses();
});

function calculateExpenses() {
    const incomeInput = document.getElementById('income');
    const expenseInputs = document.getElementsByName('expense');

    let totalExpenses = 0;
    let income = parseFloat(incomeInput.value);

    for (const expense of expenseInputs) {
        const expenseValue = parseFloat(expense.value);
        if (!isNaN(expenseValue)) {
            totalExpenses += expenseValue;
        }
    }

    const balance = income - totalExpenses;

    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('balance').textContent = balance.toFixed(2);
}