// Get references to the buttons
const buttons = document.querySelectorAll('.money-btn');
const otherAmountButton = document.getElementById('otherAmountButton');
// tracks the donation amount
let donationAmount;

// Add click event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    // Prevent the default behavior (page refresh)
    event.preventDefault();

    // Remove the "clicked" class from all buttons
    buttons.forEach(btn => btn.classList.remove('clicked'));

    // Add the "clicked" class to the clicked button
    button.classList.add('clicked');
    const amount = button.innerHTML.substring(1);
    donationAmount = amount;
    // dynamically changes the value of the donation amount field
    document.getElementById('donation-amount').innerText = '₱' + donationAmount;
  });
});

// Add click event listener to the "Other Amount" button
otherAmountButton.addEventListener('click', function(event) {
  // Prevent the default behavior (page refresh)
  event.preventDefault();

  // Remove the "clicked" class from all buttons
  buttons.forEach(button => button.classList.remove('clicked'));
});

document.getElementById("otherAmountButton").addEventListener("click", function(event) {
  var inputFieldContainer = document.getElementById("inputFieldContainer");
  inputFieldContainer.style.display = "block";
  event.preventDefault(); // Prevent the default form submission behavior
  document.getElementById('text1000').style.display = 'none';
  document.getElementById('text750').style.display = 'none';
  document.getElementById('text500').style.display = 'none';
});

// tracks the donation amount for 'other-amount' field
document.getElementById("inputField").addEventListener("keyup", function(event) {
    const currentKeys = document.querySelector('#inputField');
    let currentKeysUp = '';
    currentKeysUp = currentKeysUp ? currentKeysUp + currentKeys : currentKeys;
    donationAmount = currentKeysUp.value;
    // dynamically changes the value of the donation amount field
    document.getElementById('donation-amount').innerText = '₱' + donationAmount;
});



// Add event listeners for predefined amount buttons
document.getElementById("button1000").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior (page refresh)
  document.getElementById('text1000').style.display = 'block';
  document.getElementById('text750').style.display = 'none';
  document.getElementById('text500').style.display = 'none';

  // Hide the input field
  document.getElementById('inputFieldContainer').style.display = 'none';
});

document.getElementById("button750").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior (page refresh)
    document.getElementById('text750').style.display = 'block';
    document.getElementById('text1000').style.display = 'none';
    document.getElementById('text500').style.display = 'none';

    // Hide the input field
    document.getElementById('inputFieldContainer').style.display = 'none';
});

document.getElementById("button500").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior (page refresh)
  document.getElementById('text1000').style.display = 'none';
  document.getElementById('text750').style.display = 'none';
  document.getElementById('text500').style.display = 'block';

  // Hide the input field
  document.getElementById('inputFieldContainer').style.display = 'none';
});

// window.onload = function() {
//       fetch('https://restcountries.eu/rest/v2/all')
//         .then(response => response.json())
//         .then(data => {
//           const countrySelect = document.getElementById('country');
//           data.forEach(country => {
//             const option = document.createElement('option');
//             option.value = country.name;
//             option.text = country.name;
//             countrySelect.add(option);
//         });
//     });
// };

// document.getElementById("DonateButton").addEventListener("click", async function() {
//     const selectCountry = document.getElementById('country');

//     try {
//         const response = await fetch('https://restcountries.com/v2/all');
//         const data = await response.json();

//         // Populate select input with countries fetched from the API
//         data.forEach(country => {
//             const option = document.createElement('option');
//             option.value = country.name;
//             option.textContent = country.name;
//             selectCountry.appendChild(option);
//         });
//     } catch (error) {
//         console.error('Error fetching countries:', error);
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
  let currentSection = 'donate1'; // Keep track of the current section

  function hideAllSections() {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  }

  function showSection(sectionId) {
    hideAllSections();
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'block';
      currentSection = sectionId; // Update current section
    }
  }

  hideAllSections();
  showSection('donate1');

  document.getElementById('DonateButton').addEventListener('click', function() {
    showSection('donate3');

    const progress2 = document.querySelectorAll('.progress2');
    progress2.forEach(function(element) {
        element.classList.add('current-item');
    });
  });

  // document.getElementById('myinfoButton').addEventListener('click', function() {
  //   showSection('donate3');
  // });

  document.getElementById('paymentButton').addEventListener('click', function() {
    showSection('donate4');

    const progress3 = document.querySelectorAll('.progress3');
    progress3.forEach(function(element) {
        element.classList.add('current-item');
    });
  });

  document.getElementById('confirmButton').addEventListener('click', function() {
    showSection('donate5');
  });

  // Event listener for the Back buttons
  const backButtons = document.querySelectorAll('.back');
      backButtons.forEach(button => {
        button.addEventListener('click', function() {
            // if (currentSection === 'donate2') {
            //     showSection('donate1');
            // } else 
            if (currentSection === 'donate3') {
                showSection('donate1');
                const progress2 = document.querySelectorAll('.progress2');
                  progress2.forEach(function(element) {
                      element.classList.remove('current-item');
                });
            } else if (currentSection === 'donate4') {
                const progress3 = document.querySelectorAll('.progress3');
                  progress3.forEach(function(element) {
                  element.classList.remove('current-item');
                });
                showSection('donate3');
            } else if (currentSection === 'donate5') {
                showSection('donate4');
            }
        });
    });

    document.getElementById('doneButton').addEventListener('click', function() {
    window.location.reload();
  });
});


listenDonation = () => {
  const form = document.querySelector('#donationForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const donor = form.donor.value;
    // const donationType = // do this in the backend and say this is a monetary donation
    const amount = donationAmount;
    const paymentType = form.paymentMethod.value;
    const accountNumber = form.accountNumber.value;
    const accountName = form.accountName.value;
    // const transactionId = // provided by the bank
    const phoneNumber = form.phoneNumber.value;
    console.log(donor);

    try {
      const res = await fetch('/donate', { 
          method: "POST", 
          body: JSON.stringify({ donor, amount, paymentType, accountNumber, accountName, phoneNumber }),
          headers: {'Content-Type': 'application/json'}
      });
      const data = await res.json();
      console.log(data);
      
      // if (data.errors) {
      //     emailError.textContent = data.errors.email;
      //     passwordError.textContent = data.errors.password;
      //     imageDataError.textContent = data.errors.imageData;
      //     console.log(imageDataError, emailError, passwordError);
      // }
      if (data.donation) {
        location.assign('/donate');
      } else {
        location.assign('/500');
      }

    }
    catch (err) {
      location.assign('/500');
    }

  });
}

document.addEventListener('DOMContentLoaded', function() {
    const moneyButtons = document.querySelectorAll('.money-btn');
    const otherAmountButton = document.getElementById('otherAmountButton');
    const inputField = document.getElementById('inputField');
    const donationAmountDisplay = document.getElementById('don-amount');

    moneyButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const amount = this.value;
            displayDonationAmount(amount);
        });
    });

    // event listener for button click
    otherAmountButton.addEventListener('click', function() {
        const customAmount = inputField.value;
        displayDonationAmount(customAmount);
    });

    // event listener for input field change
    inputField.addEventListener('input', function() {
        const customAmount = inputField.value;
        displayDonationAmount(customAmount);
    });

    function displayDonationAmount(amount) {
        donationAmountDisplay.textContent = `${amount} pesos`;
    }
});