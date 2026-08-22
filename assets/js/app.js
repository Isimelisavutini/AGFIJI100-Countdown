const TARGET_DATE = new Date('2027-02-25T00:00:00+12:00');

const daysEl = document.querySelector('[data-countdown-days]');
const todayEl = document.querySelector('[data-today]');
const targetEl = document.querySelector('[data-target]');

const formatter = new Intl.DateTimeFormat('en-FJ', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});

function getDaysRemaining() {
  const now = new Date();
  const difference = TARGET_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(difference / 86400000));
}

function updateCountdown() {
  if (daysEl) daysEl.textContent = getDaysRemaining().toLocaleString('en-FJ');
  if (todayEl) todayEl.textContent = formatter.format(new Date());
  if (targetEl) targetEl.textContent = formatter.format(TARGET_DATE);
}

updateCountdown();
setInterval(updateCountdown, 60 * 60 * 1000);
