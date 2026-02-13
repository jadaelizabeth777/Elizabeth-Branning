// Basic interactivity: scrolling, form validation, and mock submit
document.addEventListener('DOMContentLoaded', () => {
  const scrollToFormBtn = document.getElementById('scrollToFormBtn');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const leadForm = document.getElementById('leadForm');
  const successMsg = document.getElementById('successMsg');
  const yearEl = document.getElementById('year');

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  if(scrollToFormBtn){
    scrollToFormBtn.addEventListener('click', () => {
      document.getElementById('review').scrollIntoView({behavior:'smooth', block:'start'});
      scrollToFormBtn.focus();
    });
  }

  if(scrollToTopBtn){
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  function setError(name, message){
    const el = document.querySelector(`.error[data-error-for="${name}"]`);
    if(el) el.textContent = message || '';
  }

  function clearErrors(){
    document.querySelectorAll('.error').forEach(e=>e.textContent='');
  }

  function validate(form){
    clearErrors();
    let ok = true;
    const first = form.firstName.value.trim();
    const last = form.lastName.value.trim();
    const consent = form.consent.checked;

    if(!first){ setError('firstName', 'First name is required'); ok=false; }
    if(!last){ setError('lastName', 'Last name is required'); ok=false; }
    if(!consent){ setError('consent', 'You must agree to be contacted'); ok=false; }

    return ok;
  }

  if(leadForm){
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if(!validate(leadForm)) return;

      const submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Mock submit - replace with real endpoint if available
      setTimeout(() => {
        successMsg.textContent = 'Thanks! Your request has been received. I will reach out shortly.';
        leadForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = '✨ Request My Free Review';
        // move focus to success message for screen readers
        successMsg.focus?.();
      }, 900);
    });
  }
});
