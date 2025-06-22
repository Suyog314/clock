
let is24Hour = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let period = '';
  if (!is24Hour) {
    period = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12; // convert to 12h format
  }

  const pad = (n) => (n < 10 ? '0' + n : n);
  const currentTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}${!is24Hour ? period : ''}`;
  document.getElementById("clock").textContent = currentTime;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);
  document.getElementById("date").textContent = formattedDate;
}

setInterval(updateClock, 1000);
updateClock();

// Format toggle
document.getElementById('toggle-format').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('toggle-format').textContent = is24Hour ? 'Switch to 12h' : 'Switch to 24h';
  updateClock();
});

// Theme toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

