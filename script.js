// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the form element
    const searchForm = document.querySelector('.search-form');
  
    // Add an event listener for form submission
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the page from reloading on submit
  
      // Get the user inputs
      const pickupLocation = document.getElementById('pickup-location').value;
      const dropoffLocation = document.getElementById('dropoff-location').value;
      const pickupTime = document.getElementById('pickup-time').value;
  
      // Validate if the fields are filled
      if (!pickupLocation || !dropoffLocation || !pickupTime) {
        alert("Please fill out all the fields.");
        return;
      }
  
      // For now, display the values in a message (this can later trigger a backend request)
      const resultMessage = `
        Pick-up Location: ${pickupLocation}
        Drop-off Location: ${dropoffLocation}
        Pick-up Time: ${pickupTime}
      `;
  
      // Displaying the captured input as an alert for testing
      alert("Search Criteria:\n\n" + resultMessage);
  
      // Future expansion: Send data to the backend to search for available cars
    });
  });
  