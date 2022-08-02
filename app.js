document.getElementById('loan-form').addEventListener('submit',function(e){
    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 1500);

    e.preventDefault();

});

function calculateResults(){
    console.log("Calculating...");

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const repay = document.getElementById('repay');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(repay.value)*12;
    
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)- principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }else{
        alert("Enter all fields");
        document.getElementById('loading').style.display = 'none';
    }

}
