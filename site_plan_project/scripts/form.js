const form = document.getElementById('bookingForm');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const booking = {
    fullname: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    session: document.getElementById('session').value,
    message: document.getElementById('message').value,
    date: new Date().toISOString(),
  };

  localStorage.setItem('bookingData', JSON.stringify(booking));
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  window.location.href = 'thankyou.html';
});
