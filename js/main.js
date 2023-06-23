
const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elPaymentPlanPrice = document.querySelectorAll('.payment-plan-price')

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener( 'change', function (){
    const period = elPaymentPeriodRadio.value;

    if (period === 'annual') {
      elPaymentPlanPrice.forEach( function(elPrice){
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
      });
    } else{
      elPaymentPlanPrice.forEach( function(elPrice){
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
      });
    }
  });
});