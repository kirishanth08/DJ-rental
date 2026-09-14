/**
 * SonicDrop - Form Validation & Interactive Demo Submissions
 * Provides client-side validation, live feedback, loading states, and success notifications
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Event Enquiry & Booking Forms
    const bookingForms = document.querySelectorAll('.pulse-booking-form, #eventEnquiryForm, #quickBookingForm');
    bookingForms.forEach((form) => {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          if (window.showPulseToast) {
            window.showPulseToast('Incomplete Form', 'Please fill in all required fields accurately.', 'warning');
          }
          return;
        }

        form.classList.add('was-validated');

        // Simulation of submission with button state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Transmitting Enquiry...
          `;
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }

          // Gather form values for modal or toast
          const nameInput = form.querySelector('[name="name"], #fullName, #name');
          const clientName = nameInput ? nameInput.value : 'Event Planner';
          const eventType = form.querySelector('[name="eventType"], #eventType')?.value || 'Private Event';

          // Show confirmation modal if present, else toast
          const confirmationModalEl = document.getElementById('bookingSuccessModal');
          if (confirmationModalEl && window.bootstrap) {
            const modalClientSpan = confirmationModalEl.querySelector('.modal-client-name');
            if (modalClientSpan) modalClientSpan.textContent = clientName;
            const modalEventSpan = confirmationModalEl.querySelector('.modal-event-type');
            if (modalEventSpan) modalEventSpan.textContent = eventType;

            const modal = new bootstrap.Modal(confirmationModalEl);
            modal.show();
          } else if (window.showPulseToast) {
            window.showPulseToast(
              'Enquiry Transmitted!',
              `Thank you, ${clientName}. Our lead audio engineer will review your ${eventType} request within 2 hours.`,
              'success'
            );
          }

          // Reset form
          form.reset();
          form.classList.remove('was-validated');
        }, 1200);
      });
    });

    // 2. Newsletter Subscription Forms
    const newsletterForms = document.querySelectorAll('.pulse-newsletter-form, #newsletterForm');
    newsletterForms.forEach((form) => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput || !emailInput.checkValidity()) {
          emailInput.classList.add('is-invalid');
          return;
        }

        emailInput.classList.remove('is-invalid');
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
          if (window.showPulseToast) {
            window.showPulseToast('VIP Backstage Pass Activated!', 'You have subscribed to our acoustic guides and private event offers.', 'success');
          }
          form.reset();
        }, 800);
      });
    });

    // 3. Simple Contact Quick Question Forms
    const quickContactForms = document.querySelectorAll('.quick-contact-form');
    quickContactForms.forEach((form) => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }
        form.classList.add('was-validated');
        if (window.showPulseToast) {
          window.showPulseToast('Message Dispatched', 'We have received your question and will reply shortly.', 'success');
        }
        form.reset();
        form.classList.remove('was-validated');
      });
    });
  });
})();
