document.addEventListener('DOMContentLoaded', function() {
    const servicesList = document.getElementById('services-list');
    const newService = document.createElement('li');
    newService.textContent = 'Klienditugi';
    servicesList.appendChild(newService);
});
