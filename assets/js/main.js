(function(){
  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach((el) => {
    const target = Number(el.dataset.counter || 0);
    let current = 0;
    const steps = 35;
    const increment = Math.max(1, Math.ceil(target / steps));
    const suffix = el.dataset.suffix || '';
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current.toLocaleString() + suffix;
    }, 24);
  });

  const quoteForm = document.querySelector('#quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e){
      e.preventDefault();
      const weight = Number(document.querySelector('#weight').value || 0);
      const method = document.querySelector('#method').value;
      const base = method === 'air' ? 8.5 : 3.75;
      const estimate = Math.max(25, weight * base + 15);
      document.querySelector('#quoteAmount').textContent = '$' + estimate.toFixed(2);
      document.querySelector('#quoteMessage').classList.remove('d-none');
    });
  }

  const trackingForm = document.querySelector('#trackingForm');
  if (trackingForm) {
    trackingForm.addEventListener('submit', function(e){
      e.preventDefault();
      document.querySelector('.tracking-result').style.display = 'block';
      document.querySelector('#trackingNumberText').textContent = document.querySelector('#trackingNumber').value || 'AWELJ-000000';
    });
  }
})();
