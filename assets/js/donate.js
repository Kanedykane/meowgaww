/**
* Template Name: Yummy
* Updated: Jan 30 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', function () {
  const donationAmountInput = document.getElementById('donation-amount');
  const donationOptionRadios = document.querySelectorAll('input[name="donation-option"]');
  const otherAmountInput = document.getElementById('other-amount');

  donationOptionRadios.forEach(function (radio) {
      radio.addEventListener('change', function () {
          if (radio.value === 'other') {
              otherAmountInput.parentElement.parentElement.style.display = 'block';
              donationAmountInput.value = ''; // Reset donation amount
          } else {
              otherAmountInput.parentElement.parentElement.style.display = 'none';
              donationAmountInput.value = radio.value;
          }
      });
  });

  document.getElementById('donation-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission for now
      // You can handle form submission here, e.g., send donation data to the server
      const donationAmount = otherAmountInput.value !== '' ? otherAmountInput.value : donationAmountInput.value;
      console.log('Donation Amount:', donationAmount);
      // Add your donation processing logic here
  });
});