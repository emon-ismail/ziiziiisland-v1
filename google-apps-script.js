// Booking Form Submission Logic for Google Sheets (Zii Zii Island)

function attachBookingHandler() {
  var bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    if (bookingForm._handlerAttached) return; // Prevent double-attachment
    bookingForm._handlerAttached = true;
    console.log("Booking form handler attached");
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log("Booking form submitted");
      var form = e.target;
      var data = {
        name: form.querySelector('[name="name"]').value,
        phone: form.querySelector('[name="phone"]').value,
        date: form.querySelector('[name="date"]').value,
        time: form.querySelector('[name="time"]').value,
        branch: form.querySelector('[name="branch"]').value,
        package: form.querySelector('[name="package"]').value,
        people: form.querySelector('[name="people"]').value,
        requests: form.querySelector('[name="requests"]').value,
        timestamp: new Date().toISOString()
      };
      console.log("Data to send:", data);
      // Show loading state
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
      // Send to Google Sheets
      fetch('https://script.google.com/macros/s/AKfycbyAoSsguZaM27vMMNmfTevJm4jWu4WjKumSriJRVAV5P835XsoqkDH9mJ9acpNvLoI/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(() => {
        // User-friendly notification
        if (window.bootstrap) {
          var toast = document.createElement('div');
          toast.className = 'toast align-items-center text-bg-success border-0 show position-fixed top-0 end-0 m-4';
          toast.role = 'alert';
          toast.innerHTML = '<div class="d-flex"><div class="toast-body">Thank you! Your booking has been submitted successfully. We will contact you soon.</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>';
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 5000);
        } else {
          alert('Thank you! Your booking has been submitted successfully. We will contact you soon.');
        }
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        if (window.bootstrap) {
          var toast = document.createElement('div');
          toast.className = 'toast align-items-center text-bg-danger border-0 show position-fixed top-0 end-0 m-4';
          toast.role = 'alert';
          toast.innerHTML = '<div class="d-flex"><div class="toast-body">Sorry, there was an error submitting your booking. Please try again or call us directly.</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>';
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 5000);
        } else {
          alert('Sorry, there was an error submitting your booking. Please try again or call us directly.');
        }
      })
      .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
    });
  } else {
    console.error("Booking form not found in DOM.");
  }
}

document.addEventListener('DOMContentLoaded', attachBookingHandler);
setTimeout(attachBookingHandler, 1500); 