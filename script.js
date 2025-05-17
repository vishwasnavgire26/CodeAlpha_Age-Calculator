// Random good thoughts
const thoughts = [
  "A new day is a new chance to grow.",
  "Every day is a second chance.",
  "Be the energy you want to attract.",
  "Your potential is endless.",
  "Start where you are. Use what you have. Do what you can.",
  "Believe you can and you're halfway there.",
  "Do something today that your future self will thank you for.",
  "Dream big. Start small. Act now.",
  "Make each day your masterpiece.",
  "Don’t count the days, make the days count."
];

// Show a new thought on each load
window.onload = function () {
  const thoughtDisplay = document.getElementById('thoughtDisplay');
  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  thoughtDisplay.innerText = `"${randomThought}"`;
};

document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value) - 1;
  const year = parseInt(document.getElementById('year').value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today) {
    document.getElementById('result').innerText = "❌ Future birth date is invalid!";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById('result').innerText = `🎂 You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
