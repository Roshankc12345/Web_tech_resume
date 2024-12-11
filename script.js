// JavaScript for Popup Modal
document.addEventListener('DOMContentLoaded', function () {
    const contactMeBtn = document.getElementById('contactMeBtn');
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-btn');

    // Show modal when Contact Me button is clicked
    contactMeBtn.addEventListener('click', () => {
        contactModal.style.display = 'block';
    });

    // Hide modal when close button (X) is clicked
    closeBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    // Hide modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});
